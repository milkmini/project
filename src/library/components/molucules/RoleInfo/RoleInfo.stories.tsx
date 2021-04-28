import React from 'react';

//storybook
import { Story, Meta } from '@storybook/react';

import { RoleInfo, RoleInfoProps } from './RoleInfo.component';

export default {
	title: 'molucules/RoleInfo',
	component: RoleInfo,
} as Meta;

const Template: Story<RoleInfoProps> = (args) => (
	<RoleInfo {...args}>
		
	</RoleInfo>
);

export const Default = Template.bind({});
Default.args = {
	name: '123123',
	counts: '12312',
};
