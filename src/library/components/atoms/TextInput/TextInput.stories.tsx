import React from 'react';

//storybook
import { Story, Meta } from '@storybook/react';

import { TextInput } from './TextInput.component';

export default {
	title: 'Atoms/TextInput',
	component: TextInput,
} as Meta;

const Template: Story = (args) => {
	const onChange = () => console.log('1123');

	return (
		// <TextInput
		// 	{...args}
		// 	onChange={onChange} />
		<></>
	);
};

export const Default = Template.bind({});
Default.args = {
	label: 'Test',
	name: 'name',
};
