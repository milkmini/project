import React from 'react';

//storybook
import { Story, Meta } from '@storybook/react';

import { TextField } from './TextField.component';
import { TextFieldProps } from '../TextInput.interface';

export default {
	title: 'Atoms/TextField',
	component: TextField,
} as Meta;

const Template: Story<TextFieldProps> = (args) => {
	const onChange = (newValue: string) => console.log(newValue);

	return (
		<TextField
			{...args}
			onChange={onChange} />
	);
};

export const Default = Template.bind({});
Default.args = {
	label: 'Test',
};
