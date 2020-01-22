const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const autoprefixer = require("autoprefixer");
// const SRC_DIR = path.join(__dirname, "src");
// const nodeModulesRegex = "/node_modules/";

module.exports = {
    entry: ["@babel/polyfill", "./src/index.jsx"],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js",
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx|jsx)$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader"
                }
            },
            {
              test: /\.(scss|css)$/,
              use: [
                  "style-loader",
                  {
                    loader: "css-loader",
                    options: {
                      modules: {
                        localIdentName: "[local]---[hash:base64:5]"
                      },
                      importLoaders: 1
                    }
                  },
                  "sass-loader",
                  {
                      loader: "postcss-loader",
                      options: {
                        ident: "postcss",
                        plugins: () => [autoprefixer()]
                      }
                  }
              ]
          }
            // {
            //     test: /\.jsx?$/,
            //     enforce: "pre",
            //     loader: "eslint-loader",
            //     include: [
            //         SRC_DIR
            //     ],
            //     exclude: [
            //         path.join(SRC_DIR, "external"),
            //         nodeModulesRegex
            //     ]
            // },
            // {
            //     test: /\.jsx$/,
            //     include: [
            //         SRC_DIR
            //     ],
            //     exclude: [
            //         path.join(SRC_DIR, "external"),
            //         nodeModulesRegex
            //     ],
            //     loader: "babel-loader",
            //     query: {
            //         presets: [
            //             ["es2015", {"loose": true}],
            //             "stage-0",
            //             "react"
            //         ],
            //         plugins: ["transform-decorators-legacy"],
            //         cacheDirectory: true,
            //         compact: false
            //     }
            // },
            // {
            //     test: /\.js$/,
            //     include: [
            //         SRC_DIR
            //     ],
            //     exclude: [
            //         path.join(SRC_DIR, "external"),
            //         nodeModulesRegex
            //     ],
            //     loader: "babel-loader",
            //     query: {
            //         presets: [
            //             ["es2015", {"loose": true}],
            //             "stage-0"
            //         ],
            //         plugins: ["transform-decorators-legacy"],
            //         cacheDirectory: true,
            //         compact: false
            //     }
            // },
            // {
            //     test: /\.scss$/,
            //     use: [
            //         "style-loader",
            //         "css-loader",
            //         "sass-loader",
            //         {
            //             loader: "postcss-loader",
            //             options: {
            //                 parser: "postcss-scss",
            //                 plugins: () => {
            //                     require("autoprefixer")({ browsers: ["last 2 versions"]});
            //                 }
            //             }
            //         }
            //     ]
            // },
            // {
            //     test: /\.css$/,
            //     use: [
            //         "style-loader",
            //         "css-loader",
            //         {
            //             loader: "postcss-loader",
            //             options: {
            //                 plugins: () => {
            //                     require("autoprefixer")({ browsers: ["last 2 versions"]});
            //                 }
            //             }
            //         }
            //     ]
            // },
            // {
            //     test: /\.(jpg|png|gif|svg)$/i,
            //     loader: "file-loader",
            //     query: {
            //         name: "img/[name].[ext]",
            //         context: "__dirname"
            //     }
            // },
            // {
            //     test: /\.svg(\?.*)?$/,
            //     loader: "url-loader?limit=10000&mimetype=image/svg+xml"
            // },
            // {
            //     test: /\.woff(\?.*)?$/,
            //     loader: "url-loader?limit=10000&mimetype=application/font-woff"
            //     //loader: "file-loader?name=../dox-icon-fonts/[name].[ext]"
            // },
            // {
            //     test: /\.woff2(\?.*)?$/,
            //     loader: "url-loader?limit=10000&mimetype=application/font-woff2"
            // },
            // {
            //     test: /\.ttf(\?.*)?$/,
            //     loader: "url-loader?limit=10000&mimetype=application/octet-stream"
            // },
            // {
            //     test: /\.eot(\?.*)?$/,
            //     loader: "file-loader"
            // }
        ]
    },
    devServer: {
        port: 3000,
        hot: true,
        open: true,
        historyApiFallback: true
    },
    resolve: {
        extensions: [".tsx", ".jsx", ".js", ".ts", ".sass", ".scss", ".css"]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Address Book",
            filename: "index.html",
            template: "./src/template/index.html",
            inject: false
        })
    ]
};
