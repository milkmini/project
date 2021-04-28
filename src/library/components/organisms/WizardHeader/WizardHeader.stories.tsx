import React from 'react';

//storybook
import { Story, Meta } from '@storybook/react';

import { WizardHeader, WizardHeaderProps } from './WizardHeader.component';

export default {
	title: 'Organisms/WizardHeader',
	component: WizardHeader,
} as Meta;

const Template: Story<WizardHeaderProps> = (args) => (
	<WizardHeader {...args}>
	</WizardHeader>
);

export const Default = Template.bind({});
Default.args = {
};
