import React from 'react';

//other deps
import { Pie, PieChart } from 'recharts';

//components
import { BodyText, HeadlineText } from 'library/components/atoms';

//styles
import { styles } from './DiagramCard.styles';

//types
import { CSSObject } from '@emotion/css';

export type DiagramCardProps = {
	data?: {
		'name'?: string,
		'value'?: number, 
		'fill'?: string,
	}[];
	style?: CSSObject | CSSObject[];
}

//-------------------------------
// DiagramCard
//-------------------------------
export const DiagramCard: React.FC<DiagramCardProps> = ({
	data,
	style,
}) => {
	return (
		<div css={styles.container}>
			<div css={styles.containerHeader}>
				<HeadlineText style={{ fontWeight: 600 }} type='h3'>
					Diagram 1
				</HeadlineText>

				<BodyText style={{ color: '#3969FF', fontSize: 12 }}>
					EXPORT PNG
				</BodyText>
				
			</div>
			<div css={styles.containerBody}>
				<div css={styles.containerPieChart}>
					<PieChart width={170} height={170}>
						<Pie 
							data={data} 
							dataKey='value' 
							nameKey='name'
							cx='50%'
							cy='50%'
							innerRadius={60}
							outerRadius={85} />

					</PieChart>
				</div>

				<div css={styles.containerButtons}>
					<button css={[ 
						styles.button, 
						{ color: '#FF6370' }, 
					]}
					>
						Revenue
					</button>

					<button css={[ 
						styles.button, 
						{ color: '#8FE128' }, 
					]}
					>
						Bookings
					</button>
					
					<button css={[ 
						styles.button, 
						{ color: '#6054FF' }, 
					]}
					>
						EBITDA
					</button>

				</div>
			</div>
		</div>
	);
};

