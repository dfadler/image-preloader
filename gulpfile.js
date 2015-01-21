var gulp = require('gulp');
var karma = require('karma').server;
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var es6ify = require('es6ify');
var fs = require('fs');

gulp.task('build', function(done) {
	
	return browserify({debug: false})
			// .add(es6ify.runtime)
			.transform(es6ify)
			.require(require.resolve('./src/image-preloader.js'), {entry: true})
			.bundle()
			.pipe(fs.createWriteStream('./build/image-preloader.js'));
});

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