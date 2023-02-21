import { Story, Meta } from '@storybook/react/'
import { ComponentProps } from 'react'

import { Total } from './index'

export default {
	title: 'Pages/DrinkOrder/Total',
	component: Total
} as Meta<ComponentProps<typeof Total>>

const Template: Story<ComponentProps<typeof Total>> = () => <Total />

export const Default = Template.bind({})
