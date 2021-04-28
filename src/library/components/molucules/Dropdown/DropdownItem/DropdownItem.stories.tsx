import React from 'react';

//storybook
import { Story, Meta } from '@storybook/react';

import { DropdownItem, DropdownItemProps } from './DropdownItem.component';

export default {
	title: 'Atoms/DropdownItem',
	component: DropdownItem,
} as Meta;

const Template: Story<DropdownItemProps> = (args) => (
	<DropdownItem {...args}>
		
	</DropdownItem>
);

export const Default = Template.bind({});
Default.args = {
};
