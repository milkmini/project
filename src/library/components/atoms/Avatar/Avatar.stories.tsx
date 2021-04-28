import React from 'react';

//storybook
import { Story, Meta } from '@storybook/react';

import { Avatar, AvatarProps } from './Avatar.component';

export default {
	title: 'Atoms/Avatar',
	component: Avatar,
} as Meta;

const Template: Story<AvatarProps> = (args) => (
	<Avatar {...args}>
	</Avatar>
);

export const Default = Template.bind({});
Default.args = {
};
