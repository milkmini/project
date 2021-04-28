import React from 'react';

//react-router
import { useHistory } from 'react-router-dom';

//components
import { TabBarItem } from './TabBarItem';

//animations
import { useTabsAnimation } from 'library/animations/useTabsAnimations.animation';

//styles
import { styles } from './TabBar.styles';

//types
import { CSSObject } from '@emotion/css';
export type TabBarProps = {
	items: {
		tabWidth: number;
		tabFontSize?: number;
		to: string;
		name: string;
	}[];
	style?: CSSObject | CSSObject[];
}

export type TabBarWithItems = React.FC<TabBarProps> & {
	TabBarItem: typeof TabBarItem;
}

//-----------------------
// TabBar
//-----------------------
export const TabBar: TabBarWithItems = ({
	items,
	style,
}) => {
	//state
	const { cursor, moveToIndex } = useTabsAnimation(items, 'tabWidth', 20);

	//history
	const history = useHistory();

	//callbacks
	const _onPressItem = React.useCallback((route: string, newIndex: number) => {
		moveToIndex(newIndex);
		history.push(route);
	}, [history, moveToIndex]);

	//renders
	const _renderTabBarItems = React.useCallback(() => {
		return items?.map((item, index) => {
			let active = false;
			if (history.location.pathname === item.to) {
				active = true;
				localStorage.setItem('active', String(index));
			}

			return (
				<TabBarItem
					active={active}
					onPress={() => _onPressItem(item.to, index)}
					fontSize={item.tabFontSize}
					name={item.name}
					key={`tab-bar-item-${index}`} />
			);
		});
	}, [_onPressItem, history.location.pathname, items]);

	React.useEffect(() => {
		moveToIndex(Number(localStorage.getItem('active')));
	}, [moveToIndex]);

	return (
		<nav css={styles.container}>
			{_renderTabBarItems()}

			<div css={[
				styles.activeBlock, { 
					width: cursor.width,
					transform: `translatex(${cursor.offsetX}px)`,
				}, style,
			]} />
		</nav>
	);
};

TabBar.TabBarItem= TabBarItem;
