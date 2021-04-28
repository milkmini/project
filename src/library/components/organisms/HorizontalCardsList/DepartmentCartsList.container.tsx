import React from 'react';

//effector
import { useStore } from 'effector-react';

//graphql
import { useDeleteDepartmentMutation, useGetDepartmentsQuery } from 'generated/graphql';

//components
import { DepartmentCreateForm, DepartmentEditForm } from 'library/components/@Forms';
import { HorizontalCardsList } from './HorizontalCardsList.component';
import { LoaderOverlay } from 'library/components/molucules';

//models
import { $session } from 'library/models/session';
import { 
	updateDepartmentEdit,
	updateDepartmentId,
	$departmentEdit,
	$departmentId,
} from 'library/models/department';

//types
import { CSSObject } from '@emotion/css';

type DepartmentCartsListContainerProps = {
	style?: CSSObject | CSSObject[];
};

//-------------------------------
// DepartmentCartsListContainer
//-------------------------------
export const DepartmentCartsListContainer: React.FC<DepartmentCartsListContainerProps> = ({
	style,
}) => {
	//state
	const [departmentCreateOpen, setDepartmentCreateOpen] = React.useState(false);
	const [departmentEditOpen, setDepartmentEditOpen] = React.useState(false);
	const [loading, setLoading] = React.useState(false);

	//models
	const deparmentId = useStore($departmentId).departmentId;
	const departmentEdit = useStore($departmentEdit);
	const currentCompany = useStore($session);
	
	//data
	const { data: departmentsData, loading: departmentsLoading, refetch: refetchDepartments } = useGetDepartmentsQuery({
		variables: {
			companyId: currentCompany?.currentCompany?.id || '',
		},
	});
	
	//graphql
	const [deleteDepartment] = useDeleteDepartmentMutation();

	//callbacks
	const _onOpen = React.useCallback((id: string) => {
		updateDepartmentId({
			departmentId: id,
		});
	}, []);

	const _onEdit = React.useCallback((id: string, title: string) => {
		updateDepartmentEdit({
			id: id,
			name: title,
		});
		setDepartmentEditOpen(true);
	}, []);

	const _onDeleteDepartment = React.useCallback(async (data) => {
		try{
			setLoading(true);
			const result = await deleteDepartment({
				variables: {
					departmentId: data,
				},
			});
			
			if (result.data?.deleteDepartment) {
				await (refetchDepartments().then(() => {
					setLoading(false);
				}));
			}
		}
		catch (err) {

		}
	}, [deleteDepartment, refetchDepartments]);

	//render
	React.useEffect(() => {
		if (window.location.search) {
			if (departmentEdit.id !== '' || departmentEdit.name !== '') 
				setDepartmentEditOpen(true);
				
			updateDepartmentId({
				departmentId: window.location.search.slice(15),
			});
		}
	}, [departmentEdit.id, departmentEdit.name]);

	if (departmentsLoading)
		return <LoaderOverlay page={true} />;

	if (!departmentsData?.company?.departments) {
		return (
			<span>
				Departments loading error
			</span>
		);
	}
	
	const departments = departmentsData?.company?.departments.map((item) => {
		return {
			id: item.id,
			name: item.name,
			description: 'Department description',
		};
	});
	
	if (!deparmentId) {
		if (!window.location.search) {
			if (departments.length > 0) {
				updateDepartmentId({
					departmentId: departments[0].id,
				});
			}
		}
	}

	let initialSlide = 0;
	departments.map((item, index) => {
		if (item.id === deparmentId)
			return initialSlide = index;
	});

	return (
		<>
			<HorizontalCardsList
				onSelect={() => setDepartmentCreateOpen(true)}
				onDelete={_onDeleteDepartment}
				onEdit={_onEdit}
				onOpen={_onOpen}
				initialSlide={initialSlide}
				items={departments}
				department={true}
				loading={loading}
				createItemText='Create department'
				style={style} />

			<DepartmentCreateForm
				onClose={() => setDepartmentCreateOpen(false)} 
				refetchDepartments={refetchDepartments}
				setLoading={setLoading}
				isOpenCreate={departmentCreateOpen} /> 

			<DepartmentEditForm
				onClose={() => setDepartmentEditOpen(false)} 
				refetchDepartments={refetchDepartments}
				setLoading={setLoading}
				isOpenEdit={departmentEditOpen} />
		</>
	);
};
