import React from 'react';

//other deps
import CustomScrollbar from 'react-scrollbars-custom';
import { ScrollState } from 'react-scrollbars-custom/dist/types/types';

//models
import { updateScroll } from './Scrollbar.model';

//styles
import { styles } from './Scrollbar.styles';

//types
export type ScrollbarProps = {
	onScroll?: (e: any) => void
	pageScroll?: boolean;
	scrollX?: boolean;
	trackStyleY?: any;
	thumbStyleX?: any;
	thumbStyleY?: any;
	style?: React.CSSProperties;
}

//---------------------------
// Scrollbar
//---------------------------
export const Scrollbar: React.FC<ScrollbarProps> = ({
	pageScroll,
	scrollX,
	trackStyleY,
	thumbStyleY,
	thumbStyleX,
	style,
	children,
}) => {
	const _onScroll = (scrollValues: ScrollState, prevScrollState: ScrollState) => {
		updateScroll({
			deltaY: scrollValues.scrollTop - prevScrollState.scrollTop,
			scrollHeight: scrollValues.scrollTop,
		});
	};
	
	return (
		<CustomScrollbar
			onUpdate={_onScroll}
			wrapperProps={{
				renderer: (props) => {
					const { elementRef, ...restProps } = props;
					return <span {...restProps} ref={elementRef} style={styles.scrollerWrapper} />;
				},
			}}
			thumbYProps={{
				renderer: (props) => {
					const { elementRef, ...restProps } = props;
					return <div {...restProps} ref={elementRef} style={{ ...styles.scrollerY, ...thumbStyleY }} />;
				},
			}}
			thumbXProps={{
				renderer: (props) => {
					const { elementRef, ...restProps } = props;
					return <div {...restProps} ref={elementRef} style={{ ...styles.scrollerX, ...thumbStyleX }} />;
				},
			}}
			trackYProps={{
				renderer: (props) => {
					const { elementRef, ...restProps } = props;
					return <div {...restProps} ref={elementRef} style={{ ...styles.trackY, ...trackStyleY }} />;
				},
			}}
			noScrollX={!scrollX}
			noScroll={pageScroll}
			style={{ ...styles.scrollBar, ...style }}
		>
			{children}
		</CustomScrollbar>
	);
};

