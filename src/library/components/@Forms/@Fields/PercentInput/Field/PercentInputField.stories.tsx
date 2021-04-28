import React from 'react';

//storybook
import { Story, Meta } from '@storybook/react';

import { PercentInputField } from './PercentInputField.component';
import { PercentInputFieldProps } from '../PercentInput.interface';

export default {
	title: 'Atoms/PercentInputField',
	component: PercentInputField,
} as Meta;

const Template: Story<PercentInputFieldProps> = (args) => {
	const onChange = (newValue: string) => console.log(newValue);

	return (
		<PercentInputField
			{...args}
			onChange={onChange} />
	);
};

export const Default = Template.bind({});
Default.args = {
	label: 'Test',
};
