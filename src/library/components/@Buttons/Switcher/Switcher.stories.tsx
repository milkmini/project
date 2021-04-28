import React from 'react';

//storybook
import { Story, Meta } from '@storybook/react';

import { Switcher, SwitcherProps } from './Switcher.component';

export default {
	title: 'Button/Switcher',
	component: Switcher,
} as Meta;

const Template: Story<SwitcherProps> = (args) => (
	<Switcher {...args}>
	</Switcher>
);

export const Default = Template.bind({});
Default.args = {
	
};
