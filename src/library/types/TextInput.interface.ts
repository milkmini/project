export type TextInputFormat =
	'digits' |
	'letters' |
	'digitsLetters' |
	'price' |
	'percents' |
	'about' |
	'email' |
	'all';

type TextInputProps = {
	format?: TextInputFormat;
	withCharactersCounter?: boolean;
} & React.HTMLProps<HTMLInputElement>;

export type TextInputType =
	'secure' |
	'email' |
	'singlelineText' |
	'email' |
	'price' |
	'digits';

export type TextInputTypeConfig = Record<TextInputType, TextInputProps>;
