/* eslint-disable @typescript-eslint/no-redeclare */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/jsx-key */
import React from 'react';

//offer deps
import { useTable, useExpanded } from 'react-table';
import { useHistory } from 'react-router-dom';

//components
import { ButtonWithIcon } from 'library/components/@Buttons';
import { TableBody } from '../TableBody';

//models
import { updateSegmentIdCurrent } from 'library/models/segment';

//styles
import { styles } from './SegmentTable.styles';

//---------------------------
// SegmentTable
//--------------------------
export const SegmentTable: React.FC<{
	model?: any
}> = ({
	model,
}) => {
	//history
	const history = useHistory();

	//callbacks
	const _onEditSegment = React.useCallback((original) => {
		updateSegmentIdCurrent({
			id: original.id,
		});
		history.push(`/model/segments?segment_id=${original.id}`);
	}, [history]);

	//data
	const columns = React.useMemo(
		() => [
			{
				Header: 'Segment',
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
									onPress={() => _onEditSegment(row.original)}
									size={11}
									type='small'
									color='#3969FF'
									iconName='ic_edit' />
							)}

							{row.isExpanded ? (
								<ButtonWithIcon
									size={11}
									onPress={row.getToggleRowExpandedProps().onClick}
									type='small'
									iconName='ic_dropdown_closed'
									color='#3969FF' />
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
		[_onEditSegment],
	  );

	const data = React.useMemo(
		() => [
			{	
				id: 'd3fcadb41235b3',
				header: 'Segment',
				firstName: 1000000,
				lastName: 1000000,
				age: 1000000,
				color: '#D9C9FF',
				editable: true,
				segment: true,
				amount: true,
				subRows: [{
					segment: true,
					editable: true,
					header: 'SMB1.1',
					firstName: '$1.000.000',
					rowName: 'Bookings',
					lastName: '$1.000.000',
					age: '$1.000.000',
					id: 'd3fc2adb4-455e-4962-b734-e1a20ae5f5b3',
					subRows: [{
						editable: true,
						header: 'SMB1.2',
						firstName: '$1.000.000',
						rowName: 'Bookings',
						lastName: '$1.000.000',
						age: '$1.000.000',
						id: 'd3fcadb4-455e-4962-b734-e4561a20ae5f5b3',
					},
					{
						header: 'SMB1.2',
						editable: true,
						rowName: 'Bookings',
						firstName: '$1.000.000',
						lastName: '$1.000.000',
						age: '$1.000.000',
						id: '1d3fcadb4-455e-4962-b734-e1a20ae5f5b3',
					}],
				},
				{
					header: 'SMB2.1',
					segment: true,
					editable: true,
					firstName: '$1.000.000',
					lastName: '$1.000.000',
					age: '$1.000.000',
					id: 'd3fcadb4-455e-4962-b7234sf34-e1a20ae5f5b3',
					subRows: [{
						header: 'SMB2.2',
						firstName: '$1.000.000',
						lastName: '$1.000.000',
						age: '$1.000.000',
						id: 'd3fcadb4-455e-23123-e1a20ae5f5b3',
					},
					{
						header: 'SMB2.2',
						firstName: '$1.000.000',
						lastName: '$1.000.000',
						age: '$1.000.000',
						id: 'd3fcadb4-455e-496123a24560ae5f5b3',
					},
					{
						header: 'SMB2.2',
						firstName: '$1.000.000',
						lastName: '$1.000.000',
						age: '$1.000.000',
						id: 'd3fcadb4-455e-23434-e1a20ae5f5b3',
					},
					{
						header: 'SMB2.2',
						firstName: '$1.000.000',
						lastName: '$1.000.000',
						age: '$1.000.000',
						id: 'd3fcadb4-45234a24560ae5f5b3',
					},
					{
						header: 'SMB2.2',
						firstName: '$1.000.000',
						lastName: '$1.000.000',
						age: '$1.000.000',
						id: 'd3fcadb4-455e-234234-b7678e5f5b3',
					},
					{
						header: 'SMB2.2',
						firstName: '$1.000.000',
						lastName: '$1.000.000',
						age: '$1.000.000',
						id: 'd3fcadb4-455e-49456560ae5f5b3',
					}],
				}],
			},
	   ],
	   [],
	);
		//editableInput
	const AmountCell = ({
		//@ts-ignore
		value: initialValue,
		//@ts-ignore
		row: { index },
		//@ts-ignore
		column: { id },
		//@ts-ignore
		updateMyData,
	
	}) => {
		const [value, setValue] = React.useState(initialValue);
	
		const onChange = (e: any) => {
			setValue(e.target.value);
		};
	
		const onBlur = () => {
			updateMyData(index, id, value);
		};
			
		React.useEffect(() => {
			setValue(initialValue);
		}, [initialValue]);
		  
		return <input css={styles.editCell} value={value} onChange={onChange} onBlur={onBlur} />;
	};

	const PersentCell = ({
		//@ts-ignore
		value: initialValue,
		//@ts-ignore
		row: { index },
		//@ts-ignore
		column: { id },
		//@ts-ignore
		updateMyData,
	
	}) => {
		const [value, setValue] = React.useState(initialValue);
	
		const onChange = (e: any) => {
			setValue(e.target.value);
		};
	
		const onBlur = () => {
			updateMyData(index, id, value);
		};
			
		React.useEffect(() => {
			setValue(initialValue);
		}, [initialValue]);
		  
		return <input css={styles.editCell} value={value} onChange={onChange} onBlur={onBlur} />;
	};
	
	//editableInput
	const FirstCell = ({
		//@ts-ignore
		value: initialValue,
	}) => {
		const [value, setValue] = React.useState(initialValue);

		React.useEffect(() => {
			setValue(initialValue);
		}, [initialValue]);
	
		return (
			<tr>
				{value}
			</tr>
		);
	};
	
	const defaultColumn = {
		Cell: FirstCell,
		AmountCell: AmountCell,
		PersentCell: PersentCell,
	};
	
	//callback ubdateDataTable
	const [tableData, setTableData] = React.useState(data);
	
	const updateMyData = React.useCallback((rowIndex: React.ReactText, columnId: any, value: any) => {
		setTableData((old: any) =>
			old.map((row: any, index: React.ReactText) => {
				if (index === rowIndex) {
					return {
						...old[rowIndex],
						[columnId]: value,
					};
				}
				return row;
			  }),
		);
	}, []);

	const {
		getTableProps,
		getTableBodyProps,
		rows,
		prepareRow,
	} = useTable(
		{ 	
			//@ts-ignore
			columns: columns,
			defaultColumn,
			updateMyData,
			data: tableData, 
		},
		useExpanded,
	);

	//renders

	return (
		<div>
			<table {...getTableProps()} css={styles.table}>
				<tbody {...getTableBodyProps()}>
					<TableBody prepareRow={prepareRow} model={rows} />
					{/* {rows.map((row) => {
						prepareRow(row);
						return (
							(row.depth === 2) ? (
								(row.index === 0) ? (
									<motion.tr
										layout
										initial={{ opacity: 0 }}
										animate={{ opacity: 1, transition: { duration: 0.5 } }}
										exit={{ opacity: 0, transition: { duration: 1 } }}
										css={styles.rowFirst}
										{...row.getRowProps()}
										key={row.id+Math.random()}
									>
										{row.cells.map((cell) => {
											return (
												<motion.td
													layout
													initial={{ opacity: 0 }}
													animate={{ opacity: 1, transition: { duration: 0.5 } }}
													exit={{ opacity: 0, transition: { duration: 1 } }}
													{...cell.getCellProps()}
													css={styles.cell}
													key={row.id+Math.random()}
												>
													{cell.render('Cell')}
												</motion.td>
											);
										})}
									</motion.tr>
								) : (
									<motion.tr
										layout
										initial={{ opacity: 0 }}
										animate={{ opacity: 1, transition: { duration: 0.5 } }}
										exit={{ opacity: 0, transition: { duration: 1 } }}
										css={styles.row}
										{...row.getRowProps()}
										key={row.id+Math.random()}
									>
										{row.cells.map((cell) => {
											return (
												<motion.td
													layout
													initial={{ opacity: 0 }}
													animate={{ opacity: 1, transition: { duration: 0.5 } }}
													exit={{ opacity: 0, transition: { duration: 1 } }}
													{...cell.getCellProps()}
													css={styles.cell}
													key={row.id+Math.random()}
												>
													{cell.render('Cell')}
												</motion.td>
											);
										})}
									</motion.tr >
								)
							) : (
								(row.depth === 1) ? (
									<motion.tr
										layout
										initial={{ opacity: 0 }}
										animate={{ opacity: 1, transition: { duration: 0.5 } }}
										exit={{ opacity: 0, transition: { duration: 1 } }}
										css={styles.subRows}
										{...row.getRowProps()}
										key={row.id+Math.random()}
									>
										{row.cells.map((cell) => {
											return ( 
												<motion.td
													layout
													initial={{ opacity: 0 }}
													animate={{ opacity: 1, transition: { duration: 0.5 } }}
													exit={{ opacity: 0, transition: { duration: 1 } }}
													{...cell.getCellProps()}
													css={styles.cell}
													key={row.id+Math.random()}
												>
													{cell.render('Cell')}
												</motion.td>
											);
										})}
									</motion.tr>
								) : (
									<motion.tr
										layout
										css={styles.headCell}
										{...row.getRowProps()}
										key={row.id+Math.random()}
									>
										{row.cells.map((cell) => {
											return (
												<motion.td
													layout
													{...cell.getCellProps()}
													css={styles.cell}
													key={row.id+Math.random()}
												>
													{cell.render('Cell')}
												</motion.td>
											);
										})}
									</motion.tr>
								)
							)
						);
					})}
					 */}
				</tbody>
			</table>
		</div>
	);
};
