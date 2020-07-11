/**
 * Created on 2020/07/05 1441
 * @author: zhangh_666@outlook.com
 * @desc: 把client.config挂载到vue上，不需要每次都import配置文件
 */

import config from '../../config/client.config';
export default {
  install: (Vue, options) => {
    Vue.$config = config;
    Vue.prototype.$config = config;
  }
};
