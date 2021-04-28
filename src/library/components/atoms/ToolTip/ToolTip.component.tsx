import React from 'react';

//styles
import { styles } from './ToolTip.styles';

//types
import { CSSObject } from '@emotion/css';
import { HeadlineText } from '../HeadlineText';
import { BodyText } from '../BodyText';

export type ToolTipProps = {
	isOpen: boolean;
	title: string;
	text: string;
	style?: CSSObject | CSSObject[];
}
//------------------------
// ToolTip
//------------------------ 
export const ToolTip: React.FC<ToolTipProps> = ({
	isOpen,
	style,
	title,
	text,
}) => {
	const opennessStyle = (isOpen) ? styles.onOpen : styles.onClose;

	return (
		<div css={[
			styles.container,
			opennessStyle,
			style,
		]}
		>
			<HeadlineText type='h3' >
				{title}
			</HeadlineText>

			<BodyText style={styles.text}>
				{text}
			</BodyText>
		</div>
	);
};
