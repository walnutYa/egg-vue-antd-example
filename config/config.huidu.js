/**
 * Created on 2020/07/05 1441
 * @author: zhangh_666@outlook.com
 * @desc: 灰度环境
 */
'use strict';
const prodConf = require('./config.prod');

module.exports = () => {
  const config = prodConf();
  return config;
};
