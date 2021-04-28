import React from 'react';

//storybook
import { Story, Meta } from '@storybook/react';

import { Scrollbar, ScrollbarProps } from './Scrollbar.component';

export default {
	title: 'modules/Scrollbar',
	component: Scrollbar,
} as Meta;

const Template: Story<ScrollbarProps> = (args) => (
	<Scrollbar {...args} />
);

export const Default = Template.bind({});
Default.args = {
};
