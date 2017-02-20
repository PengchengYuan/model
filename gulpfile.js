//npm install  下载插件
var gulp = require('gulp');       		  		//引入我们所需要的gulp依赖
var gulpless = require('gulp-less'); 	 		//引入我们less自动化模块
var cleancss = require('gulp-clean-css'); 		//引入我们css压缩模块
var autoprex = require('gulp-autoprefixer');	//引入添加兼容前缀模块
var concat = require('gulp-concat');            //文件拼接，把多个文件拼接成一个文件
var clean = require('gulp-clean');              //删除文件模块
var browserSync = require('browser-sync').create();   //浏览器实时刷新
//加载安装插件    npm install gulp-clean  --save-dev

gulp.task('transform',function(){
	gulp.watch('less/*.less', function(){                    //按ctrl + c 结束监听任务
		gulp.src('less/*.less').
		pipe(gulpless()).                               //过滤操作less转css
		pipe(autoprex()).                               //css自动前缀匹配的生成
		pipe(gulp.dest('css/scss'));
	});
});

gulp.task('clean',function(){                         //删除目录
	gulp.src('css/scss').pipe(clean()); 	
});

gulp.task('bundle',function(){
	gulp.watch('css/scss/*.css', function(){                         
		gulp.src('css/scss/*.css'). 
		pipe(concat('bundle.css')).      //合并文件
		pipe(cleancss()).                //css的压缩工作
		pipe(gulp.dest('css'));
	});	
});
gulp.task('server', function() {
    var files = [
    './**/*.html',
    './css/scss/*.css',
    './js/*.js'
    ];
    browserSync.init(files,{
        server: {
            baseDir: "./"
        }
    });
});
// Domain server
//gulp.task('browser-sync', function() {
//    browserSync.init({
//        proxy: "yourlocal.dev"
//    });
//});
gulp.task('default',['transform','server']); //定义默认任务