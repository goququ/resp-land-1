'use strict';

var gulp         = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var concat       = require('gulp-concat');
var less         = require('gulp-less');
var path         = require('path');
var watch        = require('gulp-watch');
var browserSync  = require('browser-sync');
var reload       = browserSync.reload;
var rigger       = require('gulp-rigger');


gulp.task('html', function () {
	return gulp.src('src/html/*.html')
	    .pipe(rigger())
		.pipe(gulp.dest('dist'))
		.pipe(reload({stream: true}));
});


gulp.task('css', function () {
	return gulp.src('src/styles/style.less')
	    .pipe(rigger())
    	.pipe(less({
            paths: [ path.join(__dirname, 'less', 'includes') ]
            }))
		.pipe(autoprefixer({
			browsers: ['last 5 versions'],
			cascade: false
		}))
		.pipe(gulp.dest('dist/css'))
		.pipe(reload({stream: true}));
});

gulp.task('js', function () {
	return gulp.src('src/js/*.js')
		.pipe(gulp.dest('dist/js'))
		.pipe(reload({stream: true}));
});

/*
gulp.task('pics', function () {
	return gulp.src('src/img/*')
		.pipe(gulp.dest('dist/img'))
		.pipe(reload({stream: true}));
});
*/

gulp.task('watch', function(){
    watch(['src/styles/*/*.less'], function(event, cb) {
        gulp.start('css');
    });
    watch(['src/html/*/*.html'], function(event, cb) {
        gulp.start('html');
    });
    watch(['src/js/*.js'], function(event, cb) {
        gulp.start('js');
    });
});

//Server
var config = {
    server: {
        baseDir: "dist"
    },
    tunnel: true,
    host: 'localhost',
    port: 8080,
    logPrefix: 'qu'
};

gulp.task('server', function () {
    browserSync(config);
});

gulp.task('default', ['html', 'css', 'js', 'server','watch']);