import React from 'react';

//components
import { DepartmentCartsList } from 'library/components/organisms/HorizontalCardsList';
import { EmployeeList, RoleList } from 'library/components/organisms';

//types
type TeamsTemplateProps = {
	deparmentId: string;
};

//-----------------------------
// TeamsTemplate
//-----------------------------
export const TeamsTemplate: React.FC<TeamsTemplateProps> = ({
	deparmentId,
}) => {
	return (
		<>
			<DepartmentCartsList style={{ margin: '174px 0 0 0' }} />

			{(deparmentId) && (
				<>
					<EmployeeList
						departmentId={deparmentId} />
				
					<RoleList
						departmentId={deparmentId} />
				</>
			)}
		</>
	);
};
