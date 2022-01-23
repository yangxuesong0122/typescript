const path = require('path')
// 引入html插件
const HTMLWebpackPlugin = require('html-webpack-plugin')
// 引入clean插件
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

// webpack中所有的配置信息都应该写在module.exports中
module.exports = {
  // 指定入口文件
  entry: './src/index.ts',
  // 指定打包文件所在目录
  output: {
    // 指定打包文件的目录
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    // 告诉webpack不使用箭头函数
    environment: {
      arrowFunction: false,
      const: false
    }
  },
  mode: 'production',
  // 指定webpack打包时要使用的模块
  module: {
    // 指定要加载的规则
    rules: [
      {
        // test 指定的是规则生效的文件
        test: /\.ts$/,
        // 要使用的loader
        use: [
          // 配置babel
          {
            // 指定加载器
            loader: 'babel-loader',
            // 设置babel
            options: {
              // 设置预定义的环境
              presets: [
                [
                  // 指定环境的插件
                  '@babel/preset-env',
                  // 配置信息
                  {
                    // 要兼容的目标浏览器
                    targets: {
                      'chrome': '58',
                      "ie": "11"
                    },
                    // 指定corejs版本
                    // COJS发现你要用promise，而你又想要兼容到ie11，ie11又不支持promise，就引入自己版本的promise，让ie11可以去使用
                    'corejs': '3',
                    // 使用corejs的方式，‘usage’表示按需加载
                    "useBuiltIns": 'usage'
                  }
                ]
              ]
            }
          },
          'ts-loader'
        ],
        // 要排除的文件
        exclude: /node_modules/
      },
      {
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          // 引入postcss
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env",
                    {
                      browsers: 'last 2 versions'
                    }
                  ]
                ]
              }
            }
          },
          "less-loader"
        ]
      }
    ]
  },
  // 配置webpack插件
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      // title: '自定义title'
      template: './src/index.html' // 根据指定的模板生成html
    })
  ],
  //  用来设置引用模块
  resolve: {
    extensions: ['.ts', '.js']
  }
}