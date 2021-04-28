import React from 'react';

//other deps
import { FlagIcon } from 'react-flag-kit';

//components
import { EmployeeInfo } from 'library/components/molucules';
import { BodyText } from 'library/components/atoms';
import {
	SecondaryButton,
	ButtonWithIcon,
	Switcher,
} from 'library/components/@Buttons';

//styles
import { 	
	opasityTrue,
	opasityFalse,
	styles,
} from './EmployeeLongCard.styles';

//types
import { CSSObject } from '@emotion/css';

export type EmployeeLongCardProps = {
	onDelete: (id: string) => void;
	onEdit: () => void,
	employee: {
		id: string;
		firstName: string;
		lastName: string;
		annualFixedSalary: number;
		monthlyCommission: number;
		additionalMonthlyOverhead: number;
	};
	employeedFrom: any;
	considerInModel: boolean;
	style?: CSSObject | CSSObject[];
}

//--------------------------------
// EmployeeLongCard 
//--------------------------------
export const EmployeeLongCard: React.FC<EmployeeLongCardProps> = ({
	onDelete,
	onEdit,
	employeedFrom,
	employee,
	considerInModel,
}) => {
	const [opasity, setOpasity] = React.useState(false);

	const employeeLongCardOpasity = (opasity) ? opasityTrue: opasityFalse; 

	const _onAddOpasity = () => {
		setOpasity(!opasity);
	};

	return (
		<tr css={{ ...styles.container, ...employeeLongCardOpasity }}>

			<td css={styles.people}>

				<EmployeeInfo 
					name={employee.firstName}
					lastName={employee.lastName} />
				<FlagIcon code='RU' size={32} />
			</td>

			<td css={styles.verticalBar}></td>
			<td css={styles.money}>

				<BodyText style={styles.moneyText}>
					$
					{employee.monthlyCommission}
				</BodyText> 
			</td>

			<td css={styles.verticalBar}></td>
			<td css={styles.moneyTime}>

				<BodyText style={styles.moneyText}>
					$
					{employee.annualFixedSalary}
					<BodyText>
						{' / year'}
					</BodyText>
				</BodyText> 
			</td>

			<td css={styles.verticalBar}></td>
			<td css={styles.money}>

				<BodyText style={styles.moneyText}>
					$
					{employee.additionalMonthlyOverhead}
				</BodyText> 
			</td>

			<td css={styles.verticalBar}></td>
			<td css={styles.moneyTax}>
				
				<BodyText style={styles.name}>
					13%
				</BodyText>
			</td>

			<td css={styles.verticalBar}></td>
			<td css={styles.data}>

				<BodyText>
					{employeedFrom}
				</BodyText>
			</td>
			
			<td css={styles.verticalBar}></td>
			<td css={styles.swither}>
				
				{(considerInModel) && ( 
					<>
						<BodyText style={styles.switcherText}>
							Consider in the model
						</BodyText>

						<Switcher onChange={_onAddOpasity} />
					</>
				)}
			</td>
			
			<td css={styles.buttonWrapper}>
				
				<SecondaryButton
					size={12}
					iconName='ic_edit'
					onPress={onEdit}
					style={styles.buttonInfo}
					color='#3969FF'
				>
					Edit info
				</SecondaryButton>
				
				<ButtonWithIcon
					size={21}
					onPress={() => onDelete(employee.id)}
					iconName='ic_trash'
					color='#F96C6D' />
			</td>
		</tr>
	);
};

