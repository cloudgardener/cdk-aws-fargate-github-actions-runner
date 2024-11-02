import { awscdk } from "projen";
import { NpmAccess } from "projen/lib/javascript";

const project = new awscdk.AwsCdkConstructLibrary({
  name: "@cloudgardener/cdk-aws-fargate-github-actions-runner",
  description:
    "CDK construct library to deploy GitHub Actions self-hosted runner to AWS Fargate.",
  repositoryUrl:
    "https://github.com/cloudgardener/cdk-aws-fargate-github-actions-runner.git",
  license: "MIT",
  majorVersion: 1,
  author: "Niko Virtala",
  authorAddress: "niko@cloudgardener.dev",
  cdkVersion: "2.80.0",
  dependabot: false,
  defaultReleaseBranch: "main",
  jsiiVersion: "~5.5.0",
  depsUpgradeOptions: {
    workflowOptions: {
      labels: ["auto-approve", "auto-merge"],
    },
  },
  autoApproveOptions: {
    secret: "GITHUB_TOKEN",
    allowedUsernames: ["nikovirtala"],
  },
  githubOptions: {
    mergify: true,
  },
  npmAccess: NpmAccess.PUBLIC,
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
  prettier: true,
  jest: false,
  projenrcTs: true,
});

project.synth();
