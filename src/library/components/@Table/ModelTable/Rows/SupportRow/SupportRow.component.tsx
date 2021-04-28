import React from 'react';

//offer deps
import { motion } from 'framer-motion';

//components
import { AmountCell, NumberCell, PercentCell } from '../../Cells';

//types
import { CSSObject } from '@emotion/css';

//---------------------------
// SupportRow
//--------------------------
export const SupportRow: React.FC<{
	row: any;
	style: CSSObject | CSSObject[];
}> = ({
	row,
	style,
}) => {
	//renders
	const _renderCells = React.useCallback(() => {
		let editable = false;

		if(row.original.editable) 
			editable=true;

		if (row.original.amount) {
			return row.cells.map((cell: any) => {
				return (
					<AmountCell
						editable={editable}
						cell={cell}
						key={cell.value} />
				);
			});
		}
		else if(row.original.percent) {
			return row.cells.map((cell: any) => {
				return (
					<PercentCell
						editable={editable}
						cell={cell}
						key={cell.value} />
				);
			});
		}
		else {
			return row.cells.map((cell: any) => {
				return (
					<NumberCell
						editable={editable}
						cell={cell}
						key={cell.value} />
				);
			});
		}
	}, [row.cells, row.original.amount, row.original.editable, row.original.percent]);

	return (
		<motion.tr
			{...row.getRowProps()}
			layout
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { duration: 0.5 } }}
			exit={{ opacity: 0, transition: { duration: 0.5 } }}
			css={style}
		>
			{_renderCells()}
		</motion.tr>
	);
};
