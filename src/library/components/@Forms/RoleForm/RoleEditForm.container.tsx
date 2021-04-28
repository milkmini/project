import React from 'react';

//effector
import { useStore } from 'effector-react';

//graphql
import { useUpdateRoleMutation } from 'generated/graphql';

//components
import { RoleForm } from './RoleForm.component';

//models
import { $roleEditId } from 'library/models/role';
import { CreateRoleFormData } from './RoleForm.interface';

//types
type RoleEditFormContainerProps = {
	setLoading: (value: boolean) => void;
	refetchRoles: any;
	onClose: () => void;
	isOpenEdit: boolean;
};

//-------------------------------
// RoleEditFormContainer
//-------------------------------
export const RoleEditFormContainer: React.FC<RoleEditFormContainerProps> = ({
	refetchRoles,
	setLoading,
	onClose,
	isOpenEdit,
}) => {
	//data
	const RoleEdit = useStore($roleEditId);

	//graphql
	const [editRole] = useUpdateRoleMutation();

	//callbacks
	const _onEditRole = React.useCallback(async (data: CreateRoleFormData) => {
		try{
			setLoading(true);
			const result = await editRole({
				variables: {
					roleId: RoleEdit.id,
					name: data.name,
					roleDescription: data.roleDescription,
					annualFixedSalary: data.annualFixedSalary,
					monthlyCommission: data.monthlyCommission,
					additionalMonthlyOverhead: data.additionalMonthlyOverhead,
				},
			});

			if (result.data?.updateRole) {
				await (refetchRoles().then(() => {
					setLoading(false);
				}));
			}
		}
		catch (err) {
	
		}
	}, [RoleEdit.id, editRole, refetchRoles, setLoading]);
	
	return (
		<>
			<RoleForm
				value={RoleEdit}
				isOpen={isOpenEdit}
				onClose={onClose}
				onSubmit={_onEditRole} />
		</>
	);
};
