var gulp = require('gulp');
var karma = require('karma').server;

gulp.task('debug', function(done) {

	karma.start({
		configFile: __dirname + '/karma.conf.js',
		singleRun: false,
		reporters: ['html'],
		browsers: ['Chrome', 'Firefox', 'Safari'],
	}, done);

});

gulp.task('default', function(done) {

	karma.start({
		configFile: __dirname + '/karma.conf.js',
		singleRun: true,
		reporters: ['html', 'coverage'],
		browsers: ['Chrome']
	}, done);

});