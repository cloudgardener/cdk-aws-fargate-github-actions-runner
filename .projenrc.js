const { awscdk } = require("projen");
const project = new awscdk.AwsCdkConstructLibrary({
  name: "@cloudgardener/cdk-aws-fargate-github-actions-runner",
  description:
    "CDK construct library to deploy GitHub Actions self-hosted runner to AWS Fargate.",
  repositoryUrl:
    "https://github.com/cloudgardener/cdk-aws-fargate-github-actions-runner.git",
  license: "MIT",
  majorVersion: "1",
  authorName: "Niko Virtala",
  authorAddress: "niko@cloudgardener.dev",
  cdkVersion: "2.0.0",
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
  keywords: [
    "aws",
    "cdk",
    "aws-cdk",
    "fargate",
    "github",
    "github-actions",
    "runner",
  ],
  eslint: true,
  eslintOptions: {
    prettier: true,
  },
  jest: false,
  cdkDependencies: ["aws-cdk-lib"],
  deps: ["constructs@^10"],
  workflowContainerImage: "jsii/superchain:node14",
});
project.synth();
