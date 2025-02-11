import { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/primitives/button";
import { TimesIcon } from "@/components/icons/utility/times";

const meta: Meta<typeof Button> = {
  title: "Primitives/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
      description: "label",
    },
    disabled: {
      control: "boolean",
      description: "Gray out a button when disabled",
    },
    isLoading: {
      control: "boolean",
      description: "Show loading indicator.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "continue",
  },
};

export const Destructive: Story = {
  args: {
    children: "continue",
    variant: "destructive",
  },
};

export const Secondary: Story = {
  args: {
    children: "continue",
    variant: "secondary",
  },
};

export const Outline: Story = {
  args: {
    children: "continue",
    variant: "outline",
  },
};

export const Ghost: Story = {
  args: {
    children: "continue",
    variant: "ghost",
  },
};

export const Disabled: Story = {
  args: {
    children: "continue",
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    children: "continue",
    isLoading: true,
  },
};

// export const Small: Story = {
//   args: {
//     children: "continue",
//     size: "sm",
//   },
// };

export const Medium: Story = {
  args: {
    children: "continue",
    size: "default",
  },
};

// export const Large: Story = {
//   args: {
//     children: "continue",
//     size: "lg",
//   },
// };

export const WithIcon: Story = {
  args: {
    children: <>Deposit</>,
  },
};

export const Icon: Story = {
  args: {
    children: <TimesIcon />,
    size: "icon",
    variant: "icon",
  },
};
