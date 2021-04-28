import React from 'react';

//storybook
import { Story, Meta } from '@storybook/react';

import { DropdownMenu, DropdownMenuProps } from './DropdownMenu.component';

export default {
	title: 'molucules/DropdownMenu',
	component: DropdownMenu,
} as Meta;

const Template: Story<DropdownMenuProps> = (args) => (
	<DropdownMenu {...args}>
		
	</DropdownMenu>
);

export const Default = Template.bind({});
Default.args = {
};
