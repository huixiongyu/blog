# 前端从入门到入职

职业成长上有个很有趣的事情：虽然同样的工作年限，但是有的人职级和工资涨的速度就是比较快。在技术这行上面试全靠吹（唬得住20k唬不住5k）的并不常见，其实诀窍在于知道如何展示硬实力，在于知道如何成长。我认为从0到熟悉有几个快捷的方式：

1. 了解知识架构，有个宏观的成长目标
2. 挑选合适的资料，有步骤地成长，而不是原地踏步在舒适区
3. 动手创作：写代码、总结和写文章分享
4. 饱和式学习，深入这个领域的方方面
5. 认真思考，打造自己的核心竞争力

以上，推荐一些学习资料，希望对你的成长有所启示。


## 前端核心知识

前端的核心首先是JavaScript知识，然后是页面布局能力（HTML和CSS），然后才是选择框架（Vue/React）。如果想更上一层楼要掌握工程化（Webpack构建）、函数式编程、数据结构和算法、UI组件库构建和框架及其周边的轮子构建。

* [CSS教程](https://www.w3school.com.cn/css/index.asp)
* [MDN-学习Web开发](https://developer.mozilla.org/zh-CN/docs/Learn)
* [ES6入门教程](https://es6.ruanyifeng.com/)

MDN有最完善的学习资料，他是我们开发中最常查看的文档，堪称前端开发的权威百科，所以照着他们推荐的路径就是了。ES6是现代开发的标配，它改善了ECMA5的缺陷，能够让我们提高开发效率。

## 工具周边

* [VS code](https://code.visualstudio.com/)：前端开发者最青睐的开发工具
* [cmder](https://cmder.net/)：Windows下模拟Linux的命令行工具
* [node.js](https://nodejs.org/zh-cn/)和[npm](https://www.npmjs.com/)：前端之所以如此蓬勃发展，在于React之流MVVM的革命性开发理念和类似Java Maven的NPM轮子库
* [lodash](https://lodash.com/docs/4.17.15)：函数式编程工具，如果你读透了源码，JavaScript能力杠杠！这个库可以提升我们的开发速度，方便地调用节流防抖函数、深拷贝等方法。
* [axios](https://www.kancloud.cn/yunye/axios/234845)：前后端分离需要一个Promise化的Ajax数据请求库

## Vue系成长指南

* [Vue官方文档](https://cn.vuejs.org/v2/guide/)
* [vue-cli文档](https://cli.vuejs.org/zh/guide/)
* [Vue Router文档](https://router.vuejs.org/zh/)
* [Vuex文档](https://vuex.vuejs.org/zh/)
* [Nuxt.js](https://zh.nuxtjs.org/guide)
* [Element-UI](https://element.eleme.cn/#/zh-CN/component/layout)
* [vue-element-admin]([https://panjiachen.github.io/vue-element-admin-site/zh/guide/#%E5%8A%9F%E8%83%BD](https://panjiachen.github.io/vue-element-admin-site/zh/guide/#功能))
* [Vue.js技术揭秘](https://ustbhuangyi.github.io/vue-analysis/)
* [《深入浅出Vue.js》](https://item.jd.com/12573168.html)

学习成长读文档是最靠谱的方式，网上的其他教程绝大部分质量不如文档，不懂的话可以多读几遍，一边动手实施，最好是手上有想要完成的项目，往往在写的过程中遇到的业务、解决的需求会在文档中找到答案。

Element-UI是国内最常用的Vue组件库，经受住各种业务的考验，相对成熟。除了查看安装指导，剩下引用的组件就是看示例和页面下部分的API。

Nuxt是服务端渲染框架，在熟悉了Vue之后可以采用这个框架来开发应用，省去自己写的麻烦。

vue-element-admin是某字节员工对面向to B业务（比如公司内部的管理控制台）写的一个方案，复制过来就能用，不过里面的代码有很多比较hack的技巧，作者已经在文档细说。

最后是掌握源码，黄轶和刘博文的老师源码分析值得读三五遍，目前黄轶是Zoom前端架构师，刘博文95年阿里最年轻P7。

## React系成长指南

* [React文档](https://zh-hans.reactjs.org/)
* [redux文档](https://www.redux.org.cn/)
* [redux-thunk](https://github.com/reduxjs/redux-thunk)
* [UmiJS](https://umijs.org/zh-CN/docs/getting-started)
* [Ant Design](https://ant.design/components/button-cn/)
* [React hooks](https://zh-hans.reactjs.org/docs/hooks-intro.html)
* [immutable-js](https://immutable-js.github.io/immutable-js/)
* [《React状态管理和同构实战》](https://item.jd.com/12403508.html)

React是View层的一个框架，它把数据状态管理交给了第三方，加上革命性的开发方式可以实现跨平台开发，每隔一段时间研发团队扔出一些爆炸性的技术创新，使它的关注热度从不减退。Vue的优点是学习曲线平缓，React学习曲线陡峭但是开发模式非常灵活和易于维护。

Ant Design是国内占据统治地位的React UI框架。

UmiJS跟Nuxt一样是服务端渲染框架。

## 面向面试学习

* [前端面试每日3+1](https://github.com/haizlin/fe-interview)
* [高级前端进阶博文](https://muyiy.cn/blog/)

