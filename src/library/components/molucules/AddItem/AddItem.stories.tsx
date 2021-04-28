import React from 'react';

//storybook
import { Story, Meta } from '@storybook/react';

import { AddItem, AddItemProps } from './AddItem.component';

export default {
	title: 'molucules/AddItem',
	component: AddItem,
} as Meta;

const Template: Story<AddItemProps> = (args) => (
	<AddItem {...args}>
	</AddItem>
);

export const Default = Template.bind({});
Default.args = {
	text: 'You can continue to add your employees here, but you will always have the opportunity to come back to this in the future.', // eslint-disable-line max-len
	btnText: 'Add employee',
};
