import { Story, Meta } from '@storybook/react/'
import { ComponentProps } from 'react'

import { MenuButton } from './index'

export default {
	title: 'Pages/DrinkOrder/MenuButton',
	component: MenuButton
} as Meta<ComponentProps<typeof MenuButton>>

const Template: Story<ComponentProps<typeof MenuButton>> = () => <MenuButton />

export const Default = Template.bind({})
