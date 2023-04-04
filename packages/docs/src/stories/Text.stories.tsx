import { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@gustavobernardi-ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,

  args: {
    size: 'md',
    children:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea fuga quod vel at dolorem nihil pariatur dolores quaerat dignissimos vero ipsum in culpa esse amet numquam, blanditiis praesentium odit sit.',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
