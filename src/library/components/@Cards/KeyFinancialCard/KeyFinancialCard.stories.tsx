import React from 'react';

//storybook
import { Story, Meta } from '@storybook/react';

import { KeyFinancialCard, KeyFinancialCardProps } from './KeyFinancialCard.component';

export default {
	title: 'Cards/KeyFinancialCard',
	component: KeyFinancialCard,
} as Meta;

const Template: Story<KeyFinancialCardProps> = (args) => (
	<KeyFinancialCard {...args}>
	</KeyFinancialCard>
);

export const Default = Template.bind({});
Default.args = {
	data: [
		{
			'name': '',
			'uv': -250,
			'pv': -250,
			'amt': -250,
		},
		{
			'name': '',
			'pv': 300,
		},
		{
			'name': '',
			'amt': 100,
		},
		{
			'name': '',
			'uv': 100,
			'pv': 400,
		},
		{
			'name': '',
			'pv': 370,
			'amt': 300,
		},
		{
			'name': '',
			'uv': 100,
		},
		{
			'name': '',
			'uv': 200,
		},
		{
			'name': '',
			'amt': 400,
		},
		{
			'name': '',
			'uv': 500,
		},
		{
			'name': '',
			'uv': 750,
			'pv': 750,
			'amt': 750,
		},
	],
};
