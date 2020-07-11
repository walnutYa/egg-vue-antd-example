/**
 * Created on 2020/07/05 1441
 * @author: zhangh_666@outlook.com
 * @desc: 插件配置
 */
'use strict';
/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  nunjucks: {
    enable: true,
    package: 'egg-view-nunjucks'
  },
  static: {
    enable: true
  }
};
