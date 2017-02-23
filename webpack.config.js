//npm install  下载插件
var webpack = require('webpack'); //加载webpack模块
//进行一定的配置
module.exports = {
	entry: {
	  //入口js文件
	  bundle:['whatwg-fetch', './js/entry/entry.js']
	},
	output: {
	  //入口js文件，在经过webpack处理之后，你希望它输出到哪个目录下
	  path: './js/', //发布目录
	  filename: '[name].js'
	},
	module: {     //react专用
		loaders:[
			{
				test: /\.js$/,
				exclude: /node_modules/, //排除某些文件夹
				loader: 'babel-loader?presets=[]=es2015&presets[]=react'
			}

		]
	}
	/*plugins:[ //jq专用
	  new webpack.ProvidePlugin({
		    $:"jquery",
		    jQuery:"jquery",
		    "window.jQuery":"jquery"
	  })
	]
	*/
};
