// stories/components/auth/MainLayout.stories.tsx
import { createActor } from "xstate";
import {
  withRouter,
  reactRouterParameters,
} from "storybook-addon-react-router-v6";
import MainLayout from "@/components/auth/MainLayout";
import { authMachine } from "@/machines/authMachine";
import { notificationsMachine } from "@/machines/notificationsMachine";
import { notifications, users } from "@/stories/data";
import type { Meta, StoryObj } from "@storybook/react";

interface StoryArgs {
  text: string;
}

function StoryComponent({ text }: StoryArgs) {
  const authActor = createActor(authMachine, {
    snapshot: authMachine.resolveState({
      value: "authorized",
      context: { user: users[0] },
    }),
  }).start();
  const notificationsState = notificationsMachine.resolveState({
    context: {
      results: notifications
        .filter(
          ({ userId, isRead }) => userId === notifications[0].userId && !isRead
        )
        .sort((a, b) => a.modifiedAt.getTime() - b.modifiedAt.getTime()),
    },
    value: "success",
  });

  return (
    <MainLayout authActor={authActor} notificationsState={notificationsState}>
      <h1 style={{ color: "red" }}>{text}</h1>
    </MainLayout>
  );
}

const meta: Meta<typeof StoryComponent> = {
  title: "components/auth/MainLayout",
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
  text: "Hello Main Layout!",
};

export const Default: Story = {
  args: { ...defaultArgs },
};
