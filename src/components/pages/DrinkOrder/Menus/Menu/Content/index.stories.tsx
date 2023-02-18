import { Story, Meta } from '@storybook/react/'
import { ComponentProps } from 'react'
import { MenuContent } from './index'

export default {
	title: 'Pages/DrinkOrder/MenuButton/Content',
	component: MenuContent
} as Meta<ComponentProps<typeof MenuContent>>

const Template: Story<ComponentProps<typeof MenuContent>> = (args) => (
	<MenuContent {...args} />
)

export const Default = Template.bind({})
Default.args = {
	menuName: '1coffee',
	price: 500
}
