import React from 'react';

//storybook
import { Story, Meta } from '@storybook/react';

import { HeadlineText, HeadlineProps } from './HeadlineText.component';

export default {
	title: 'Atoms/HeadlineText',
	component: HeadlineText,
} as Meta;

const Template: Story<HeadlineProps> = (args) => (
	<HeadlineText {...args}>
		HeadlineText
	</HeadlineText>
);

export const H1 = Template.bind({});
H1.args = {
	type: 'h1',
};

export const H2 = Template.bind({});
H2.args = {
	type: 'h2',
};

export const H3 = Template.bind({});
H3.args = {
	type: 'h3',
};
