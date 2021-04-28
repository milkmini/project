import React from 'react';

//storybook
import { Story, Meta } from '@storybook/react';

import { CreateItemCard, CreateItemCardProps } from './CreateItemCard.component';

export default {
	title: 'Card/CreateItemCard',
	component: CreateItemCard,
} as Meta;

const Template: Story<CreateItemCardProps> = (args) => (
	<CreateItemCard {...args}>
	</CreateItemCard>
);

export const Default = Template.bind({});
Default.args = {
	
};
