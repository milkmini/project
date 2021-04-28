import React from 'react';

//react-router
import { Link } from 'react-router-dom';

//components
import { BMTLogo, BodyText, HeadlineText } from 'library/components/atoms';

//styles
import { styles } from './Welcome.styles';

//types
export type WelcomeProps = {

}

//images
import wizardPromoIllustrationImage from 'assets/img/wizard-promo-illustration.png';

//-----------------------
// Welcome
//-----------------------
export const Welcome: React.FC<WelcomeProps> = () => {
	return (
		<div css={styles.container}>
			<Link to='/'>
				<BMTLogo
					withText
					style={styles.logoImage} />
			</Link>
			
			<img 
				alt=''
				src={wizardPromoIllustrationImage} 
				style={{
					position: 'absolute',
					top: '151px', 
					left: 0,
					transform: 'scale(0.65) translateX(-43%)',
				}} />

			<div css={styles.blockTitle}>
				<HeadlineText>
					Welcome to Beamtee!
				</HeadlineText>

				<BodyText style={styles.subTitle}>
					We can help you build your economics if you answer a couple of questions
				</BodyText>
			</div>
		</div>
	);
};
