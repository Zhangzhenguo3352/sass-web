var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('build',function(){
	gulp.src('pages/*.html') // 锁定主题内容的 .html 文件
	.pipe($.wrap({src:"layout/default.html"}))  //指定布局文件 文字，公共位置
	.pipe(gulp.dest('..')) // 导出这个文件夹 之外
})

// gulp build 