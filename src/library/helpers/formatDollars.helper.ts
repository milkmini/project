export const formatDollars = (value: string) => {
	const parts = value.toString().split('.');
	const textvalue = parts[0];

	let count = textvalue.length;
	let newvalue = '$';

	if (count < 4) {
		newvalue += parts[0];
		if (parts.length > 1)
			newvalue += ',' + parts[1];
		return newvalue;
	}

	for (const digit of textvalue) {
		if (count !== textvalue.length && count % 3 === 0)
			newvalue += ' ';
		newvalue += digit;
		count -= 1;
	}

	if (parts.length > 1)
		newvalue += ',' + parts[1];

	return newvalue;
};
