import * as path from "path";
import { aws_ec2 as ec2, aws_ecs as ecs, aws_iam as iam } from "aws-cdk-lib";
import { Construct } from "constructs";

/**
 * Properties of the GithubActionsRunner
 */
export interface GithubActionsRunnerProps {
  /**
   * The VPC to run the cluster in
   * @default - a new VPC is created
   */
  readonly vpc?: ec2.IVpc;
  /**
   * The ECS cluster to run the task in
   * @default - a new cluster is created
   */
  readonly cluster?: ecs.ICluster;
  /**
   * Secret containing
   * a GitHub Personal Access Token to be used
   * for the runner authentication
   */
  readonly githubToken: ecs.Secret;
  /**
   * The GitHub repository to use for the runner
   * @example "https://github.com/cloudgardener/runner-demo"
   */
  readonly runnerContext: string;
  /**
   * How long to store the GitHub runner logs
   * @default - 7 days
   */
  readonly logRetentionDays?: number;
  /**
   * Use Fargate SPOT capacity
   * @default - true
   */
  readonly useSpotCapacity?: boolean;
}

export class GithubActionsRunner extends Construct implements ec2.IConnectable {
  /**
   * Makes runner "connectable"
   */
  readonly connections: ec2.Connections;

  /**
   * The IAM role associated with this runner
   */
  readonly role: iam.IRole;

  constructor(scope: Construct, id: string, props: GithubActionsRunnerProps) {
    super(scope, id);

    const vpc = props.vpc
      ? props.vpc
      : new ec2.Vpc(this, "Vpc", {
          maxAzs: 1, // Default is all AZs in region
          natGateways: 0,
          gatewayEndpoints: {
            s3: {
              service: ec2.GatewayVpcEndpointAwsService.S3,
            },
            dynamodb: {
              service: ec2.GatewayVpcEndpointAwsService.DYNAMODB,
            },
          },
        });

    const cluster = props.cluster
      ? props.cluster
      : new ecs.Cluster(this, "Cluster", {
          vpc: vpc,
          enableFargateCapacityProviders: true,
        });

    const logRetentionDays = props.logRetentionDays ?? 7;

    const useSpotCapacity = props.useSpotCapacity ?? true;

    const taskDefinition = new ecs.FargateTaskDefinition(
      this,
      "TaskDefinition"
    );

    taskDefinition.addContainer("Container", {
      image: ecs.ContainerImage.fromAsset(path.resolve(__dirname, "./image")),
      logging: ecs.LogDrivers.awsLogs({
        streamPrefix: "GitHubActionsRunner",
        logRetention: logRetentionDays,
      }),
      environment: {
        GITHUB_ACTIONS_RUNNER_CONTEXT: props.runnerContext,
      },
      secrets: {
        GITHUB_ACCESS_TOKEN: props.githubToken,
      },
    });

    const service = new ecs.FargateService(this, "Service", {
      cluster: cluster,
      taskDefinition: taskDefinition,
      platformVersion: ecs.FargatePlatformVersion.LATEST,
      desiredCount: 1,
      circuitBreaker: { rollback: true },
      vpcSubnets: { subnetType: ec2.SubnetType.PUBLIC },
      assignPublicIp: true,
      capacityProviderStrategies: [
        {
          capacityProvider: "FARGATE_SPOT",
          weight: useSpotCapacity ? 1 : 0,
        },
        {
          capacityProvider: "FARGATE",
          weight: useSpotCapacity ? 0 : 1,
        },
      ],
    });

    this.connections = service.connections;

    this.role = taskDefinition.taskRole;
  }
}
