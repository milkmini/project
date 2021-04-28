import React from 'react';

//components
import { SupportRow } from '../SupportRow';

//styles
import { styles } from './TeamRow.styles';

//---------------------------
// TeamRow
//--------------------------
export const TeamRow: React.FC<{
	row: any;
}> = ({
	row,
}) => {
	//renders
	let style = {};

	if (row.depth === 3) 
		style = styles.rows;

	else if (row.depth === 2) 
		style = styles.subSubRows; 
			
	else if (row.depth === 1)
		style = styles.subRows;
			
	else
		style = styles.headRows;

	return (
		<SupportRow 
			key={row.original.id}
			row={row} 
			style={style} /> 
	);
};
