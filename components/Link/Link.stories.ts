import { Meta, StoryObj } from "@storybook/react"
import Link, { LinkProps } from "./Link"

const meta: Meta<LinkProps> = {
  title: "Molecules/Link",
  component: Link,
  argTypes: {
    children: {
      type: "string",
      control: "text",
      description: "Content rendered inside the link",
    },
    href: {
      type: "string",
      control: "text",
      description: "The URL to navigate to",
    },
    disabled: {
      type: "boolean",
      control: "boolean",
      description: "When true, the link is disabled",
    },
    className: {
      type: "string",
      control: "text",
      description: "Additional Tailwind or custom classes to extend styling",
    },
  },
}

export default meta

export const Primary: StoryObj<LinkProps> = {
  args: {
    children: "Link",
    href: "https://yleoneldev.netlify.app",
  },
}

export const Disabled: StoryObj<LinkProps> = {
  args: {
    children: "Link",
    href: "https://yleoneldev.netlify.app",
    disabled: true,
  },
}

export const Violet: StoryObj<LinkProps> = {
  args: {
    children: "Link",
    href: "https://yleoneldev.netlify.app",
    className: "theme-violet",
  },
}