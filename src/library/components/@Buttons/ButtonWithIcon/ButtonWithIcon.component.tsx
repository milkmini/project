import React from 'react';

//styles
import { styles } from './ButtonWithIcon.styles';

//types
import { CSSObject } from '@emotion/css';
import { BMTIcon } from 'library/components/atoms';

type Type = 'big' | 'normal' | 'small';

export type ButtonWithIconProps = {
	onPress?: (event: React.MouseEvent) => void;
	onMouseEnter?: any;
	onMouseLeave?: any;
	iconName: string;
	color: string;
	size: number;
	withBorder?: boolean;
	type?: Type;
	style?: CSSObject | CSSObject[];
}

const getSize = (type: Type = 'big'): number => {
	const sizes = {
		'big': 42,
		'normal': 32,
		'small': 22,
	};

	return sizes[type];
};

//--------------------------
// ButtonWithIcon
//--------------------------
export const ButtonWithIcon: React.FC<ButtonWithIconProps> = ({
	onMouseLeave,
	onMouseEnter,
	onPress,
	type = 'big',
	withBorder = false,
	iconName,
	color,
	size,
	style,
}) => {
	const border = (withBorder) ? '0.761905px solid #EAE9EE' : 'none';

	return (
		<button
			type='button'
			onClick={onPress}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
			css={[
				styles.container,
				style, {
					minWidth: getSize(type),
					minHeight: getSize(type),
					border: border,
				},
			]}
		>
			<BMTIcon 
				size={size}
				color={color}
				name={iconName} />
			<div />
		</button>
	);
};

