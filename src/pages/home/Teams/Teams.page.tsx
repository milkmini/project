import React from 'react';

//effector
import { useStore } from 'effector-react';

//template
import { TeamsTemplate } from './Teams.template';

//modules
import { Scrollbar } from 'library/modules';

//models
import { $departmentId } from 'library/models/department';

//types
type TeamsPageProps = {

};

//-----------------------------
// TeamsPage
//-----------------------------
export const TeamsPage: React.FC<TeamsPageProps> = () => {
	//models
	const deparmentId = useStore($departmentId).departmentId;
		
	return (
		<Scrollbar
			trackStyleY={{
				height: 'calc(100% - 290px)',
				background: 'none',
				top: 285,
			}}
		>
			<TeamsTemplate 
				deparmentId={deparmentId} />
		</Scrollbar>
	);
};
