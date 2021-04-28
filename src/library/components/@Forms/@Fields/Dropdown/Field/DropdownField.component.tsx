import React from 'react';

//components
import { Dropdown } from 'library/components/molucules';
import { Control, Controller, ControllerRenderProps, FieldValues } from 'react-hook-form';

//types
type DropdownProps = React.ComponentProps<typeof Dropdown>;

type DropdownFieldProps = DropdownProps & {
	control: Control<FieldValues>;
	label: string;
	name: string;
};

//-------------------------------
// DropdownField
//-------------------------------
export const DropdownField: React.FC<DropdownFieldProps> = ({
	control,
	label,
	items,
	name,
	...otherProps
}) => {
	//renders
	const _renderComponent = React.useCallback(({ onChange, name }: ControllerRenderProps) => {
		return (
			<Dropdown
				label={label}
				name={name}
				items={items}
				onSelect={onChange} />
		);
	}, [items, label]);

	return (
		<Controller
			render={_renderComponent}
			control={control}
			name={name}
			label={label} />
	);
};
