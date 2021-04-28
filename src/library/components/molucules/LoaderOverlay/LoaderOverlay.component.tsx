import React from 'react';

//components
import { BMTLogo, Loader } from 'library/components/atoms';

//styles
import { styles } from './LoaderOverlay.styles';

//types
import { CSSObject } from '@emotion/css';

export type LoaderOverlayProps = {
	page?: boolean;
	size?: number;
	sizeLogo?: number;
	style?: CSSObject | CSSObject[];
}

//---------------------------
// LoaderOverlay
//---------------------------
export const LoaderOverlay: React.FC<LoaderOverlayProps> = ({
	page= false,
	size=70,
	sizeLogo=25,
	style,
}) => {
	return (
		(!page) ? (
			<div css={[styles.containerBlock, style]}>
				<Loader size={size} />

				<BMTLogo size={sizeLogo} style={styles.logo} />
			</div>
		) : (
			<div css={styles.containerPage}>
				<Loader size={100} />

				<BMTLogo size={30} style={styles.logo} />
			</div>
		)
		
	);
};

