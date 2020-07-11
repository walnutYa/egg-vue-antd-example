/**
 * Created on 2020/07/05 1441
 * @author: zhangh_666@outlook.com
 * @desc: 公共api
 */
'use strict';
module.exports = app => {
  return class extends app.Controller {
    /**
     * 接口转发
     * @returns {Promise<void>}
     */
    async ajaxApi () {
      // 使用自定义框架的核心方法
      const data = await this.ctx.$proxyApi(this.ctx.$decryptUrl());
      this.ctx.body = data;
    }

    /**
     * 上传图片到阿里云
     * @returns {Promise<void>}
     */
    async ossUpload () {
      const data = await this.ctx.$ossUpload({ userId: 1, fileSize: 5 });
      this.ctx.body = data;
    }

    /**
     * 转发文件上传到其他的接口，默认是上传到member的阿里云上传接口
     * @returns {Promise<void>}
     */
    async ajaxUpload () {
      const data = await this.ctx.$proxyUpload();
      this.ctx.body = data;
    }

    /**
     * 获取用户信息
     * @returns {Promise<void>}
     */
    async getUserInfo () {
      // const data = this.ctx.session.userData;
      const data = {
        account: 123,
        userId: 123,
        name: 'walnutYa'
      };
      this.ctx.helper.formatBody(data);
    }
  };
};
