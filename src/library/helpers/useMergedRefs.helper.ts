/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

export const useMergedRefs = <T = any>(
	refs: Array<React.MutableRefObject<T> | React.LegacyRef<T>>,
): React.RefCallback<T> =>
		React.useCallback((current) => {
			refs.forEach((ref) => {
				if (typeof ref === 'function')
					ref(current);
				else if (ref && !Object.isFrozen(ref))
					(ref as React.MutableRefObject<T | null>).current = current;
			});
		}, refs);
