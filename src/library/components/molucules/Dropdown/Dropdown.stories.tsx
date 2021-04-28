import React from 'react';

//storybook
import { Story, Meta } from '@storybook/react';

import { Dropdown, DropdownProps } from './Dropdown.component';

export default {
	title: 'molucules/Dropdown',
	component: Dropdown,
} as Meta;

const Template: Story<DropdownProps> = (args) => (
	<Dropdown {...args}>
		
	</Dropdown>
);

export const Default = Template.bind({});
Default.args = {
};
