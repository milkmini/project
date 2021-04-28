import React from 'react';

//components
import { ButtonWithIcon, MainButton } from 'library/components/@Buttons';
import { RoleLongCard } from 'library/components/@Cards';
import { BodyText, HeadlineText } from 'library/components/atoms';
import { AddItem, LoaderOverlay } from 'library/components/molucules';

//styles
import { styles } from './RoleList.styles';

//types
import { CSSObject } from '@emotion/css';

export type RoleListProps = {
	onSelect: () => void;
	onEditRole: (id: string) => void;
	onDeleteRole: (id: string) => void;
	loading?: boolean;
	style?: CSSObject | CSSObject[];
	roles: any[];
}

//-----------------------------------------
// RoleList
//-----------------------------------------
export const RoleList: React.FC<RoleListProps> = ({
	onSelect,
	onEditRole,
	onDeleteRole,
	loading,
	roles,
	style,
}) => {
	//renders
	const _renderRoles = React.useCallback(() => {
		return roles.map((item) => {
			return (
				<RoleLongCard
					onDelete={onDeleteRole}
					onEdit={() => onEditRole(item)}
					roleInfo={ item }
					key={item.id} />
			);
		});
	}, [roles, onDeleteRole, onEditRole]);

	let loaderWidth = roles.length*70;
	
	return (
		<div css={styles.downContainer}>
			{(roles.length >= 1) ? (
				<>
					<div css={styles.employeeTitle}>
						<HeadlineText >
							Headcounts
						</HeadlineText>

						<ButtonWithIcon
							size={17}
							style={styles.roleInfoButton}
							iconName='ic_info'
							color='#3969FF' />
					</div>
							
					<table css={styles.employeeWrapper}>
						{(!loading)
							? (
								<tbody>
									{_renderRoles()}
								</tbody>

							) : (
								<div css={{ height: loaderWidth }}>
									<LoaderOverlay />
								</div>
							)}
					
						<thead >
							<tr css={styles.employeeContainer}>

								<th css={styles.rolePeople}></th>
								<th css={styles.verticalBar}></th>

								<th css={styles.roleSalary}>

									<BodyText style={styles.employeeText}>
										Salary
									</BodyText> 
								</th>
								<th css={styles.verticalBar}></th>

								<th css={styles.roleBonus}>

									<BodyText style={styles.employeeText}>
										Bonus plan
									</BodyText> 
								</th>
								<th css={styles.verticalBar}></th>
								<th css={styles.employeeAny}></th>
							</tr>
						</thead>
					</table>

					<MainButton 
						disabled={loading}
						width={238}
						onPress={onSelect}
						style={styles.buttonAdd} 
						text='Add role' />
					
				</>
			) : (
				<>				
					<div css={styles.employeeTitle}>
						<HeadlineText >
							Headcounts
						</HeadlineText>

						<ButtonWithIcon
							size={17}
							style={styles.roleInfoButton}
							iconName='ic_info'
							color='#3969FF' />
					</div>
					
					<AddItem 
						onPress={onSelect}
						text='You can continue to add your employees here,
						but you will always have the opportunity to come back to this in the future.'
						btnText='Add role' />
				</>
			)}
		</div>
	);
};
