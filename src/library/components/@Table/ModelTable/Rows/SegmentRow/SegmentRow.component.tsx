import React from 'react';

//components
import { SupportRow } from '../SupportRow';

//styles
import { styles } from './SegmentRow.styles';

//---------------------------
// SegmentRow
//--------------------------
export const SegmentRow: React.FC<{
	row: any;
}> = ({
	row,
}) => {
	//renders
	let style = {};

	if (row.depth === 2) 
		style = styles.rows;

	else if(row.depth === 1) 
		style = styles.SubRows; 
			
	else 
		style = styles.HeadRows;

	return(
		<SupportRow 
			row={row} 
			style={style} /> 
	);
};
