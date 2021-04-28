import React from 'react';

//other-deps
import { useStore } from 'effector-react';
import { useScrollData } from 'scroll-data-hook';

//models
import { $scrollBar } from 'library/modules/Scrollbar';

//constants
const HIDE_DISTANCE = 300;
const SHOW_DISTANCE = 150;

//types
type Direction = 'up' | 'down' | null;
type Params = {
	hideOnDesktop?: boolean;
}
type Result = {
	isOpen: boolean;
}

export const useScrollAnimation = ({ hideOnDesktop }: Params = { hideOnDesktop: false }): Result => {
	//state
	const [isOpen, setOpened] = React.useState(true);
		
	//data
	const scrollBar =useStore($scrollBar);
	let scroll = scrollBar.scrollHeight;
	let deltaY = scrollBar.deltaY;

	const lastDirection = React.useRef<Direction>(null);

	useScrollData({
		onScrollEnd() {
			lastDirection.current = null;
		},
	});

	// effects
	React.useEffect(() => {
		if (!hideOnDesktop) return;

		let direction = null;

		if(deltaY < 0)
			direction = 'up';
		else if(deltaY > 0)
			direction = 'down';

		if (lastDirection.current === direction && lastDirection.current) {
			if (direction === 'up' && (scroll > SHOW_DISTANCE))
				setOpened(true);
			else if (direction === 'down' && (scroll > HIDE_DISTANCE))
				setOpened(false);
		}

		if (direction === 'up' || direction === 'down')
			lastDirection.current = direction;
	}, [deltaY, hideOnDesktop, scroll, scrollBar]);

	return { isOpen };
};
