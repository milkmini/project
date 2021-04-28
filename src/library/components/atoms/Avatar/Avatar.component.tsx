/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

//styles
import { styles } from './Avatar.styles';

//types
import { CSSObject } from '@emotion/css';

export type AvatarProps = {
	style?: CSSObject | CSSObject[];
}
//------------------------
// Avatar
//------------------------ 
export const Avatar: React.FC<AvatarProps> = ({
	style,
}) => {
	return (
		<div css={{ ...styles.container,
			...style,
		}}
		>
			<img /> 
		</div>
	);
};
