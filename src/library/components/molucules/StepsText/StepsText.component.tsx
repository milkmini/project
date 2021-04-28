import React from 'react';

//components
import { HeadlineText } from 'library/components/atoms';

//styles
import { styles } from './StepsText.styles';

//types
import { CSSObject } from '@emotion/css';

export type StepsTextProps = {
	pageNumber: number;
	stepName: string;
	style?: CSSObject | CSSObject[];
}

//-------------------------
// StepsText
//-------------------------
export const StepsText: React.FC<StepsTextProps> = ({
	pageNumber,
	stepName,
	style,
}) => {
	return (
		<div css={{ ...styles.container,
			...style,
		}}
		>
			<div css={styles.title}>
				<HeadlineText style={styles.blue}>
					Step 
					{' '}
					{pageNumber}
					<HeadlineText style={styles.grey}>
						/3
					</HeadlineText>
				</HeadlineText>
			</div>

			<HeadlineText style={styles.grey}>
				{stepName}
			</HeadlineText>
		</div>
	);
};

