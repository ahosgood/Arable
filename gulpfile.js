var gulp = require( 'gulp' ),
		sass = require( 'gulp-sass' ),
		rename = require( 'gulp-rename' ),
		using = require( 'gulp-using' ),
		sourcemaps = require( 'gulp-sourcemaps' );

gulp.task( 'reset',
	function() {
		return gulp.src( './src/scss/arable-reset.scss' )
				.pipe( using() )
				.pipe( sourcemaps.init() )
				.pipe( sass( { errLogToConsole: true, outputStyle: 'compressed' } ) )
				.pipe( rename( 'arable-reset.min.css' ) )
				.pipe( sourcemaps.write( './' ) )
				.pipe( gulp.dest( './dist' ) );
	}
);

gulp.task( 'default',
	function() {
		return gulp.src( './src/scss/arable.scss' )
				.pipe( using() )
				.pipe( sourcemaps.init() )
				.pipe( sass( { errLogToConsole: true, outputStyle: 'compressed' } ) )
				.pipe( rename( 'arable.min.css' ) )
				.pipe( sourcemaps.write( './' ) )
				.pipe( gulp.dest( './dist' ) );
	}
);
