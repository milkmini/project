import React from 'react';

//components
import { CaptionText, BMTIcon } from 'library/components/atoms';

//styles
import { styles } from './SecondaryButton.styles';

//types
import { CSSObject } from '@emotion/css';

export type SecondaryButtonProps = {
	onPress: () => void;
	iconName: string;
	color: string;
	size: number;
	style?: CSSObject | CSSObject[];
};

//---------------------------
// SecondaryButton
//---------------------------
export const SecondaryButton: React.FC<SecondaryButtonProps> = ({
	onPress,
	iconName,
	color,
	style,
	size,
	children,
}) => {
	return (
		<button
			onClick={onPress}
			css={[styles.container, style]}
		>
			<BMTIcon
				name={iconName}
				size={size}
				color={color}
				style={styles.icon} />

			<CaptionText style={{
				color,
			}}
			>
				{children}
			</CaptionText>
		</button>
	);
};
