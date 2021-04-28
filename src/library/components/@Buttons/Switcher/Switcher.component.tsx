import React from 'react';

//styles
import { SwitcherStyles } from './Switcher.styles';

//types
export type SwitcherProps = {
	onChange: () => void;
}

//--------------------------
//Switcher
//--------------------------
export const Switcher: React.FC<SwitcherProps> = ({
	onChange,
}) => {
	return (
		<>
			<input
				onChange={onChange}
				css={SwitcherStyles}
				type='checkbox' />
		</>
	);
};

