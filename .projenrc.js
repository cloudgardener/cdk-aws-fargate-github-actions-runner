const { AwsCdkConstructLibrary } = require("projen");
const project = new AwsCdkConstructLibrary({
  authorName: "Niko Virtala",
  authorAddress: "niko@cloudgardener.dev",
  cdkVersion: "1.125.0",
  defaultReleaseBranch: "main",
  name: "cdk-aws-fargate-github-runner",
  repositoryUrl:
    "https://github.com/nikovirtala/cdk-aws-fargate-github-runner.git",
  license: "MIT",
  catalog: {
    announce: false,
    twitter: "nikovirtala",
  },
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
