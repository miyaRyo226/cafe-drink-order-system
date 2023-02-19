import { Story, Meta } from '@storybook/react/'
import { ComponentProps } from 'react'

import { Card } from './index'

export default {
	title: 'Common/Card',
	component: Card
} as Meta<ComponentProps<typeof Card>>

const Template: Story<ComponentProps<typeof Card>> = () => <Card>aaa</Card>

export const Default = Template.bind({})
