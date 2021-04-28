import React from 'react';

//other deps
import { 
	ResponsiveContainer,
	CartesianGrid,
	LineChart,
	Tooltip,
	Line,
} from 'recharts';

//components
import { ButtonWithIcon, MainButton } from 'library/components/@Buttons';
import { DropdownMenu } from 'library/components/molucules/DropdownMenu';
import { BodyText, HeadlineText } from 'library/components/atoms';
import { OneInputForm } from 'library/components/@Forms';

//helpers
import { formatDateTime } from 'library/helpers/Date';

//models
import { updateCurrentModel } from 'library/models/model';

//hooks
import { useClickOutsideListener } from 'library/hooks/useClickOutsideListener';

//styles
import { styles } from './ModelCard.styles';

//types
import { CSSObject } from '@emotion/css';

export type ModelCardProps = {
	onDelete: (id: string) => void;
	onEdit: (data: any) => void;
	onPress?: () => void;
	data: {
		id: string;
		name: string;
		date: Date;
		modelData?: {
			'name'?: string,
			'uv'?: number,
			'pv'?: number,
			'amt'?: number,
		}[];
	};
	style?: CSSObject | CSSObject[];
}

//mocks
const chartMockData = [
	{
		'name': '',
		'uv': 0,
		'pv': 0,
		'amt': 0,
	},
	{
		'name': '',
		'pv': 3000,
	},
	{
		'name': '',
		'amt': 1000,
	},
	{
		'name': '',
		'uv': 1000,
		'pv': 4000,
	},
	{
		'name': '',
		'pv': 3700,
		'amt': 3000,
	},
	{
		'name': '',
		'uv': 1000,
	},
	{
		'name': '',
		'uv': 2000,
	},
	{
		'name': '',
		'amt': 4000,
	},
	{
		'name': '',
		'uv': 4000,
	},
	{
		'name': '',
		'uv': 5000,
		'pv': 5000,
		'amt': 5000,
	},
];

//-------------------------------
// ModelCard
//-------------------------------
export const ModelCard: React.FC<ModelCardProps> = ({
	onDelete,
	onPress,
	onEdit,
	data,
	style,
}) => {
	//state
	const [visible, setVisible] = React.useState(false);
	const [editing, setEditing] = React.useState(false);

	//refs
	const containerRef = React.useRef<HTMLDivElement>(null);
	
	//callbacks
	const _close = React.useCallback(() => {
		setVisible(false);
	}, []);

	useClickOutsideListener(containerRef, _close);

	const _onOpenEditForm = React.useCallback(() => {
		setVisible(false);
		updateCurrentModel({
			model: {
				id: data.id,
				name: data.name,
			},
		});
		setEditing(true);
	}, [data.id, data.name]);

	//render
	const dateinEditModel = (editing) ? styles.onOpenDate : styles.onCloseDate;
	const textInEdit = (editing) ? styles.onEdit : styles.offEdit; 
	const buttonStyle = (visible) ? styles.open : styles.close;
	const Zindex = (visible) ? styles.up : {};

	return (
		<div css={[styles.container, style, Zindex]}>
			<div css={styles.graph}>
				<ResponsiveContainer width='100%' height='100%'>
					<LineChart
						data={chartMockData}
					>
						<CartesianGrid
							vertical={false}
							strokeDasharray='3 3' />
					
						<Tooltip />

						<Line
							strokeWidth={2}
							dot={{ stroke: '#80DD0A', strokeWidth: 4, r: 2 }}
							connectNulls={true}
							type='linear'
							dataKey='uv'
							stroke='#80DD0A' />

						<Line 
							strokeWidth={2}
							dot={{ stroke: '#6054FF', strokeWidth: 4, r: 2 }}
							connectNulls={true} 
							type='linear' 
							dataKey='amt' 
							stroke='#6054FF' />

						<Line
							strokeWidth={2}
							dot={{ stroke: '#FF6370', strokeWidth: 4, r: 2 }}
							connectNulls={true}
							type='linear'
							dataKey='pv'
							stroke='#FF6370' />
					</LineChart>
				</ResponsiveContainer>
			</div>
			
			<div 
				onClick={() => setVisible(!visible)}
				ref={containerRef}
				css={[styles.model, textInEdit]}
			>
				<HeadlineText
					type='h3'
					style={styles.modelText}
				>
					{data.name}
				</HeadlineText>
							
				<div
					css={styles.dropdownContainer}
				>
					<ButtonWithIcon
						size={12}
						style={[styles.modelButton, buttonStyle]}
						iconName='ic_dropdown_closed'
						color=' #292633' />

					<DropdownMenu
						isOpen={visible}
						style={styles.popup}
					>	
						<div 
							onClick={() => _onOpenEditForm()}
							css={styles.containerPopupIconUp}
						>
							<ButtonWithIcon 
								size={14}
								iconName='ic_edit'
								color='#3969FF'
								type='normal'
								style={styles.popupIcon} />

							<BodyText style={{ color: '#3969FF' }}>
								Edit
							</BodyText>
						</div>
						<div 
							onClick={() => onDelete(data.id)}
							css={styles.containerPopupIcon}
						>
							<ButtonWithIcon 
								size={16}
								iconName='ic_trash'
								color='#F96C6D'
								type='normal'
								style={styles.popupIcon} />

							<BodyText style={{ color: '#F96C6D' }}>
								Delete model
							</BodyText>
						</div>
					</DropdownMenu>
				</div>
			</div>

			<OneInputForm
				onClose={() => setEditing(false)}
				onSubmit={onEdit} 
				value={data.name}
				isOpen={editing}
				style={styles.form} />
			
			<div css={[styles.dateContainer, dateinEditModel]}>
				<BodyText style={styles.dateText}>
					{formatDateTime(data.date)}
				</BodyText>
			</div>

			<div>
				<MainButton
					onPress={onPress}
					text='Go to model'
					style={styles.button} />
			</div>
		</div>
	);
};

