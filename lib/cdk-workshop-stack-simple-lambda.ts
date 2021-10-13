import * as path from "path";
import * as cdk from "@aws-cdk/core";
import * as lambda from "@aws-cdk/aws-lambda";
import * as lambdapython from "@aws-cdk/aws-lambda-python";

export class CdkWorkshopStackSimpleLambda extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    ////////////////////////////
    // Python lambda
    ////////////////////////////

    const fnFoo = new lambdapython.PythonFunction(this, "fn-foo", {
      functionName: "foo",
      runtime: lambda.Runtime.PYTHON_3_8,
      entry: path.resolve(__dirname, "../lambda/foo"),
      index: "index.py",
      handler: "handler",
    });
    cdk.Tags.of(fnFoo).add("runtime", "python");

  }
}
