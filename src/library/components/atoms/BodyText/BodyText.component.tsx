import React from 'react';

//styles
import { styles } from './BodyText.styles';

//types
import { CSSObject } from '@emotion/css';

export type BodyTextProps = {
	style?: CSSObject | CSSObject[];
}

//-------------------------
// BodyText
//-------------------------
export const BodyText: React.FC<BodyTextProps> = ({
	style,
	children,
}) => {
	return (
		<span css={[styles.container, style]}>
			{children}
		</span>
	);
};
