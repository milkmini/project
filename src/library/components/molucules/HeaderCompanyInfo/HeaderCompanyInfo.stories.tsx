import React from 'react';

//storybook
import { Story, Meta } from '@storybook/react';

import { HeaderCompanyInfo, HeaderCompanyInfoProps } from './HeaderCompanyInfo.component';

export default {
	title: 'molucules/HeaderCompanyInfo',
	component: HeaderCompanyInfo,
} as Meta;

const Template: Story<HeaderCompanyInfoProps> = (args) => (
	<HeaderCompanyInfo {...args}>
	</HeaderCompanyInfo>
);

export const Default = Template.bind({});
Default.args = {
};
