import React from 'react';

//storybook
import { Story, Meta } from '@storybook/react';

import { TabBar, TabBarProps } from './TabBar.component';

export default {
	title: 'molucules/TabBar',
	component: TabBar,
} as Meta;

const Template: Story<TabBarProps> = (args) => (
	<TabBar {...args}>
		
	</TabBar>
);

export const Default = Template.bind({});
Default.args = {
};
