// lib/constructs/static-website-construct.ts
import * as cdk from "aws-cdk-lib";
import * as cloudfront from "aws-cdk-lib/aws-cloudfront";
import * as origins from "aws-cdk-lib/aws-cloudfront-origins";
import * as s3 from "aws-cdk-lib/aws-s3";
import { Construct } from "constructs";

export interface StaticWebsiteConstructProps {
  bucketName?: string;
}

export class StaticWebsiteConstruct extends Construct {
  bucket: s3.Bucket;
  distribution: cloudfront.Distribution;

  constructor(
    scope: Construct,
    id: string,
    props: StaticWebsiteConstructProps
  ) {
    super(scope, id);

    // Create S3 bucket
    this.bucket = new s3.Bucket(this, "Bucket", {
      bucketName: props.bucketName,
      encryption: s3.BucketEncryption.S3_MANAGED,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
    });

    // Create CloudFront distribution
    const viewerRequestFunction = new cloudfront.Function(
      this,
      "ViewerRequestFunction",
      {
        comment: "CloudFront viewer request function",
        runtime: cloudfront.FunctionRuntime.JS_2_0,
        code: cloudfront.FunctionCode.fromInline(`
          async function handler(event) {
            const request = event.request;
            request.uri = "/index.html";
            return request;
          }
        `),
      }
    );
    this.distribution = new cloudfront.Distribution(this, "Distribution", {
      comment: "CloudFront distribution",
      defaultBehavior: {
        origin: new origins.S3Origin(this.bucket),
        allowedMethods: cloudfront.AllowedMethods.ALLOW_GET_HEAD_OPTIONS,
        cachedMethods: cloudfront.CachedMethods.CACHE_GET_HEAD_OPTIONS,
        functionAssociations: [
          {
            function: viewerRequestFunction,
            eventType: cloudfront.FunctionEventType.VIEWER_REQUEST,
          },
        ],
      },
    });
  }
}
