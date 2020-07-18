# 《React状态管理与同构实战》

这周Vue开发的时候遇到一个奇妙的bug：我操作了vuex里的一个数组却改变了另一个数组的值，我看mutation里的方法根本不理解，我拍一拍A同学，B同学却跳起来这种科学家遇见智子实验数据错乱的状况，折腾了一个半个小时，借助devtool后来发现在另一个mutation方法里借用了数组，也就是没有深拷贝。要是在React上开发基本不会出现这种状况，因为React是单向数据流，Redux里面又可以使用Immutable.js防止出错。

这本书呢写得很棒很棒，React、Redux的基本使用、源码构造、代码复用的各种解决方案、Redux插件原理、服务端渲染、性能优化都分析得非常到位，还能授人以渔引导我们怎么深入学习React技术。我真是对React实在相见恨晚，昨天前端早早聊直播课看跨平台实战了解到Taro Next已经支持直接引用第三方npm包，太令人兴奋了！！我得加油，把React变成自己的主要技术栈！

阅读：2020年6月21日  周日 

用时：5小时51分钟

---

React重新定义了前端View层的开发模式：`v = f(s)`其中s代表引用的状态（state）,v代表View，而f则是一个把状态映射为View的纯函数。这个简单的公式代表了前端开发的一种模式：View就是怼状态的展示，对于同一个f而言，相同的状态永远对应相同的视图。

React就是这里的f，React生态的不同库则代表着不同的f，比如react-native、react-art、react-canvas、react-svg等。

## 第1章  React与前端

介绍React的基本历史

## 第2章  深入浅出React

函数式组件就是一个普通函数，其参数是一个对象，在被调用时就是传入的props，配合函数参数的解构使用起来非常优雅。函数式组件的属性默认值和属性类型只能通过函数的属性定义。



PureComponent和Component的功能几乎一样，但PureComponent的shouldComponentUpdate不会直接返回true，而是会对属性和状态进行浅层比较，也就是仅比较直接属性是否相等。

可以用shouldComponentUpdate模拟PureComponent，下面两个组件的功能一样。

```
class Demo1 extends Component {
	shouldComponentUpdate(nextProps, nextState) {
		const { props, state } = this;
		
		function shallowCompare(a, b) {
			return a === b || Object.keys(a).every(k => a[k] === b[k]);
		}
		return shallowCompare(nextProps, props) && shallowCompare(nextState, state);
	}
}
```

ExtJS和React之间就差了一个JSX，其实很多框架都查了一个JSX。看似只差了一个简单的JSX，其实差的是一棵语法树、一种编译能力、一种化繁为简的神器，其实能搞定语法树的程序员并不多。

JSX最终要被编译为createElement才能够在浏览器里执行，平时写代码时一定要用JSX，研究背后的原理一定要看createElement。



挂载执行：

* constructor()
* componentWillMount()
* render()
* componentDidMount()

一般在constructor函数中初始化一些数据，比如设置state的初始值；componentDidMount是最常用的回调函数，如果一个组件需要自己加载数据，一般都放到这个函数中。

更新：

* componentWillReceiveProps()
* shouldComponentUpdate()
* componentWilUpdate()
* render()
* componentDidUpdate()

调用了setState之后：

* shouldComponentUpdate()
* componentWillUpdate()
* render()
* componentDidUpdate()

调用了forceUpdate发生强制更新：

* componentWillUpdate()
* render()
* componentDidUpdate()

当组件被卸载时会执行componentWillUnmount函数，一般会在这个函数里做一些清理工作，比如清楚定时器、解绑自定义事件等。



组件中有一个比较特殊的属性——children，代表当前组件的子组件集合。需要注意的是，自定义的属性名字不能和这个名字重复。

为了提升性能，React会把多次setState操作合并成一次，所以setState执行的过程是异步的。也就是说，setState执行后并没有立刻更新state中的数据。那么如果想拿到setState执行后的数据，该怎么做呢？最简单的做法就是把计算结果存储下来。

其实React也为我们提供了另一个方法——setState还有第二个参数，它是一个函数，这个函数会在state更新后被调用。

不要在render中使用setState，其实这个问题一般不容易出现，因为大家都不这么写代码。

一个基本原则就是，能放到文法作用域里的，能放到this里的，都不要放到state中。



React事件时天生的时间代理，看起看事件散落在元素上，其实React仅仅在根元素绑定事件，所有事件都通过事件代理响应。



子组件如何向父组件传递消息，传统做法也有两种，其中一种是回调函数；另一种是为子组件部署消息接口。

先来看回调函数的例子。回调函数的优点是非常简单；缺点就是必须在初始化时传入，并且不可撤回，且只能传入一个函数。

在React中，通过context可以让祖先组件直接把属性传递给后代组件。

个人的建议是对所有组件共享的一些只读信息可以采用context来传递，比如登录用户信息等。React Router路由就是通过context来传递路由属性的。



如果两个组件时兄弟关系，那么可以将父组件作为桥梁来实现两个组件通信，这其实是主模块模式。



对于任意两个组件之间的通信，总共有三种方法，分别是利用共同祖先、消息中间件和状态管理。



高阶组件就是接受组件，并且返回组件的组件。上线高阶组件有两种方法，一种是调用传入的组件；另一种是继承传入的组件。

```
function SetTimeoutHOC(InnerComponent) {
	return class WrapComponent extends InnerComponent {
		componentWillMount() {
			super.componentWillMount();
			this.timeouts = [];
		}
		setTimeout() {
			super.componentWillMount();
			this.timeouts.push(setTimeout.apply(null, arguments));
		},
		componentWillUnmount() {
			super.componentWillMount();
			this.timeouts.forEach(clearInterval);
		}
	}
}
function SetIntervalHOC(InnerComponent) {
	return class WrapComponent extends InnerComponent {
		componentWillMount() {
			super.componentWillMount();
			this.intervals = [];
		}
		setInterval() {
			super.componentWillMount();
			this.intervals.push(setInterval.apply(null, arguments));
		},
		componentWillUnmount() {
			super.componentWillMount();
			this.intervals.forEach(clearInterval);
		}
	}
}

let Demo1 = class extends Components {

}
Demo1 = SetTimeoutHOC(SetIntervalHOC(Demo1));
```

React只是招式，JavaScript语言才是内功，切勿只学其一，内外兼修方能发挥最大价值。

## 第3章  Redux应用架构基础

Redux的第一个哲学理念：Single source of truth.

事实上，这里表达的是数据来源的单一。

Redux的第二个哲学理念：State is read-only.

store.getState返回的结果是只读的，只读就意味着我们不能直接改变它。

Redux的第三个哲学理念：Changes are made with pure functions called reducer.

使用reducer函数来接收action，并执行页面状态数据的变更。经过reducer函数处理之后，store.getState方法就会返回新页面的数据状态。

reducer接收以下两个参数：

* 当前页面数据状态。
* 被派发的action。

```
(previousState, action) => newSate
```

函数式编程是一种典型的声明式编程，与命令式编程相对立，它更看重程序的执行目标而不是执行过程。

函数是”一等公民“的思路，则意味着函数优先，提倡使用函数组合。

纯函数代表这样一类函数：

* 对于指定输出，返回指定结果。
* 不存在副作用。

reducer接收当前页面状态数据树和action，在不改变参数页面状态数据树的原则下，返回一棵新的页面状态数据树，并且这棵新的页面状态数据树完全可以通过旧的参数页面状态数据树推测得到的。



createStore方法可以接收三个参数。

* reducer: 为开发者编写的reducer函数，必需。
* preloadedState：页面状态数据树的初始状态，可选。
* enhancer：增强器，函数类型，可选。

那么当页面数据状态得到更新之后，如何促使页面发生UI更新呢？实际上就需要使用store.subscribe(callbackFunction)方法订阅数据的更新，并由callbackFunction完成UI更新。

在回调逻辑中，使用store.getState()获取最新数据，完成正确的页面响应。使用过React搭配Redux开发的读者可能对store.subscribe有些陌生，因为它已经由react-redux库进行了封装，这也是store数据更新后便可以直接触发相关组件重新渲染的原因。



函数式编程的两个概念：共享和不可变性。

共享和不可变性是函数式编程推崇的重要概念，也是其显著特点。保证数据的不可变性，好处在于：开发更加简单、可回溯、测试友好，以及减少了任何可能的副作用，从而较少了Bug的出现。共享是指一个变量、对象或者内存空间在多个共享的作用域中出现，或者一个对象的属性在多个作用域范围内被传递。共享带来的问题是：针对共享的数据，我们需要完全掌握其在所有作用域空间内的情况，以保证代码的正确性。



Redux架构下保证不可变性：

使用push方法显然不能满足需求，毫无疑问，它改变了原有数组的值。可以考虑使用concatenate方法，它不会对原有数组进行改动，而是创建一个新的数组。

对于删除某一项的操作，splice也不能满足需求，该方法会改变原有数组的值。相应地，我们应该使用slice。

对象，直接修改明显会破坏不可变性，从而违背纯函数原则。这里我们将使用ES Next新特性带来的Object.assign方法或者使用对象扩展运算符。不过这种都属于浅复制

对象删除一项：

```
let newItem = Ojbext.keys(item).reduce((obj, key) => {
	if (key !== 'node') {
		return { ...obj, [key]: item[key] }
	}
	return obj
}, {})
```

这里使用了Object.keys及reduce方法，对除note属性以外的所有属性进行累加拷贝。这是很典型的函数式操作。使用Object.assign实际上只是做了一层”值拷贝“，对于date.item1.avaiable拷贝的是其引用。

在redux-logger中间件的官方网站上，我们可以看到每一个action前后的记录均会出现在控制台中。

redux=thunk对于异步处理的关键在于：使dispatch能够接受异步函数，之后一切变得熟悉而灵活起来，我们完全可以控制dispatch响应action的时机。



store是一个JavaScript对象：

* store.getState()
* store.dispatch(action)
* store.subscribe(listener)
* store.replaceReducer(nextReducer)

Redux和React通过典型的发布订阅模式进行连接。



容器组件：所谓容器，实际上是指数据状态和逻辑的容器。它并不负责展示，而是只维护内部状态，进行数据分发和处理派发action。因此，容器组件对Redux是感知的，可以使用Redux的API，比如dispatch等。

展示组件：与容器组件相反，展示组件只负责接收相应的数据，完成页面展示，它本身并不维护数据和状态。实际上，为了渲染页面，展示组件所需要的所有数据都由容器组件通过props层层传递下来。

Connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])

connect的核心是将开发者定义的组件，包装转换生成容器组件。

connect函数的返回值是一个WrappedComponent组件。connect是典型的柯里化函数，它执行两次，第一次是设置参数；第二次是接收一个正常的presentationalComponent组件，并在该组件的基础上返回一个容器组件WrappedComponent。这其实是一种高阶组件的用法。

connect是如何获取到Redux store中的内容的？这就要借助于Provider组件来实现了。react-redux提供了Provider组件，一般用法是需要将Provider作为整个应用的根组件，并获取store为其prop，以便后续进行下发处理。

```
let WrappedComponent = connect(mapStateToProps, mapDispatchToProps)(presentationalComponent);
ReactDom.render(
	<Provider store = {store}>
	</Provider>
)
```



##  第4章  深入理解Redux

Redux相当于一个发布订阅系统，那么这个系统是如何实现的？Redux强大的中间件机制基于什么原理？react-redux库连接React和Redux的神奇之处在哪里？

我们使用listeners数组来存储订阅回调函数，这些回调函数用来处理页面组件重新渲染的逻辑，dispatch方法需要出发reducer函数的执行，进而触发回调函数。

在Redux设计中，subscribe函数被调用后会返回一个取消订阅函数，在调用此函数时进行取消订阅。



combineReducers只接收一个参数，这个参数阐述了不同reducer函数和页面状态数据树不同部分的映射匹配关系。

combineReducers的返回值是一个归一化的rootReducer函数。也就是说，combineReducers作为一个函数，它返回了另一个函数(rootReducer)。“函数返回一个新的函数”，这就是函数式编程的典型思想。

Redux源码的实现也秉承了上述思想，但是采用了for循环来代替reduce遍历。



Redux的核心思想就是将dispatch增强改造的函数（中间件）先存起来，然后提供给Redux，Redux负责一次执行。这样每一个中间件都对dispatch一次进行改造，并将改造后的dispatch即next向下传递，即将控制权转移给下一个中间件，完成进一步的增强。

其实如果要真正理解中间件的源码，则不妨尝试从已有的中间件入手，自己再动手开发一个中间件。循序渐进是非常适合的学习路径。



简单的react-redux使用模式是将所有的业务组件嵌套在由react-redux提供的Provider组件当中，并将所生成的store设置为Provider组件的参数，Provider组件便感知到store.

react-redux的核心功能只有两个：Provider组件和connect方法。

## 第5章  揭秘React同构应用

在服务端进行数据拉取的成本要远远小于浏览器端，而且传输更加高效，这也是性能提升的关键之处。

依靠React实现的服务端渲染也并不是简单地渲染内容，在很大程度上它还实现了代码复用。

服务端渲染主要侧重架构层面的实现，而同构更侧重代码复用。

同构的优势：

* 更好的性能
* SEO优化支持
* 实现更加灵活
* 可维护性更强
* 对于低端机更加友好
* 对于恶劣的网络环境更加友好
* 更好的用户体验

同构的劣势：

* 服务端处理的逻辑增多，增加了复杂性
* 服务端无法完全复用浏览器端代码
* 增加了服务端的TTFB（Time To First Byte）时间。TTFB时间指的是从浏览器发起最初的网络请求，到从服务器接收到第一个字节的这段时间。因为对数据的获取和对页面初始内容的渲染，势必会降低服务端返回的速度。



依靠React提供的ReactDOMServer对象可以实现服务端渲染。ReactDOMServer对象主要提供了renderToString()和renderToStaticMarkup()方法。注意这两个方法只能在服务端使用。

renderToStaticMarkup方法，它和renderToString方法又有什么区别呢？使用renderToStaticMarkup方法渲染的组件不会带有data-react-checksum属性。

ReactDOM提供了一个新的API：ReactDOM.hydrate()，它的用法和render()并无差异，但是可以和renderToString相互配合使用。在这样的情况下，浏览器在渲染组件时，就会最大限度地保留在服务端使用renderToString()所生成的内容结构，并添加浏览器端所持有的事件绑定和交互等。

在getInitialState、render等组件方法中不能用到浏览器的一些特性，比如访问localStorage、window等。合理的做法是，将依赖浏览器环境的操作放到componentDidMount中处理。



React 16在服务端渲染并不支持错误处理和Portals（插槽）新特性。



对比常用的renderToString方法，在使用renderToNodeStream的场景下，页面的TTFB时间可以明显缩短。这是因为TTFB时间是服务端响应字节的时间，采用流的渐进式渲染可以最大限度地缩短服务器响应时间，从而使浏览器可以更快地接收到信息。



React创新的关键之一在于组件生命周期，组件生命周期允许我们在传统的服务端渲染的基础上，在浏览器端为后续交互做进一步处理。

Next.js提供了组件生命周期钩子方法getInitialProps()，使得框架能够在服务器上进行初始渲染，如果需要的话，还可以在客户端继续进行渲染。这个方法支持异步选项，并且是服务端/客户端同构的。我们可以使用async/await方式，处理异步请求。



## 第6章  深入理解React技术内幕与生态社区

React的设计思想在很多环节上都体现了函数式编程的思想，同时倡导的组件化方式，又可以将组合和复用功能发挥到最大程度。



使用class方式声明组件并采用HoCs方法对于Mixins的缺点来说，改善了哪些问题呢？

* 不确定性。这种方式并没有解决不确定性问题，只不过将state的不确定性转嫁到了props上
* 命名冲突。命名冲突这个问题依然存在。如果两个高阶组件同时命名并扩充了一个新的prop，那么将依然存在被覆盖的问题。



render prop。如果要对render prop下一个定义，那么就是：在调用组件时，引入一个函数类型的prop，这个prop定义了组件的渲染方式。换句话说，与其使用Mixins，或者接收并返回一个组件的高阶组件，还不如在正常使用的情况下增加一个prop来实现在消费层面对不同渲染情况的自定义，最终实现代码复用。

多个setState调用的情况有可能被合并，因此处于性能的考量，this.setState()设计以延迟的方式来执行是很合理的。

Redux作者Dan Abramov也发表了自己的看法，他认为，任何需要使用setState的第二个参数callback的场景，都可以使用生命周期函数componentDidUpdate（或者componentDidMount）来达到目的，这样完全可以规避回调地域问题。

如果每个setState都返回一个Promise对象，也会带来性能问题，总而言之，为了解决setState异步带来的问题，直接让setState返回一个Promise对象是画蛇舔足的。



React.createElement方法接收三个参数：

* 一个表述标签名称的字符串（div、span等）
* 当前React element需要具有的属性
* 当前React element要表达的内容，或者一个子元素

React组件就是一个函数或者一个Class，它根据传入参数最终返回一个React element，而不需要我们直接手写React element。



试着在数据流贯通和组件职责间找到平衡才是关键。黄金法则就是：只给组件传递渲染必需的数据。



事实上，若一个对象属性的访问复杂度稳定在O(1)，其成本将远远高于组件的查找复杂度O(n)。



在数据持久度上，不同状态的数据大体分为三类：快速变更型、中等持续型和长远稳定型数据。

快速变更型数据在应用中代表了某些原子级别的信息，其显著特点是变更频率最快。这类数据显然更适合维护在React组件之内。

对于中等持续型数据，当用户浏览或使用应用时，这类数据往往会在页面刷新前保持稳定。这类数据较为通用，也不会被不同组件所需要，在Redux store中维护，并通过connect方法进行连接，相比于使用state进行维护，这是更好的选择。

长远稳定型数据指在页面多次刷新或者多次访问期间都保持不变的数据。因为Redux store会在每次页面加载后都重新生成，因此这类数据显然应该存储在Redux以外的其他地方，比如服务端数据库或者本地存储中。

## 第7章  单页应用代码分割

三种分割代码的方式：

* 按照业务逻辑和依赖库分割
* 按照路由分割
* 按照组件分割

Loadable按需加载包

## 第8章  React应用性能优化

没有将读取和写入功能分开，这会强制浏览器重新计算布局。

实际上，使用React能完成的性能优化，使用纯原生的JavaScript都能做到，甚至做得更好。但是经过React统一处理后，大大节省了开发成本，同时也降低了应用性能对开发者优化技能的依赖。



其实虚拟的DOM就是在内存中维护一个真实的DOM结构。它由JavaScript对象描述，React主要通过以下几种方式来保证虚拟的DOM diff算法和更新的高效性能。

* 高效的diff噻呋钠
* Batch操作
* 摒弃脏检测更新方式。

那么该如何保证不必要的许安然那呢？最先想到的一定是使用shouldComponentUpdate生命周期函数，它通过对比前后state/props是否发生变更，来决定组件是否需要重新渲染。



recompose源码



其实PureComponent大体与Component相同，唯一不同的地方是PureComponent会自动帮助开发者使用shouldComponentUpdate生命周期方法。也就是说，当组件state或者props发生变化时，正常的Component都会自动进行重新渲染，在这种情况下，shouldComponentUpdate默认都会返回true。但是PureComponent会先进行对比，即比较前后两次state和props是否相等。需要注意的是，这种对比是浅比较。



性能设计方方面面，如前端工程化、浏览器解析和渲染、比较算法等。