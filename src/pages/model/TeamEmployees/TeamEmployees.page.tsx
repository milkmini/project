import React from 'react';

//effector
import { useStore } from 'effector-react';

//templates
import { TeamEmployeesTemplate } from './TeamEmployees.template';

//modules
import { Scrollbar } from 'library/modules';

//models
import { $departmentId } from 'library/models/department';

//hooks
import { useScrollAnimation } from 'library/hooks/useScrollAnimation';

//types
type TeamEmployeesPageProps = {
};

//-----------------------------
// TeamEmployeesPage
//-----------------------------
export const TeamEmployeesPage: React.FC<TeamEmployeesPageProps> = () => {
	//models
	const deparmentId = useStore($departmentId).departmentId;

	//animations
	const { isOpen } = useScrollAnimation({ hideOnDesktop: true });

	return (
		<Scrollbar
			trackStyleY={{ 
				height: 'calc(100% - 180px)', 
				top: 175,
				background: 'none',
			}}
			scrollX={false}
		>
			<TeamEmployeesTemplate isOpen={isOpen} deparmentId={deparmentId} />
		</Scrollbar>
	);
};
