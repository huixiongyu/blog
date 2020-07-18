# 《React.js实战》

这本书的大部分内容是比较基础的，不过Redux部分的解释和redux-thunk、redux-saga在自己使用过一遍后可以再细读一下作者所说的工作原理。另外服务端渲染很值得自己手动实现一遍。

这本书的阅读体验不太好，代码应该给个Github仓库，不然查看来回折腾好久，微信读书上代码显示应该是扫描出来的，显示的区域有时大有时小，忒难受了。

## 第3章-React组件

通信可以简单地理解为组件之间的数据传递，如父子组件之间的通信、同级组件之间的通信等。

props一般不允许更改，用static关键字来定义默认的props值。

```
static defaultProps = {
  name: '灰熊'
}
```

组件之间的通信：子组件可以通过this.props调用父节点的方法更新父组件的state值。

* 组件与组件之间有一个共同的父组件，可以通过父组件来通信，即一个子组件可以通过父组件的回调函数来改变props，从而改变另一个子组件的props。
* React提供了一种上下文方式，允许子组件可以直接访问祖先组件的属性和方法，从而使效率得到很大的提升。

生命周期：

* 挂载期
* 更新期
* 卸载期

挂载期依次触发：

1. constructor
2. getInitialState（ES6中被废弃）
3. getDefaultProps（ES6中被废弃）
4. componentWillMount
5. render
6. componentDIdMount

组件更新过程：

* componentWillReceiveProps：当父组件更新子组件的state时，该方法会被调用
* shouldComponentUpdate：该方法决定组件state或者props的改变是否需要重新渲染组件。
* componentWillUpdate：在组件接受新的props或者state时，即将进行重新渲染前调用该方法，和componentWillMount方法类似。
* componentDidUpdate：在组件重新渲染后调用该方法，和componentDidMount方法类似。



**在组件更新过程中，需要注意shouldComponentUpdate（）方法，如果该方法返回值为false时，组件将不进行重新渲染。该方法如果能用的恰到好处，就能够在React性能优化方面起到一定作用。**



## 第4章-漫谈React事件系统

事件循环原理

事件捕获->事件冒泡

this指向本组件，在构造方法中声明时，一定要用bind（）来绑定，传入this参数。

## 第5章-深入React原理

用JSX书写代码时，一定要记住＜script＞标签中的type为“text/babel”，因为JSX是浏览器不识别的，需要利用babel来对JSX进行编译，转为浏览器能够理解的JavaScript代码。

JSX的样式使用，样式写在对象里，找一个括号括起来，样式变量名和属性名用驼峰。

```
render() {
	const bgColor = {
		backgroundColor: "red"
    }
    return (
    	<button style={bgColor}>按钮</button>
    )
}
```

或者内联使用(第一个{}是JSX语法，第二个{}是对象)：

```
<button style={{backgroundColor: "red"}}>按钮</button>
```

**如果遇到同一层级的子节点进行操作时，需要加上key属性来进行唯一区别，否则React会进行告警。key的唯一属性是避免删除、创建等重复操作，减少性能消耗。**

setState（）方法为**异步操作**，实质上是通过一个队列机制来更新state。

如果想在setState后立即得到最新的state值，可以通过函数来实现：

```
this.setState({
	function(state) {
		return {
			count: state.count + 1
		}
	}
})
```

## 第6章-React组件编写实战

无状态组件

```
const HelloWorld = (props) => {
	return (
		<div>
			hello {props.name}
		</div>
	)
}
```

所谓高阶函数，就是可以以一个函数为入参，返回结果也可能是函数的一个复杂函数。其实之前用到的setTimeout（）、Array.map（）都是高阶函数。

高阶函数实例：

```
function add(x, y) {
	return x + y;
}
function higherFunc(x, y, f) {
	return f(x, y);
}
console.log(higherFunc(1, 2, add))
```

**高阶组件就是一个函数，其参数可以接收一个组件，然后可以返回一个组件**

高阶组件的用法：

1. 属性代理：比如修改原始组件的属性
2. 反向继承：基础组件成为父类，高阶组件成为子类



## 第7章-Redux数据管理

Flux的四个概念：

* Dispatcher：处理动作的一个分发器，是Flux应用程序中数据流的中心枢纽，主要任务是将收到的行为分发给Store。
* Store：对数据进行管理。
* View: React组件，主要负责View层。
* Action：提供给Dispatcher，传递数据给Store。

Flux结构图：

![flux](https://huixiong.oss-cn-beijing.aliyuncs.com/reading/Flux_2020-04-23_17-18-11.png)

[mobx](https://mobx.js.org/README.html)

![mobx](https://huixiong.oss-cn-beijing.aliyuncs.com/reading/mobx_2020-04-23_17-24-47.png)

Redux吸收了Flux的优点，例如单向数据流、依赖变动等特性。但是，Redux还加入了一些新的特性，例如undo、redo等。同时，Redux保持轻量级API，便于实现更高层次的抽象。

state本身是普通对象，没有修改器方法（setter方法），而state的修改是先通过发起action描述当前发生了什么，最终通过reducer函数把action和state串起来。

```
const action = {
	type: 'READ',
	msg: 'Keep on'
};
store.dispatch(action);
```

**reducer是纯函数，接收action和当前state作为参数，并返回一个新的state。**

不要在reducer中直接修改传入的state，可以使用Object.assign（）或延展符号返回新的state。

React-Redux提供connect方法，用于从UI组件生成容器组件。connect的意思就是将这两种组件连起来。

connect方法接收两个参数：mapStateToProps和mapDispatchToProps。它们定义了UI组件的业务逻辑。前者负责输入逻辑，即将state映射到UI组件的参数（props）；后者负责输出逻辑，即将用户对UI组件的操作映射成action。

![redux-workflow](https://huixiong.oss-cn-beijing.aliyuncs.com/reading/Redux-workflow_2020-04-23_17-37-44.png)

Redux中间件被设计成可组合的、会在dispatch方法之前调用的函数，例如redux-logger中间件

Redux中间件使用：

* redux-logger
* redux-thunk
* redux-saga

```
import thunk from 'redux-thunk'
import {createStore, applyMiddleware} from 'redux'

import counter from './reducers/counter'
let store = createStore(counter, applyMiddleware(thunk))
```

redux-saga相当于在Redux原有的数据流中增加了一层监控，捕获监听到的action并进行处理之后，添加一个新的action到相应的reducer中执行处理流程。在redux-saga中的action与在redux中同步action的样式是相同的。

redux-saga中定义了effect, effect本质就是一个特定的函数，返回的是纯文本对象。也就是说，通过effect函数会返回一个字符串，saga-middleware根据这个字符串来执行真正的异步操作。redux-saga常见的effect有call、put、select、takeEvery、takeLatest、take、all等。

redux-saga中使用call用来调用异步函数，将异步函数和函数参数作为call函数的参数传入，最终该函数返回一个对象。



**Redux主要输出createStore、combineReducers、bindActionCreators、applyMiddleware、compose五个接口。**

## 第8章-React架构

```
npm install -g create-react-app
create-react-app hello-world
cd hello-world
yarn start
```

文件：

* components
* containers
* stores

CSS Modules

* postcss-loader
* postcss-modules-values
* autoprefixer
* postcss-cssnext



Redux的创造者DanAbramov又补充了一句：“只有遇到React实在解决不了的问题，你才需要Redux。”从应用的角度考虑，Redux的适用场景是：多交互、多数据源。从组件的角度考虑，Redux适用于如下场景：

* 某个组件的状态需要共享。
* 某个状态需要在任何地方都可以拿到。
* 一个组件需要改变全局状态。
* 一个组件需要改变另一个组件的状态。



react-router

* Router
* Route
* hashHistory
* Link

## 第9章-React服务端渲染

我们所说的服务端渲染是在现有架构不变的情况下，即后端依旧只是提供API服务，前端人员依旧通过异步请求数据，同时要达到传统多页应用的首屏加载性能，且进行SEO优化到搜索引擎爬虫抓取工具可以直接查看完全渲染的页面。

客户端渲染执行的顺序是“下载JavaScript/CSS文件”→“请求数据”→“渲染页面”，三个过程都在客户端进行；服务端渲染执行的顺序是“请求数据”→“渲染页面”→“下载JavaScript/CSS文件”，其中请求数据和渲染页面在服务端进行，最后下载JavaScript/CSS文件在客户端进行。

**相对于客户端渲染来说，服务端渲染的核心保障是首屏渲染。**

做服务端渲染同构之前，一定要考虑到浏览器和服务器的环境差异，站在更高层面考虑。Next.js是时下非常流行的基于React的同构开发框架，提供了异步请求、样式、拆分文件打包的整体解决方案。

## 第10章 编写测试

测试驱动开发

主流工具：Mocha、Jasmine、Karma、Jest等

**现在主流推荐使用Jest作为测试框架、Enzyme作为React组件测试工具。**

我们做单元测试也主要关注四个方面：**组件渲染、状态变化、事件响应、网络请求。**

使用Jest

```
yarn add jest --dev
npm install -D babel-jest babel-core babel-preset-env regenerator-runtime
```

创建index.test.js

Jest

* .not 
* .toEqual()
* .toHaveLength 测试字符串和数组类型的长度是否满足预期
* .toThrow
* .toMatch传入一个正则表达式，它允许我们用来进行字符串类型的正则匹配。



使用snapshot测试组件UI

propTypes检查类型错误

TypeScript写React代码避免类型错误

## 第11章-性能优化

不要过早优化

shouldComponentUpdate可以减少重绘，但是别到处都加shouldComponentUpdate，在简单组件上执行shouldComponentUpdate方法有时比仅渲染组件要耗时。

Perf是React官方提供的性能分析工具。



render里面尽量减少新建变量和bind函数，尽量减少所需传递参数的数量，尽可能地保持props和state简单和精简。



shouldComponentUpdate默认每次更新的时候都要调用所用的生命周期函数，包括render函数，重新渲染。

**一些细节的优化点：**

* 慎用｛...this.props｝，只传递component需要的props，传得太多或者层次传得太深，都会加重shouldComponentUpdate里面的数据比较负担，因此慎用spread attributes（＜Component｛...props｝/＞））。
* ::this.handleChange（），将该方法的bind于constructor中进行定义，即this.handleChange.bind（this, id）。
* 复杂的页面不要全部写在一个组件里面，尽量拆分。
* 尽量使用const element。·map中需要添加key，并且key不要使用index。
* 尽量少用setTimeout或不可控的refs、DOM操作。
* props和state的数据尽可能简单明了，扁平化。
* 使用return null而不是CSS的display：none来控制节点的显示隐藏，保证同一时间页面的DOM节点尽可能少。

immutable使用了StructuralSharing（结构共享），即如果对象树中一个节点发生变化，只修改这个节点和受它影响的父节点，其他节点则进行共享。

在React开发中，频繁操作state对象或是store，配合ImmutableJS会更快、更安全、更方便。

* immutable降低了Mutable带来的复杂度
* 节省内存
* 并发安全
* 拥抱函数式编程

immutable几个重要的API

* fromJS（）
* toJS（）
* Map
* List

## 第12章-Hooks

Hooks提供的API可以大幅减少React函数组件的代码量.

* useState
* useEffect
* useReducer
* useCallback
* useMemo
* useContext
* useRef
* useImperativeMethods
* useMutationEffect
* useLayoutEffect

需要注意的是，只能在顶层代码（Top Level）中调用Hooks，不能在循环或判断语句等里面调用，这是为了让Hooks在每次渲染的时候都会按照相同的顺序调用，因为useState需要依赖参照第一次渲染的调用顺序来匹配对应的state，否则useState会无法正确返回对应的state。

