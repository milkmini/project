import React from 'react';

//modules
import { Scrollbar } from 'library/modules';

//components
import { DropdownInput } from 'library/components/@Forms';
import { DropdownItem } from './DropdownItem';

//styles
import { styles } from './Dropdown.styles';

//types
import { CSSObject } from '@emotion/css';

type Item = {
	id: string;
	name: string;
};

export type DropdownProps = {
	onSelect?: (id: string) => void;
	items: Item[];
	label: string;
	name: string;
	defaultValue?: string;
	register?: any;
	dropdownOpen?: string;
	style?: CSSObject | CSSObject[];
};

export type DropdownWithItem = React.FC<DropdownProps> & {
	Item: typeof DropdownItem
};

//-----------------------
// Dropdown
//-----------------------
export const Dropdown: DropdownWithItem = ({
	onSelect,
	items,
	label,
	name,
	register,
	dropdownOpen,
	style,
}) => {
	//state
	const [visible, setVisible] = React.useState(false);
	const [text, setText] = React.useState('');

	//callbacks
	const _onSelectText = React.useCallback((item) => {
		setText(item.name);
		onSelect && onSelect(item.id);
	}, [onSelect]);

	const _onTextInput = React.useCallback(() => {
		setVisible(true);
	}, []);

	const _noTextInput = React.useCallback(() => {
		setVisible(false);
	}, []);

	//renders
	React.useEffect(() => {
		if(dropdownOpen) {
			items.map((item) => {
				if(item.id === dropdownOpen)
					setText(item.name);
			});
		}
	}, [dropdownOpen, items]);

	const _renderDropdownItems = React.useCallback(() => {
		return items?.map((item) => {
			return (
				<DropdownItem
					onPress={() => _onSelectText(item)}
					text={item.name}
					key={item.id} />
			);
		});
	}, [_onSelectText, items]);

	const opennessStyle = (visible) ? styles.onOpen : styles.onClose;
	const containerStyleInput = (visible) ? styles.relative : styles.absolute;
	const containerStyle = (visible) ? styles.visibleDropdown : {};
	
	return (
		<div css={[style, containerStyle]}>
			<DropdownInput.Field
				onFocus={_onTextInput}
				onBlur={_noTextInput}
				type='singlelineText'
				value={text}
				name={name}
				visible={visible}
				label={label}
				ref={register}
				styleContainer={containerStyleInput} />

			<div css={[
				styles.items,
				opennessStyle,
			]}
			>
				<Scrollbar 
					style={{
						width: 375, 
						minHeight: 200, 
					}}
					trackStyleY={{
						height: 'calc(100% - 35px)', 
						top: 10,
						right: 10,
						background: 'none',
					}}
				>
					<div
						css={{ ...styles.select,
							position: 'relative' }}
					>
						<div css={[styles.firstItem]}></div>
						{_renderDropdownItems()}
					</div>
				</Scrollbar>
			</div>

		</div>
	);
};

Dropdown.Item = DropdownItem;
