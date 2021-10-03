const { AwsCdkConstructLibrary } = require("projen");
const project = new AwsCdkConstructLibrary({
  name: "@cloudgardener/cdk-aws-fargate-github-runner",
  description:
    "CDK construct library to deploy GitHub Actions self-hosted runner to AWS Fargate.",
  repositoryUrl:
    "https://github.com/cloudgardener/cdk-aws-fargate-github-runner.git",
  license: "MIT",
  authorName: "Niko Virtala",
  authorAddress: "niko@cloudgardener.dev",
  cdkVersion: "1.125.0",
  defaultReleaseBranch: "main",
  depsUpgradeOptions: {
    ignoreProjen: false,
    workflowOptions: {
      labels: ["auto-approve", "auto-merge"],
      secret: "AUTOMATION_TOKEN",
    },
  },
  autoApproveOptions: {
    secret: "GITHUB_TOKEN",
    allowedUsernames: ["nikovirtala"],
  },
  npmAccess: "public",
  catalog: {
    announce: true,
    twitter: "nikovirtala",
  },
  keywords: ["aws", "fargate", "github", "github-actions", "runner"],
  eslint: true,
  eslintOptions: {
    prettier: true,
  },
  jest: false,
  deps: [
    "@aws-cdk/aws-ec2",
    "@aws-cdk/aws-ecs",
    "@aws-cdk/core",
    "@aws-cdk/aws-iam",
  ],
});
project.synth();
