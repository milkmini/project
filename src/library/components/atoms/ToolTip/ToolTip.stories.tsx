import React from 'react';

//storybook
import { Story, Meta } from '@storybook/react';

import { ToolTip, ToolTipProps } from './ToolTip.component';

export default {
	title: 'Atoms/ToolTip',
	component: ToolTip,
} as Meta;

const Template: Story<ToolTipProps> = (args) => (
	<ToolTip {...args}>
	</ToolTip>
);

export const Default = Template.bind({});
Default.args = {
};
