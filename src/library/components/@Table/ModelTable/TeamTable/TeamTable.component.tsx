/* eslint-disable @typescript-eslint/no-redeclare */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/jsx-key */
import React from 'react';

//offer deps
import { useTable, useExpanded } from 'react-table';
import { motion } from 'framer-motion';

//react-router
import { useHistory } from 'react-router-dom';

//models
import { updateDepartmentEdit } from 'library/models/department';

//components
import { ButtonWithIcon } from 'library/components/@Buttons';

//styles
import { styles } from './TeamTable.styles';

//---------------------------
// TeamTable
//--------------------------
export const TeamTable: React.FC<{
	model?: any
}> = ({
	model,
}) => {
	//history
	const history = useHistory();

	//callbacks
	const _onEditTeam = React.useCallback((original) => {
		updateDepartmentEdit({
			id: original.id,
			name: original.header,
		});
		history.push(`/model/teamEmployees?department_id=${original.id}`);
	}, [history]);

	//data
	const columns = React.useMemo(
		() => [
			{
				Header: 'Team',
				accessor: 'header',
			},
			{
				id: 'expander',
				// @ts-ignore
				Cell: ({ row }) =>
					row.canExpand ? (
						<span css={styles.headerSpan} key={row.id+Math.random()}>
							{(row.depth === 1) && (
								<ButtonWithIcon 
									onPress={() => _onEditTeam(row.original)}
									size={11}
									type='small'
									color='#3969FF'
									iconName='ic_edit' />
							)}

							{row.isExpanded ? (
								<>
									<ButtonWithIcon
										size={11}
										onPress={row.getToggleRowExpandedProps().onClick}
										type='small'
										iconName='ic_dropdown_closed'
										color='#3969FF' />
								</>
							) : (
								<ButtonWithIcon
									size={11}
									onPress={row.getToggleRowExpandedProps().onClick}
									type='small'
									iconName='ic_dropdown_opened'
									color='#3969FF' />
							)}
						</span>
					) : null,
			},
			{
				Header: '$1',
				accessor: 'firstName',
			},
			{
				Header: '$1.000.000',
				accessor: 'lastName',
			},
			{
				Header: '$1.000.000',
				accessor: 'age',
			},
			{
				Header: '$1.000.000',
				accessor: 'visits',
			},
			{
				Header: '$1.000.000',
				accessor: 'status',
			},
			{
				Header: '$1.000.000',
				accessor: 'progress',
			},
		],
		[_onEditTeam],
	  );

	  const data = React.useMemo(
		() => [
			{	
				header: 'Team',
				firstName: '$1.000.000',
				lastName: '$1.000.000',
				age: '$1.000.000',
				color: 'purple',
				id: 'd3fcadb4-455e-4962-b734-e1a20ae5f5b3',
				subRows: [{
					header: 'Department 1.1',
					firstName: '$1.000.000',
					lastName: '$1.000.000',
					age: '$1.000.000',
					id: 'd3fcadb4-455e-4962-b73123123f5b3',
					subRows: [{
						header: 'SMB1.2',
						firstName: '$1.000.000',
						lastName: '$1.000.000',
						age: '$1.000.000',
						id: 'd3fcadb4-455e-4962-b71231231235b3',
						subRows: [{
							header: 'SMB1.3',
							firstName: '$1.000.000',
							lastName: '$1.000.000',
							age: '$1.000.000',
							id: 'd3fca123123124356b734-e1a20ae5f5b3',
						},
						{
							header: 'SMB1.3',
							firstName: '$1.000.000',
							lastName: '$1.000.000',
							age: '$1.000.000',
							id: 'd3fcadb4-dfbvdr6gbftae5f5b3',
						}, {
							header: 'SMB1.3',
							firstName: '$1.000.000',
							lastName: '$1.000.000',
							age: '$1.000.000',
							id: 'd3fcadb4-45dfhbftyd-e1a20ae5f5b3',
						},
						{
							header: 'SMB1.3',
							firstName: '$1.000.000',
							lastName: '$1.000.000',
							age: '$1.000.000',
							id: 'd3fcadb4sdfgvsy56e1a20ae5f5b3',
						}],
					},
					{
						header: 'SMB1.2',
						firstName: '$1.000.000',
						lastName: '$1.000.000',
						age: '$1.000.000',
						id: 'd3fcadwertvewecv45f5b3',
					}],
				},
				{
					header: 'Developers 2.1',
					firstName: '$1.000.000',
					lastName: '$1.000.000',
					age: '$1.000.000',
					id: 'd3fcadb4wx5xcgtv-e1a20ae5f5b3',
					subRows: [{
						header: 'SMB2.2',
						firstName: '$1.000.000',
						lastName: '$1.000.000',
						age: '$1.000.000',
						id: 'd3fcadb4-4wczfvfdvtra20ae5f5b3',
						subRows: [{
							header: 'SMB2.3',
							firstName: '$1.000.000',
							lastName: '$1.000.000',
							age: '$1.000.000',
							id: 'd3fcadzfdhgdrtfa20ae5f5b3',
						},
						{
							header: 'SMB2.3',
							firstName: '$1.000.000',
							lastName: '$1.000.000',
							age: '$1.000.000',
							id: '123adftdb4-455e-4962-b734-e1a20ae5f5b3',
						},
						{
							header: 'SMB2.3',
							firstName: '$1.000.000',
							lastName: '$1.000.000',
							age: '$1.000.000',
							id: 'fghjfyndrge-4962-b734-e1a20ae5f5b3',
						},
						{
							header: 'SMB2.3',
							firstName: '$1.000.000',
							lastName: '$1.000.000',
							age: '$1.000.000',
							id: 'crhysfdhfrsdrtcs4962-b734-e1a20ae5f5b3',
						}],
					},
					{
						header: 'SMB2.2',
						firstName: '$1.000.000',
						lastName: '$1.000.000',
						age: '$1.000.000',
						id: 'd3fcadb4xvcbujglhiomlgbvxda20ae5f5b3',
					}],
				}],
			},
	   ],
	   [],
	);

	const {
		getTableProps,
		getTableBodyProps,
	} = useTable(
		{ 	
			//@ts-ignore
			columns: columns,
			data: data, 
		},
		useExpanded,
	);

	// //renders
	// const _renderCells = React.useCallback((row) => {
	// 	return row.cells.map((cell: any) => {
	// 		if (row.edited) {
	// 			return (
	// 				<Cell
	// 					{...cell.getCellProps()}
	// 					key={row.id}
	// 					style={styles.cell}
	// 				>
	// 					{cell.render('Cell')}
	// 				</Cell>
	// 				// {(cell.column.Header === '') ? (
	// 				// 	cell.render('Cell')
	// 				// ) : (
	// 				// 	cell.render('EditableCell')
	// 				// )}
	// 			);
	// 		}
	// 		else {
	// 			return (
	// 				<Cell
	// 					{...cell.getCellProps()}
	// 					key={row.id}
	// 					style={styles.cell}
	// 				>
	// 					{cell.render('Cell')}
	// 				</Cell>
	// 			);
	// 		}
	// 	});
	// }, []);
	
	// const _rendersRows = React.useCallback(() => {
	// 	let props ={
	// 		key: '',
	// 		style: {},
	// 	};
	// 	return rows.map((row) => {
	// 		prepareRow(row);
	// 		if (row.depth === 3) {
	// 			props = {
	// 				key: row.original.id,
	// 				style: styles.row,
	// 			};
	// 		}
	// 		else if (row.depth === 2) {
	// 			props = {
	// 				key: row.original.id,
	// 				style: styles.subSubRows,
	// 			};
	// 		}
	// 		else if (row.depth === 1) {
	// 			props = {
	// 				key: row.original.id,
	// 				style: styles.subRows,
	// 			};
	// 		}
	// 		else {
	// 			props = {
	// 				key: row.original.id,
	// 				style: styles.headCell,
	// 			};
	// 		}
	// 		return (
	// 			<СommonRow
	// 				{...row.getRowProps()}
	// 				// props={props}
	// 			>
	// 				{_renderCells(row)}
	// 			</СommonRow>
	// 		);
	// 	});
	// }, [_renderCells, prepareRow, rows]);

	return (
		<motion.div >
			<motion.table {...getTableProps()} css={styles.table}>
				<motion.tbody {...getTableBodyProps()}>
					{/* {_rendersRows()} */}
				</motion.tbody>
			</motion.table>
		</motion.div>
	);
};

// const _rendersRows = React.useCallback(() => {
// 	return rows.map((row) => {
// 		prepareRow(row);
// 		if (row.depth === 3) {
// 			return (
// 				<Row
// 					{...row.getRowProps()}
// 					key={row.id+Math.random()}
// 					style={styles.row}
// 				>
// 					{_renderCells(row)}
// 				</Row>
// 			);
// 		}
// 		else if (row.depth === 2) {
// 			return (
// 				<Row
// 					{...row.getRowProps()}
// 					key={row.id+Math.random()}
// 					style={styles.subSubRows}
// 				>
// 					{_renderCells(row)}
// 				</Row>
// 			);
// 		}
// 		else if (row.depth === 1) {
// 			return (
// 				<Row
// 					{...row.getRowProps()}
// 					key={row.id+Math.random()}
// 					style={styles.subRows}
// 				>
// 					{_renderCells(row)}
// 				</Row>
// 			);
// 		}
// 		else {
// 			return (
// 				<Row
// 					{...row.getRowProps()}
// 					key={row.id+Math.random()}
// 					style={styles.headCell}
// 				>
// 					{_renderCells(row)}
// 				</Row>
// 			);
// 		}
// 	});
// }, [_renderCells, prepareRow, rows]);

// {rows.map((row, i) => {
// 	prepareRow(row);
// 	return (
// 		(row.depth === 3) ? (
// 			<motion.tr
// 				layout
// 				initial={{ opacity: 0 }}
// 				animate={{ opacity: 1, transition: { duration: 0.5 } }}
// 				exit={{ opacity: 0, transition: { duration: 0.5 } }}
// 				css={styles.row}
// 				{...row.getRowProps()}
// 				key={row.id+Math.random()}
// 			>
// 				{row.cells.map((cell) => {
// 					return (
// 						<motion.td
// 							layout
// 							initial={{ opacity: 0 }}
// 							animate={{ opacity: 1, transition: { duration: 0.5 } }}
// 							exit={{ opacity: 0, transition: { duration: 0.5 } }}
// 							{...cell.getCellProps()}
// 							css={styles.cell}
// 							key={row.id+Math.random()}
// 						>
// 							{cell.render('Cell')}
// 						</motion.td>
// 					);
// 				})}
// 			</motion.tr>
// 		) : (
// 			(row.depth === 2) ? (
// 				<motion.tr
// 					layout
// 					initial={{ opacity: 0 }}
// 					animate={{ opacity: 1, transition: { duration: 0.5 } }}
// 					exit={{ opacity: 0, transition: { duration: 0.5 } }}
// 					css={styles.subSubRows}
// 					{...row.getRowProps()}
// 					key={row.id+Math.random()}
// 				>
// 					{row.cells.map((cell) => {
// 						return (
// 							<motion.td
// 								layout
// 								initial={{ opacity: 0 }}
// 								animate={{ opacity: 1, transition: { duration: 0.5 } }}
// 								exit={{ opacity: 0, transition: { duration: 0.5 } }}
// 								{...cell.getCellProps()}
// 								css={styles.cell}
// 								key={row.id+Math.random()}
// 							>
// 								{cell.render('Cell')}
// 							</motion.td>
// 						);
// 					})}
// 				</motion.tr>
// 			) : (
// 				(row.depth === 1) ? (
// 					<motion.tr
// 						layout
// 						initial={{ opacity: 0 }}
// 						animate={{ opacity: 1, transition: { duration: 0.5 } }}
// 						exit={{ opacity: 0, transition: { duration: 0.5 } }}
// 						css={styles.subRows}
// 						{...row.getRowProps()}
// 						key={row.id+Math.random()}
// 					>
// 						{row.cells.map((cell) => {
// 							return (
// 								<motion.td
// 									layout
// 									initial={{ opacity: 0 }}
// 									animate={{ opacity: 1, transition: { duration: 0.5 } }}
// 									exit={{ opacity: 0, transition: { duration: 0.5 } }}
// 									{...cell.getCellProps()}
// 									css={styles.cell}
// 									key={row.id+Math.random()}
// 								>
// 									{cell.render('Cell')}
// 								</motion.td>
// 							);
// 						})}
// 					</motion.tr>
// 				) : (
// 					<motion.tr
// 						layout
// 						css={styles.headCell}
// 						{...row.getRowProps()}
// 						key={row.id+Math.random()}
// 					>
// 						{row.cells.map((cell) => {
// 							return (
// 								<motion.td
// 									layout
// 									{...cell.getCellProps()}
// 									css={styles.cell}
// 									key={row.id+Math.random()}
// 								>
// 									{cell.render('Cell')}
// 								</motion.td>
// 							);
// 						})}
// 					</motion.tr>
// 				)
// 			)
// 		)
// 	);
// });} 
