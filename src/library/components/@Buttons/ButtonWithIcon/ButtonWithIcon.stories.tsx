import React from 'react';

//storybook
import { Story, Meta } from '@storybook/react';

import { ButtonWithIcon, ButtonWithIconProps } from './ButtonWithIcon.component';

export default {
	title: 'Button/ButtonWithIcon',
	component: ButtonWithIcon,
} as Meta;

const Template: Story<ButtonWithIconProps> = (args) => (
	<ButtonWithIcon {...args}>
	</ButtonWithIcon>
);

export const Default = Template.bind({});
Default.args = {
	
};
