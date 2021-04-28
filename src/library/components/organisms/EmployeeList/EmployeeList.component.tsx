import React from 'react';

//components
import { MainButton } from 'library/components/@Buttons';
import { EmployeeLongCard } from 'library/components/@Cards';
import { BodyText, HeadlineText } from 'library/components/atoms';
import { AddItem, LoaderOverlay } from 'library/components/molucules';

//styles
import { styles } from './EmployeeList.styles';

//types
export type EmployeeListProps = {
	onSelect: () => void;
	onEditEmployee: (employee: object) => void;
	onDeleteEmployee: (id: string) => void;
	loading?: boolean;
	employees: (React.ComponentProps<typeof EmployeeLongCard>['employee'] & {id: string})[]
}

//-----------------------------------------
// EmployeeList
//-----------------------------------------
export const EmployeeList: React.FC<EmployeeListProps> = ({
	onSelect,
	onEditEmployee,
	onDeleteEmployee,
	loading,
	employees,
}) => {
	//renders
	const _renderEmployees = React.useCallback(() => {
		return employees?.map((employee) => {
			return (
				<EmployeeLongCard
					considerInModel={true}
					onDelete={onDeleteEmployee}
					onEdit={() => onEditEmployee(employee)}
					employee={employee}
					employeedFrom='06.2020'
					key={employee.id} />
			);
		});
	}, [employees, onDeleteEmployee, onEditEmployee]);

	let loaderWidth = employees.length*70;
	
	return (
		<div css={styles.downContainer}>
			{(employees.length >= 1) ? (
				<>
					<HeadlineText style={styles.employeeTitle}>
						Employees
					</HeadlineText>
					
					<table css={styles.employeeWrapper}>
						{(!loading)
							? (
								<tbody>
									{_renderEmployees()}  
								</tbody>
							) : (
								<div css={{ height: loaderWidth }}>
									<LoaderOverlay />
								</div>
										
							)}
			
						<thead>
							<tr css={styles.employeeContainer}>
								<th css={styles.employeePeople}></th>
								<th css={styles.verticalBar}></th>
			
								<th css={styles.employeeBonus}>
			
									<BodyText style={styles.employeeText}>
										Bonus plan
									</BodyText> 
								</th>
								<th css={styles.verticalBar}></th>
			
								<th css={styles.employeeSalary}>
			
									<BodyText style={styles.employeeText}>
										Salary
									</BodyText> 
								</th>
								<th css={styles.verticalBar}></th>
			
								<th css={styles.employeeMoney}>
			
									<BodyText style={styles.employeeText}>
										Monthly overhead
									</BodyText> 
								</th>
								<th css={styles.verticalBar}></th>
			
								<th css={styles.employeeTax}>
			
									<BodyText style={styles.employeeText}>
										Tax rate
									</BodyText>
								</th>
								<th css={styles.verticalBar}></th>
			
								<th css={styles.employeeData}>
			
									<BodyText style={styles.employeeText}>
										Employeed from
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
						text='Add employee' />	
					
				</>
			) : (
				<>
					<HeadlineText style={styles.employeeTitle}>
						Employees
					</HeadlineText>

					<AddItem
						onPress={onSelect}
						text='You can continue to add your employees here,
										but you will always have the opportunity to come back to this in the future.'
						btnText='Add employee' />
				</>
			)}
			
		</div>
	);
};

