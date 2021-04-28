import React from 'react';

//storybook
import { Story, Meta } from '@storybook/react';

import { CaptionText, CaptionProps } from './Caption.component';

export default {
	title: 'Atoms/Caption',
	component: CaptionText,
} as Meta;

const Template: Story<CaptionProps> = (args) => (
	<CaptionText {...args}>
		Caption (Medium) 12
	</CaptionText>
);

export const Default = Template.bind({});
Default.args = {

};
