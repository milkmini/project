import React from 'react';

//storybook
import { Story, Meta } from '@storybook/react';

import { MainButton, MainButtonProps } from './MainButton.component';

export default {
	title: 'Button/MainButton',
	component: MainButton,
} as Meta;

const Template: Story<MainButtonProps> = (args) => (
	<MainButton {...args}>
	</MainButton>
);

export const Default = Template.bind({});
Default.args = {
	
};
