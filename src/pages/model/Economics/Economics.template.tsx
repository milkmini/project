import React from 'react';

//modules
import { Scrollbar } from 'library/modules';

//components
import { MainButton, Switcher } from 'library/components/@Buttons';
import { LoaderOverlay } from 'library/components/molucules';
import { ModelTable } from 'library/components/@Table';
import { BodyText } from 'library/components/atoms';

//styles
import { styles } from './Economics.styles';

//types
type EconomicsTemplateProps = {
	modelData: any;
	loading: boolean;
	error: string | null;
};

//-----------------------------
// EconomicsTemplate
//-----------------------------
export const EconomicsTemplate: React.FC<EconomicsTemplateProps> = ({
	modelData,
	loading,
	error,
}) => {
	//renders
	const _renderContent = React.useCallback(() => {
		if (error) {
			return (
				<h1>
					{error}
				</h1>
			);
		}
		else if (loading) {
			return (
				<LoaderOverlay page />
			);
		}

		return (
			<>
				<div css={styles.containerHeader}>

					<div css={styles.containerDownHeader}>
						<div css={styles.Swither}>
							<Switcher
								onChange={() => {
									'';
								}} /> 

							<BodyText style={{
								marginTop: '3px',
								marginLeft: '15px',
							}}
							> 
								Assistance
							</BodyText>
						</div>

						<div>
							<MainButton
								width={174} 
								height={47}
								text='View dashboard' 
								style={{ 
									background: '#FFFFFF', 
									color: '#3969FF', 
									border: 'none' }} />

							<MainButton
								width={174} 
								height={47}
								text='Clone model' 
								style={{ 
									background: '#EEF2FF', 
									color: '#3969FF', 
									border: 'none', 
									marginLeft: 10 }} />
						</div>
					</div>
				</div>

				<ModelTable model={modelData} />
			</>
		);
	}, [error, loading, modelData]);

	return (
		<Scrollbar
			trackStyleY={{
				height: 'calc(100% - 140px)', 
				top: 140,
				right: 0,
				zIndex: 1,
				background: 'none',
			}}
		>
			{_renderContent()}

		</Scrollbar>
	);
};
