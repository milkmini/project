import React from 'react';

//styles
import { styles } from './HeadlineText.styles';

//types
import { CSSObject } from '@emotion/css';

type Type = 'h1' | 'h2' | 'h3';

export type HeadlineProps = {
	type?: Type;
	size?: number;
	style?: CSSObject | CSSObject[];
}

const getSize = (type: Type = 'h1'): number => {
	const sizes = {
		'h1': 32,
		'h2': 24,
		'h3': 18,
	};

	return sizes[type];
};

const getWeight= (type: Type = 'h1'): number => {
	const sizes = {
		'h1': 600,
		'h2': 600,
		'h3': 500,
	};

	return sizes[type];
};

//----------------------------
// HeadlineText
//----------------------------
export const HeadlineText: React.FC<HeadlineProps> = ({
	style,
	type = 'h1',
	children,
}) => {
	return (
		<span css={[
			styles.container,
			style,
			{
				fontSize: getSize(type),
				fontWeight: getWeight(type),
			},
		]}
		>
			{children}
		</span>
	);
};
