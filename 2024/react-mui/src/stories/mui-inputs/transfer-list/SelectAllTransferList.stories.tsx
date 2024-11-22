// stories/mui-inputs/transfer-list/SelectAllTransferList.stories.tsx
import C from "@/components/mui-inputs/transfer-list/SelectAllTransferList";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/transfer-list/SelectAllTransferList",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const SelectAllTransferList: Story = {
  args: {},
};
