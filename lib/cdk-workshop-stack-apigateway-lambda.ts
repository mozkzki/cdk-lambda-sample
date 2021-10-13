import * as cdk from "@aws-cdk/core";
import * as lambda from "@aws-cdk/aws-lambda";
import * as apigw from "@aws-cdk/aws-apigateway";
import { NodejsFunction } from "@aws-cdk/aws-lambda-nodejs";
import * as path from "path";

import * as lambdapython from "@aws-cdk/aws-lambda-python";

export class CdkWorkshopStackApiGatewayAndLambda extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    ////////////////////////////
    // api gatewayとlambda
    ////////////////////////////

    const fnFoo = new lambdapython.PythonFunction(this, "fn-foo", {
      functionName: "foo",
      runtime: lambda.Runtime.PYTHON_3_8,
      entry: path.resolve(__dirname, "../lambda/test"),
      index: "index.py",
      handler: "handler",
    });
    cdk.Tags.of(fnFoo).add("runtime", "python");

    // new NodejsFunction(this, "MyFunction", {
    //   entry: "hello.file", // accepts .js, .jsx, .ts and .tsx files
    //   handler: "file.myExportedFunc",
    // });
  }
}
