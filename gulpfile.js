//載入 gulp 、 gulp-sass 套件
var gulp = require('gulp'); 
var sass = require('gulp-sass');
var ugly = require('gulp-uglify'); //壓縮js檔案
var plumber = require('gulp-plumber'); //在gulp內顯示錯誤訊息

//執行sass檔案轉換成css
gulp.task('sass', function(){
    gulp.src("scss/*.scss")
    .pipe(plumber())
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(gulp.dest('css'));
    
});

//執行 js 檔案壓縮與偵測錯誤
gulp.task('minify',function(){
    gulp.src("js/*.js")
    .pipe(plumber())
    .pipe(ugly())
    .pipe(gulp.dest('dist'));
});

//一開始偵測 sass 、 js 檔案(有變動就能自動偵測)
gulp.task('default',function(){
    gulp.watch('scss/*.scss',['sass']);
    gulp.watch('js/*.js',['minify']);
});
