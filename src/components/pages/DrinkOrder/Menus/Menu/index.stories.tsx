import { Story, Meta } from '@storybook/react/'
import { ComponentProps } from 'react'

import { Menu } from './index'

export default {
	title: 'Pages/DrinkOrder/Menus/Menu',
	component: Menu
} as Meta<ComponentProps<typeof Menu>>

const Template: Story<ComponentProps<typeof Menu>> = (args) => (
	<Menu {...args} />
)

export const Default = Template.bind({})
Default.args = {
	buttonId: 'tea',
	menuName: '紅茶',
	price: 500
}
