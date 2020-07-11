# egg-ant-vue-example

> 简介：样例项目采用egg+vue+ant-design-vue来进行开发，egg提供服务器端的服务，可以用来转发接口，接口封装等，
vue提供前端项目的基本框架，支持vue-router、vuex等，渐进式开发，ant-design-vue作为ant-design的官方vue ui库，
项目使用该ui库进行开发。

## 快速开始

项目本身用到了一些私包，如果用npm按照会非常的慢，建议使用yarn来安装依赖包。

```shell
// 1.全局安装yarn
$ npm install -g yarn

// 设置yarn的下载源到私服

$ yarn config set registry https://registry.npm.taobao.org

// 2.进到你的项目根目录，下载所有依赖包
$ yarn

// 3.启动本地egg服务
$ npm run local

// 4.运行本地开发服务
$ npm run start 

// 编译打包生产程序
$ npm run build 


// 5.配置 nginx.conf
    server {
        listen 80;
        server_name dev.example.com;

        location /api/ {
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_pass http://127.0.0.1:7107;
        }
      

        # 非静态路由走eggjs   
        location / {
            proxy_pass http://127.0.0.1:7107/;
        }

        # 静态文件代理到webpack，开发环境下使用，生产环境需要注释       
        location /static/ {
            proxy_pass http://127.0.0.1:7207/static/;
            proxy_buffering off;
        }

    }

// 6.配置hosts 127.0.0.1 dev.example.com

// 7.开启nginx.exe

// 8.访问 http://dev.example.com

```


## 项目结构

```
EGG-VUE-ANTD-EXAMPLE
├─app eggjs的目录文件，主要用来做一些服务器端的操作，如接口转发，接口封装等
│  ├─controller
│  │   ├─common.js
│  │   ├─home.js
│  │   └─...
│  │
│  ├─extend
│  │   ├─context.js
│  │   ├─helper.js
│  │   └─...
│  │
│  └─...
│
├─config 项目的配置文件
│  ├─clinet.config.js 前端项目的全局配置，有些配置如果后端也需要用到，也可以配置在此，例如请求的域名等；
│  ├─config.default.js 默认配置
│  ├─config.dev.js 开发配置
│  ├─config.test.js 测试配置
│  ├─config.huidu.js 灰度配置
│  ├─config.prod.js 生产配置
│  ├─plugin.js
│  └─...
│
├─public
│  ├─favicon.ico
│  ├─index.html
│  └─...
│
├─src
│  ├─api 前端的接口配置文件，有点像eggjs里面的service，需要按照模块来划分
│  │  ├─common.js 公共文件
│  │  └─...
│  │
│  ├─assets 存放公共的静态文件，例如图片、css、js等；
│  │  ├─imgs
│  │  ├─css
│  │  ├─js
│  │  └─...
│  │
│  ├─components 存放业务组件，用在一些业务逻辑需要复用的组件，一般是非展示型的
│  │  ├─HelloWord.vue
│  │  └─...
│  │
│  ├─directives 自定义的指令，一般用来对dom进行底层的操作，或者是用来封装事件或者jQuery插件等
│  │  ├─lazyImg.js
│  │  └─...
│  │
│  ├─filters 自定义的过滤器，用来展示文本的格式化，项目中已经内置了vue2-filters，不要重复定义
│  │  ├─filters.js
│  │  └─...
│  │
│  ├─layouts 存放展示组件，组件本身没多少逻辑代码，只是一些数据展示或者是一些全局框架的布局
│  │  ├─adminHeader.vue
│  │  └─...
│  │
│  ├─mixins 混合对象，可以抽象一些业务逻辑代码，例如分页的逻辑、增删查改等操作等，需要用到的页面进行合并即可
│  │  ├─pageList.js
│  │  └─...
│  │
│  ├─plugins 自定义插件，可以用作实例上面的方法，一旦启用，vue实例即可访问，不需要每次都要import
│  │  ├─api.js 会挂载所有的api方法到$api上，在实例中使用this.$api.模块.方法，即可调用接口
│  │  ├─axios.js 自定义封装了axios，对axios对象进行配置和接口拦截等，通用的ajax方法
│  │  ├─config.js 会把client.config对象挂载到this.$config上
│  │  ├─directive.js 挂载所有的指令
│  │  ├─mixin.js 挂载所有的mixin，使用的时候用window.Global.Vue.$mixin来进行实例化，不能用this.$mixin，这是它不同的地方
│  │  └─...
│  │
│  ├─router 路由的配置，这里稍后会有些修改，可能会根据页面进行自动生成
│  │  ├─index.js
│  │  ├─router.config.js
│  │  ├─routers.js
│  │  └─...
│  │
│  ├─store 存放vuex的store
│  │  ├─global.js 全局的state，一般存放全局的共享数据，跟组件数据无关的，一般是实体数据，例如当前登录的用户信息
│  │  ├─index.js
│  │  └─...
│  │
│  ├─views 页面存放的位置
│  │  ├─home
│  │  └─...
│  │
│  ├─antDesignVue.js antd的组件注入管理，尽量不要导入所有组件，不然整个js文件会很大。
│  ├─App.vue vue的根节点文件
│  ├─main.js vue的js入口文件，在这里导入所有的依赖文件
│  └─...
│
├─app.js
├─vue.config.js vue项目的一些webpack配置
├─babel.config.js
├─postcss.config.js
├─webstorm.config.js 主要用来映射文件目录，需要webstorm里面添加配置，教程看下面其他文件... 大家都懂不解释了
├─.browserslistrc
├─.editorconfig
├─.eslintrc.js
├─.gitignore
├─README.md
└─package.json

```

## 开发规范

- vue文件（包括组件和页面）必须要命名name属性，这样在vue调试工具中，可以搜索name，快速定位问题；
- vue文件中的js和css分别超过100行，都需要进行分离，这样有利于代码查找和编写；
- 前端调用后端接口统一使用/api/ajaxApi进行代理，不再需要在后端编写service和controller，如果需要特殊封装的接口才需要写controller；
- 前端的配置或者前端后端公用的配置统一放在`client.config.js`中，敏感的配置需要放在`config.default.js`中；
- 所有文件名统一使用小驼峰的命名；
- 访问vuex的state如果不涉及到异步，直接用mutation即可，只有涉及到异步的时候才需要使用action；
             
