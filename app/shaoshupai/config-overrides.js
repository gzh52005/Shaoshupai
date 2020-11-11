// react-app-rewired@2.x写法
const { override, addBabelPlugin, addBabelPlugins, addDecoratorsLegacy, disableEsLint, useBabelRc, fixBabelImports, addWebpackAlias } = require('customize-cra');
const path = require('path');

module.exports = override(
    // 添加babel配置
    addDecoratorsLegacy(),

    // 禁用Eslint模式（严格语法）
    disableEsLint(),
    // antd按需引入
    fixBabelImports('import', { libraryName: 'antd-mobile', style: "css" }),
    // // 配置src别名
    addWebpackAlias({
        '@': path.resolve(__dirname, 'src'),
    })

)
