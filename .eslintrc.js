module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint',
        sourceType: 'module'
    },
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    extends: [
        'eslint-config-alloy/vue',
    ],
    rules: {
        // 这里填入你的项目需要的个性化配置，比如：

        // @fixable 一个缩进必须用两个空格替代
        'indent': [
            'error',
            2,
            {
                SwitchCase: 1,
                flatTernaryExpressions: true
            }
        ]
    }

}

