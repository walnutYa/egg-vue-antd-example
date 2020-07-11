/**
 * Created on 2020/07/05 1441
 * @author: zhangh_666@outlook.com
 * @desc: ant-design-vue的统一配置文件，按需加载，全局导入js文件会非常大
 * 具体的组件列表参考：https://github.com/vueComponent/ant-design-vue/blob/master/site/components.js
 */

import Vue from 'vue';
// import Antd from 'ant-design-vue';
// import 'ant-design-vue/dist/antd.css';
// Vue.use(Antd);
import {
  ConfigProvider,
  Affix,
  Button,
  message,
  notification,
  Modal,
  Menu,
  Layout,
  Row,
  Col,
  Icon,
  Dropdown,
  Card,
  List,
  Avatar,
  Progress,
  Spin,
  Input,
  InputNumber,
  Form,
  Popconfirm,
  Drawer,
  Badge,
  Tabs,
  Breadcrumb,
  Checkbox,
  Popover,
  Select,
  Result
} from 'ant-design-vue';

Vue.prototype.$message = message;
Vue.prototype.$notification = notification;
Vue.prototype.$info = Modal.info;
Vue.prototype.$success = Modal.success;
Vue.prototype.$error = Modal.error;
Vue.prototype.$warning = Modal.warning;
Vue.prototype.$confirm = Modal.confirm;

Vue.use(ConfigProvider);
Vue.use(Affix);
Vue.use(Button);
Vue.use(Menu);
Vue.use(Modal);
Vue.use(Layout);
Vue.use(Row);
Vue.use(Col);
Vue.use(Icon);
Vue.use(Dropdown);
Vue.use(Card);
Vue.use(List);
Vue.use(Avatar);
Vue.use(Progress);
Vue.use(Spin);
Vue.use(Input);
Vue.use(InputNumber);
Vue.use(Form);
Vue.use(Popconfirm);
Vue.use(Drawer);
Vue.use(Badge);
Vue.use(Tabs);
Vue.use(Breadcrumb);
Vue.use(Checkbox);
Vue.use(Popover);
Vue.use(Select);
Vue.use(Result);
