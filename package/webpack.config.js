// eslint-disable-next-line @typescript-eslint/no-var-requires
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const TerserPlugin = require("terser-webpack-plugin");

module.exports = [
    buildConfig({ entry: "./src/index.ts", splitCss: true, cssFileName: "doppio-css.css", jsFileName: "doppio-js.js" }),
    buildConfig({ entry: "./src/index.ts", splitCss: true, old: true, cssFileName: "doppio-css.css", jsFileName: "doppio-js.oldbrowser.js" }),
    buildConfig({ entry: "./src/index.ts", jsFileName: "doppio.js" }),
    buildConfig({ entry: "./src/index.ts", old: true, jsFileName: "doppio.oldbrowser.js" }),
    buildConfig({ entry: "./src/addons/colorpack.ts", splitCss: true, cssFileName: "doppio-colorpack.css", jsFileName: "_.js" })
];

function buildConfig(option) {
    return {
        mode: "production",
        entry: option.entry,
        output: {
            path: `${__dirname}/../dist`,
            filename: option.jsFileName,
            library: "Doppio",
            libraryTarget: "umd",
            globalObject: "this"
        },
        module: {
            rules: [
                {
                    enforce: "pre",
                    test: /\.ts$/,
                    exclude: /node_modules/,
                    loader: "eslint-loader",
                    options: {
                        fix: true,
                        failOnError: true,
                    }
                },
                {
                    test: /\.ts$/,
                    use: [
                        ...(
                            option.old ? [
                                {
                                    loader: "babel-loader",
                                    options: {
                                        presets: [
                                            [
                                                "@babel/preset-env",
                                                {
                                                    useBuiltIns: "usage",
                                                    corejs: 3
                                                }
                                            ]
                                        ]
                                    }
                                }
                            ] : []
                        ),
                        { loader: "ts-loader" }
                    ],
                },
                {
                    test: /\.(sa|sc|c)ss$/,
                    use: [
                        {
                            loader: 'style-loader', options: {
                                injectType: 'lazyStyleTag',
                                modules: {
                                    namedExport: true,
                                },
                            }
                        },
                        ...(option.splitCss ? [MiniCssExtractPlugin.loader] : []),
                        "css-loader",
                        {
                            loader: "postcss-loader",
                            options: {
                                postcssOptions: {
                                    sourceMap: true,
                                    plugins: [
                                        // eslint-disable-next-line @typescript-eslint/no-var-requires
                                        require("autoprefixer")({})
                                    ],
                                    minimize: false
                                },
                            }
                        },
                        {
                            loader: "sass-loader",
                            options: {
                                sourceMap: true,
                            }
                        }
                    ]
                }
            ]
        },
        resolve: {
            extensions: [".ts", ".js", ".css", "scss"]
        },
        plugins: option.splitCss ? [
            new MiniCssExtractPlugin({
                filename: option.cssFileName
            })
        ] : [],
        optimization: {
            minimize: true,
            minimizer: [new TerserPlugin()],
            usedExports: false
        }
    };
}