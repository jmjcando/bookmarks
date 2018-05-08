
var gulp = require('gulp'),
    util = require("gulp-util"),
    debug = require("gulp-debug")
;

var base_src = './node_modules',
    base_dst = './lib'
;


gulp.task('bootstrap', function () {
	var src = base_src + '/bootstrap/dist/**',
		dst = base_dst + '/bootstrap'
	;

    gulp
        .src(src)
        .pipe(debug({ title: "boostrap-input" }))
	    .pipe(gulp.dest(dst))
        .pipe(debug({ title: "boostrap-output" }))
});



gulp.task('jquery', function () {
	var src = base_src + '/jquery/dist/**',
		dst = base_dst + '/jquery'
	;

    gulp
        .src(src)
        .pipe(debug({ title: "jquery-input" }))
        .pipe(gulp.dest(dst))
        .pipe(debug({ title: "jquery-output" }))
});



gulp.task('angular', function () {

    var src = ['', '-mocks', '-route'].map(function (value) {
        return base_src + '/angular' + value + '/angular*';
    }),
	dst = base_dst + '/angular'
	;


    gulp
        .src(src)
        .pipe(debug({ title: "angular-input" }))
        .pipe(gulp.dest(dst))
        .pipe(debug({ title: "angular-output" }))
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

