import React from 'react';

//storybook
import { Story, Meta } from '@storybook/react';

import { RoleForm, RoleFormProps } from './RoleForm.component';

export default {
	title: 'Form/RoleForm',
	component: RoleForm,
} as Meta;

const Template: Story<RoleFormProps> = (args) => (
	<RoleForm {...args}>
	</RoleForm>
);

export const Default = Template.bind({});
Default.args = {
	
};
