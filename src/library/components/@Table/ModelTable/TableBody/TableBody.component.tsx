import React from 'react';

//components
import { SegmentRow, TeamRow, СommonRow } from '../Rows';

//types
type TableBodyProps = {
	prepareRow: (row: any) => void;
	model: any;
};
//---------------------------
// TableBody
//--------------------------
export const TableBody: React.FC<TableBodyProps> = ({
	prepareRow,
	model,
}) => {
	//renders
	const _rendersRows = React.useCallback(() => {
		return model.map((row: any) => {
			prepareRow(row);
			if(row.original.segment) {
				return(
					<SegmentRow 
						row={row}
						key={row.original.id} />
				);
			}
			else if(row.original.team) {
				return(
					<TeamRow 
						row={row}
						key={row.original.id} />
				);
			}
			else {
				return(
					<СommonRow 
						row={row}
						key={row.original.id} />
				);
			}
		});
	}, [model, prepareRow]);
	
	return _rendersRows();
};
