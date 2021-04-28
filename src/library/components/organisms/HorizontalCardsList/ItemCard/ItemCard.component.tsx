import React from 'react';

//react-router
import { useHistory } from 'react-router-dom';

//other deps
import { useStore } from 'effector-react';

//components
import { BodyText } from 'library/components/atoms';
import { ButtonWithIcon } from 'library/components/@Buttons';

//models
import { $departmentId } from 'library/models/department';

//styles
import { styles } from './ItemCard.styles';

//types
import { CSSObject } from '@emotion/css';
import { $segmentIdCurrent } from 'library/models/segment';

export type ItemCardProps = {
	onPress: () => void;
	onDelete: () => void;
	onEdit: () => void;
	id: string;
	title: string;
	department?: boolean;
	description: string;
	style?: CSSObject | CSSObject[];
}

//-----------------------------
// ItemCard
//-----------------------------
export const ItemCard: React.FC<ItemCardProps> = ({
	onPress,
	onEdit,
	onDelete,
	id,
	title,
	description,
	department,
	style,
}) => {		
	//state
	const [open, setOpen] = React.useState(false);

	const departmentIdActive = useStore($departmentId).departmentId;
	const segmentIdAction = useStore($segmentIdCurrent).id;
	
	//history
	const history = useHistory();

	//renders;
	React.useEffect(() => {
		if (department) {
			if (departmentIdActive === id) {
				setOpen(true);
				history.push(`?department_id=${departmentIdActive}`);
			}
			else
				setOpen(false);
		}
		else {
			if (segmentIdAction === id) {
				setOpen(true);
				history.push(`?segment_id=${segmentIdAction}`);
			}
			else
				setOpen(false);
		}
	}, [department, departmentIdActive, history, id, segmentIdAction]);

	const onOpen = (open) ? styles.open : styles.close;

	//helpers
	const withStopPropagation = (callback: () => void) => (event: React.MouseEvent): void => {
		event.stopPropagation();
		callback();
	};

	return (
		<div
			onClick={onPress}
			css={[
				styles.container,
				onOpen,
				style,
			]}
		>
			<div css={styles.flexBlock}>
				<BodyText style={styles.titleText}>
					{title}
				</BodyText>

				<BodyText style={styles.descriptionText}>
					{description}
				</BodyText>
			</div>

			{(department) && (
				<ButtonWithIcon
					onPress={withStopPropagation(onEdit)} 
					size={16}
					type='normal'
					iconName='ic_edit'
					color='#3969FF'
					style={styles.button} />
			)}

			<ButtonWithIcon
				onPress={withStopPropagation(onDelete)}
				size={16}
				type='normal'
				iconName='ic_trash'
				color='#F96C6D'
				style={styles.button} />
		</div>
	);
};
