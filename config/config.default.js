/**
 * Created on 2020/07/05 1441
 * @author: zhangh_666@outlook.com
 * @desc: 默认配置环境
 * eslint valid-jsdoc: "off"
 */
'use strict';
const path = require('path');
const clientConfig = require('./client.config');
const { devServer } = require('../vue.config');

module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1550309179366_8625';

  // add your middleware config here
  config.middleware = [];

  // 增加对xlsx的上传支持
  config.multipart = {
    fileExtensions: [ '.xlsx' ], // 增加对 .apk 扩展名的支持
    fileSize: '100mb' // 最大上传大小
  };

  // 所支持配置文件的格式
  config.security = {
    csrf: {
      enable: false
    },
    xframe: {
      enable: false
    }
  };

  // 表单提交大小限制
  config.bodyParser = {
    formLimit: '20mb',
    jsonLimit: '20mb',
    queryString: {
      arrayLimit: 10000, // 默认的100是不够的，超过100以后会变成对象，坑得一B
      depth: 5,
      parameterLimit: 10000
    }
  };

  // 客户端HTTP协议配置
  config.httpclient = {
    request: {
      // 默认 request 超时时间
      timeout: 1000000
    }
  };

  // 默认配置所在具体目录支持的模板
  config.view = {
    defaultViewEngine: 'nunjucks',
    cache: true,
    root: [
      /* 自定义目录 */
      path.join(__dirname, '../dist')
    ].join(',')
  };

  // 开启静态目录
  config.static = {
    // maxAge: 31536000,
    prefix: '/static',
    dir: path.join(__dirname, '../dist/')
  };

  // 本地开发环境的webpack地址
  config.devStaticPath = `http://127.0.0.1:${devServer.port}/static/`;

  // add your user config here
  const userConfig = {
    // 请求域名的配置
    api: clientConfig.api,
    // dataapi接口的key
    dataApiToken: {
      'x-access-token': '1494a429dd3707f36c1a692e997c349d',
      'x-key': 'mTTWSrxzEQY9DvKc'
    }
  };

  return {
    ...config,
    ...userConfig
  };
};
