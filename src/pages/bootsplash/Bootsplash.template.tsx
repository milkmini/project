import React from 'react';

//components
import { LoaderOverlay } from 'library/components/molucules';
import { BMTLogo } from 'library/components/atoms';

//styles
import { styles } from './Bootsplash.styles';

//types
import { CSSObject } from '@emotion/css';

type BootsplashTemplateProps = {
	style?: CSSObject | CSSObject[];
};

//-------------------------------
// BootsplashTemplate
//-------------------------------
export const BootsplashTemplate: React.FC<BootsplashTemplateProps> = () => {
	return (
		<div css={styles.container}>
			<LoaderOverlay />

			<BMTLogo size={30} style={styles.logo} />
		</div>
	);
};
