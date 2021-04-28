import React from 'react';

//other deps
import LoaderSpinner from 'react-loader-spinner';

//types
import { CSSObject } from '@emotion/css';

type LoaderProps = {
	size: number;
	style?: CSSObject | CSSObject[];
};

//-------------------------------
// Loader
//-------------------------------
export const Loader: React.FC<LoaderProps> = ({
	size,
	style,
}) => {
	return (
		<LoaderSpinner
			type='TailSpin' 
			color='#00BFFF'
			// style={style}
			height={size}
			width={size} />
	);
};
