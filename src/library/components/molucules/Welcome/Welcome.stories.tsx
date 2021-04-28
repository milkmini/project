import React from 'react';

//storybook
import { Story, Meta } from '@storybook/react';

import { Welcome, WelcomeProps } from './Welcome.component';

export default {
	title: 'molucules/Welcome',
	component: Welcome,
} as Meta;

const Template: Story<WelcomeProps> = (args) => (
	<Welcome {...args}>
		
	</Welcome>
);

export const Default = Template.bind({});
Default.args = {
};
