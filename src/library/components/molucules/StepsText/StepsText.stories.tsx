import React from 'react';

//storybook
import { Story, Meta } from '@storybook/react';

import { StepsText, StepsTextProps } from './StepsText.component';

export default {
	title: 'molucules/StepsText',
	component: StepsText,
} as Meta;

const Template: Story<StepsTextProps> = (args) => (
	<StepsText {...args}>
		
	</StepsText>
);

export const Default = Template.bind({});
Default.args = {
};
