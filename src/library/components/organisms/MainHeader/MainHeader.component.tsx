import React from 'react';

//react-router-dom
import { Link } from 'react-router-dom';

//components
import { DropdownMenu } from 'library/components/molucules/DropdownMenu';
import { HeaderCompanyInfo, TabBar } from 'library/components/molucules';
import { ButtonWithIcon } from 'library/components/@Buttons';
import { BodyText } from 'library/components/atoms';
import { BMTLogo } from 'library/components/atoms';

//modules
import { Scrollbar } from 'library/modules';

//hooks
import { useClickOutsideListener } from 'library/hooks/useClickOutsideListener';

//styles
import { styles } from './MainHeader.styles';

//types
import { CSSObject } from '@emotion/css';

export type MainHeaderProps = {
	goModel: (name: string, id: string) => void;
	title?: string;
	maxVisibleItems?: number;
	items: {
		tabWidth: number;
		to: string;
		name: string;
		tabFontSize?: number;
	}[];
	models?: {
		id: string;
		name: string;
	}[]
	style?: CSSObject | CSSObject[];
}
//--------------------------
// MainHeader
//--------------------------
export const MainHeader: React.FC<MainHeaderProps> = ({
	goModel,
	items,
	title,
	maxVisibleItems= 5,
	models,
	style,
}) => {
	//state
	const [visibility, setVisibility] = React.useState(false);

	//refs
	const containerRef = React.useRef<HTMLDivElement>(null);
	
	//callbacks
	const _close = React.useCallback(() => {
		setVisibility(false);
	}, []);

	useClickOutsideListener(containerRef, _close);

	//renders
	const _renderDropdownModel = React.useCallback(() => {
		return (models && models.map((model) => {
			return (
				<div
					onClick={() => goModel(model.id, model.name)}  
					key={model.id} 
					css={styles.containerPopupIcon}
				>
					<ButtonWithIcon 
						size={16}
						iconName='ic_arrow_right'
						color='#3969FF'
						type='normal'
						style={styles.popupIcon} />

					<BodyText style={styles.popupText}>
						{model.name}
					</BodyText>	
				</div>
			);
		}));
	}, [goModel, models]);
	
	const buttonStyle = (visibility) ? styles.open : styles.close;

	let height = 44 + 45*maxVisibleItems;

	if (models?.length) {
		if (models?.length < maxVisibleItems)
			height = 44 + 45*models?.length;
	};

	return (
		<header	
			css={{
				...styles.container,
				...style,
			}}
		>
			<div css={styles.wrapperMenu}>
				<Link to='/' >
					<BMTLogo
						size={34} />
				</Link>
					
				<div css={styles.containerMenu}>
					<div 
						onClick={() => setVisibility(!visibility)}
						ref={containerRef}
						css={styles.containerModel}
					>
						<span css={styles.textModel}>
							{title}
						</span>
							
						<div>
							<ButtonWithIcon
								size={12}
								type='small'
								iconName='ic_dropdown_closed'
								color='#3969FF'
								style={[styles.button, buttonStyle]} />

							<DropdownMenu 
								isOpen={visibility}
							>
								<Scrollbar 
									style={{
										position: 'relative',
										width: 260,  
										height: height, 
									}}
								> 
									{_renderDropdownModel()}
									<Link to='/'>
										<div css={styles.containerPopupIconDown}>

											<ButtonWithIcon 
												size={16}
												iconName='ic_back'
												color='#3969FF'
												type='normal'
												style={styles.popupIcon} />

											<BodyText style={{ color: '#3969FF' }}>
												Go to all models
											</BodyText>	
										</div>
									</Link>
								</Scrollbar>	

							</DropdownMenu>		
						</div>
					</div>

					<TabBar items={items} />
				</div>
			</div>
			
			<HeaderCompanyInfo
				companyName='Jingu Digital'
				companyLogoUrl='https://www.jingu.ru/sirius/jingu-logo-512.png'
				style={styles.CompanyInfo} />
		</header>
	);
};
