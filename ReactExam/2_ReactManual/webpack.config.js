module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js"
    },
    resolve: {
      // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: [".ts", ".tsx", ".js"],
      // Add support for TypeScripts fully qualified ESM imports.
        extensionAlias: {
        ".js": [".js", ".ts"],
        ".cjs": [".cjs", ".cts"],
        ".mjs": [".mjs", ".mts"]
        }
    },
    module: {
        rules: [
        //바벨로더
        {
            test: /\.(?:js|mjs|cjs)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                presets: [
                    ['@babel/preset-env', { targets: "defaults" }]
                ]
                }
            }
        },

        //이게먼저 실행되어야 하기 때문에 이게 더 뒤에있어야함.
        // all files with a `.ts`, `.cts`, `.mts` or `.tsx` extension will be handled by `ts-loader`
        { test: /\.([cm]?ts|tsx)$/, loader: "ts-loader" }
        


        ]
        
    }
};