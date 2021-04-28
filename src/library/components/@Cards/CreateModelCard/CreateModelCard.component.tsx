import React from 'react';

//other deps

//components

//styles
import { styles } from './CreateModelCard.styles';

//types
import { CSSObject } from '@emotion/css';
import { BodyText } from 'library/components/atoms';

export type CreateModelCardProps = {
	onPress?: () => void;
	style?: CSSObject | CSSObject[];
}

//-------------------------------
// CreateModelCard
//-------------------------------
export const CreateModelCard: React.FC<CreateModelCardProps> = ({
	onPress,
	style,
}) => {
	return (
		<button
			onClick={onPress}
			css={[styles.container, style]}
		>
			<div css={styles.wrapper}>
				<div css={styles.blockPlus}></div>
				<div css={styles.blockText}>
					<BodyText style={styles.titleText}>
						Create new model
					</BodyText>
					<BodyText style={styles.infoText}>
						3 free models left
					</BodyText>
				</div>
			</div>
		</button>
	);
};

