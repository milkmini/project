import React from 'react';

//storybook
import { Story, Meta } from '@storybook/react';

import { SettingsHeader, SettingsHeaderProps } from './SettingsHeader.component';

export default {
	title: 'molucules/SettingsHeader',
	component: SettingsHeader,
} as Meta;

const Template: Story<SettingsHeaderProps> = (args) => (
	<SettingsHeader {...args}>
		
	</SettingsHeader>
);

export const Default = Template.bind({});
Default.args = {
};
