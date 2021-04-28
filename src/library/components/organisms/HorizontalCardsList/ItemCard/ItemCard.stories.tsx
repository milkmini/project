import React from 'react';

//storybook
import { Story, Meta } from '@storybook/react';

import { ItemCard, ItemCardProps } from './ItemCard.component';

export default {
	title: 'Card/ItemCard',
	component: ItemCard,
} as Meta;

const Template: Story<ItemCardProps> = (args) => (
	<ItemCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
	title: 'Department 1',
	description: '1 people',	
};

export const LargeText = Template.bind({});
LargeText.args = {
	title: 'Department 1, Department 1',
	description: '1 people, 1 people, 1 people',	
};
