import React from 'react';

//components
import { Avatar, BodyText, CaptionText } from 'library/components/atoms';

//styles
import { styles } from './RoleInfo.styles';

//types
import { CSSObject } from '@emotion/css';

export type RoleInfoProps = {
	name: string;
	counts: string;
	style?: CSSObject | CSSObject[];
}

//-----------------------
// RoleInfo
//-----------------------
export const RoleInfo: React.FC<RoleInfoProps> = ({
	name,
	counts,
	style,
}) => {
	return (
		<div css={[
			styles.container, 
			style,
		]}
		>
			<Avatar />
			
			<div css={styles.blocktext}>
				<BodyText style={styles.title}>
					{name}
				</BodyText>

				<CaptionText style={styles.text}>
					{counts}
				</CaptionText>
			</div>
		</div>
	);
};

