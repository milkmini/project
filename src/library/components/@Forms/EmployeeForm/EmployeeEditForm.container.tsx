import React from 'react';

//effector
import { useStore } from 'effector-react';

//graphql
import { useUpdateEmployeeMutation } from 'generated/graphql';

//components
import { EmployeeForm } from './EmployeeForm.component';

//models
import { $employeeEdit } from 'library/models/employee';
import { EmployeeFormData } from './EmployeeInfoForm.interface';

//types
type EmployeeEditFormContainerProps = {
	setLoading: (value: boolean) => void;
	refetchEmployees: any
	onClose: () => void;
	isOpenEdit: boolean;
};

//-------------------------------
// EmployeeEditFormContainer
//-------------------------------
export const EmployeeEditFormContainer: React.FC<EmployeeEditFormContainerProps> = ({
	refetchEmployees,
	setLoading,
	onClose,
	isOpenEdit,
}) => {
	//data
	const EmployeeEdit = useStore($employeeEdit);

	//graphql
	const [editEmployee] = useUpdateEmployeeMutation();

	//callbacks
	const _onEditEmployee = React.useCallback(async (data: EmployeeFormData) => {
		try{
			setLoading(true);
			const result = await editEmployee({
				variables: {
					employeeId: EmployeeEdit.id,
					firstName: data.firstName,
					lastName: data.lastName,
					jobDescription: data.jobDescription,
					roleDescription: data.roleDescription,
					annualFixedSalary: data.annualFixedSalary,
					monthlyCommission: data.monthlyCommission,
					additionalMonthlyOverhead: data.additionalMonthlyOverhead,
				},
			});

			if (result.data?.updateEmployee) {
				await (refetchEmployees().then(() => {
					setLoading(false);
				}));
			}
		}
		catch (err) {
	
		}
	}, [EmployeeEdit.id, editEmployee, refetchEmployees, setLoading]);
	
	return (
		<>
			<EmployeeForm
				value={EmployeeEdit}
				isOpen={isOpenEdit}
				onClose={onClose}
				onSubmit={_onEditEmployee} />
		</>
	);
};
