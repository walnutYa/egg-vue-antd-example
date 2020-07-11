/**
 * Created on 2020/07/05 1441
 * @author: zhangh_666@outlook.com
 * @desc: 前端工具方法
 */

const $util = {
  /**
   * 删除对象的空字符串
   * @param obj
   * @returns {*}
   */
  deleteEmptyString (obj) {
    for (var i in obj) {
      if (obj[i] === '') {
        delete obj[i];
      } else if (typeof obj[i] === 'object' && !Array.isArray(obj[i])) {
        this.deleteEmptyString(obj[i]);
      }
    }

    return obj;
  }
};

export default {
  install: (Vue, options) => {
    Vue.prototype.$util = $util;
  }
};
