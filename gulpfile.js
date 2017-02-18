//npm install  下载插件
var gulp = require('gulp');       		  		//引入我们所需要的gulp依赖
var gulpless = require('gulp-less'); 	 		//引入我们less自动化模块
var cleancss = require('gulp-clean-css'); 		//引入我们css压缩模块
var autoprex = require('gulp-autoprefixer');	//引入添加兼容前缀模块
var concat = require('gulp-concat');            //文件拼接，把多个文件拼接成一个文件
var clean = require('gulp-clean');              //删除文件模块

//加载安装插件    npm install gulp-clean  --save-dev

gulp.task('default',function(){
	gulp.watch('less/*.less', function(){                    //按ctrl + c 结束监听任务
		gulp.src('less/*.less').
		pipe(gulpless()).                               //过滤操作less转css
		pipe(autoprex()).                               //css自动前缀匹配的生成
		//pipe(concat('all.css')).						//合并文件
		//pipe(cleancss()).                               //css的压缩工作
		pipe(gulp.dest('css/scss'));
	});
});

gulp.task('clean', ['csszip'],function(){                         //删除目录
	gulp.src('css/scss').pipe(clean()); 	
});

gulp.task('csszip', function(){                         
	gulp.src('css/scss/*.css'). 
	pipe(concat('all.css')).
	pipe(cleancss()).
	pipe(gulp.dest('css'));	
});
