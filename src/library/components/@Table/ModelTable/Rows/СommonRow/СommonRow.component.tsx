import React from 'react';

//components
import { SupportRow } from '../SupportRow';

//styles
import { styles } from './СommonRow.styles';

//---------------------------
// СommonRow
//--------------------------
export const СommonRow: React.FC<{
	row: any;
}> = ({
	row,
}) => {
	return (
		<SupportRow 
			key={row.original.id}
			row={row} 
			style={styles.row} /> 
	);
};
