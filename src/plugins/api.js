/**
 * Created on 2020/07/05 1441
 * @author: zhangh_666@outlook.com
 * @desc: 在这里统一导入api里面的所有js文件，挂载到vue实例上
 */

// 使用require.context，支持根据目录遍历所有的文件
let files = require.context('../api/', false, /^((?!.\/index).)*\.js$/);

export default {
  install: (Vue, options) => {
    let $api = {};
    files.keys().forEach(key => {
      $api[key.replace(/(\.\/|\.js)/g, '')] = files(key).default(Vue);
    });

    Vue.$api = $api;
    Vue.prototype.$api = $api;
  }
};
