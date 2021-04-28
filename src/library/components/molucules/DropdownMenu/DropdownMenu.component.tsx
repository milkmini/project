import React from 'react';

//styles
import { styles } from './DropdownMenu.styles';

//types
import { CSSObject } from '@emotion/css';

export type DropdownMenuProps = {
	isOpen: boolean;
	style?: CSSObject | CSSObject[];
}

//-----------------------
// DropdownMenu
//-----------------------
export const DropdownMenu: React.FC<DropdownMenuProps> = ({
	isOpen,
	style,
	children,
}) => {		
	//renders
	const opennessStyle = (isOpen) ? styles.onOpen : styles.onClose;

	return (
		<div 
			css={[
				styles.containerPopup,
				opennessStyle,
				style,
			]}
		>
			{children}
		</div>

	);
};
