import React from 'react';

//react-router-dom
import { Link } from 'react-router-dom';

//components
import { HeaderCompanyInfo, TabBar } from 'library/components/molucules';
import { BMTLogo } from 'library/components/atoms';

//styles
import { styles } from './HomeHeader.styles';

//types
export type HomeHeaderProps = {
	items: {
		tabWidth: number;
		to: string;
		name: string;
		tabFontSize?: number;
	}[]
}

//-----------------------
// HomeHeader
//-----------------------
export const HomeHeader: React.FC<HomeHeaderProps> = ({
	items,
}) => {
	return (
		<header css={styles.containerHeader}>
			<div css={styles.containerMenu}>
				<div css={styles.wrapperMenu}>

					<Link to=''>
						<BMTLogo
							withText={true}
							size={34} />
					</Link>
				</div>
	
				<HeaderCompanyInfo
					companyName='Jingu Digital'
					companyLogoUrl='https://www.jingu.ru/sirius/jingu-logo-512.png'
					style={styles.CompanyInfo} />
			</div>

			<div css={styles.containerTabBar}>

				<TabBar  
					items={items}
					style={styles.tabBarItem} />
			</div>
		</header>
	);
};
