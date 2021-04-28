import React, { SVGProps } from 'react';

//constants
import { icons } from './BMTIcon.constants';

//types
import { CSSObject } from '@emotion/css';

type BMTIconProps = {
	name: string;
	color?: string;
	size: number;
	style?: CSSObject | CSSObject[];
};

export const BMTIcon: React.FC<BMTIconProps> = ({
	name,
	color,
	size,
	style,
}) => {
	//renders
	const _renderPaths = () => {
		let iconName = name;

		if (!(iconName in icons))
			iconName = 'ic_cross';

		//@ts-ignore
		return icons[iconName].map((path) => {
			const evenOdd: SVGProps<SVGPathElement> = (path.evenOdd) ? {
				fillRule: 'evenodd',
				clipRule: 'evenodd',
			} : {};

			return (
				<path
					{...evenOdd}
					key={path.d}
					d={path.d} />
			);
		});
	};

	return (
		<svg
			css={[{
				minWidth: size,
				minHeight: size,
			}, style,
			]}
			width={size}
			height={size}
			viewBox='0 0 32 32'
			fill={color}
		>
			{_renderPaths()}
		</svg>
	);
};
