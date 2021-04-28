import React from 'react';

//storybook
import { Story, Meta } from '@storybook/react';

import { RoleCard, RoleCardProps } from './RoleCard.component';

export default {
	title: 'Card/RoleCard',
	component: RoleCard,
} as Meta;

const Template: Story<RoleCardProps> = (args) => (
	<RoleCard {...args}>
	</RoleCard>
);

export const Default = Template.bind({});
Default.args = {
	
};
