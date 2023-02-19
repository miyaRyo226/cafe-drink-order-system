import { Story, Meta } from '@storybook/react/'
import { ComponentProps } from 'react'

import { Button } from './index'

export default {
	title: 'Common/Button',
	component: Button
} as Meta<ComponentProps<typeof Button>>

const Template: Story<ComponentProps<typeof Button>> = (args) => (
	<Button {...args}>ボタン</Button>
)

export const Default = Template.bind({})
Default.args = {
	buttonId: 'id'
}
