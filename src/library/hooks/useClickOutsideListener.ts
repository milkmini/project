import React from 'react';

export const useClickOutsideListener =
	<T extends HTMLElement>(ref: React.RefObject<T>, onClick: (e: MouseEvent) => void): void => {
		React.useEffect(() => {
			const handleClick = (e: MouseEvent) => {
				if (ref && ref.current && !ref.current.contains(e.target as Node))
					onClick(e);
			};

			document.addEventListener('mousedown', handleClick);
			return () => document.removeEventListener('mousedown', handleClick);
		}, [onClick, ref]);
	};
