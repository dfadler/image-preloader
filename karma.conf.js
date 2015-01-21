module.exports = function(config) {
	config.set({
		autoWatch: true,
		browsers: ['Chrome'],
		frameworks: ['jasmine', 'requirejs', 'traceur'],
		preprocessors: {
			'src/**/*.js': ['traceur', 'coverage']
		},
		files: [{
				pattern: 'src/**/*.js',
				included: false
			}, {
				pattern: 'test/**/*.spec.js',
				included: false
			},
			'test/test-main.js'
		],
		traceurPreprocessor: {
			options: {
				sourceMaps: false,
				modules: 'amd'
			}
		},
		// optionally, configure the reporter
		coverageReporter: {
			dir: 'build/reports/coverage',
			reporters: [{
					type: 'html',
					subdir: 'report-html'
				}, {
					type: 'lcov',
					subdir: 'report-lcov'
				},
				// reporters supporting the `file` property, use `subdir` to directly
				// output them in the `dir` directory
				{
					type: 'cobertura',
					subdir: '.',
					file: 'cobertura.txt'
				}, {
					type: 'lcovonly',
					subdir: '.',
					file: 'report-lcovonly.txt'
				}, {
					type: 'teamcity',
					subdir: '.',
					file: 'teamcity.txt'
				}, {
					type: 'text',
					subdir: '.',
					file: null
				}, {
					type: 'text-summary',
					subdir: '.',
					file: null
				},
			]
		}
	});
};