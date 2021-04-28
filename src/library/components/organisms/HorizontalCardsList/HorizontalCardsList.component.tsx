import React from 'react';

//other deps
import { Swiper, SwiperSlide } from 'swiper/react';

//components
import { ButtonWithIcon } from 'library/components/@Buttons';
import { CreateItemCard } from './CreateItemCard';
import { ItemCard } from './ItemCard';

//modules
import { LoaderOverlay } from 'library/components/molucules';

//styles
import {
	disabledButtonColor,
	activeButtonColor,
	styles,
} from './HorizontalCardsList.styles';	

//types
import SwiperClass from 'swiper/types/swiper-class';
import { CSSObject } from '@emotion/css';

export type HorizontalCardsListProps = {
	onEdit?: (idToEdit: string, title: string) => void;
	onDelete: (idToDelete: string) => void;
	onOpen: (data?: any, id?: string) => void;
	onSelect: () => void;
	items: {
		id: string;
		name: string;
		description: string;
	}[];
	createItemText: string;
	initialSlide: number;
	department?: boolean;
	loading?: boolean;
	style?: CSSObject | CSSObject[];
}

export type HorizontalCardsListWithItemCards = React.FC<HorizontalCardsListProps> & {
	CreateItemCard: typeof CreateItemCard
	ItemCard: typeof ItemCard
}

//-----------------------------------------
// HorizontalCardsList
//-----------------------------------------
export const HorizontalCardsList: HorizontalCardsListWithItemCards = ({
	onDelete,
	onSelect,
	onOpen,
	onEdit,
	createItemText,
	initialSlide,
	department,
	loading,
	items,
	style,
}) => {
	//state
	const [canGoLeft, setCanGoLeft] = React.useState(true);
	const [canGoRight, setCanGoRight] = React.useState(true);

	//refs
	const swiperRef = React.useRef<SwiperClass | null>(null);

	//callbacks
	const _onSwiper = React.useCallback((swiper: SwiperClass) => {
		if (swiperRef)
			(swiperRef as { current: SwiperClass }).current = swiper;
			
		swiperRef.current = swiper;
	}, []);

	const _disabledArrows = React.useCallback(() => {
		if (swiperRef.current) {
			setCanGoLeft(!swiperRef.current.isBeginning);
			setCanGoRight(!swiperRef.current.isEnd);
		}
	}, []);

	const _onSlidePrev = React.useCallback(() => {
		swiperRef.current?.slidePrev();
		_disabledArrows();
	}, []); // eslint-disable-line react-hooks/exhaustive-deps
  
	const _onSlideNext = React.useCallback(() => {
		swiperRef.current?.slideNext();
		_disabledArrows();
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	const leftButtonColor = (canGoLeft) ? activeButtonColor : disabledButtonColor;
	const rightButtonColor = (canGoRight) ? activeButtonColor : disabledButtonColor;
	
	const _renderItems: any = React.useCallback(() => {
		return items.map(({
			id,
			name,
			description,
		}) => {
			return (
				<SwiperSlide key={id}>
					<ItemCard
						onPress={() => onOpen(id)}
						onDelete={() => onDelete(id)}
						onEdit={() => onEdit && onEdit(id, name)}
						id={id}
						title={name}
						department={department}
						description={description}
						key={id} />
				</SwiperSlide>
			);
		});
	}, [department, items, onDelete, onEdit, onOpen]);

	return (
		<div css={[styles.container, style]}>
			<ButtonWithIcon
				onPress={_onSlidePrev}
				size={21}
				withBorder
				color={leftButtonColor} 
				iconName='ic_arrow_left'
				style={styles.buttonRigth} />

			<div css={styles.wrapperBlock}>

				{(!loading) ? (
					<Swiper
						onSwiper={_onSwiper}
						initialSlide={initialSlide}
						slidesPerView='auto'
					>
						{_renderItems()}
						<SwiperSlide>
							<CreateItemCard
								onPress={onSelect} 
								title={createItemText} />
						</SwiperSlide>
					</Swiper>
				) : (
					<LoaderOverlay />
				)}
				
			</div>

			<ButtonWithIcon
				onPress={_onSlideNext}
				size={21}
				withBorder 
				color={rightButtonColor}
				iconName='ic_arrow_right'
				style={styles.buttonRigth} />
		</div>
	);
};

HorizontalCardsList.CreateItemCard = CreateItemCard;
HorizontalCardsList.ItemCard = ItemCard;
