import React from 'react';

//storybook
import { Story, Meta } from '@storybook/react';

import { CreateModelCard, CreateModelCardProps } from './CreateModelCard.component';

export default {
	title: 'Card/ModelCard',
	component: CreateModelCard,
} as Meta;

const Template: Story<CreateModelCardProps> = (args) => (
	<CreateModelCard {...args}>
	</CreateModelCard>
);

export const Default = Template.bind({});
Default.args = {
};
