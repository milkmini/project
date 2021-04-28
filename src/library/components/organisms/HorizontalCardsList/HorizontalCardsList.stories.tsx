import React from 'react';

//storybook
import { Story, Meta } from '@storybook/react';

import {
	HorizontalCardsList,
	HorizontalCardsListProps,
} from './HorizontalCardsList.component';

export default {
	title: 'Organisms/HorizontalCardsList',
	component: HorizontalCardsList,
} as Meta;

//deps
import { random } from 'faker';

//types
type ListItem = HorizontalCardsListProps['items'][number];

//mocks
const getNewItem = (): ListItem => ({
	id: random.uuid(),
	name: random.words(2),
	description: random.word(),
});

const Template: Story<HorizontalCardsListProps> = (args) => {
	const [items, setItems] = React.useState([getNewItem()]);
	const _onAdd = () => setItems([...items, getNewItem()]);
	const _onDelete = (id: string) => setItems(items.filter((department) => department.id !== id));

	return (
		<HorizontalCardsList
			{...args}
			items={items}
			onDelete={_onDelete}
		>
		</HorizontalCardsList>
	);
};

export const Default = Template.bind({});
Default.args = {
	createItemText: 'Create new item',
};
