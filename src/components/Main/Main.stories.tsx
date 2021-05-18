import { Story } from '@storybook/react'
import Main from '.'

export default {
  title: 'Main',
  component: Main
}

const Template: Story = (args) => <Main {...args} />

export const MainStory = Template.bind({})

MainStory.args = {
  title: 'Main Title',
  description: 'Main Description'
}
