import React from 'react';

//storybook
import { Story, Meta } from '@storybook/react';

import { BodyText, BodyTextProps } from './BodyText.component';

export default {
	title: 'Atoms/BodyText',
	component: BodyText,
} as Meta;

const Template: Story<BodyTextProps> = (args) => (
	<BodyText {...args}>
		BodyText (Medium) 14
	</BodyText>
);

export const Default = Template.bind({});
Default.args = {
};
