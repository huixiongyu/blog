# Vue

## 1.如何理解MVVM


M指数据，V指视图，ViewModel是Vue.js的核心，一个实例。

MVVM是数据绑定的入口，整合了Observer、Compile和Watcher三者，通过Observer来监听自己的model数据变化，通过Compile来解析编译模板指令，最终利用Watcher搭起Observer和Compile之间的通信桥梁，达到数据变化通知视图更新的效果。利用视图交互，变化更新数据model变更的双向绑定效果。

## 2.Vue的生命周期


简记：创建、载入、更新、销毁
- beforeCreate/created
  - beforeCreated data是undefined，数据观测和初始化事件还没初始化
  - created： 数据观察者，属性和方法的运算，watch/event事件回调。挂载还没开始，$el属性目前不可见
- beforeMount/mounted
  - beforeMount el和data初始化了，render函数首次调用。但是还没挂载DOM节点上
  - mounted  已经挂载到DOM节点了
- beforeUpdate/updated
  - beforeUpdate（更新前）：在数据更新之前的调用，发生在虚拟DOM重新渲染和打补丁之前，可以在该钩子中进一步地更改状态，不会触发附加的重渲染过程。
  - updated（更新后）：在由于数据更改导致的虚拟DOM重新渲染和打补丁之后调用。调用时，组件DOM已经更新，所以可以执行依赖于DOM的操作。然而在大多数情况下，应该避免在此期间更改状态，因为这可能会导致更新无限循环。该钩子在服务器端渲染期间不被调用。
- beforeDestory/destroyed
  - beforeDestroy(销毁前）： 在实例销毁之前调用。实例仍然完全可用。
  - destroyed（销毁后） ：在实例销毁之后调用。调用后，所有的事件监听器会被移除，所有的子实例也会被销毁。该钩子在服务器端渲染期间不被调用。
[Vue面试中，经常会被问到的面试题/Vue知识点整理](https://segmentfault.com/a/1190000016344599)

## 3.如何实现数据双向绑定？
vue实现数据双向绑定主要是：**采用数据劫持结合发布者-订阅者模式**的方式，通过**Object.defineProperty()**来劫持各个属性的setter，getter，在数据变动时发布消息给订阅者，触发相应监听回调。当把一个普通 Javascript 对象传给 Vue 实例来作为它的 data 选项时，Vue 将遍历它的属性，用 Object.defineProperty 将它们转为 getter/setter。用户看不到 getter/setter，但是在内部它们让 Vue 追踪依赖，在属性被访问和修改时通知变化。

vue将MVVM作为数据绑定的入口，整合Observer，Compile和Watcher三者，通过Observer来监听自己的model的数据变化，通过Compile来解析编译模板指令，最终利用watcher搭起observer和Compile之间的通信桥梁，达到数据变化 —>视图更新；视图交互变化（input）—>数据model变更双向绑定效果。

- Observer数据监听器：劫持监听所有属性
- Compile指令解析器：对每个元素节点的指令进行扫描和解析，根据指令模板替换数据，以及绑定相应的更新函数
- Watcher:订阅属性变化的通知，绑定更新的函数

![mark](http://qiniu.hackslog.cn/blog/20190524/C2P5tcA3wN9e.png?imageslim)

[剖析vue原理，自己动手实现mvvm](https://github.com/DMQ/mvvm) 

[MDN Object.defineProperty()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) 

[谈谈Javascript中的双向数据绑定](http://www.html-js.com/article/Study-of-twoway-data-binding-JavaScript-talk-about-JavaScript-every-day) 

[实现双向绑定Proxy比defineproperty优劣如何？](https://juejin.im/post/5acd0c8a6fb9a028da7cdfaf) 

[你能写一个Vue的双向数据绑定吗？](http://web.jobbole.com/94386/) 

[AST](https://segmentfault.com/a/1190000016231512) 

## 4.路由的钩子函数

全局路由守卫：befoeEach, beforeResolve,  afterEach

路由独享守卫：beforeEnter

组件级钩子： beforeRouteEnter, beforeRouteUpdate, beforeRouteLeave

- to:即将要进入的路由对象
- from:当前导航正要离开的路由
- next:调用resolve方法


完整的导航解析流程：

1. 导航被触发。
2. 在失活的组件里调用离开守卫。
3. 调用全局的 `beforeEach` 守卫。
4. 在重用的组件里调用 `beforeRouteUpdate` 守卫 (2.2+)。
5. 在路由配置里调用 `beforeEnter`。
6. 解析异步路由组件。
7. 在被激活的组件里调用 `beforeRouteEnter`。
8. 调用全局的 `beforeResolve` 守卫 (2.5+)。
9. 导航被确认。
10. 调用全局的 `afterEach` 钩子。
11. 触发 DOM 更新。
12. 用创建好的实例调用 `beforeRouteEnter` 守卫中传给 `next` 的回调函数。

## 5.什么情况下使用computed、methods和watch?

计算属性是自动监听依赖值的变化，从而动态返回内容，监听是一个过程，在监听的值变化时，可以触发一个回调，并做一些事情。 

只是需要动态值，那就用计算属性；需要知道值的改变后执行业务逻辑或者异步逻辑，才用 watch

computed有set和get两个选型,可以缓存，methods不行

methods可以接收参数，computed不行

执行异步开销比较大时可以考虑用watch

## 6.怎么理解虚拟DOM和template？

template首先转化为AST，然后通过render函数进行渲染返回VNode

1. 通过compile编译器把template编译成AST，compile是createCompiler的返回值，createCompiler用来创建编译器
2. AST会经过generate得到render函数，render的返回值是VNode，VNode是Vue.js的虚拟节点

## 7.如何自定义指令

directive方法，钩子函数如下：

- bind 在指令第一次绑定到元素时调用
- inserted： 在被绑定元素插入父节点时调用
- update: 在组件的VNode更新时调用
- componenentUpdated:在指令所在的组件VNode以及其子VNode全部更新后调用
- unbind： 解绑时调用

参数：

- el： 指令所绑定的元素
- binding： 指令对象
- vnode： 虚拟节点
- oldVnode上一个虚拟节点

1.局部指令

```
var app = new Vue({
    el: '#app',
    data: {    
    },
    // 创建指令(可以多个)
    directives: {
        // 指令名称
        dir1: {
            inserted(el) {
                // 指令中第一个参数是当前使用指令的DOM
                console.log(el);
                console.log(arguments);
                // 对DOM进行操作
                el.style.width = '200px';
                el.style.height = '200px';
                el.style.background = '#000';
            }
        }
    }
})
```

2.全局指令

```
 Vue.directives('change', {
     bind: funciton(el, bindings){
         //首次调用
     },
     update: funciton(el, bindings){
         //只要数据由变化都会调用
     },
     unbind: function(){
         //解绑的时候调用
     }
 })
```
## 8.什么是虚拟DOM
虚拟DOM是用JavaScript对象对真实DOM进行抽象

## 9.Vue自定义一个过滤器

过滤器的本质是带有返回值的方法，可以用来对数据进行筛选、过滤和格式化等。

html代码：

    <div id="app">
         <input type="text" v-model="msg" />
         {{msg| capitalize }}
    </div>

JS代码：

    var vm=new Vue({
        el:"#app",
        data:{
            msg:''
        },
        filters: {
          capitalize: function (value) {
            if (!value) return ''
            value = value.toString()
            return value.charAt(0).toUpperCase() + value.slice(1)
          }
        }
    })

全局定义过滤器

    Vue.filter('capitalize', function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    })

过滤器接收表达式的值 (msg) 作为第一个参数。capitalize 过滤器将会收到 msg的值作为第一个参数。

## 10.Vuex
将数据集中放在store中，改变数据用mutations,异步逻辑用actions

![vuex](http://qiniu.hackslog.cn/18-11-19/63524550.jpg)

- state  保存数据
- mutations:分模块
- getters
- actions

```
const store = new Vuex.Store({ //store实例
      state: {
         count: 0
             },
      mutations: {                
         increment (state) {
          state.count++
         }
          },
      actions: { 
         increment (context) {
          context.commit('increment')
   }
 }
})
```
## 11.Vue mixin 的使用

## 20.Vue项目打包优化
方法：
Vue Router 懒加载
CDN引入依赖
第三方库按需引入
开启Gzip
关闭生产环境sourceMap

![mark](http://qiniu.hackslog.cn/blog/20190522/nTfGskQoEkIh.png?imageslim)

* [Vue-cli全面配置](https://juejin.im/entry/5c170fd5e51d452b3e135aa4#top) 
* [Vue CLI项目优化实战——CDN+gzip+Prerender](https://juejin.im/post/5b97b84ee51d450e6c7492f6) 
* [jsdelivr](https://www.jsdelivr.com/) 
* [externals](https://webpack.docschina.org/configuration/externals/) 
* [HtmlWebpackPlugin](https://webpack.docschina.org/plugins/html-webpack-plugin/) 
* [关于vue-cli3配置打包优化要点](https://echi1993.github.io/2019/04/21/%E5%85%B3%E4%BA%8Evue-cli-3%E9%85%8D%E7%BD%AE%E6%89%93%E5%8C%85%E4%BC%98%E5%8C%96%E8%A6%81%E7%82%B9/) 
* [HTML和静态资源](https://cli.vuejs.org/zh/guide/html-and-static-assets.html#html) 
* 


## 100.Nuxt.js的工作过程

当你访问一个基于Nuxt.js构建的页面时，发生了的事情如下：

1. 当用户访问应用程序, 如果store中定义了 [`nuxtServerInit` action](https://nuxtjs.org/guide/vuex-store/#the-nuxtserverinit-action)，Nuxt.js将调用它更新store。
2. 接下来，将加载即将访问页面所依赖的任何[中间件](https://nuxtjs.org/guide/routing/#middleware)。Nuxt首先从`nuxt.config.js`这个文件中，加载全局依赖的中间件，之后检测每个相应页面对应的[布局文件](https://nuxtjs.org/guide/views#layouts) ，最后，检测布局文件下子组件依赖的中间件。以上是中间件的加载顺序。
3. 如果要访问的路由是一个动态路由, 且有一个相应的 `validate()` 方法[路由的validate 方法](https://nuxtjs.org/api/pages-validate)，将进行路由校验。
4. 之后, Nuxt.js 调用 `asyncData()` 和 `fetch()` 方法，在渲染页面之前加载异步数据。[`asyncData()` ](https://nuxtjs.org/guide/async-data/)方法用于异步获取数据，并将fetch回来的数据，在服务端渲染到页面。 用[`fetch()`](https://nuxtjs.org/api/pages-fetch/) 方法取回的将数据在渲染页面之前填入store。
5. 最后一步, 将所有数据渲染到页面。

下图阐述了 Nuxt.js 应用一个完整的服务器请求到渲染的流程:


参考：[Vue.js应用框架Nuxt.js](https://www.w3ctech.com/topic/2067) 





KeepAlive的属性
封装Swiper，点击的时候停止，放开自动播放。
deep，修改样式
CSS自动跟随  Sticky属性
封装图片验证码
base64
axios接口设计
H5下拉自动显示的效果
websocket
视觉日记
页面间交换数据
智慧找房
gitblog登录请求数据的错误

