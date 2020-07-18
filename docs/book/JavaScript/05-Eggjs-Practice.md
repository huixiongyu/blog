# 《Node.js实战：使用Egg.js+Vue.js+Docker构建渐进式、可持续集成与交付应用》

这本书给人的感觉是花里胡哨，用pug写HTML，用stylus和Sass交替使用，TS写Vue.js，Github和Gitlab混用，代码上没有多少耳目一新的东西，不过Docker部署讲的还差不多，算个入门。

阅读时间：2020年6月13日

用时：约3小时

## 第1章  Node.js的优势

CPU密集操作是Node.js的短板，它更擅长I/O密集操作。

Egg.js框架中的Egg-Cluster模块利用多进程解决了Node.js只能利用单核的问题。

## 第2章  Egg.js框架核心原理与实现

事件模块是学习Node.js的基础，Node.js的不少模块都是基于事件模块构建的。

Rx.js通过观察者模式实现异步，相当于Promise的增强版。

学习Egg的相关知识：

* egg-core的实现
* egg-init原理
* egg-cluster的实现
* 创造Egg插件

## 第3章  构建后端API服务

配置如何连接数据库，这里数据库使用的是关系数据库MySQL，因为我们要存储的数据基本都是有关系的，使用非关系数据库则不太合适。

egg-sequelize进行数据库配置

mocha测试覆盖率：[链接](https://istanbul.js.org/docs/tutorials/mocha/)

上传覆盖率：[codecov](https://codecov.io/)

关于Eslint：extends表示要继承的配置，eslint-config-egg是Egg官方提供的配置，plugins指定要添加的插件，rules则是指定验证规则。

prettier与VSCode配合，可以实现保存代码文件立即格式化，但是保存后的格式同ESlint即Egg默认的规则有冲突，所以大家可以根据报错提示忽略一些错误。

```
npm install eslint-plugin-prettier prettier --save-dev

"files.autoSave": "off",
"eslint.autoFixOnSave": true
```

把一些常用的无依赖的函数封装到全局是可行的，比如说调试函数、帮助函数、以及无副作用的函数。但是把所有的依赖都加载到全局中就不是一个正确的做法。而且把大对象加入全局对象上会发生内存泄漏，需要谨慎而行。



注释相关的文档：

* [JSDoc](https://jsdoc.app/)
* [ESDoc](https://esdoc.org/)



加密密码更安全的方式是使用bcrypt算法：

```
npm install bcrypt

use.password = await bcrypt.hash(user.password, 10)
```



passport：

```
npm install egg-passport egg-passport-local
npm install egg-jwt
```

passport中封装了登录的公用组件，而passport-local则是本地登录的逻辑。在开发的时候往passport-local里传入一个用于验证用户名与密码的回调，passport会帮我们从ctx上获取用户名与密码，传入我们在passport-local的回调中，供我们验证。



公司可以使用企业邮箱，这类服务也比较多，比如阿里云邮、Sendcloud等，基本每个月都有几百条的免费额度。

```
enpm install egg-mail
```



使用debugger，需要设置eslint的no-debugger为off。

因为在后台可以对所有的模型都有修改权限，并且没有什么限制，所以我们要保护API。比如用basic-auth

OAuth2.0本质上来说就是两台服务器之间通过HTTP相互交换数据而已。

egg-oauth2-server是对node-outh2-server的一个封装，node-oauth2-server中定义好了如何实现上面所述的授权码模式的授权，只需要我们实现对应的接口即可。

支付宝：对开发者来说，有沙箱环境可供我们进行正常的开发。[开发者登录](https://openhome.alipay.com/platform/home.htm)

alipy-node-sdk

内网穿透：[ngrok](https://ngrok.com/)

egg-passport-github

## 第4章  构建后台管理页面

Vue的VS Code插件：Vetur

跨域支持：egg-cors

lodash debounce：`fn = debounce(innerFn, 300)` 是函数去抖动，就是让innerFn函数永远延迟300毫秒执行，当300毫秒内多次执行fn时，会从最后一次执行fn的时间开始计时，超过300毫秒就会真正执行innerFn。这样的好处就是当innerFn函数被频繁触发的时候，只有最后一次调用超过300毫秒之后才真正执行，这样可以提高效率。

## 第5章  前端界面设计与实现

[bluma](https://bulma.io/)是SASS写的一个CSS库。

懒加载图片：vue-lazyload，动画显示：aos



页面滚动：

最开始笔者通过监听滚动来实现下拉时间，但是在使用滚动时，为了实现更好的效果，可能要使用函数去抖动拦截一下频繁触发的函数，而且还要兼容移动端，因为移动端的footer高度会变得更高，这就比较麻烦。可以使用IntersectionObserver来控制获取数据，逻辑的意思就是当footer进入可视区的时候加载数据。intersectionRatio表示进入可视区的百分比。

监听滚动要销毁。



localfrage是浏览器存储的一个封装库，提供了Promise风格的接口，支持WeBSQL、IndexDB、LocalStorage等。我们使用LocalStorage持久存储用户的Token。



file对象不能直接显示，通过URL.createObjectURL方法可以创建一个本地的临时地址来显示。所以通过images get进行转换后才能正常显示。



## 第6章  部署与运维

Docker可以让你写一份Dockerfile文件，运行在任何地方。

开发完成后通过docker commit命令将容器制作成镜像，然后上传到自己的私有仓库中，在线上服务器拉取这个镜像运行即可。

docker-compose.yml配置可以同时启动多个容器，并定义它们之间的存储和网络关系，然后让这些容器提供服务。

安装：

```
curl -ssl https://get.daocloud.io/docker | sh
```

通过docker pull 可以下载镜像，所有镜像都可以到hub.docker.com中找到，并且会有README.md告诉如何使用该镜像。

通过docker ps -a查看所有容器，不加a参数会隐藏停止的容器。

通过docker commit 将安装了VIM的CentOS容器制作为自己的镜像。



随便创建一个项目，使用shipit的deploy模块部署，其实是使用git进行部署的。

shipit提供了copyToRemote方法，这样其实可以将文件从本地复制到部署服务器上。



Ansible是专业的运维工具。



## 第7章  性能分析与优化

服务器性能测试：egg-alinode

[Node.js性能平台](https://www.aliyun.com/product/nodejs)

Python工具[locust.io](https://locust.io/)

超过8s留存率会变成40%，会让人感觉很慢，所以当用户数和用户产生的请求数同实际网站的运行情况差不多得时候，就需要搭建负载均衡来提高响应时间了。



百度分析：[百度统计](https://tongji.baidu.com/web/welcome/login)

_hmt是之前我们添加的JS代码得到的变量，_trackEvent代表追踪时间。

对于单页App，由于_hmt只会在进入的时候执行一次，所以只会记录一次。为了解决这种问题，我们可以为每一个路由添加一个这样的钩子：

```
router.afterEach((to, from) => {
	_hmt.push(['_trackPageview', to.fullPath]);
})
```



lighthouse性能优化

sonarwhal检查错误

hotjar用户反馈



IM通信：

* [Daovoice](https://www.daovoice.io/)
* [intercom](https://www.intercom.com/)
* [udesk](https://www.udesk.cn/)
* [xiaoduoai](https://www.xiaoduoai.com/)
* [环信](http://www.easemob.com/)

