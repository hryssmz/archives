// stories/components/auth/PrivateRoutesContainer.stories.tsx
import { createActor } from "xstate";
import {
  withRouter,
  reactRouterParameters,
} from "storybook-addon-react-router-v6";
import PrivateRoutesContainer from "@/components/auth/PrivateRoutesContainer";
import { authMachine } from "@/machines/authMachine";
import { bankAccountsMachine } from "@/machines/bankAccountsMachine";
import { notificationsMachine } from "@/machines/notificationsMachine";
import { snackbarMachine } from "@/machines/snackbarMachine";
import { bankAccounts, notifications, users } from "@/stories/data";
import type { AlertColor } from "@mui/material/Alert";
import type { Meta, StoryObj } from "@storybook/react";

interface StoryArgs {
  isLoggedIn: boolean;
  open?: boolean;
  message?: string;
  severity?: AlertColor;
}

function StoryComponent({ isLoggedIn, open, message, severity }: StoryArgs) {
  const authActor = createActor(authMachine, {
    snapshot: authMachine.resolveState({
      value: isLoggedIn ? "authorized" : "unauthorized",
      context: { user: isLoggedIn ? users[0] : undefined },
    }),
  }).start();
  const bankAccountsActor = createActor(bankAccountsMachine, {
    snapshot: bankAccountsMachine.resolveState({
      value: "success",
      context: {
        results: bankAccounts.slice(),
      },
    }),
  }).start();
  const notificationsActor = createActor(notificationsMachine, {
    snapshot: notificationsMachine.resolveState({
      context: {
        results: notifications
          .filter(
            ({ userId, isRead }) =>
              userId === notifications[0].userId && !isRead
          )
          .sort((a, b) => a.modifiedAt.getTime() - b.modifiedAt.getTime()),
      },
      value: "success",
    }),
  }).start();
  const mySnackbarMachine = snackbarMachine.provide({
    delays: { "auto hide": 1000 * 60 * 60 * 365 * 2024 },
  });
  const snackbarActor = createActor(mySnackbarMachine, {
    snapshot: mySnackbarMachine.resolveState({
      context: { message, severity },
      value: open ? "visible" : "invisible",
    }),
  }).start();

  return (
    <PrivateRoutesContainer
      isLoggedIn={isLoggedIn}
      authActor={authActor}
      bankAccountsActor={bankAccountsActor}
      notificationsActor={notificationsActor}
      snackbarActor={snackbarActor}
    />
  );
}

const meta: Meta<typeof StoryComponent> = {
  title: "components/auth/PrivateRoutesContainer",
  component: StoryComponent,
  decorators: [withRouter],
  parameters: {
    reactRouter: reactRouterParameters({
      routing: { path: "*" },
      location: { path: "/" },
    }),
  },
};

export default meta;

type Story = StoryObj<typeof StoryComponent>;

const defaultArgs: StoryArgs = {
  isLoggedIn: true,
  open: true,
  message: "Alert message!",
  severity: "error",
};

export const Default: Story = {
  args: { ...defaultArgs },
};
