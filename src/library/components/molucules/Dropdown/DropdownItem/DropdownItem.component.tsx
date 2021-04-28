import React from 'react';

//styles
import { styles } from './DropdownItem.styles';

//types
export type DropdownItemProps = {
	onPress?: (item: object) => void;
	text: string;
	style?: any;
}

//---------------------------
// DropdownItem
//---------------------------
export const DropdownItem: React.FC<DropdownItemProps> = ({
	onPress,
	text,
	style,
}) => {
	return (
		<div 
			onClick={onPress}
			css={[styles.container, style]}
		>
			{text}
		</div>
	);
};
