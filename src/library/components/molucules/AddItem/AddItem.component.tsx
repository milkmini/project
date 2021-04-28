import React from 'react';

//components
import { BodyText } from 'library/components/atoms';
import { ButtonWithIcon, MainButton } from 'library/components/@Buttons';

//styles
import { styles } from './AddItem.styles';

//types
import { CSSObject } from '@emotion/css';

export type AddItemProps = {
	onPress?: () => void;
	btnText: string;
	text: string;
	style?: CSSObject | CSSObject[];

}

//-----------------------
// AddItem
//-----------------------
export const AddItem: React.FC<AddItemProps> = ({
	onPress,
	btnText,
	text,
	style,
}) => {
	return (
		<div css={[
			styles.container,  
			style,
		]}
		>
			<MainButton
				onPress={onPress}
				width={406} 
				text={btnText} />
			
			<ButtonWithIcon 
				size={22}
				type='normal'
				color='#8B9ACA'
				iconName='ic_human'
				style={styles.smail} />

			<div css={styles.text}>
				<BodyText style={{ color: '#AEAABC' }}>
					{text}
					
				</BodyText>
			</div>
		</div>
	);
};

