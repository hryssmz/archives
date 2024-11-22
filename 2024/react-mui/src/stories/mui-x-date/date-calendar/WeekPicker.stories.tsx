// stories/mui-x-date/date-calendar/WeekPicker.stories.tsx
import C from "@/components/mui-x-date/date-calendar/WeekPicker";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-x-date/date-calendar/WeekPicker",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const WeekPicker: Story = {
  args: {},
};
