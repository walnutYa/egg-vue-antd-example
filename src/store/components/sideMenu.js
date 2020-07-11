/**
 * Created on 2020/07/05 1441
 * @author: zhangh_666@outlook.com
 * @desc: 页面的左边菜单
 */

export default {
  namespaced: true,
  state: {
    // 是否收起菜单
    collapsed: false
  },
  mutations: {
    toggleCollapsed (state, { collapsed }) {
      state.collapsed = collapsed;
    }
  }
};
