import React from 'react';

//components
import { ButtonWithIcon } from 'library/components/@Buttons';

//styles
import { styles } from './CreateItemCard.styles';

//types
import { CSSObject } from '@emotion/css';

export type CreateItemCardProps = {
	onPress: () => void;
	title? : string;
	style?: CSSObject | CSSObject[];
}

//-------------------------------
// CreateItemCard
//-------------------------------
export const CreateItemCard: React.FC<CreateItemCardProps> = ({
	onPress,
	title,
	style,
}) => {
	return (
		<div
			onClick={onPress}
			css={{
				...styles.container,
				...style,
			}}
		>
			<ButtonWithIcon
				size={16}
				type='normal'
				onPress={onPress}
				iconName='ic_plus'
				color='#3969FF'
				style={styles.icon} />

			{title}
		</div>
	);
};

