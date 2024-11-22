// router/index.ts
import { createBrowserRouter, Outlet } from "react-router-dom";
import paths from "./paths";
import {
  signInAction,
  signOutAction,
  signUpAction,
  signUpConfirmAction,
} from "./actions";
import SignInPage from "@/pages/auth/SignInPage";
import SignOutPage from "@/pages/auth/SignOutPage";
import SignUpConfirmPage from "@/pages/auth/SignUpConfirmPage";
import SignUpPage from "@/pages/auth/SignUpPage";
import Home from "@/pages/root/Home";
import NoMatch from "@/pages/root/NoMatch";
import RootErrorPage from "@/pages/root/RootErrorPage";
import RootLayout from "@/pages/root/RootLayout";

const router = createBrowserRouter([
  {
    Component: Outlet,
    ErrorBoundary: RootErrorPage,
    children: [
      {
        path: paths.home,
        Component: RootLayout,
        children: [{ index: true, Component: Home }],
      },
      {
        path: paths.signin,
        Component: SignInPage,
        action: signInAction,
        ErrorBoundary: SignInPage,
      },
      { path: paths.signout, Component: SignOutPage, action: signOutAction },
      {
        path: paths.signup,
        Component: SignUpPage,
        action: signUpAction,
        ErrorBoundary: SignUpPage,
      },
      {
        path: paths.signupConfirm,
        Component: SignUpConfirmPage,
        ErrorBoundary: SignUpConfirmPage,
        action: signUpConfirmAction,
      },
      { path: "*", Component: NoMatch },
    ],
  },
]);

export default router;

export { paths };
