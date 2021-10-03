const { AwsCdkConstructLibrary } = require("projen");
const project = new AwsCdkConstructLibrary({
  authorName: "Niko Virtala",
  authorAddress: "niko@cloudgardener.dev",
  cdkVersion: "1.125.0",
  defaultReleaseBranch: "main",
  name: "@cloudgardener/cdk-aws-fargate-github-runner",
  repositoryUrl:
    "https://github.com/cloudgardener/cdk-aws-fargate-github-runner.git",
  license: "MIT",
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
