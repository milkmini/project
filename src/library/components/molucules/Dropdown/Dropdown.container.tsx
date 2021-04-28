import React from 'react';

//other-deps
import { useStore } from 'effector-react';

//components
import { Dropdown } from './Dropdown.component';

//models
import { $presetIdCurrent } from 'library/models/segment';

//types
import { CSSObject } from '@emotion/css';

type Item = {
	id: string;
	name: string;
};

export type DropdownContainerProps = {
	onSelect?: (id: string) => void;
	items: Item[];
	label: string;
	name: string;
	defaultValue?: string;
	register?: any;
	style?: CSSObject | CSSObject[];
};

//-----------------------
// DropdownContainer
//-----------------------
export const DropdownContainer: React.FC<DropdownContainerProps> = ({
	onSelect,
	items,
	label,
	name,
	register,
	style,
}) => {
	//data
	const dropdownOpen = useStore($presetIdCurrent).id;

	//renders
	React.useEffect(() => {
		if(dropdownOpen)
			onSelect && onSelect(dropdownOpen);
		else
			onSelect && onSelect('');
	}, [dropdownOpen, onSelect]);

	return (
		<Dropdown 
			onSelect={onSelect}
			items={items}
			label={label}
			name={name}
			dropdownOpen={dropdownOpen}
			register={register}
			style={style} />
	);
};
