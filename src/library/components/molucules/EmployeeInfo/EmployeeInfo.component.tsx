import React from 'react';

//components
import { Avatar, BodyText, CaptionText } from 'library/components/atoms';

//styles
import { styles } from './EmployeeInfo.styles';

//types
import { CSSObject } from '@emotion/css';

export type EmployeeInfoProps = {
	name: string;
	lastName: string;
	style?: CSSObject | CSSObject[];
}

//-----------------------
// EmployeeInfo
//-----------------------
export const EmployeeInfo: React.FC<EmployeeInfoProps> = ({
	name,
	lastName,
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
					{lastName}
				</CaptionText>
			</div>
		</div>
	);
};

