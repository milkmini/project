import React from 'react';

import { Global, css } from '@emotion/react';

export const GlobalStyles = () => {
	return (
		<Global 
			styles={css`
						*,
						*::before,
						*::after {
							box-sizing: border-box;
						}
						html,
						body {
							overflow: hidden;
							user-select: none;
							min-height: 100%;
							font-family: Poppins;
							font-style: normal;
							font-weight: 500;
							margin: 0;
							padding: 0;
							width: 100%;
							background: #F5F6F9;
						}
						a {
							text-decoration: none;
						}
						input {
							font-family: Poppins;
							font-style: normal;
							font-weight: 500;
							outline: none;
						}
						button {
							font-family: Poppins;
							font-style: normal;
							outline: none;
							cursor: pointer;
						}
						.swiper-container {
							width: 100%;
							height: 100%;
						}
						.swiper-wrapper {
							display: flex;
						}
						.swiper-slide {
							width: auto;
							display: block;
    						height: 100%;
						}
						`
			} />
	);
};
