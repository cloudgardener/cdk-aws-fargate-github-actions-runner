# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GithubActionsRunner <a name="GithubActionsRunner" id="@cloudgardener/cdk-aws-fargate-github-actions-runner.GithubActionsRunner"></a>

- *Implements:* aws-cdk-lib.aws_ec2.IConnectable

#### Initializers <a name="Initializers" id="@cloudgardener/cdk-aws-fargate-github-actions-runner.GithubActionsRunner.Initializer"></a>

```typescript
import { GithubActionsRunner } from '@cloudgardener/cdk-aws-fargate-github-actions-runner'

new GithubActionsRunner(scope: Construct, id: string, props: GithubActionsRunnerProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cloudgardener/cdk-aws-fargate-github-actions-runner.GithubActionsRunner.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@cloudgardener/cdk-aws-fargate-github-actions-runner.GithubActionsRunner.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cloudgardener/cdk-aws-fargate-github-actions-runner.GithubActionsRunner.Initializer.parameter.props">props</a></code> | <code><a href="#@cloudgardener/cdk-aws-fargate-github-actions-runner.GithubActionsRunnerProps">GithubActionsRunnerProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cloudgardener/cdk-aws-fargate-github-actions-runner.GithubActionsRunner.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@cloudgardener/cdk-aws-fargate-github-actions-runner.GithubActionsRunner.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@cloudgardener/cdk-aws-fargate-github-actions-runner.GithubActionsRunner.Initializer.parameter.props"></a>

- *Type:* <a href="#@cloudgardener/cdk-aws-fargate-github-actions-runner.GithubActionsRunnerProps">GithubActionsRunnerProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cloudgardener/cdk-aws-fargate-github-actions-runner.GithubActionsRunner.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@cloudgardener/cdk-aws-fargate-github-actions-runner.GithubActionsRunner.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cloudgardener/cdk-aws-fargate-github-actions-runner.GithubActionsRunner.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cloudgardener/cdk-aws-fargate-github-actions-runner.GithubActionsRunner.isConstruct"></a>

```typescript
import { GithubActionsRunner } from '@cloudgardener/cdk-aws-fargate-github-actions-runner'

GithubActionsRunner.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cloudgardener/cdk-aws-fargate-github-actions-runner.GithubActionsRunner.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cloudgardener/cdk-aws-fargate-github-actions-runner.GithubActionsRunner.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cloudgardener/cdk-aws-fargate-github-actions-runner.GithubActionsRunner.property.connections">connections</a></code> | <code>aws-cdk-lib.aws_ec2.Connections</code> | Makes runner "connectable". |
| <code><a href="#@cloudgardener/cdk-aws-fargate-github-actions-runner.GithubActionsRunner.property.role">role</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The IAM role associated with this runner. |

---

##### `node`<sup>Required</sup> <a name="node" id="@cloudgardener/cdk-aws-fargate-github-actions-runner.GithubActionsRunner.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `connections`<sup>Required</sup> <a name="connections" id="@cloudgardener/cdk-aws-fargate-github-actions-runner.GithubActionsRunner.property.connections"></a>

```typescript
public readonly connections: Connections;
```

- *Type:* aws-cdk-lib.aws_ec2.Connections

Makes runner "connectable".

---

##### `role`<sup>Required</sup> <a name="role" id="@cloudgardener/cdk-aws-fargate-github-actions-runner.GithubActionsRunner.property.role"></a>

```typescript
public readonly role: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

The IAM role associated with this runner.

---


## Structs <a name="Structs" id="Structs"></a>

### GithubActionsRunnerProps <a name="GithubActionsRunnerProps" id="@cloudgardener/cdk-aws-fargate-github-actions-runner.GithubActionsRunnerProps"></a>

Properties of the GithubActionsRunner.

#### Initializer <a name="Initializer" id="@cloudgardener/cdk-aws-fargate-github-actions-runner.GithubActionsRunnerProps.Initializer"></a>

```typescript
import { GithubActionsRunnerProps } from '@cloudgardener/cdk-aws-fargate-github-actions-runner'

const githubActionsRunnerProps: GithubActionsRunnerProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cloudgardener/cdk-aws-fargate-github-actions-runner.GithubActionsRunnerProps.property.githubToken">githubToken</a></code> | <code>aws-cdk-lib.aws_ecs.Secret</code> | Secret containing a GitHub Personal Access Token to be used for the runner authentication. |
| <code><a href="#@cloudgardener/cdk-aws-fargate-github-actions-runner.GithubActionsRunnerProps.property.runnerContext">runnerContext</a></code> | <code>string</code> | The GitHub repository to use for the runner. |
| <code><a href="#@cloudgardener/cdk-aws-fargate-github-actions-runner.GithubActionsRunnerProps.property.cluster">cluster</a></code> | <code>aws-cdk-lib.aws_ecs.ICluster</code> | The ECS cluster to run the task in. |
| <code><a href="#@cloudgardener/cdk-aws-fargate-github-actions-runner.GithubActionsRunnerProps.property.logRetentionDays">logRetentionDays</a></code> | <code>number</code> | How long to store the GitHub runner logs. |
| <code><a href="#@cloudgardener/cdk-aws-fargate-github-actions-runner.GithubActionsRunnerProps.property.useSpotCapacity">useSpotCapacity</a></code> | <code>boolean</code> | Use Fargate SPOT capacity. |
| <code><a href="#@cloudgardener/cdk-aws-fargate-github-actions-runner.GithubActionsRunnerProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | The VPC to run the cluster in. |

---

##### `githubToken`<sup>Required</sup> <a name="githubToken" id="@cloudgardener/cdk-aws-fargate-github-actions-runner.GithubActionsRunnerProps.property.githubToken"></a>

```typescript
public readonly githubToken: Secret;
```

- *Type:* aws-cdk-lib.aws_ecs.Secret

Secret containing a GitHub Personal Access Token to be used for the runner authentication.

---

##### `runnerContext`<sup>Required</sup> <a name="runnerContext" id="@cloudgardener/cdk-aws-fargate-github-actions-runner.GithubActionsRunnerProps.property.runnerContext"></a>

```typescript
public readonly runnerContext: string;
```

- *Type:* string

The GitHub repository to use for the runner.

---

*Example*

```typescript
"https://github.com/cloudgardener/runner-demo"
```


##### `cluster`<sup>Optional</sup> <a name="cluster" id="@cloudgardener/cdk-aws-fargate-github-actions-runner.GithubActionsRunnerProps.property.cluster"></a>

```typescript
public readonly cluster: ICluster;
```

- *Type:* aws-cdk-lib.aws_ecs.ICluster
- *Default:* a new cluster is created

The ECS cluster to run the task in.

---

##### `logRetentionDays`<sup>Optional</sup> <a name="logRetentionDays" id="@cloudgardener/cdk-aws-fargate-github-actions-runner.GithubActionsRunnerProps.property.logRetentionDays"></a>

```typescript
public readonly logRetentionDays: number;
```

- *Type:* number
- *Default:* 7 days

How long to store the GitHub runner logs.

---

##### `useSpotCapacity`<sup>Optional</sup> <a name="useSpotCapacity" id="@cloudgardener/cdk-aws-fargate-github-actions-runner.GithubActionsRunnerProps.property.useSpotCapacity"></a>

```typescript
public readonly useSpotCapacity: boolean;
```

- *Type:* boolean
- *Default:* true

Use Fargate SPOT capacity.

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="@cloudgardener/cdk-aws-fargate-github-actions-runner.GithubActionsRunnerProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc
- *Default:* a new VPC is created

The VPC to run the cluster in.

---



