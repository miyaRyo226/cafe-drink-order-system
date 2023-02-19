import { Story, Meta } from '@storybook/react/'
import { ComponentProps } from 'react'

import { HorizontalLine } from './index'

export default {
	title: 'Common/HorizontalLine',
	component: HorizontalLine
} as Meta<ComponentProps<typeof HorizontalLine>>

const Template: Story<ComponentProps<typeof HorizontalLine>> = () => (
	<HorizontalLine />
)

export const Default = Template.bind({})
