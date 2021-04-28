import React from 'react';

//storybook
import { Story, Meta } from '@storybook/react';

import { ModelCard, ModelCardProps } from './ModelCard.component';

export default {
	title: 'Card/ModelCard',
	component: ModelCard,
} as Meta;

const Template: Story<ModelCardProps> = (args) => (
	<ModelCard {...args}>
	</ModelCard>
);

export const Default = Template.bind({});
Default.args = {
};
