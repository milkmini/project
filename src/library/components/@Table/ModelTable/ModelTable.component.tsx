import React from 'react';

//animation
import { AnimateSharedLayout } from 'framer-motion';

//components
import { SegmentTable } from './SegmentTable';
import { HeaderTable } from './HeaderTable';
import { TeamTable } from './TeamTable';

//styles
import { styles } from './ModelTable.styles';

const models: Record<string, any> = {
	bookings: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	revenue: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	totalCost: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	marketingBudget: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	recommendations: {
	  yourSalesHeads: null,
	  recommendedSalesHeads: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	  yourSupportHeads: null,
	  recommendedSupportHeads: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	},
	segments: [
	  {
			name: 'Segment 1',
			marketingBudgetDistribution: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			bookings: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			revenue: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			organicLeads: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			marketingLeads: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			totalLeads: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			totalOpportunities: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			activeOpportunities: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			activeCustomers: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	  },
	],
	team: {
	  totalCost: [],
	  departments: [],
	},
};
  
//---------------------------
// ModelTable
//--------------------------
export const ModelTable: React.FC<{
	model: any
}> = ({
	model,
}) => {
	const transformed = Object.keys(models).map((rowName) => {
		const row = models[rowName];

		if (rowName === 'recommendations') {
			// return Object.keys(row)
			// 	.filter((recommendationKey) => row[recommendationKey] !== null)
			// 	.map((recommendationKey) => {
			// 		const recommendation = row[recommendationKey];

			// 		return {
			// 			...recommendation,
			// 			rowName: recommendationKey,
			// 		};
			// 	});
			return [];
		}
		else if (rowName === 'team') 
			return [];
		
		else if (rowName === 'segments') {
			// return row.map((segment) => {
			// 	const 
			// })
			return [];
		}
		else if (Array.isArray(row)) {
			return {
				...row,
				rowName,
			};
		}

		// row.map((item: number[] | Object[] | Object) => {
	
		// });
	});

	return (
		<div css={styles.container}>
			<AnimateSharedLayout>
				<HeaderTable model={transformed} />

				<SegmentTable />

				<TeamTable />
			</AnimateSharedLayout>
		</div> 
	);
};
