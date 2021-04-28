import React from 'react';

//storybook
import { Story, Meta } from '@storybook/react';

import { PriceField } from './PriceField.component';
import { PriceFieldProps } from '../PriceInput.interface';

export default {
	title: 'Atoms/PriceField',
	component: PriceField,
} as Meta;

const Template: Story<PriceFieldProps> = (args) => {
	const onChange = (newValue: string) => console.log(newValue);

	return (
		<PriceField
			{...args}
			onChange={onChange} />
	);
};

export const Default = Template.bind({});
Default.args = {
	label: 'Test',
};
