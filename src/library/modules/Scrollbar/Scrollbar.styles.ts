export const styles: Record<string, React.CSSProperties> = {
	scrollBar: {
		position: 'absolute',
		width: '100%',
		height: '100%',
	},
	scrollerWrapper: {
		position: 'absolute',
		inset: '0px 0px 0px 0px',
		overflow: 'hidden',
	},
	scrollerY: {
		background: 'rgba(44, 91, 236, 0.6)',	
		width: '100%',
		transform: 'translateY(0px)',
	},
	scrollerX: {
		background: 'rgba(44, 91, 236, 0.6)',	
		height: '100%',
		transform: 'translateX(0px)',
	},
	trackY: {
		position: 'absolute',
		overflow: 'hidden',
		borderRadius: 4,
		background: 'rgba(0, 0, 0, 0.1)',
		userSelect: 'none',
		width: 10,
		height: 'calc(100% - 20px)',
		top: 10,
		right: 0,
	},
};
