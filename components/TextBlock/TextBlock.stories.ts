import { Meta, StoryObj } from "@storybook/react"
import TextBlock, { TextBlockProps } from "./TextBlock"

const meta: Meta<TextBlockProps> = {
  title: "Molecules/TextBlock",
  component: TextBlock,
  argTypes: {
    title: {
      type: "string",
      control: "text",
      description: "The title of the text block",
    },
    description: {
      type: "string",
      control: "text",
      description: "The description of the text block",
    },
    maxWidth: {
      type: "string",
      control: "text",
      description: "The maximum width of the text block",
    },
    className: {
      type: "string",
      control: "text",
      description: "Additional Tailwind or custom classes to extend styling",
    },
  },
}

export default meta

export const Primary: StoryObj<TextBlockProps> = {
  args: {
    title: "Title",
    description: "Earth is the third planet from the Sun and the only astronomi     cal object known to harbor life. According to radiometric dating estimation and other evidence, Earth formed over 4.5 billion years ago. Earth is the third planet from the Sun and the only astronomical object known to harbor life. According to radiometric dating estimation and other evidence, Earth formed over 4.5 billion years ago. ",
  },
}

export const MaxWidth: StoryObj<TextBlockProps> = {
  args: {
    title: "Title",
    description: "Earth is the third planet from the Sun and the only astronomical object known to harbor life. According to radiometric dating estimation and other evidence, Earth formed over 4.5 billion years ago. Earth is the third planet from the Sun and the only astronomical object known to harbor life. According to radiometric dating estimation and other evidence, Earth formed over 4.5 billion years ago. ",
    maxWidth: "max-w-lg",
  },
}