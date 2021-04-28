module.exports = {
	//paths
	moduleNameMapper: {
		'^react$': '<rootDir>/node_modules/$1',
	},
	roots: [
		'./src',
		'./config/jest',
	],
	setupFiles: [
		'./config/jest/setup.ts',
	],
	cacheDirectory: './cache/jest',

	//coverage
	collectCoverageFrom: [
		'**/*.{ts,tsx,js,jsx}',
	],
	coverageThreshold: {
		global: {
			//statements: 80,
		},
	},

	maxConcurrency: 8,
};
