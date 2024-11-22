// stories/mui-inputs/transfer-list/TransferList.stories.tsx
import C from "@/components/mui-inputs/transfer-list/TransferList";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/transfer-list/TransferList",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const TransferList: Story = {
  args: {},
};
