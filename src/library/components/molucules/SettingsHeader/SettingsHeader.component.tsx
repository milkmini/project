import React from 'react';

//reacr-router-dom
import { Link } from 'react-router-dom';

//components
import { BMTLogo } from 'library/components/atoms';
import { TabBar } from '..';

//styles
import { styles } from './SettingsHeader.styles';

//types
export type SettingsHeaderProps = {
	items: {
		tabWidth: number;
		to: string;
		name: string;
		tabFontSize?: number;
	}[];
}
//-----------------------
// SettingsHeader
//-----------------------
export const SettingsHeader: React.FC<SettingsHeaderProps> = ({
	items,
}) => {
	return (
		<header css={styles.containerHeader}>
			<div css={styles.containerUpMenu}>
				<div css={styles.wrapperMenu}>

					<Link to=''>
						<BMTLogo
							withText={false}
							size={34} />
					</Link>

					<div css={styles.containerNav}>
						<TabBar
							items={items}
							style={styles.tabBarItem} />
					</div>
				</div>
			</div>
		</header>
	);
};
