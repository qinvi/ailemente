
module.exports = {
    transform: {
        // .vue文件用 vue-jest 处理
        '^.+\\.vue$': 'vue-jest',
        // .js或者.jsx用 babel-jest处理
        '^.+\\.jsx?$': 'babel-jest',
        //.ts文件用ts-jest处理
        '^.+\\.ts$': 'ts-jest'
    },
    // 配置别名
    moduleNameMapper: {
        "@src/(.*)": "<rootDir>/src/$1",
        "@assets/(.*)": "src/assets/$1",
        "@api/(.*)": "src/api/$1",
        "@pages/(.*)": "src/pages/$1",
        "@router/(.*)": "src/router/$1",
        "@store/(.*)": "src/store/$1",
        "@components/(.*)": "src/components/$1",
        "@styles/(.*)": "src/styles/$1",
    },
    // 只执行 spec.js 结尾的文件
    testMatch: ['**/?(*.)+(spec).[jt]s?(x)']
}
