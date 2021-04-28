import React from 'react';

//storybook
import { Story, Meta } from '@storybook/react';

import { TabBarItem, TabBarItemProps } from './TabBarItem.component';

export default {
	title: 'molucules/TabBarItem',
	component: TabBarItem,
} as Meta;

const Template: Story<TabBarItemProps> = (args) => (
	<TabBarItem {...args}>
		
	</TabBarItem>
);

export const Default = Template.bind({});
Default.args = {
};
