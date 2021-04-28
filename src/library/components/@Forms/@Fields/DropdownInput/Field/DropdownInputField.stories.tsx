import React from 'react';

//storybook
import { Story, Meta } from '@storybook/react';

import { DropdownInputField } from './DropdownInputField.component';
import { DropdownInputFieldProps } from '../DropdownInput.interface';

export default {
	title: 'Atoms/DropdownInputField',
	component: DropdownInputField,
} as Meta;

const Template: Story<DropdownInputFieldProps> = (args) => {
	const onChange = (newValue: string) => console.log(newValue);

	return (
		<DropdownInputField
			{...args}
			onChange={onChange} />
	);
};

export const Default = Template.bind({});
Default.args = {
	label: 'Test',
};
