/**
 * Created on 2020/07/05 1441
 * @author: zhangh_666@outlook.com
 * @desc: 路由的配置文件
 */

import globalLayout from '@/layouts/globalLayout';
import pageLayout from '@/layouts/pageLayout';
import userLayout from '@/layouts/userLayout';

/**
 * 只是为了让你少写点代码
 * @param path
 * @param title
 * @param meta
 * @returns {{path: *, meta: {[p: string]: *}, name: *}}
 */
function initProps (path, title, meta) {
  return {
    path,
    name: path,
    meta: {
      title,
      ...meta
    }

  };
}

const rootRouter = [
  {
    path: '/',
    name: 'index',
    component: globalLayout,
    meta: { title: '首页' },
    redirect: '/model',
    children: [
      {
        // 若增加的页面是不需要显示在左边菜单，添加hide: true即可
        ...initProps('/blank', '', { hide: true }),
        component: pageLayout,
        children: []
      },
      {
        ...initProps('/model', '模板', { icon: 'switcher' }),
        redirect: '/model/template1',
        component: pageLayout,
        children: [
          {
            ...initProps('/model/template1', '模板一'),
            component: () => import('@/views/model/template1/template1.vue')
          },
          {
            ...initProps('/model/template2', '模板二'),
            component: () => import('@/views/model/template2/template2.vue')
          }
        ]
      },
      {
        ...initProps('/assembly', '组件', { icon: 'switcher' }),
        redirect: '/assembly/public1',
        component: pageLayout,
        children: [
          {
            ...initProps('/assembly/public1', '组件一'),
            component: () => import('@/views/assembly/public1/public1.vue')
          },
          {
            ...initProps('/assembly/public2', '组件二'),
            component: () => import('@/views/assembly/public2/public2.vue')
          }
        ]
      },
      {
        ...initProps('/pages', '页面', { icon: 'switcher' }),
        redirect: '/pages/page1',
        component: pageLayout,
        children: [
          {
            ...initProps('/pages/page1', '页面一'),
            component: () => import('@/views/pages/page1/page1.vue')
          },
          {
            ...initProps('/pages/page2', '页面二'),
            component: () => import('@/views/pages/page2/page2.vue')
          }
        ]
      }
    ]
  },
  {
    path: '/user',
    name: 'user',
    component: userLayout,
    meta: { title: '首页' },
    redirect: '/user/login',
    children: [
      {
        path: '/login',
        name: 'login',
        meta: { title: '登录' },
        component: () => import('@/views/login/login.vue')
      },
      {
        path: '/register',
        name: 'register',
        meta: { title: '注册' },
        component: () => import('@/views/login/register.vue')
      },
      {
        path: '/registerResult',
        name: 'registerResult',
        meta: { title: '注册成功' },
        component: () => import('@/views/login/registerResult.vue')
      }
    ]
  }

];

export default [
  ...rootRouter
];
