// lib/amplify.ts
import type { ResourcesConfig } from "aws-amplify";

export const amplifyconfig: ResourcesConfig = {
  API: {
    GraphQL: {
      endpoint:
        "https://bkt77byudvgcblmjyz3vr6pncy.appsync-api.ap-northeast-1.amazonaws.com/graphql",
      region: "ap-northeast-1",
      defaultAuthMode: "apiKey",
      apiKey: "da2-qts6s6o7uzcvrakb6oje76ptje",
    },
  },
  Auth: {
    Cognito: {
      userPoolId: "ap-northeast-1_IiM4te2Bg",
      userPoolClientId: "7o3cvc1shqmtsmdo04cuil74gg",
    },
  },
};
