import { Meta, StoryObj } from "@storybook/react"
import Button, { ButtonProps } from "./Button"


const meta: Meta<ButtonProps> = {
  title: 'Molecules/Button',
  component: Button,
  argTypes: {
    children: {
      control: 'text',
      description: 'Content rendered inside the button',
    },
    disabled: {
      control: 'boolean',
      description: 'When true, the button is disabled',
    },
    className: {
      control: 'text',
      description: 'Additional Tailwind or custom classes to extend styling',
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
      description: 'The variant of the button',
    },
  },
}

export default meta

export const Primary: StoryObj<ButtonProps> = {
  args: {
    children: 'Button',
  },
}

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    children: 'Button',
    disabled: true,
  },
}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    children: 'Button',
    variant: 'secondary',
  },
}

export const SecondaryDisabled: StoryObj<ButtonProps> = {
  args: {
    children: 'Button',
    variant: 'secondary',
    disabled: true,
  },
}

export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    children: 'Button',
    variant: 'tertiary',
  },
}

export const TertiaryDisabled: StoryObj<ButtonProps> = {
  args: {
    children: 'Button',
    variant: 'tertiary',
    disabled: true,
  },
}

export const Violet: StoryObj<ButtonProps> = {
  args: {
    children: 'Button',
    className: 'theme-violet',
  },
}

export const VioletSecondary: StoryObj<ButtonProps> = {
  args: {
    children: 'Button',
    className: 'theme-violet',
    variant: 'secondary',
  },
}

export const VioletTertiary: StoryObj<ButtonProps> = {
  args: {
    children: 'Button',
    className: 'theme-violet',
    variant: 'tertiary',
  },
}