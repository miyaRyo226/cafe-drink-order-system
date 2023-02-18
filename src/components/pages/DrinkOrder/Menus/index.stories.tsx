import { Story, Meta } from '@storybook/react/'
import { ComponentProps } from 'react'

import { Menus } from './index'

export default {
	title: 'Pages/DrinkOrder/Menus',
	component: Menus
} as Meta<ComponentProps<typeof Menus>>

const Template: Story<ComponentProps<typeof Menus>> = () => <Menus />

export const Default = Template.bind({})
