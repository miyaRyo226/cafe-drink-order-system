import { Story, Meta } from '@storybook/react/'
import { ComponentProps } from 'react'

import { DrinkOrderPage } from './index'

export default {
	title: 'Pages/DrinkOrder',
	component: DrinkOrderPage
} as Meta<ComponentProps<typeof DrinkOrderPage>>

const Template: Story<ComponentProps<typeof DrinkOrderPage>> = () => (
	<DrinkOrderPage />
)

export const Default = Template.bind({})
