import React from 'react';

//storybook
import { Story, Meta } from '@storybook/react';

import { MainHeader, MainHeaderProps } from './MainHeader.component';

export default {
	title: 'Organisms/MainHeader',
	component: MainHeader,
} as Meta;

const Template: Story<MainHeaderProps> = (args) => (
	<MainHeader {...args} />
);

export const Default = Template.bind({});
Default.args = {
};
