// router/actions.ts
import { json, redirect } from "react-router-dom";
import {
  autoSignIn,
  confirmSignUp,
  signIn,
  signOut,
  signUp,
} from "aws-amplify/auth";
import paths from "./paths";
import store from "@/store";
import { getCurrentUser } from "@/store/auth";
import type { ActionFunctionArgs } from "react-router-dom";

export async function signInAction({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const data = [...formData].reduce((acc, [k, v]) => {
    return { ...acc, [k]: typeof v === "string" ? v : v.name };
  }, {} as Record<string, string>);
  const { username, password } = data;
  const { isSignedIn, nextStep } = await signIn({
    username,
    password,
    options: { authFlowType: "USER_SRP_AUTH" },
  });
  if (isSignedIn) {
    await store.dispatch(getCurrentUser()).unwrap();
    return redirect(paths.home);
  }
  console.log(nextStep);
  throw json(null, { status: 500 });
}

export async function signOutAction() {
  await signOut();
  return redirect(paths.home);
}

export async function signUpAction({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const data = [...formData].reduce((acc, [k, v]) => {
    return { ...acc, [k]: typeof v === "string" ? v : v.name };
  }, {} as Record<string, string>);
  const {
    username,
    email,
    password,
    "password-confirm": passwordConfirm,
  } = data;
  if (password !== passwordConfirm) {
    throw json(null, {
      status: 400,
      statusText: "Password and password confirm do not match",
    });
  }
  const { isSignUpComplete, nextStep } = await signUp({
    username,
    password,
    options: {
      userAttributes: { email },
      autoSignIn: {
        authFlowType: "USER_SRP_AUTH",
      },
    },
  });
  if (isSignUpComplete) {
    return redirect(paths.home);
  } else if (nextStep.signUpStep === "CONFIRM_SIGN_UP") {
    const searchParams = new URLSearchParams();
    searchParams.append("username", username);
    searchParams.append(
      "destination",
      nextStep.codeDeliveryDetails.destination ?? ""
    );
    return redirect(`${paths.signupConfirm}?${searchParams}`);
  } else {
    throw json(null, { status: 500 });
  }
}

export async function signUpConfirmAction({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const data = [...formData].reduce((acc, [k, v]) => {
    return { ...acc, [k]: typeof v === "string" ? v : v.name };
  }, {} as Record<string, string>);
  const { username, "confirmation-code": confirmationCode } = data;
  const { isSignUpComplete, nextStep } = await confirmSignUp({
    username,
    confirmationCode,
  });
  if (isSignUpComplete) {
    const { isSignedIn, nextStep } = await autoSignIn();
    if (isSignedIn) {
      await store.dispatch(getCurrentUser()).unwrap();
      return redirect(paths.home);
    }
    console.log(nextStep);
    return json(null, { status: 500 });
  }
  console.log(nextStep);
  return json(null, { status: 500 });
}
