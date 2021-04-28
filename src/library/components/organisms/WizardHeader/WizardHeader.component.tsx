import React from 'react';

//components
import { BMTLogo } from 'library/components/atoms';
import { StepsText } from 'library/components/molucules';
import { ButtonWithIcon } from 'library/components/@Buttons';

//styles
import { styles } from './WizardHeader.styles';

//types
import { CSSObject } from '@emotion/css';

export type WizardHeaderProps = {
	pageNumber: number;
	stepName: string;
	onPress?: () => void;
	style?: CSSObject | CSSObject[];
}

//--------------------------
// WizardHeader
//--------------------------
export const WizardHeader: React.FC<WizardHeaderProps> = ({
	pageNumber,
	stepName,
	onPress,
	style,
}) => {
	return (
		<header css={[
			styles.container,
			style,
		]}
		>
			<div css={styles.head}>
				<BMTLogo
					size={34}
					withText />
			</div>

			<div css={styles.content}>
				<ButtonWithIcon
					size={21}
					onPress={onPress}
					withBorder={true}
					iconName='ic_arrow_left'
					color='#3969FF'
					style={styles.button} />

				<StepsText
					stepName={stepName}
					pageNumber={pageNumber} />
			</div>
		</header>
	);
};

