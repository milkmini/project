import React from 'react';

//storybook
import { Story, Meta } from '@storybook/react';

import { HomeHeader, HomeHeaderProps } from './HomeHeader.component';

export default {
	title: 'molucules/HomeHeader',
	component: HomeHeader,
} as Meta;

const Template: Story<HomeHeaderProps> = (args) => (
	<HomeHeader {...args}>
		
	</HomeHeader>
);

export const Default = Template.bind({});
Default.args = {
};
