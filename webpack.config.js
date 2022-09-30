const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        main: path.resolve(__dirname, 'src/index.js'),
    },
    resolve: {
        fallback: {
            util: false,
            path: false,
            crypto: false,
            zlib: false,
            stream: false,
            buffer: false,
            https: false,
            http: false,
            url: false,
            vm: false,
            querystring: false,
            os: false,
            assert: false,
            constants: false,
            fs: false,
            module: false,
            esbuild: false,
            '@swc/core': false,
            'uglify-js': false,
            worker_threads: false,
            child_process: false,
        },
    },
};
