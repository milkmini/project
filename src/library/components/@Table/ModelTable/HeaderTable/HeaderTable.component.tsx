/* eslint-disable @typescript-eslint/no-redeclare */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/jsx-key */
import React from 'react';

//offer deps
import { useTable } from 'react-table';
import { motion } from 'framer-motion';

//styles
import { styles } from './HeaderTable.styles';

//---------------------------
// HeaderTable
//--------------------------
export const HeaderTable: React.FC<{
	model?: any
}> = ({
	model,
}) => {
	//data
	const data = React.useMemo(
		() => [
			{	
				rowName: 'Bookings',
				Editable: false,
				M1: '$1.000.000',
				M2: '$1.000.000',
				M3: '$1.000.000',
				M4: '$1.000.000',
				M5: '$1.000.000',
				M6: '$1.000.000',
				M7: '$1.000.000',
				M8: '$1.000.000',
				M9: '$1.000.000',
				M10: '$1.000.000',
				M11: '$1.000.000',
				M12: '$1.000.000',
				test: '123',
			},
			{	
				rowName: 'Revenue',
				Editable: true,
				M1: '$1.000.000',
				M2: '$1.000.000',
				M3: '$1.000.000',
				M4: '$1.000.000',
				M5: '$1.000.000',
				M6: '$1.000.000',
				M7: '$1.000.000',
				M8: '$1.000.000',
				M9: '$1.000.000',
				M10: '$1.000.000',
				M11: '$1.000.000',
				M12: '$1.000.000',
			},
		],
		[],
	);
	
	//editableInput
	const EditableCell = ({
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
		const [value] = React.useState(initialValue);

		return value;
	};

	const defaultColumn = {
		EditableCell: EditableCell,
		Cell: FirstCell,
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

	//column
	const columns = React.useMemo(
		() => [
			{
				Header: '',
				accessor: 'rowName',
			},
			{
				Header: 'M1',
				accessor: 'M1',
			},
			{
				Header: 'M2',
				accessor: 'M2',
			},
			{
				Header: 'M3',
				accessor: 'M3',
			},
			{
				Header: 'M4',
				accessor: 'M4',
			},
			{
				Header: 'M5',
				accessor: 'M5',
			},
			{
				Header: 'M6',
				accessor: 'M6',
			},
			{
				Header: 'M7',
				accessor: 'M7',
			},
			{
				Header: 'M8',
				accessor: 'M8',
			},
			{
				Header: 'M9',
				accessor: 'M9',
			},
			{
				Header: 'M10',
				accessor: 'M10',
			},
			{
				Header: 'M11',
				accessor: 'M11',
			},
			{
				Header: 'M12',
				accessor: 'M12',
			},
		],
		[],
	  );

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
	} = useTable({ 
		//@ts-ignore
		columns: columns,
		defaultColumn,
		updateMyData,
		data: tableData, 
	});
	
	return (
		<div>
			<table {...getTableProps()} css={styles.table}>
				<thead>		
					{headerGroups.map((headerGroup, index) => (
						<tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id+Math.random()}>
							{headerGroup.headers.map((column, index) => (
								 <motion.th
									{...column.getHeaderProps()}
									css={styles.headCell}
									key={column.id + Math.random()}
								 >
									{column.render('Header')}
								</motion.th>
							))}
						</tr>
					))}	
				</thead>
				<tbody {...getTableBodyProps()}>
					{rows.map((row, index) => {
						prepareRow(row);
						return (
							(row.original.Editable) ? (
								<motion.tr 
									css={styles.row}
									{...row.getRowProps()}
									key={row.id+Math.random()}
								>
									{row.cells.map((cell, index) => {
										return (
											<motion.td
												{...cell.getCellProps()}
												css={styles.cell}
												key={row.id+Math.random()}
											>
												{(cell.column.Header === '') ? (
													cell.render('Cell')
												) : (
													cell.render('EditableCell')
												)}
											</motion.td>
										);
									})}
								</motion.tr >
							) : (
								<motion.tr 
									css={styles.row}
									{...row.getRowProps()}
									key={row.id+Math.random()}
								>
									{row.cells.map((cell, index) => {
										return (
											<motion.td
												{...cell.getCellProps()}
												css={styles.cell}
												key={row.id+Math.random()}
											>
												{cell.render('Cell')}
											</motion.td>
										);
									})}
								</motion.tr >
							));
					})}
				</tbody>
			</table>
		</div>
	);
};

