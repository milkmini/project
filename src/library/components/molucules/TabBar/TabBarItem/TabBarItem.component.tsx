import React from 'react';

//components
import { BodyText } from 'library/components/atoms';

//styles
import { styles } from './TabBarItem.styles';

//types
export type TabBarItemProps = {
	onPress: () => void;
	name: string;
	active: boolean;
	fontSize?: number;
	padding?: number; 
}

//-----------------------
// TabBarItem
//-----------------------
export const TabBarItem: React.FC<TabBarItemProps> = ({
	onPress,
	name,
	active,
	fontSize = 14,
}) => {
	//renders
	const activeStyle = (active) ? styles.activeOn : styles.activeOff;

	return (
		<button 
			onClick={onPress}
			css={styles.container}
		>
			<BodyText 
				style={[
					styles.textMenu, 	
					activeStyle, {
						fontSize: fontSize,
					},
				]}
			>
				{name}
			</BodyText>
		</button>
	);
};
