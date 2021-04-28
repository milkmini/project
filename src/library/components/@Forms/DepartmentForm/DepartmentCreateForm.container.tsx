import React from 'react';

//effector
import { useStore } from 'effector-react';

//graphql
import { useCreateDepartmentMutation } from 'generated/graphql';

//components
import { DepartmentForm } from './DepartmentForm.component';

//models
import { updateDepartmentId } from 'library/models/department';
import { $session } from 'library/models/session';

//types
import { DepartmentFormData } from './DepartmentForm.interface';

type DepartmentCreateFormContainerProps = {
	setLoading: (value: boolean) => void;
	refetchDepartments: any;
	onClose: () => void;
	isOpenCreate: boolean;
};

//-------------------------------
// DepartmentCreateFormContainer
//-------------------------------
export const DepartmentCreateFormContainer: React.FC<DepartmentCreateFormContainerProps> = ({
	refetchDepartments,
	setLoading,
	onClose,
	isOpenCreate,
}) => {
	//data
	const currentCompany = useStore($session);

	//graphql
	const [createDepartment] = useCreateDepartmentMutation();

	//callbacks
	const _onCreateDepartment = React.useCallback(async (data: DepartmentFormData) => {
		try{
			setLoading(true);
			const result = await createDepartment({
				variables: {
					departament: {
						name: data.departmentName,
					},
					companyID: currentCompany.currentCompany?.id || '',
				},
			});
				
			if (result.data?.createDepartment) {
				await (refetchDepartments().then(() => {
					setLoading(false);
					updateDepartmentId({
						departmentId: result.data?.createDepartment.id || '',
					});
				}));
			}
		}
		catch (err) {
	
		}
	}, [createDepartment, currentCompany.currentCompany?.id, refetchDepartments, setLoading]); 
	
	return (
		<>
			<DepartmentForm 
				title='Create Department'
				isOpen={isOpenCreate}
				onClose={onClose}
				onSubmit={_onCreateDepartment} />
		</>
	);
};
