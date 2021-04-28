import React from 'react';

//offer deps
import { motion } from 'framer-motion';

//components
import { PercentInput } from 'library/components/@Forms';

//styles
import { styles } from './PercentCell.styles';

//---------------------------
// PercentCell
//--------------------------
export const PercentCell: React.FC<{
	cell: any;
	editable: boolean
}> = ({
	cell,
	editable,
}) => {
	//renders
	const _renderCell = React.useCallback(() => {
		if (editable) {
			return (
				<motion.td
					{...cell.getCellProps()}
					layout
					initial={{ opacity: 0 }}
					animate={{ opacity: 1, transition: { duration: 0.5 } }}
					exit={{ opacity: 0, transition: { duration: 0.5 } }}
					css={styles.editableCell}
				>
					{(cell.column.id === 'header' || cell.column.id === 'expander') ? (
						cell.render('Cell')
					) : (
						<PercentInput.Field
							value={cell.value}
							type='digits'
							format='percents'
							name='persent'
							label=''
							styleInput={styles.input}
							style={styles.containerInput} />
					)}
				</motion.td>
			);
		}
		else {
			return (
				<motion.td
					{...cell.getCellProps()}
					layout
					initial={{ opacity: 0 }}
					animate={{ opacity: 1, transition: { duration: 0.5 } }}
					exit={{ opacity: 0, transition: { duration: 0.5 } }}
					css={styles.cell}
				>
					{cell.render('Cell')}
				</motion.td>
			);
		}
	}, [cell, editable]);

	return _renderCell();
};
