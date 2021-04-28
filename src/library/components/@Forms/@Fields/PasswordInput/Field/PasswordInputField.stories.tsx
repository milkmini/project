import React from 'react';

//storybook
import { Story, Meta } from '@storybook/react';

import { PasswordInputField } from './PasswordInputField.component';
import { PasswordInputFieldProps } from '../PasswordInput.interface';

export default {
	title: 'Atoms/PasswordInputField',
	component: PasswordInputField,
} as Meta;

const Template: Story<PasswordInputFieldProps> = (args) => {
	const onChange = (newValue: string) => console.log(newValue);

	return (
		<PasswordInputField
			{...args}
			onChange={onChange} />
	);
};

export const Default = Template.bind({});
Default.args = {
	label: 'Test',
};
