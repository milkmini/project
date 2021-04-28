import React from 'react';

//storybook
import { Story, Meta } from '@storybook/react';

import { DepartmentForm, DepartmentFormProps } from './DepartmentForm.component';

export default {
	title: 'Form/DepartmentForm',
	component: DepartmentForm,
} as Meta;

const Template: Story<DepartmentFormProps> = (args) => (
	<DepartmentForm {...args}>
	</DepartmentForm>
);

export const Default = Template.bind({});
Default.args = {
	
};
