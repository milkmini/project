import React from 'react';

//storybook
import { Story, Meta } from '@storybook/react';

import {
	RoleList,
	RoleListProps,
} from './RoleList.component';

export default {
	title: 'Organisms/RoleList',
	component: RoleList,
} as Meta;

//deps
import { commerce, name, random } from 'faker';

//types
// type Employee = EmployeeListProps['employee'][number];

//mocks
// const getNewEmployee = (): Employee => ({
// 	id: random.uuid(),
// 	name: commerce.employee(),
// 	employees: [{
// 		name: name.firstName(),
// 		jobTitle: name.jobDescriptor(),
// 		sallary: parseInt(commerce.price()),
// 	}],
// 	keyMetric: 'ACV: 5000',
// });

const Template: Story<RoleListProps> = (args) => {
	// const [Employee, serEmployee] = React.useState([getNewEmployee()]);
	// const _onAdd = () => serDepartments([...employee, getNewEmployee()]);

	return (
		<RoleList
			{...args}
			// employee={employee}
			// onCreateEmployee={_onAdd}
		>
		</RoleList>
	);
};

export const Default = Template.bind({});
Default.args = {
	
};
