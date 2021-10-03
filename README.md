# cdk-aws-fargate-github-runner

CDK construct library to deploy [GitHub Actions self-hosted runner](https://docs.github.com/en/actions/hosting-your-own-runners/about-self-hosted-runners) to AWS Fargate.

This is continuation to [`cdk-github-actions-runner`](https://github.com/nikovirtala/cdk-github-actions-runner) proof-of-concept.

## Example

```ts
const app = new App();

const stack = new Stack(app, "stack");

// Get GitHub token e.g. from SSM Parameter Store
const token = Secret.fromSsmParameter(
  StringParameter.fromSecureStringParameterAttributes(
    this,
    "GitHubAccessToken",
    {
      parameterName: "GITHUB_ACCESS_TOKEN",
      version: 0,
    }
  )
);

// Assign runner to repository
const context = "https://github.com/cloudgardener/runner-demo";

// Runners can be also assigned to organization
// const context = "https://github.com/cloudgardener";

// Deploy the runner
new GithubActionsRunner(stack, "runner", {
  githubToken: token,
  runnerContext: context,
});
```
