import React from 'react';

//react-router
import { useHistory } from 'react-router-dom';

//components
import { ButtonWithIcon } from 'library/components/@Buttons';
import { BodyText } from 'library/components/atoms';
import { DropdownMenu } from '../DropdownMenu';

//hooks
import { useClickOutsideListener } from 'library/hooks/useClickOutsideListener';

//styles
import { styles } from './HeaderCompanyInfo.styles';

//types
import { CSSObject } from '@emotion/css';

export type HeaderCompanyInfoProps = {
	companyName: string;
	companyLogoUrl: string;
	style?: CSSObject | CSSObject[];
}

//--------------------------
// HeaderCompanyInfo
//--------------------------
export const HeaderCompanyInfo: React.FC<HeaderCompanyInfoProps> = ({
	companyName,
	companyLogoUrl,
	style,
}) => {
	//router
	const history = useHistory();
	const previousPathname = window.location.pathname;
	
	//state
	const [open, setOpen] = React.useState(false);

	//refs
	const containerRef = React.useRef<HTMLDivElement>(null);
	
	//callbacks
	const _close = React.useCallback(() => {
		setOpen(false);
	}, []);
	
	useClickOutsideListener(containerRef, _close);

	const linkProfile: () => void = React.useCallback(() => {
		//history 
		localStorage.setItem('previousPathname', previousPathname);

		history.push('/settings');
	}, [history, previousPathname]);

	//render
	const buttonStyle = (open) ? styles.open : styles.close;

	return (
		<div css={[styles.container, style]}>
			<div
				onClick={() => setOpen(!open)} 
				ref={containerRef}
				css={styles.containerCompany}
			>
				<ButtonWithIcon 
					size={12}
					iconName='ic_dropdown_closed'
					color='#3969FF'
					style={{ ...styles.button, ...buttonStyle }} /> 

				<BodyText >
					{companyName}
				</BodyText>
			
				<img 
					alt=' '
					css={styles.img} 
					src={companyLogoUrl} />
			</div>
			
			<div >
				<DropdownMenu  
					style={styles.popup}
					isOpen={open}
				>
					<div 
						onClick={linkProfile}
						css={styles.containerPopupIcon}
					>
						<ButtonWithIcon 
							size={12}
							onPress={linkProfile}
							iconName='ic_visible_enabled'
							color='#3969FF'
							type='normal'
							style={styles.popupIcon} />

						<BodyText style={{ color: '#4C475E' }}>
							View profile
						</BodyText>	
					</div>

					<div css={styles.containerPopupIconDown}>
						<BodyText style={{ color: '#F96C6D' }}>
							Sign Out
						</BodyText>	
					</div>
				</DropdownMenu>
			</div>
		</div>
	);
};

