import React from 'react';

//storybook
import { Story, Meta } from '@storybook/react';

import { DiagramCard, DiagramCardProps } from './DiagramCard.component';

export default {
	title: 'Cards/DiagramCard',
	component: DiagramCard,
} as Meta;

const Template: Story<DiagramCardProps> = (args) => (
	<DiagramCard {...args}>
	</DiagramCard>
);

export const Default = Template.bind({});
Default.args = {
	data: [
		{
		  'name': 'Group A',
		  'value': 1000,
		  'fill': '#FF6370',
		},
		{
		  'name': 'Group B',
		  'value': 600,
		  'fill': '#6054FF',
		},
		{
		  'name': 'Group C',
		  'value': 400,
		  'fill': '#8FE128',
		},
	],
};
