import React from 'react';

//components
import { BodyText } from 'library/components/atoms';

//styles
import { styles } from './RoleCard.styles';

//types
import { CSSObject } from '@emotion/css';

export type RoleCardProps = {
	onDelete: () => void;
	onEdit: () => void;
	onOpen: () => void;
	description: string;
	roleName: string;
	style?: CSSObject | CSSObject[];
}

//-----------------------------
// RoleCard
//-----------------------------
export const RoleCard: React.FC<RoleCardProps> = ({
	onDelete,
	onEdit,
	onOpen,
	description,
	roleName,
	style,
}) => {
	return (
		<button 
			css={[ 
				styles.container,
				style,
			]}
			onClick={onOpen}
		>
			<div css={styles.flexBlock}>
				{roleName}
				<BodyText style={styles.text}>
					{description}
				</BodyText>
			</div>

			{/* <div css={{ display: 'flex' }}>
				<ButtonWithIcon
					size
					iconName='ic_edit'
					color='#3969FF'
					style={styles.button}
					onPress={onEdit} />
			
				<ButtonWithIcon
					iconName='ic_delete'
					color='#3969FF'
					style={styles.button}
					onPress={onDelete} />

				<ButtonWithIcon
					iconName=''
					color='#F96C6D'
					style={styles.button}
					onPress={onOpen} />
			</div> */}
		</button>
	);
};
