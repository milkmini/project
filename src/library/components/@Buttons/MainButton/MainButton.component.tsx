import React from 'react';

//styles
import { styles	} from './MainButton.styles';

//types
import { CSSObject } from '@emotion/css';

export type MainButtonProps = {
	onPress?: () => void;
	width?: number;
	height?: number;
	text: string;
	disabled?: boolean; 
	outlined?: boolean;
	style?: CSSObject | CSSObject[];
}

//--------------------------
// MainButton
//--------------------------
export const MainButton: React.FC<MainButtonProps> = ({
	onPress,
	width,
	height,
	text,
	disabled,
	outlined,
	style,
}) => {
	const buttonStyle = (outlined) ? styles.outlined : styles.regular;
	const buttonWidth = (width) ? width : buttonStyle.width;
	const buttonHeight = (height) ? height : buttonStyle.height;
	const disabledStyle = (disabled) ? styles.disabled : {};

	return (
		<button 
			onClick={onPress} 
			css={{
				...buttonStyle,
				...disabledStyle,
				width: buttonWidth,
				height: buttonHeight,
				...style,
			}} 
		>
			{text}
		</button>
	);
};

