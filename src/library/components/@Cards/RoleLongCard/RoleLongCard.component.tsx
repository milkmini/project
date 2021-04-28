import React from 'react';

//components
import {
	SecondaryButton,
	ButtonWithIcon,
	Switcher,
} from 'library/components/@Buttons';
import { BodyText } from 'library/components/atoms';
import { RoleInfo } from 'library/components/molucules';

//styles
import { 	
	opasityTrue,
	opasityFalse,
	styles } from './RoleLongCard.styles';

//types
import { CSSObject } from '@emotion/css';

export type RoleLongCardProps = {
	onDelete: (id: string) => void;
	onEdit: (id: string) => void;
	roleInfo: {
		id: string;
		name: string;
		counts: string;
		annualFixedSalary: number;
		monthlyCommission: number;
		additionalMonthlyOverhead: number;
	}
	style?: CSSObject | CSSObject[];
}

//--------------------------------
// RoleLongCard 
//--------------------------------
export const RoleLongCard: React.FC<RoleLongCardProps> = ({
	onEdit,
	onDelete,
	roleInfo,
	style,
}) => {
	const [opasity, setOpasity] = React.useState(false);

	const RoleLongCard = (opasity) ? opasityTrue: opasityFalse; 

	const _onAddOpasity = () => {
		setOpasity(!opasity);
	};

	return (
		<tr css={{ ...styles.container, ...RoleLongCard }}>

			<td css={styles.people}>

				<RoleInfo name={roleInfo.name} counts={roleInfo.name} />

			</td>

			<td css={styles.verticalBar}></td>
			<td css={styles.moneyTime}>

				<BodyText style={styles.moneyText}>
					$
					{roleInfo.annualFixedSalary}
					{' '}
					<BodyText >
						/ year
					</BodyText>
				</BodyText> 
			</td>

			<td css={styles.verticalBar}></td>
			<td css={styles.money}>

				<BodyText style={styles.moneyText}>
					$
					{roleInfo.monthlyCommission}
				</BodyText> 
			</td>
			
			<td css={styles.verticalBar}></td>
			<td css={styles.swither}> 
				<BodyText style={styles.switcherText}>
					Consider in the model
				</BodyText>

				<Switcher onChange={_onAddOpasity} />
			</td>
			
			<td css={styles.buttonWrapper}>
				
				<SecondaryButton
					size={12}
					iconName='ic_edit'
					onPress={() => onEdit(roleInfo.id)}
					style={styles.buttonInfo}
					color='#3969FF'
				>
					Edit info
				</SecondaryButton>
				
				<ButtonWithIcon
					size={21}
					onPress={() => onDelete(roleInfo.id)}
					iconName='ic_trash'
					color='#F96C6D' />
			</td>
		</tr>
	);
};
