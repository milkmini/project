import React from 'react';

//graphql
import { useDeleteRoleMutation, useGetRolesQuery } from 'generated/graphql';

//components
import { RoleCreateForm, RoleEditForm } from 'library/components/@Forms';
import { RoleList } from './RoleList.component';

//modules
import { LoaderOverlay } from 'library/components/molucules';

//models
import { resetRole, updateRoleEdit } from 'library/models/role';

//types
type RoleListContainerProps = {
	departmentId: string;
};

//-------------------------------
// RoleListContainer
//-------------------------------
export const RoleListContainer: React.FC<RoleListContainerProps> = ({
	departmentId,
}) => {
	//state
	const [roleCreateOpen, setRoleCreateOpen] = React.useState(false);
	const [roleEditOpen, setRoleEditOpen] = React.useState(false);
	const [loading, setLoading] = React.useState(false);

	//data
	const { data: roleData, loading: roleLoading, refetch: refetchRoles } = useGetRolesQuery({
		variables: {
			departmentId,
		},
	});

	//graphql
	const [deleteRole] = useDeleteRoleMutation();

	//callbacks
	const _onDeleteRole = React.useCallback(async (data: string) => {
		try{
			setLoading(true);
			const result = await deleteRole({
				variables: {
					roleId: data,
				},
			});

			if (result.data?.deleteRole) {
				await (refetchRoles().then(() => {
					setLoading(false);
				}));
			}
		}
		catch (err) {

		}
	}, [deleteRole, refetchRoles]);

	const _onEditRole = React.useCallback((data) => {
		updateRoleEdit({
			id: data.id,
			name: data.name,
			roleDescription: data.roleDescription,
			annualFixedSalary: '$' + data.annualFixedSalary,
			monthlyCommission: '$' + data.monthlyCommission,
			additionalMonthlyOverhead: '$' + data.additionalMonthlyOverhead,
		});
		setRoleEditOpen(true);
	}, []);

	const _onCloseEditRole = React.useCallback(() => {
		resetRole();
		setRoleEditOpen(false);
	}, []);

	if (roleLoading) {
		return (
			<div css={{ height: 350 }}>
				<LoaderOverlay />
			</div>
		);
	};

	if (!roleData?.department?.roles) {
		return (
			<span>
				Roles loading error
			</span>
		);
	}

	const roles = roleData.department.roles.map((role) => {
		return {
			id: role.id,
			name: role.name,
			counts: role.counts,
			annualFixedSalary: role.annualFixedSalary,
			monthlyCommission: role.monthlyCommission,
			additionalMonthlyOverhead: role.additionalMonthlyOverhead,
		};
	});
	
	return (
		<>
			<RoleList
				loading={loading}
				onSelect={() => setRoleCreateOpen(true)}
				onEditRole={_onEditRole}
				onDeleteRole={_onDeleteRole}
				roles={roles} />

			<RoleCreateForm
				setLoading={setLoading}
				refetchRoles={refetchRoles}
				isOpenCreate={roleCreateOpen}
				onClose={() => setRoleCreateOpen(false)} />	
				
			<RoleEditForm 
				setLoading={setLoading}
				refetchRoles={refetchRoles}
				isOpenEdit={roleEditOpen}
				onClose={_onCloseEditRole} />	
		</>
	);
};
