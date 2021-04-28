import React from 'react';

//graphql
import { useGetEmployeesQuery, useDeleteEmployeeMutation } from 'generated/graphql';

//components
import { EmployeeCreateForm, EmployeeEditForm } from 'library/components/@Forms';
import { EmployeeList } from './EmployeeList.component';

//modules
import { LoaderOverlay } from 'library/components/molucules';

//models
import { resetEmployee, updateEmployeeEdit } from 'library/models/employee';

//types
type EmployeeListContainerProps = {
	departmentId: string;
};

//-------------------------------
// EmployeeListContainer
//-------------------------------
export const EmployeeListContainer: React.FC<EmployeeListContainerProps> = ({
	departmentId,
}) => {
	//state
	const [employeeCreateOpen, setEmployeeCreateOpen] = React.useState(false);
	const [employeeEditOpen, setEmployeeEditOpen] = React.useState(false);
	const [loading, setLoading] = React.useState(false);

	//data
	const { data: employeesData, loading: employeesLoading, refetch: refetchEmployees } = useGetEmployeesQuery({
		variables: {
			departmentId,
		},
	});

	//graphql
	const [deleteEmployee] = useDeleteEmployeeMutation();

	//callbacks
	const _onDeleteEmployee = React.useCallback(async (data: string) => {
		try{
			setLoading(true);
			const result = await deleteEmployee({
				variables: {
					employeeId: data,
				},
			});

			if (result.data?.deleteEmployee) {
				await (refetchEmployees().then(() => {
					setLoading(false);
				}));
			}
		}
		catch (err) {

		}
	}, [deleteEmployee, refetchEmployees]);

	const _onEditEmployee = React.useCallback((data) => {
		updateEmployeeEdit({
			id: data.id,
			firstName: data.firstName,
			lastName: data.lastName,
			jobDescription: data.jobDescription,
			roleDescription: data.roleDescription,
			annualFixedSalary: '$' + data.annualFixedSalary,
			monthlyCommission: '$' + data.monthlyCommission,
			additionalMonthlyOverhead: '$' + data.additionalMonthlyOverhead,
		});
		setEmployeeEditOpen(true);
	}, []);

	const _onCloseEditEmployee = React.useCallback(() => {
		resetEmployee();
		setEmployeeEditOpen(false);
	}, []);

	if (employeesLoading) {
		return (
			<div css={{ height: 350 }}>
				<LoaderOverlay />
			</div>
		);
	}

	if (!employeesData?.department?.employees) {
		return (
			<span>
				Employees loading error
			</span>
		);
	}

	const employees = employeesData.department.employees.map((employee) => {
		return {
			id: employee.id,
			firstName: employee.firstName,
			lastName: employee.lastName,
			annualFixedSalary: employee.annualFixedSalary,
			monthlyCommission: employee.monthlyCommission,
			additionalMonthlyOverhead: employee.additionalMonthlyOverhead,
		};
	});
	
	return (
		<>
			<EmployeeList
				loading={loading}
				onSelect={() => setEmployeeCreateOpen(true)}
				onEditEmployee={_onEditEmployee}
				onDeleteEmployee={_onDeleteEmployee}
				employees={employees} />
		
			<EmployeeCreateForm 
				setLoading={setLoading}
				refetchEmployees={refetchEmployees}
				isOpenCreate={employeeCreateOpen}
				onClose={() => setEmployeeCreateOpen(false)} />

			<EmployeeEditForm 
				setLoading={setLoading}
				refetchEmployees={refetchEmployees}
				isOpenEdit={employeeEditOpen}
				onClose={_onCloseEditEmployee} />
		</>
	);
};
