import React from 'react';

//storybook
import { Story, Meta } from '@storybook/react';

import { SecondaryButton, SecondaryButtonProps } from './SecondaryButton.component';

export default {
	title: 'Button/SecondaryButton',
	component: SecondaryButton,
} as Meta;

const Template: Story<SecondaryButtonProps> = (args) => (
	<SecondaryButton {...args}>
	</SecondaryButton>
);

export const Default = Template.bind({});
Default.args = {
	
};
