import path from "path";
import {fileURLToPath} from 'url';
import {merge as webpackMerge} from "webpack-merge";
import nodeExternals from "webpack-node-externals";
import {CleanWebpackPlugin} from "clean-webpack-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const commonsConfig = {
    context: __dirname,

    plugins: [
        new CleanWebpackPlugin({
            cleanStaleWebpackAssets: false,
            cleanOnceBeforeBuildPatterns: [path.resolve(__dirname, './dist')],
        })
    ],

    entry: {
        index: './src/index.ts',
    },

    resolve: {
        extensions: ['.ts', '.js', '.json'],
    },

    module: {
        rules: [
            {test: /\.ts?$/, use: 'ts-loader', exclude: /node_modules/},
        ],
    },

    performance: {
        hints: false
    },

    optimization: {
        minimize: false,
    }
}

export default (env, argv) => ([
    webpackMerge(commonsConfig, {
        target: 'web',

        experiments: {
            outputModule: true,
        },

        output: {
            path: __dirname + '/dist/web',
            filename: '[name].js',
            libraryTarget: "module",
            chunkFormat: "module"
        },
    }),

    webpackMerge(commonsConfig, {
        target: 'node',

        module: {
            rules: [
                {test: /\.node$/, use: 'node-loader'}
            ],
        },

        externals: [nodeExternals({importType: 'module'})],

        experiments: {
            outputModule: true,
        },

        output: {
            path: __dirname + '/dist/node',
            filename: '[name].js',
            libraryTarget: "module",
            chunkFormat: "module"
        },
    })
])

