import React from 'react';

//effector
import { useStore } from 'effector-react';

//graphql
import { useCreateRoleMutation } from 'generated/graphql';

//components
import { RoleForm } from './RoleForm.component';

//models
import { $departmentId } from 'library/models/department';

//types
import { CreateRoleFormData } from './RoleForm.interface';

type RoleCreateFormContainerProps = {
	setLoading: (value: boolean) => void;
	refetchRoles: any;
	onClose: () => void;
	isOpenCreate: boolean;
};

//-------------------------------
// RoleCreateFormContainer
//-------------------------------
export const RoleCreateFormContainer: React.FC<RoleCreateFormContainerProps> = ({
	refetchRoles,
	setLoading,
	onClose,
	isOpenCreate,
}) => {
	//data
	const departmentId = useStore($departmentId);

	//graphql
	const [createRole] = useCreateRoleMutation();

	//callbacks
	const _onCreateRole = React.useCallback(async (data: CreateRoleFormData) => {
		try{
			setLoading(true);
			const result = await createRole({
				variables: {
					departmentId: departmentId.departmentId,
					name: data.name,
					roleDescription: data.roleDescription,
					annualFixedSalary: data.annualFixedSalary,
					monthlyCommission: data.monthlyCommission,
					additionalMonthlyOverhead: data.additionalMonthlyOverhead,
				},
			});

			if (result.data?.createRole) {
				await (refetchRoles().then(() => {
					setLoading(false);
				}));
			}
		}
		catch (err) {
	
		}
	}, [createRole, departmentId.departmentId, refetchRoles, setLoading]); 
	
	return (
		<>
			<RoleForm 
				isOpen={isOpenCreate}
				onClose={onClose}
				onSubmit={_onCreateRole} />
		</>
	);
};
