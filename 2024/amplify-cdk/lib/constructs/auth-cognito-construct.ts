// lib/constructs/auth-cognito-construct.ts
import * as cdk from "aws-cdk-lib";
import * as cognito from "aws-cdk-lib/aws-cognito";
import { Construct } from "constructs";

export interface AuthCognitoConstructProps {
  userPoolName?: string;
  userPoolClientName?: string;
}

export class AuthCognitoConstruct extends Construct {
  userpool: cognito.UserPool;
  userpoolClient: cognito.UserPoolClient;

  constructor(scope: Construct, id: string, props: AuthCognitoConstructProps) {
    super(scope, id);

    // Create Cognito user pool
    this.userpool = new cognito.UserPool(this, "UserPool", {
      userPoolName: props.userPoolName,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      signInCaseSensitive: false,
      passwordPolicy: {
        minLength: 6,
        requireDigits: false,
        requireLowercase: false,
        requireSymbols: false,
        requireUppercase: false,
        tempPasswordValidity: cdk.Duration.days(7),
      },
      signInAliases: { username: true },
      autoVerify: { email: true, phone: true },
      keepOriginal: { email: true, phone: true },
      standardAttributes: {
        email: { required: true, mutable: true },
        phoneNumber: { required: false, mutable: true },
      },
      accountRecovery: cognito.AccountRecovery.EMAIL_AND_PHONE_WITHOUT_MFA,
      selfSignUpEnabled: true,
      userVerification: {
        emailStyle: cognito.VerificationEmailStyle.CODE,
        emailSubject: "User verification",
        emailBody: "Your verification code is {####}",
        smsMessage: "Your verification code is {####}",
      },
      userInvitation: {
        emailSubject: "User invitation",
        emailBody: "Hello {username}, your temporary password is {####}",
        smsMessage: "Hi {username}, your temporary password is {####}",
      },
      mfaMessage: "Hi, your authentication code is {####}",
      mfa: cognito.Mfa.OPTIONAL,
      mfaSecondFactor: { sms: true, otp: true },
    });

    // Create Cognito user pool client
    this.userpoolClient = new cognito.UserPoolClient(this, "UserPoolClient", {
      userPoolClientName: props.userPoolClientName,
      userPool: this.userpool,
      authFlows: { userPassword: true, adminUserPassword: true },
      readAttributes: new cognito.ClientAttributes().withStandardAttributes({
        email: true,
        emailVerified: true,
        phoneNumber: true,
        phoneNumberVerified: true,
      }),
      writeAttributes: new cognito.ClientAttributes().withStandardAttributes({
        email: true,
        phoneNumber: true,
      }),
      preventUserExistenceErrors: true,
      supportedIdentityProviders: [
        cognito.UserPoolClientIdentityProvider.COGNITO,
      ],
      authSessionValidity: cdk.Duration.minutes(15),
      accessTokenValidity: cdk.Duration.days(1),
      idTokenValidity: cdk.Duration.days(1),
      refreshTokenValidity: cdk.Duration.days(10),
      enableTokenRevocation: true,
    });
  }
}
