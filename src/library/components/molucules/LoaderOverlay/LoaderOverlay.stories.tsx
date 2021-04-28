import React from 'react';

//storybook
import { Story, Meta } from '@storybook/react';

import { LoaderOverlay, LoaderOverlayProps } from './LoaderOverlay.component';

export default {
	title: 'modules/LoaderOverlay',
	component: LoaderOverlay,
} as Meta;

const Template: Story<LoaderOverlayProps> = (args) => (
	<LoaderOverlay {...args} />
);

export const Default = Template.bind({});
Default.args = {
};
