import React from 'react';

//storybook
import { Story, Meta } from '@storybook/react';

import { BMTLogo, BMTLogoProps } from './BMTLogo.component';

export default {
	title: 'Atoms/BMTLogo',
	component: BMTLogo,
} as Meta;

const Template: Story<BMTLogoProps> = (args) => (
	<BMTLogo {...args} />
);

export const Default = Template.bind({});
Default.args = {
	size: 50,
};

export const WithText = Template.bind({});
WithText.args = {
	size: 50,
	withText: true,
};
