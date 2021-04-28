import { CSSObject } from '@emotion/css';

export const styles: Record<string, CSSObject> = {
	container: {
		display: 'flex',
		justifyContent: 'space-evenly',
	},
	logoImage: {
		margin: '32px 0 0 28px',
	},
	blockTitle: {
		margin: '40px 0 0 32px',
		display: 'flex',
		flex: 1,
		flexDirection: 'column',
	},
	subTitle: {
		color: '#8089A6',
		width: '468px',	
		margin: '20px 0 0 0',
		fontSize: '18px',
		fontWeight: 'normal',
	},
	form: {
		margin: '40px 0 0 32px',
		flex: 1,
	},
	titleForm: {
		margin: '0 0 47px 0',
	},
	img: {
		height: '100%',
	},
};
