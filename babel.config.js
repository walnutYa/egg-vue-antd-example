/**
 * Created on 2020/07/05 1441
 * @author: zhangh_666@outlook.com
 * @desc: babel配置文件
 */
'use strict';
const plugins = [
  [
    'import',
    { libraryName: 'ant-design-vue', libraryDirectory: 'es', style: true }
  ]
];

if (process.env.NODE_ENV === 'production') {
  // 移除console.log
  plugins.push('transform-remove-console');
}

module.exports = {
  /* 在新的webpack已经不允许 import 和 module.exports 共存，让babel来自动转 */
  sourceType: 'unambiguous',
  presets: [
    '@vue/app'
  ],
  plugins
};
