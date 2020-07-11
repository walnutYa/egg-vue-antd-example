/**
 * Created on 2020/07/05 1441
 * @author: zhangh_666@outlook.com
 * @desc: 遍历所有的directives文件，统一挂载
 */

// 使用require.context，支持根据目录遍历所有的文件
let files = require.context('../directives/', false, /^((?!.\/index).)*\.js$/);

export default {
  install: (Vue, options) => {
    files.keys().forEach(key => {
      files(key).default(Vue);
    });
  }
};
