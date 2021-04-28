import React from 'react';

//storybook
import { Story, Meta } from '@storybook/react';

import { RoleLongCard, RoleLongCardProps } from './RoleLongCard.component';

export default {
	title: 'Card/RoleLongCard',
	component: RoleLongCard,
} as Meta;

const Template: Story<RoleLongCardProps> = (args) => (
	<RoleLongCard {...args}>
	</RoleLongCard>
);

export const Default = Template.bind({});
Default.args = {

};
