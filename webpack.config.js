// 這邊使用 HtmlWebpackPlugin，將 bundle 好的 <script> 插入到 body。${__dirname} 為 ES6 語法對應到 __dirname
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: `${__dirname}/src/index.html`,
    filename: 'index.html',
    inject: 'body',
});

module.exports = {
    // 檔案起始點從 entry 進入，因為是陣列所以也可以是多個檔案
    entry: [
        './src/index.js', './stylesheets/scss/Gallery.scss'
    ],
    // output 是放入產生出來的結果的相關參數
    output: {
        path: `${__dirname}/dist`,
        filename: 'index_bundle.js',
    },
    module: {
        preLoaders: [
            {
                test: /\.jsx$|\.js$/,
                loader: 'eslint-loader',
                include: `${__dirname}/src`,
                exclude: /bundle\.js$/
            }
        ],
        // loaders 則是放欲使用的 loaders，在這邊是使用 babel-loader 將所有 .js（這邊用到正則式）相關檔案（排除了 npm 安裝的套件位置 node_modules）轉譯成瀏覽器可以閱讀的 JavaScript。preset 則是使用的 babel 轉譯規則，這邊使用 react、es2015
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react'],
                },
            },
            //.css 文件使用 style-loader 和 css-loader 来处理
            {test: /\.css$/, loader: 'style!css'},
            //.scss 文件使用 style-loader、css-loader 和 sass-loader 来编译处理
            {test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
        ],
    },
    // devServer 則是 webpack-dev-server 設定
    devServer: {
        inline: true,
        port: 8080,
        host: '0.0.0.0'//设置可以通过ip访问
    },
    // plugins 放置所使用的外掛
    plugins: [HTMLWebpackPluginConfig],
    //其它解决方案配置
    resolve: {
        //root: 'E:/NodeProject/express_gank/public', //绝对路径
        extensions: ['', '.js', '.jsx', '.json', '.scss'],
        /*alias: {
         AppStore: 'js/stores/AppStores.js',
         ActionType: 'js/actions/ActionType.js',
         AppAction: 'js/actions/AppAction.js'
         }*/
    }
};
