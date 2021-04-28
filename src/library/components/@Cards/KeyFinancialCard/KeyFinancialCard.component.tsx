import React from 'react';

//other deps
import {
	LineChart, Line, CartesianGrid, Tooltip, YAxis,
} from 'recharts';

//components
import { BodyText, HeadlineText } from 'library/components/atoms';

//styles
import { styles } from './KeyFinancialCard.styles';

//types
import { CSSObject } from '@emotion/css';

export type KeyFinancialCardProps = {
	data?: {
			'name'?: string,
			'uv'?: number,
			'pv'?: number,
			'amt'?: number,
		}[];
	style?: CSSObject | CSSObject[];
}

//-------------------------------
// KeyFinancialCard
//-------------------------------
export const KeyFinancialCard: React.FC<KeyFinancialCardProps> = ({
	data,
	style,
}) => {
	return (
		<div css={styles.container}>
			<div css={styles.containerHeader}>
				<HeadlineText style={{ fontWeight: 600 }} type='h3'>
					Key financials
				</HeadlineText>
				<div css={styles.containerButtons}>
					<button css={{ ...styles.button, color: '#6054FF' }}>
						EBITDA
					</button>
					<button css={{ ...styles.button, color: '#8FE128' }}>
						Bookings
					</button>
					<button css={{ ...styles.button, color: '#FF6370' }}>
						Revenue
					</button>
				</div>
				<BodyText style={{ color: '#3969FF' }}>
					EXPORT PNG
				</BodyText>
			</div>
			<div style={{ margin: '0 0 0 24px' }}>
				<LineChart
					width={570}
					height={160}
					data={data}
				>
					<CartesianGrid
						vertical={false}
						strokeDasharray='3 3' />
					
					<Tooltip />
					<YAxis hide={true} domain={[-250, 750]} />
					<Line 
						strokeWidth={2}
						dot={{ stroke: '#80DD0A', strokeWidth: 4, r: 2 }}
						connectNulls={true} 
						type='linear' 
						dataKey='uv' 
						stroke='#80DD0A' />
					<Line 
						strokeWidth={2}
						dot={{ stroke: '#6054FF', strokeWidth: 4, r: 2 }}
						connectNulls={true} 
						type='linear' 
						dataKey='amt' 
						stroke='#6054FF' />
					<Line 
						strokeWidth={2}
						dot={{ stroke: '#FF6370', strokeWidth: 4, r: 2 }}
						connectNulls={true} 
						type='linear' 
						dataKey='pv' 
						stroke='#FF6370' />
				</LineChart>
			</div>
		</div>
	);
};

