import React from 'react';

//storybook
import { Story, Meta } from '@storybook/react';

import { EmployeeLongCard, EmployeeLongCardProps } from './EmployeeLongCard.component';

export default {
	title: 'Card/EmployeeLongCard',
	component: EmployeeLongCard,
} as Meta;

const Template: Story<EmployeeLongCardProps> = (args) => (
	<EmployeeLongCard {...args}>
	</EmployeeLongCard>
);

export const Default = Template.bind({});
Default.args = {
	employeedFrom: 2020,
};
