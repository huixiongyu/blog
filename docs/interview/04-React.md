# React



## 1.React的生命周期函数

- componentDidMount()，在组件挂载后自动调用
- componentWillUnmount()，在组件卸载前自动调用
- componentDidUpdate()， UI 每次更新后调用（即组件挂载成功以后，每次调用 render 方法，都会触发这个方法）。

三个不常用的：

- `shouldComponentUpdate(nextProps, nextState)`：每当`this.props`或`this.state`有变化，在`render`方法执行之前，就会调用这个方法。该方法返回一个布尔值，表示是否应该继续执行`render`方法，即如果返回`false`，UI 就不会更新，默认返回`true`。组件挂载时，`render`方法的第一次执行，不会调用这个方法。
- `static getDerivedStateFromProps(props, state)`：该方法在`render`方法执行之前调用，包括组件的第一次记载。它应该返回一个新的 state 对象，通常用在组件状态依赖外部输入的参数的情况。
- `getSnapshotBeforeUpdate()`：该方法在每次 DOM 更新之前调用，用来收集 DOM 信息。它返回的值，将作为参数传入`componentDidUpdate()`方法。

## 2.纯函数
纯函数是函数的返回值仅仅由其输入决定，没有可见的副作用。


## 3.高阶组件

[深入理解React高阶组件](https://zhuanlan.zhihu.com/p/24776678) 
[React文档-高阶组件](https://react.docschina.org/docs/higher-order-components.html) 

## 4.如何解决 props 层级过深的问题

[React新Context API在前端状态管理的实践](https://juejin.im/post/5bcdaf3f51882576eb5dd0af)  

## 5.Redux 中异步的请求怎么处理


## 6.DOM 结构发生变化后内部经历了哪些变化

## 7.react-router 里的 \<Link> 和 HTML 中的 \<a> 有什么区别

## 8.react-router 怎么实现路由切换

## 9.React 怎么做数据变化的检查，如何更新视图

## 10.使用过的 Redux 中间件

## 11.多个组件之间如何拆分各自的state，每块小的组件有自己的状态，它们之间还有一些公共的状态需要维护，如何设计

## 12.Redux 如何实现多个组件之间的通信，多个组建使用相同状态如何进行管理

## 13.介绍 Redux主要解决什么问题,数据流的流程