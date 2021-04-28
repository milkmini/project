import React from 'react';

export const useTabsAnimation = (
	tabs: Record<any, any>[],
	accessor: string,
	cursorOffset = 0,
	initialIndex = 0,
) => {
	const [index, setIndex] = React.useState(initialIndex);

	const positions = React.useMemo(() => {
		const positions: {
			width: number;
			offsetX: number;
		}[] = [];

		for (let index = 0; index < tabs.length; ++index) {
			const tabWidth = tabs[index][accessor] as number;
			const cursorWidth = tabWidth - cursorOffset * 2; //left and rigth offset
			
			let offsetX = cursorOffset;	
			if (index !== 0) 
				offsetX += positions[index - 1].offsetX + positions[index - 1].width + cursorOffset;

			positions.push({
				width: cursorWidth,
				offsetX,
			});
		}

		return positions;
	}, [tabs, accessor, cursorOffset]);

	const moveToIndex = (index: number) => {
		setIndex(index);
	};

	const cursor = positions[index];

	return {
		cursor,
		moveToIndex,
	};
};
