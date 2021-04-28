import React from 'react';

//components
import { DepartmentCartsList } from 'library/components/organisms/HorizontalCardsList';
import { EmployeeList, RoleList } from 'library/components/organisms';

//styles
import { styles } from './TeamEmployees.styles';

//types
type TeamEmployeesTemplateProps = {
	deparmentId: string;
	isOpen: boolean;
};

//----------------------------
// TeamEmployeesTemplate
//----------------------------
export const TeamEmployeesTemplate: React.FC<TeamEmployeesTemplateProps> = React.memo(({
	deparmentId,
	isOpen,
}) => {
	//renders
	const departmentVisible = (isOpen) ? styles.onVisible :styles.offVisible; 

	return (
		<>
			<DepartmentCartsList
				style={[styles.deparment,
					departmentVisible,
				]} />
			
			{(deparmentId) && (
				<div css={styles.teamContainer}>
					<EmployeeList
						departmentId={deparmentId} />

					<RoleList
						departmentId={deparmentId} />
				</div>
			)}

		</>
	);
});
