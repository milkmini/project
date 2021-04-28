import React from 'react';

//styles
import { styles } from './CaptionText.styles';

//types
import { CSSObject } from '@emotion/css';

export type CaptionProps = {
	style?: CSSObject | CSSObject[];
}

//--------------------------
// CaptionText
//--------------------------
export const CaptionText: React.FC<CaptionProps> = ({
	style,
	children,
}) => {
	return (
		
		<span css={{
			...styles.container,
			...style,
		}}
		>
			{children}
		</span>
		
	);
};

