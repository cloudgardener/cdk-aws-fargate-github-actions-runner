# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### GithubActionsRunner <a name="@cloudgardener/cdk-aws-fargate-github-actions-runner.GithubActionsRunner"></a>

- *Implements:* [`@aws-cdk/aws-ec2.IConnectable`](#@aws-cdk/aws-ec2.IConnectable)

#### Initializers <a name="@cloudgardener/cdk-aws-fargate-github-actions-runner.GithubActionsRunner.Initializer"></a>

```typescript
import { GithubActionsRunner } from '@cloudgardener/cdk-aws-fargate-github-actions-runner'

new GithubActionsRunner(scope: Construct, id: string, props: GithubActionsRunnerProps)
```

##### `scope`<sup>Required</sup> <a name="@cloudgardener/cdk-aws-fargate-github-actions-runner.GithubActionsRunner.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="@cloudgardener/cdk-aws-fargate-github-actions-runner.GithubActionsRunner.parameter.id"></a>

- *Type:* `string`

---

##### `props`<sup>Required</sup> <a name="@cloudgardener/cdk-aws-fargate-github-actions-runner.GithubActionsRunner.parameter.props"></a>

- *Type:* [`@cloudgardener/cdk-aws-fargate-github-actions-runner.GithubActionsRunnerProps`](#@cloudgardener/cdk-aws-fargate-github-actions-runner.GithubActionsRunnerProps)

---



#### Properties <a name="Properties"></a>

##### `connections`<sup>Required</sup> <a name="@cloudgardener/cdk-aws-fargate-github-actions-runner.GithubActionsRunner.property.connections"></a>

```typescript
public readonly connections: Connections;
```

- *Type:* [`@aws-cdk/aws-ec2.Connections`](#@aws-cdk/aws-ec2.Connections)

Makes runner "connectable".

---

##### `role`<sup>Required</sup> <a name="@cloudgardener/cdk-aws-fargate-github-actions-runner.GithubActionsRunner.property.role"></a>

```typescript
public readonly role: IRole;
```

- *Type:* [`@aws-cdk/aws-iam.IRole`](#@aws-cdk/aws-iam.IRole)

The IAM role associated with this runner.

---


## Structs <a name="Structs"></a>

### GithubActionsRunnerProps <a name="@cloudgardener/cdk-aws-fargate-github-actions-runner.GithubActionsRunnerProps"></a>

Properties of the GithubActionsRunner.

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { GithubActionsRunnerProps } from '@cloudgardener/cdk-aws-fargate-github-actions-runner'

const githubActionsRunnerProps: GithubActionsRunnerProps = { ... }
```

##### `githubToken`<sup>Required</sup> <a name="@cloudgardener/cdk-aws-fargate-github-actions-runner.GithubActionsRunnerProps.property.githubToken"></a>

```typescript
public readonly githubToken: Secret;
```

- *Type:* [`@aws-cdk/aws-ecs.Secret`](#@aws-cdk/aws-ecs.Secret)

Secret containing a GitHub Personal Access Token to be used for the runner authentication.

---

##### `runnerContext`<sup>Required</sup> <a name="@cloudgardener/cdk-aws-fargate-github-actions-runner.GithubActionsRunnerProps.property.runnerContext"></a>

```typescript
public readonly runnerContext: string;
```

- *Type:* `string`

The GitHub repository to use for the runner.

---

##### `cluster`<sup>Optional</sup> <a name="@cloudgardener/cdk-aws-fargate-github-actions-runner.GithubActionsRunnerProps.property.cluster"></a>

```typescript
public readonly cluster: ICluster;
```

- *Type:* [`@aws-cdk/aws-ecs.ICluster`](#@aws-cdk/aws-ecs.ICluster)
- *Default:* a new cluster is created

The ECS cluster to run the task in.

---

##### `logRetentionDays`<sup>Optional</sup> <a name="@cloudgardener/cdk-aws-fargate-github-actions-runner.GithubActionsRunnerProps.property.logRetentionDays"></a>

```typescript
public readonly logRetentionDays: number;
```

- *Type:* `number`
- *Default:* 7 days

How long to store the GitHub runner logs.

---

##### `useSpotCapacity`<sup>Optional</sup> <a name="@cloudgardener/cdk-aws-fargate-github-actions-runner.GithubActionsRunnerProps.property.useSpotCapacity"></a>

```typescript
public readonly useSpotCapacity: boolean;
```

- *Type:* `boolean`
- *Default:* true

Use Fargate SPOT capacity.

---

##### `vpc`<sup>Optional</sup> <a name="@cloudgardener/cdk-aws-fargate-github-actions-runner.GithubActionsRunnerProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* [`@aws-cdk/aws-ec2.IVpc`](#@aws-cdk/aws-ec2.IVpc)
- *Default:* a new VPC is created

The VPC to run the cluster in.

---



