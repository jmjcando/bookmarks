
var gulp = require('gulp'),
    gutil = require("gulp-util"),
    gdebug = require("gulp-debug")
;

var base_src = './bower_components',
    base_dst = './lib'
;


gulp.task('bootstrap', function () {
	var src = base_src + '/bootstrap/dist/**',
		dst = base_dst + '/bootstrap'
	;

	gulp.src(src)
	  .pipe(gulp.dest(dst))
});

gulp.task('jquery', function () {
	var src = base_src + '/jquery/dist/**',
		dst = base_dst + '/jquery'
	;

	gulp.src(src)
	  .pipe(gulp.dest(dst))
});


gulp.task('angular', function () {

	var src = []
	dst = base_dst + '/angular'
	;

	['', '-mocks', '-route'].forEach(function (value) {
		src.push(base_src + '/angular' + value + '/angular*');
	});

	gulp
        .src(src)
        .pipe(gulp.dest(dst))
        .pipe(gdebug())
        //.pipe(gdebug({ title: 'src' }))
});


// // // gulp.task('ui-bootstrap', function () {

// // // 	var src = base_src + '/angular-bootstrap/ui-bootstrap*',
// // // 		dst = base_dst + '/ui-bootstrap'
// // // 	;

// // // 	gulp
// // //         .src(src)
// // //         .pipe(gulp.dest(dst))
// // //         .pipe(gdebug())
// // // 	//.pipe(gdebug({ title: 'src' }))
// // // });


// // // gulp.task('jasmine-core', function () {

// // // 	var src = base_src + '/jasmine-core/lib/jasmine-core/*.js',
// // // 		dst = base_dst + '/jasmine-core'
// // // 	;

// // // 	gulp
// // //         .src(src)
// // //         .pipe(gulp.dest(dst))
// // //         .pipe(gdebug())
// // // 	//.pipe(gdebug({ title: 'src' }))
// // // });


gulp.task('default', ['bootstrap', 'jquery', 'angular']);
/////gulp.task('default', ['bootstrap', 'jquery', 'angular', 'ui-bootstrap', 'jasmine-core']);

