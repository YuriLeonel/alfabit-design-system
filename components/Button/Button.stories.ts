import { Meta, StoryObj } from "@storybook/react"
import Button, { ButtonProps } from "./Button"


const meta: Meta<ButtonProps> = {
  title: 'Molecules/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Simple button atom. It composes native button attributes and supports theming via className.\n' +
          'Use for primary actions. Ensure accessible labels and focus styles are preserved when customizing.',
      },
    },
  },
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

export const Violet: StoryObj<ButtonProps> = {
  args: {
    children: 'Button',
    className: 'theme-violet',
  },
}