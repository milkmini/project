import React from 'react';

//effector
import { useStore } from 'effector-react';

//graphql
import { useUpdateDepartmentMutation } from 'generated/graphql';

//components
import { DepartmentForm } from './DepartmentForm.component';

//models
import { $departmentEdit, updateDepartmentEdit } from 'library/models/department';

//types
import { DepartmentFormData } from './DepartmentForm.interface';

type DepartmentEditFormContainerProps = {
	setLoading: (value: boolean) => void;
	refetchDepartments: any;
	onClose: () => void;
	isOpenEdit: boolean;
};

//-------------------------------
// DepartmentEditFormContainer
//-------------------------------
export const DepartmentEditFormContainer: React.FC<DepartmentEditFormContainerProps> = ({
	refetchDepartments,
	setLoading,
	onClose,
	isOpenEdit,
}) => {
	//data
	const DepartmentEdit = useStore($departmentEdit);

	//graphql
	const [editDepartment] = useUpdateDepartmentMutation();

	//callbacks
	const _onEditDepartment = React.useCallback(async (data: DepartmentFormData) => {
		try{
			setLoading(true);
			const result = await editDepartment({
				variables: {
					departmentId: DepartmentEdit.id,
					name: data.departmentName,
				},
			});
				
			if (result.data?.updateDepartment) {
				await (refetchDepartments().then(() => {
					updateDepartmentEdit({
						id: '',
						name: '',
					});
					setLoading(false);
				}));
			}
		}
		catch (err) {
	
		}
	}, [DepartmentEdit.id, editDepartment, refetchDepartments, setLoading]);
	return (
		<>
			<DepartmentForm
				title='Edit department'
				value={DepartmentEdit}
				isOpen={isOpenEdit}
				onClose={onClose}
				onSubmit={_onEditDepartment} />
		</>
	);
};
