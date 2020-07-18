# 面试

总结那些套路，然后不再套路。



## 批量复习

* [FE-interview](https://github.com/qiu-deqing/FE-interview)
* [50道CSS面试题](http://web.jobbole.com/94152/)
* [每日一题](https://github.com/Advanced-Frontend/Daily-Interview-Question)
* [木易杨主页](https://juejin.im/user/56dea4aa7664bf00559f002d/posts) 
* [weekly](https://github.com/dt-fe/weekly) 
* [冴羽的博客](https://github.com/mqyqingfeng/Blog) 
* [InterviewMap](https://yuchengkai.cn/docs/frontend/)
* [前端面试手册](https://github.com/yangshun/front-end-interview-handbook/blob/master/Translations/Chinese/README.md) 
* [面试厅](http://www.mianshiting.com/html/?category=Vue) 
* [JS能力测评经典](https://www.nowcoder.com/ta/js-assessment?query=&asc=true&order=&page=1) 
* [ljianshu博客目录](https://github.com/ljianshu/Blog) 
* [面试看板](https://trello.com/b/EqUS1z6J/fe-plan) 
* 微信公众号：前端早读课
* 微信公众号：前端大全
* 微信公众号：前端之巅



## 还没看的
* [面试30秒](https://juejin.im/post/5c9243f96fb9a070ce31ab46?utm_source=gold_browser_extension)
* [大厂面筋](https://juejin.im/post/5bb470295188255c5e66f88f)
* [有趣的前端编程题](https://www.rayjune.me/2018/03/31/interesting-programming-problems-ctrip-2018-spring-recruit/)
* [2018年春招前端岗-牛客网](https://zhuanlan.zhihu.com/p/35773104?group_id=969597427166273536) 2
* [17年前端面经-牛客网](https://www.zhihu.com/question/36357873/answer/206531321)
* [经典前端面试](https://www.zhihu.com/question/19841848) 
* [2019秋招](https://zhuanlan.zhihu.com/p/50189250)
* [圣杯与双飞翼](https://juejin.im/entry/5a8868cdf265da4e7e10c133?utm_source=gold_browser_extension) 
* [前端性能清单](https://github.com/JohnsenZhou/Front-End-Performance-Checklist) 
* [寒冬中的前端社招面试](https://juejin.im/post/5c8f30606fb9a070ef60996d) 
* [jsliang的2019面试准备](https://juejin.im/post/5c8e4cd3f265da67c87454a0)
* 

## 待阅列表

* 8种排序方法：快排、递归、二分法、归并排序、堆排序等
* 浏览器渲染过程
* 轮播图，轮播图组件开发，以及轮播10000张图片过程
* setTimeout和promise的执行顺序
* attribute和property的区别
* JavaScript异步编程方式
* JavaScript常用数组方法
* JS实现继承的几种方式+实现多继承
* 对 Web 语义化的理解
* GET 和 POST 的区别
* HTTP缓存机制
* JavaScript如何判断数据类型
* 稳定的排序和不稳定的排序
* LocalStorage、SessionStorage、Cookie的区别？
* 两个页面之间如何实现通信？
* 代码实现双向数据绑定？
* TCP Socket 建立连接的原理
* HTTP 长轮询的原理
* HTTPS 哪些有薄弱的地方容易被攻击？
* 类似微博或微信客户端扫码登录是如何实现的？
* TCP 和 UDP 的区别？
* this 丢失的问题如何解决？
* ES5 Object 有哪些常用的方法？
* Object.keys() 传入数组后会返回什么？
* DOM 事件流的机制？
* 介绍 pm2
* pm2 怎么做进程管理
* - @DOM 事件机制
- @跨域 （为什么有同源策略，怎么解决跨域问题）
- 常见 HTTP 请求头
- HTTP2.0（是什么，要解决什么问题）
- HTTP1.1如何复用TCP连接
- HTTP 报文的请求会有几个部分
- @Cookie
- Cookie 和 Session 的区别
- @输入URL到页面加载全过程
- TCP 3次握手
- @HTTP常见状态码 403 301 302 304
- 缓存相关的HTTP请求头
- 介绍HTTPS （解决什么问题 原理 加密过程）
- 数字签名的原理
- Access-Control-Allow-Origin在服务端哪里配置
- 并发请求资源数上限
按域限制，8个以内
- @五层模型
- @介绍 Promise （回答为了解决什么问题、如何解决、它的特点（状态机、有哪些状态等）、异常捕获）
- Promise、async 有什么区别
Promise 和 Generator 实现了 async/await
- @async await 原理
理论上可由 Promise 和 Generator 实现
function run (generatorFun) {
  const iterator = generatorFun();
  (function handleNext (value) {
    const next = iterator.next(value);
    if (next.done) {
      return next.value;
    } else {
      return Promise.resolve(next.value)
        // the throw() method resumes the execution of a generator by throwing an error into it and returns an object with two properties done and value.
        .then(handleNext, err => Promise.resolve(iterator.throw(err).value).then(handleNext))
    }
  })()
}
https://wanago.io/2018/04/23/demystifying-generators-implementing-async-await/
- @改变 this 指向的几种方式
.bind() .apply() .call()
new
箭头函数
- @JS 异步解决方案的发展历程
回调函数 -> Promise -> Generator + Promise
- bind call apply
都能绑定函数内this指向
bind不执行，call apply直接执行
apply将所有参数放在一个数组内传入
- @介绍原型链
JavaScript是基于原型的。几乎所有JavaScript中的对象都是位于原型链顶端的Object的实例。
对象A（每个对象都）有proto（是浏览器自己实现的）和prototype属性，proto指向某一个对象B的prototype，对象B的prototype就是对象A的原型，B的原型对象。
当试图访问一个对象的属性时，JavaScript不仅在该对象上搜索，还会搜索该对象的原型，该对象原型的原型，依次层层向上，直到找到或到达原型链的末尾。
- 介绍暂时性死区
let and const declarations define variables that are scoped to the running execution context’s LexicalEnvironment. The variables are created when their containing Lexical Environment is instantiated but may not be accessed in any way until the variable’s LexicalBinding is evaluated. A variable defined by a LexicalBinding with an Initializer is assigned the value of its Initializer’s AssignmentExpression when the LexicalBinding is evaluated, not when the variable is created. If a LexicalBinding in a let declaration does not have an Initializer the variable is assigned the value undefined when the LexicalBinding is evaluated.
http://www.ecma-international.org/ecma-262/6.0/#sec-let-and-const-declarations
- Map 和原生对象有什么区别
  1. 记录插入顺序
  2. 任何数据类型都能用做key和value
  3. 拥有若干数据操作方法
- @如何设计 Promise.all()
- @实现 .bind()
- 数据类型
Number, String, Undefined, Null, Boolean
Function, Array, Object
- 垃圾回收机制
- 数组常用方法
forEach map filter every reduce reverse slice splice concat join split
- _construct 是什么
- @new 的实现
- @如何实现继承
- 堆和栈分别存什么
- 微任务和宏任务
微任务：Process.nextTick, Promise, MutationObserver
宏任务：script, setTimeout, setInterval, setImmediate, I/O, UI Rendering
- let 如何实现
- 介绍formData
- @事件循环机制
事件循环是解决JavaScript单线程运行时不会阻塞的一种机制。
当函数执行时，会被添加到栈的顶部，当执行完毕后，就会从栈顶移出，直到栈内被清空
单线程任务被分为同步任务和异步任务。同步任务会在调用栈中按照顺序等待主线程依次执行，异步任务会在异步任务返回结果后，将注册的回调函数放入任务队列中等待主线程空闲时（调用栈被清空时），被读取到栈内等待主线程的执行。
（画个图）
- 类数组arrLike转换成数组
...arrLike
Array.from(arrLike)
Array.prototype.slice.call(arrLike)
- class 和 ES5 中构造函数的区别
es6类继承会继承静态方法
- 前端单元测试
- 系统设计
  1. 定义层（大的系统模块）
  2. 数据抽象
* 不同页面之间怎么通信


## 值得尝试
* 实现图片裁剪效果
* 动手实现es5中的bind方法 [JavaScript深入之bind的模拟实现](https://github.com/mqyqingfeng/Blog/issues/12) 
* 实现一个JSONP
* 长列表数据的优化
* 每隔几秒请求一次接口刷新数据
* 尾递归调用
* setTimout 实现 setInterval
* 统计字符串出现最多的字符
* 实现数组扁平化并从小到大排序：[1, [2, 3], [2, 3, 5], 7] -> [1, 2, 2, 3, 3, 5,7]
* 数组去重
* 用原生 DOM API 实现一个 prepend() 方法
* 手写封装一个 Promise？
* 手写实现 React 高阶组件？
* 手写链表反转？
* 用纯CSS写一个左右滑动的开关按钮
* 从一堆数里找出前 K 大的数？


## 有时间再看看
* 缓存中间件
* redis更新机制
* redis的数据结构
* 对mysql数据库优化
* 判断nginx负载均衡主机已经挂掉
* 动态规划
* 二叉树反转
* HTTPS 密钥交换原理
* 什么是死锁，产生死锁的必要条件
* 实现数组乱序，要求每个数字出现在每个位置的概率是平均的
* 手写代码找出二叉树节点的最长距离？
* 手写代码实现链表的逆序？
* 手写代码找出数组中的最长递增序列？（动态规划）
* 双向循环链表如何最快的找到节点？
* 解决 Hash 冲突的方式？
* B树和B+树的特点？
* 作业调度的算法？
* 产生死锁的原因？
* TCP 的滑动窗口机制？
* TCP 拥塞控制的方式？
* 浏览器内核渲染的原理？
* 有没有研究过 Chrome 的源码？
* AMD、CMD、CommonJS 的区别和联系？
* 栅格布局 CSS 代码如何实现？如何避免重复劳动？（CSS 预处理器）
* 假设有一个列表的数据，React 如何更快的加载数据？（优化方法）
* [JSBridge的原理](https://juejin.im/post/5abca877f265da238155b6bc) 
- 各种排序
- 手写快排
- 如何判断链表有环，环的入口
- 介绍二叉搜索树的特点
- 树的应用
- dfs bfs


## 深入学习
* [从源码中学习Vue](https://juejin.im/post/5c959f74f265da610c068fa8) 
* 设计模式：单例模式、工厂模式、观察者模式等
* - 观察者模式
- 中介者模式
- 订阅-发布模式


## 代码
补充：
```
   function add() {

    }
    function one() {

    }
    function two() {

    }
    console.log(one(add(two()))) // 3
    console.log(two(add(one()))) // 3
```

1. 实现一个函数 commafy，它接受一个数字作为参数，返回一个字符串，可以把整数部分从右到左每三位数添加一个逗号，如：12000000.11 转化为 12,000,000.11。
2. 实现一个函数 fun，例：fun(1).add(1).min(2).num // 最终输出为 -2
3. 实现一个 compose 函数，它接受任意多个函数作为参数（这些函数都只接受一个参数），然后 compose 返回的也是一个函数，达到以下的效果：
```
    const operate = compose(div2, mul3, add1, add1)
    operate(0) // => 相当于 div2(mul3(add1(add1(0))))
    operate(2) // => 相当于 div2(mul3(add1(add1(2))))
```
