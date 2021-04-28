import React from 'react';

//storybook
import { Story, Meta } from '@storybook/react';

import { EmployeeInfo, EmployeeInfoProps } from './EmployeeInfo.component';

export default {
	title: 'molucules/EmployeeInfo',
	component: EmployeeInfo,
} as Meta;

const Template: Story<EmployeeInfoProps> = (args) => (
	<EmployeeInfo {...args}>
	</EmployeeInfo>
);

export const Default = Template.bind({});
Default.args = {
};
