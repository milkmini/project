import React from 'react';

//effector
import { useStore } from 'effector-react';

//graphql
import { useCreateEmployeeMutation } from 'generated/graphql';

//components
import { EmployeeForm } from './EmployeeForm.component';

//models
import { $departmentId } from 'library/models/department';

//types
import { EmployeeFormData } from './EmployeeInfoForm.interface';

type EmployeeCreateFormContainerProps = {
	setLoading: (value: boolean) => void;
	refetchEmployees: any
	onClose: () => void;
	isOpenCreate: boolean;
};

//-------------------------------
// EmployeeCreateFormContainer
//-------------------------------
export const EmployeeCreateFormContainer: React.FC<EmployeeCreateFormContainerProps> = ({
	refetchEmployees,
	setLoading,
	onClose,
	isOpenCreate,
}) => {
	//data
	const departmentId = useStore($departmentId);

	//graphql
	const [createEmployee] = useCreateEmployeeMutation();

	//callbacks
	const _onCreateEmployee = React.useCallback(async (data: EmployeeFormData) => {
		try{
			setLoading(true);
			const result = await createEmployee({
				variables: {
					departmentId: departmentId.departmentId,
					firstName: data.firstName,
					lastName: data.lastName,
					jobDescription: data.jobDescription,
					roleDescription: data.roleDescription,
					annualFixedSalary: data.annualFixedSalary,
					monthlyCommission: data.monthlyCommission,
					additionalMonthlyOverhead: data.additionalMonthlyOverhead,
				},
			});

			if (result.data?.createEmployee) {
				await (refetchEmployees().then(() => {
					setLoading(false);
				}));
			}
		}
		catch (err) {
	
		}
	}, [createEmployee, departmentId.departmentId, refetchEmployees, setLoading]); 
	
	return (
		<>
			<EmployeeForm 
				isOpen={isOpenCreate}
				onClose={onClose}
				onSubmit={_onCreateEmployee} />
		</>
	);
};
