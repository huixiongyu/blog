# 《深入React技术栈》

时隔一年半重新接触React，用React + Redux ＋Immutable.js写了两个项目，对React如同热恋般朝思暮想，借这本书加深对React的理解。

陈屹老师这本书不是给初学者读的，他通过构造通用组件解读React数据流、通过业务组件演绎生命周期、通过Koa讲Redux的内部原理可谓深入浅出。读之前当然得有一些使用经验，恰巧我拜读过Vue的源码实现、React服务端同构和Koa服务端API，品读的时候时时惊叹React的设计之精妙！React是适合有技术追求的开发者的，它友好地代理了一些原生的方法、具备良好的设计哲学，开发之中会有井然有序、高效、hacher的美妙感受。要想更加深入了解React这座大厦，需要加深对语言的基本理解，比如闭包、函数柯里化（Redux的插件化设计就是这么来的），还可以仔细试验代码的运行规律，尝试各种生态插件和解剖源码...一番折腾以后必定功力大增！

这本书我还会拜读个三五遍的！

第1遍：2020年6月7日  周日 总计4小时40分

书的代码：[reat-book-examples](https://github.com/arcthur/react-book-examples)

## 第1章 初入React世界

Virtual DOM的渲染方式也比传统DOM操作好一些，但并不明显，因为对比DOM节点也是需要计算资源的。

它的最大好处其实还在于方便和其他平台集成，比如react-native是基于Virtual DOM 渲染出原生控件，因为React组件可以映射为对应的原生控件。在输出的时候，是输出Web DOM，还是Andriod控件爱你，还是iOS控件，就由平台本身决定了。因此，react-native有一个口号——Learn Once, Write Anywhere。

函数式编程才是React的精髓。

JSX将HTML语法直接加入到JavaScript代码中，再通过翻译器转换到纯JavaScript后由浏览器执行。

* 定义标签时，只允许被一个标签包裹。
* 标签一定要闭合。

* 元素属性：class属性改为className，for属性改为htmlFor
* React提供了dangerouslySetInnerHTML属性，正如其名，它的作用就是避免React转义字符，在确定必要的情况下可以使用它



组件元素被描述成纯粹的JSON对象，意味着可以使用方法或是类来构建。React组件基本上由3个部分组成——属性(props)、状态（state)要以及生命周期方法。

在适合的情况下，我们都应该且必须使用无状态组件。无状态组件不像上述两种方法在调用时会创建新实例，它创建时始终保持了一个实例，避免了不必要的检查和内存分配，做到了内部优化。

props本身是不可变的。

用声明式编程的方式来渲染数据，比如reduce、filter等，与map函数相似但不返回调用结果的forEach函数不能这么使用。

propTypes用户规范props的类型与必需的状态。



shouldComponentUpdate是一个特别的方法，它接收需要更新的props和state，让开发者增加必要的条件判断，让其在需要时更新，不需要时不更新。因此，当方法返回false的 时候，组件不再向下执行生命周期方法。

shouldComponentUpdate的本质是用来进行正确的组件渲染。

React会渲染所有的节点，因为shouldComponentUdpata默认返回true。正确的组件渲染从另一个意义上说，也是性能优化的手段之一。

如果组件是由父组件更新props而更新的，那么在shouldComponentUpdate之前会先执行componentWillReceiveProps方法。此方法可以作为React在props传入之后，渲染之前setState的机会。在此方法中调用setState是不会二次渲染的。



refs:

```
import React, { Component } from 'react';
class App extends Component {
	construct(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
		if (this.myTextInput !== null) {
			this.myTextInput.focus();
		}
	}
	render() {
		return (
			<div>
				<input type="text" ref={(ref) => this.myTextInput = ref} />
				<input
					type="button"
					value="Focus the text input"
					onClick={this.handleClick}
				/>
			</div>
        );
	}
}
```

 为了防止内存泄漏，当卸载一个组件的时候，组件里所有的refs就会变为null。

**值得注意的是，findDOMNode和refs都无法用于无状态组件中，原因在前面已经说过。无状态组件挂载时只是方法调用，没有新建实例。**

## 第2章  漫谈React

所有事件都自动绑定到最外层上。如果需要访问原生事件对象，可以使用nativeEvent属性。

在React底层，主要对合成事件做了两件事：事件委派和自动绑定。

自动绑定：在React组件中，每个方法的上下文都会指向该组件的实例，即自动绑定this为当前组件。而且React还会对这种引用进行缓存，以达到CPU和内存的最优化。在使用ES6 classes或者纯函数时，这种自动绑定就不复存在了，我们需要手动实现this的绑定。

构造器内声明：在组件的构造器内完成了this的绑定，这种绑定方式的好处在于仅需要进行一次绑定，而不需要每次调用事件监听器去执行绑定操作。

箭头函数：箭头函数不仅是函数的“语法糖”，它还自动绑定了定义此函数作用域的this，因此我们不需要再对它使用bind方法。



其中componentDidMount会在组件已经完成安装并且在浏览器中存在真实的DOM后调用，此时我们就可以完成原生事件的绑定。

值得注意的是，在React中使用DOM原生事件时，一定要在组件卸载时手动移除，否则很可能出现内存泄漏的问题。而使用合成事件系统时则不需要，因为React内部已经帮你妥善地处理了。

我们无法在组件中将事件绑定到body上，因为body在组件范围之外，只能使用原生绑定事件来实现。

**不要将合成事件与原生事件混用，通过e.target判断来避免**

阻止React事件冒泡的行为只能用于React合成事件爱你系统中，且没办法阻止原生事件的冒泡。反之，在原生事件中的阻止冒泡行为，却可以阻止React合成事件的传播。

React的合成事件系统只是原生DOM事件系统的一个子集。有些事件React并没有实现，或者受某些限制没办法实现，比如window的resize事件。

在React合成事件中，只需要使用stopPropaagation()就可以阻止原生事件的传播。



受控组件：

每当表单的状态发生变化时，都会被写入到组件的state中，这种组件在React中被称为受控组件。

React受控组件更新state的流程：

1. 可以通过在初始state中设置表单的默认值
2. 每当表单的值发生变化时，调用onChange事件处理器
3. 事件处理器通过合成事件对象e拿到改变后的状态，并更新应用的state
4. setState触发视图的重新渲染，完成表单组件值的更新

非受控组件：

如果一个表单组件没有value props(单选按钮和复选框对应的是checked prop)时，就可以称为非受控组件。响应地，你可以使用defaultValue和defaultChecked prop来表示组件的默认状态。

受控组件和非受控组件的最大区别是：非受控组件的状态并不会受应用状态的控制，应用中也多了局部组件状态，而受控组件的值来自于组件的state.



### 组件间通信

在嵌套关系上，就会有3种不同的可能性：父组件向子组件通信、子组件向父组件通信和没有嵌套关系的组件之间通信。还有一种特殊的：跨级组件通信。

子组件向父组件通信：

* 利用回调函数：这是JavaScript灵活方便之处，这样就可以拿到运行时状态。
* 利用自定义事件机制：这种方法更通用，使用也更广泛。设计组件时，考虑加入事件机制往往可以达到简化组件API的目的。

跨级组件通信：在React中，我们还可以使用content来实现跨级父子组件间的通信。

不过React官方并不建议大量使用context，因为尽管它可以减少层级传递，但当组件结构复杂的时候，我们并不知道context是从哪里传过来的。Context就像一个全局变量一样，而全局变量正是导致应用走向混乱的罪魁祸首之一，给组件带来了外部依赖的副作用。使用context比较好的场景是真正意义上的全局信息且不会更改，例如界面主题、用户信息等。

Pub/Sub模式实现的过程非常容易理解，即利用全局对象来保存事件，用广播的方式去处理事件。这种常规的设计方法在软件开发中处处可见，但这种模式带来的问题就是逻辑关系混乱。



### 组件间抽象

从mixin的来源和含义来解说如何抽象公共方法。

mixin的对象混入：MDN上的解释是把任意多个源对象所拥有的自身可枚举属性复制给目标对象，然后返回目标对象。

在React中是否一样覆盖呢？（方法或属性）事实上，它并不会覆盖，而是在控制台里报了一个在ReactClassInterface里的错误，指出你尝试在组件中多次定义一个方法，这会造成冲突。因此，在React中是不允许出现重名普通方法的mixin。

如果是React生命周期定义的方法，则会将各个模块的生命周期方法叠加一起顺序执行。

**getOwnPropertyDescriptor和defineProperty这两个方法有什么区别呢？**

不幸的是：社区从0.14版本开始渐渐开始剥离mixin。那么，到底是什么原因导致mixin成为反模式了呢？

**mixin的问题：**

* 破坏了原有组件的封装：mixin是平面结构，所有方法都在同一个环境中，我们没法做到很好的约定。
* 命名冲突
* 增加复杂性

**针对这些困扰，React社区提出了新的方式来取代mixin，那就是高阶组件。**



**高阶组件**

高阶函数：这种函数接受函数作为输入，或是输出一个函数。比如常用的工具方法map、reduce和sort等都是高阶函数。

高阶组件，类似于高阶函数，它接受React组件作为输入，输出一个新的React组件。我们用Haskell的函数签名来表达就是：`hocFactory:: W: React.Component => E: React.Component`

实现高阶组件的方法有如下两种：

* 属性代理：高阶组件通过被包裹的React组件来操作props。
* 反向继承：高阶组件继承于被包裹的React组件。

高阶组件复合函数式编程思想。对于原生组件来说，并不会感知到高阶组件的存在，只需要把功能套在它之上就可以了，从而避免了使用mixin时产生的副作用。



在配置式组件内部，组件与组件间以及组件与业务间是紧密关联的，而我们需要完成的仅仅是配置工作。组合式的方式意图打破这种关联，寻求单元化，通过颗粒度更细的基础组件与抽象组件共有交互与业务逻辑的高阶组件，使组件更灵活，更易扩展，也使我们能够完成对于基础组件的自由支配。

### 组件性能优化

从React的渲染过程来看，如何防止不必要的渲染可能是最需要去解决的问题，针对这个问题，React官方提供了一个便捷的 方法来解决，那就是PureRender。

纯函数：

* 给定相同的输入，它总是返回相同的输出
* 过程没有副作用
* 没有额外的状态依赖

Immutable Data就是一旦创建，就不能再更改的数据。对Immutable对象进行修改、添加或删除操作，都会返回一个新的Immutable对象。Immutable实现的原理是持久化的数据结构，也就是使用旧数据创建新数据时，要保证旧数据同时可用且不变。

缺点：容易与原生对象混淆是使用Immutable的过程中遇到的最大的问题。

规范：

* 使用FlowType或TypeScript静态类型检查工具；
* 约定变量的命名规则，如所有Immutable类型对象以$$开头；
* 使用Immutable.fromJS而不是Immutable.Map或Immutable.List来创建对象，这样可以避免Immutable对象和原生对象间的混用。

为了直接比较对象的值，Immutable提供了Immutable.is来作“值比较”

React做性能优化时最常用的就是shouldComponentUpdate方法，但它默认返回true,即始终会执行render方法，然后做VirtualDOM比较，并得出是否需要做真实DOM的更新，这里往往会带来很多没必要的渲染。

Immutable.js则提供了简洁、高效的判断数据是否变化的方法，只需 === 和 is 比较就能知道是否需要执行render，而这个操作几乎零成本，所以可以极大提高性能。

对于一些提供给外部使用的公共组件，最好不要把Immutable对象直接暴露在对外的接口中。

当key相同时，React会怎么渲染呢？答案是只渲染第一个相同key的项，且会报一个警告



react-addons-perf是官方提供的插件。通过Perf.start()和Perf.stop()两个API设置开始和结束的状态来作分析。它会把各组件渲染的各个阶段的时间统计出来，然后打印出一张表格。



### 动画

将缓动函数通过JavaScript实现的动画称作JavaScript动画，缓动函数由CSS提供（浏览器实现）的动画称作CSS动画。

CSS动画的局限性：

* CSS只支出cubic-bezier的缓动，如果你的动画对缓动函数有要求，就必须使用JavaScritpt动画
* CSS动画只能针对一些特有的CSS属性。仍然有一些属性是CSS动画不支持的，例如SVG中path的d属性
* CSS把translate、rotate、skew等都归结为一个属性——transform，缓动函数被共用。

[vivus.js](https://github.com/maxwellito/vivus)实现了SVG线条动画

[react-css-modules](https://github.com/gajus/react-css-modules)

动画库：[React Motion](https://github.com/chenglou/react-motion)

### 自动化测试

全渲染模拟真实DOM环境的有：

* JSDOM
* Cheerio
* Karma



## 第3章  解读React源码

reconciler是React最为核心的部分。

通过反复试验，我们得到了组件的生命周期在不同状态下的执行顺序：

* 首次挂载组件时，按顺序执行getDefaultProps、getInitialState、componentWillMount、render和componentDidMount。
* 当卸载组件时，执行componentWillUnmount。
* 当重新挂载组件时，此时按顺序执行getInitialState、componentWillMount、render和componentDidMount，但并不执行getDefaultProps。
* 当再次渲染组件时，组件接受到更新状态，此时按顺序执行componentWillReceiveProps、shouldComponentUpdate、componentWillUpdate、render和componentDidUpdate。

|    First Render    |       Unmount        |       Props Change        |     State Change      |
| :----------------: | :------------------: | :-----------------------: | :-------------------: |
|  getDefaultProps   | componentWillUnmount | componentWillReceiveProps | shouldComponentUpdate |
|  getInitialState   |  Second Render ...   |   shouldComponentUpdate   |  componentWillUpdate  |
| componentWillMount |    getInitalState    |    componentWillUpdate    |        render         |
|       render       |  componentWillMount  |          render           |   compoentDidUpdate   |
|  componentDidMont  |        render        |     compoentDidUpdate     |                       |
|                    |  componentDidMount   |                           |                       |



**禁止在shouldComponentUpdate和componentWillUpdate中调用setState，这会造成循环调用，直至耗光浏览器内存后崩溃。**

无状态组件没有状态，没有生命周期，只是简单地接受props渲染生成DOM结构，是一个纯粹为渲染而生的组件。由于无状态组件有简单、便捷、高效等诸多优点，所以如果可能的话，请尽量使用无状态组件。

setState通过一个队列机制实现state更新。



React通过制定大胆的策略，将O(n3)复杂度的问题转换成O(n)复杂度的问题。

React diff算法的3个策略：

1. Web UI中DOM节点跨层级的移动操作特别少，可以忽略不计。
2. 拥有相同类的两个组件将生成相似的树形结构，拥有不同类的两个组件将会生成不同的属性结构。
3. 对于同一个层级的一组子节点，他们可以通过唯一id进行区分。

**官方建议不要进行DOM节点跨层级的操作**

在开发组件时，保持稳定的DOM结构会有助于性能的提升。例如，可以通过CSS隐藏或显示节点，而不是真正地移除或添加DOM节点。



所谓Patch，简而言之就是将tree diff计算出来的DOM差异队列更新到真实的DOM节点上，最终让浏览器能够渲染出更新的数据。

React并不是计算出一个差异就去执行一次Patch，而是计算出全部差异并放入差异队列后，再一次性地执行Patch方法完成真实DOM的更新。



## 第4章  认识Flux架构模式

MVC乍一看似乎没有特别值得诟病的地方，但是它存在一个致命的缺点，这个缺点在你的项目越来越大，逻辑越来越复杂的时候就非常明显，那就是混乱的数据流动方式。

Flux的核心思想就是数据和逻辑永远单向流动。

在Flux应用中，数据从action到dispatcher，再到store，最终到view的路线是单向不可逆的，各个角色之间不会像前端MVC模式中那样存在交错的连线。

可以创建一个actionCreator来减少冗余的代码，同时方便重用逻辑。

你会发现对于React组件来说，把JavaScript和CSS放在一起是更高效和方便的方式。



抽出常量统一放在contants文件夹中便是一个不错的选择。

Flux的核心只有一个dispatcher。



Flux最令人诟病的是冗余代码太多。虽然Flux源码中几乎只有dispatcher的实现，但是在每个应用中都需要手动创建一个dispatcher的实例，这还是让很多开发者觉得烦恼。

## 第5章  深入Redux应用架构

### Redux简介

Redux本身只把自己定位成一个“可预测的状态容器”。

Redux三大原则：

1. 单一数据源：一个应用永远只有唯一的数据源
2. 状态是只读的：在Redux中，我们并不会自己用代码来定义一个store。取而代之的是，我们定义一个reducer，它的功能是根据当前触发的action对当前应用的状态（state）进行迭代，这里我们并没有直接修改应用的状态，而是返回了一份全新的状态。Redux提供的createStore方法会根据reducer生成store。最后，我们可以利用store.dispatch方法来达到修改状态的目的。
3. 状态修改均由纯函数完成：在Redux里，我们通过定义reducer来确定状态的修改，而每一个reducer都是纯函数，这意味着它没有副作用，即接受一定的输入，必定会得到一定的输出。

这样设计的好处不仅在于reducer里对状态的修改变得简单、纯粹、可测试，更有意思的是，Redux利用每次新返回的状态生成炫酷的时间旅行调试方式，让跟踪每一次因为触发action而改变状态的结果成为了可能。



Redux的核心是一个store，这个store由Redux提供的createStore(reducers[, initialState])方法生成。

在Redux里，负责响应action并修改数据的角色就是reducer。reducer本质上是一个函数，其函数签名为reducer(previouseState, action) => newState。可以看出，reducer在处理action的同时，还需要接受一个previousState参数。所以，reducer的职责就是根据previousState和action计算出新的newState。

通过createStore方法创建的store是一个对象，它本身又包含4个方法：

* getState()： 获取store中当前的状态。
* dispatch(action)：分发一个action，并返回这个action，这是唯一能改变store中数据的方式。
* subscribe(listener)：注册一个监听者，它在store发生变化时被调用。
* replaceReducer(nextReducer)：更新当前store里的reducer，一般只会在开发模式中调用该方法。

在实际使用中，我们最常用的是getState()和dispatch()这两个方法。至于subscribe()和replaceReducer()方法，一般在Redux与某个系统（如React）做桥接的时候使用。



react-redux提供了一个组件和一个API帮助Redux和React进行绑定，一个是React组件`<Provider />` ，一个是connect()。关于它们，只需要知道的是，`<Provider />` 接受一个store作为props，它是整个Redux应用的顶层组件，而connect()提供了在整个React应用的任意组件中获取store中数据的功能。

### Redux middleware

面对多样业务场景，单纯地修改dispatch或reducer的代码显然不具有普适性，我们需要的是可以组合的、自由插拔的插件机制，这一点Redux借鉴了Koa(它是用于构建Web应用的Node.js框架)里middleware的思想。Redux中reducer更关系的是数据的转化逻辑，所以middleware就是为了增强dispatch而出现的。

middleware的设计有点特殊，是一个层层包裹的匿名函数，这其实是函数式编程中的currying，它是一种使用匿名单参数函数来实现多参数函数的方法。

middlewareAPI中的dispatch为什么要用匿名函数包裹呢？

我们用applyMiddleware是为了改造dispatch，所以applyMiddle执行完后，dispatch是变化了的，而middlewareAPI是applyMiddleware执行中分发到各个middleware的，所以必须用匿名函数包裹dispatch，这样只要dispatch更新了，middlewareAPI中的dispatch应用也会发生变化。

### Redux异步流

3个解决方案：

1. redux-thunk
2. redux-promise
3. redux-composable-fetch

如果要发异步请求，在Redux定义中，最合适的位置是在action creator中实现。

Thunk函数实现上就是针对多参数的currying以实现对函数的惰性求值。任何函数，只要参数有回调函数，就能写成Thunk函数的形式。

redux-saga是处理异步流的后起之秀，它与上述方法最直观的不同就是generator代替了promise，我们通过Babel可以很方便地支持generator.

redux-saga的确是最优雅的通用解决方案，它有着灵活而强大的协程机制，可以解决任何复杂的异步交互。

### Redux与路由

react-router

React Router Redux的前身是Redux Simple Router，它的职责主要是将应用的路由信息与Redux中的store绑定在一起。你可能会好奇为什么要这么做？

因为对于前端应用来说，路由状态（当前切换到哪个页面，当前页面的参数有哪些等等）也是应用状态的一部分。在很多情况下，我们的业务逻辑与路由状态有很强的关联关系。比如，最常见的一个列表页中，分页参数、排序参数可能都会在路由中体现，而这些参数的改变必然导致列表中的数据发生变化。

### Redux与组件

容器型组件，意为组件时怎么工作的，更具体一些就是数据时怎么更新的。它不会包含任何Virtual DOM的修改或组合，也不会包含组件的样式。

如果映射到Redux上，那么容器型组件就是使用component的组件。因此，我们都在这些组件里作了数据更新的定义。

展示型组件，意为组件时怎么渲染的。它包含了Virtual DOM 的修改或组合，也可能包含组件的样式。同时，它不依赖任何形式的store。一般可以写成无状态函数，但实际上展示型组件并不一定都是无状态的组件，因为很多展示型组件里依然存在生命周期方法。

## 第6章  Redux高阶应用

### 高阶reducer

高阶reducer就是指将reducer作为参数或者返回值的函数。

有没有意识到combineReducers其实就是一个高阶reducer。因为combineReducers就是将一个reducer对象作为参数，最后返回顶层的reducer。

在一个应用中，不同模块间的actionType必须是全局唯一的。要解决actionType唯一的问题，有一个方法就是通过添加前缀的方式来做到。

### Redux与表单

它能利用高阶组件的特性为表单的每个字段提供value和onChange等必须值，而无需你手动创建；对于复杂的表单，则可以使用redux-form。

除了提供表单必须的字段外，redux-form还能实现表单同步验证、异步验证甚至嵌套表单等复杂功能。

### Redux CRUD实战

需要特别说明的是，基于promise的异步事件流处理对于Redux应用来说是一种反模式，因此在实际开发过程中，一定要对哪些场景可以使用这种模式做出清晰的判断。可供参考的条件有：这个状态的修改是否会影响到其他模块？这个状态是否会通过其他模块初始化？如果答案都是否定的，那么你就可以安心地使用promise模式了。

### Redux性能优化

函数式编程中，纯函数的众多好处之一就是方便做缓存。

### 解读Redux

如果尝试使用connect让组件与Redux状态树产生关联，第一个参数mapStateToProps可以所是必传的。

## 第7章  React服务端渲染

服务端渲染，意味着前端代码可以在服务端作渲染，进而达到在同步请求HTML时，直接返回渲染好的页面。这样有3个好处：

1. 利于SEO
2. 加速首屏渲染
3. 服务端和客户端可以共享某些代码，避免重复定义

React之所以能做到服务端渲染，主要是因为ReactDOM。我们对ReactDOM.render方法并不陌生，这是React渲染到DOM中的方法。在ReactDOM中，还有一个分支react-dom/server，它可以让React组件以字符串的形式渲染。

React官方给我们提供服务端渲染的API——renderToString和renderToStationMarkup，它们都是react-dom/server内的方法。它们与render的区别是render方法需要指定具体渲染到DOM上的节点，但这个方法都只返回了一段HTML字符串。这就是让React成为模板语言的充分条件。

* React.renderToString
* React.renderToStaticMarkup

Koa官方已经为我们实现了react-view这个插件。

在服务端，React是不会去执行componentDidMount方法的。

## 第8章  玩转React可视化

Canvas使用场景：

* 绘制各种图形元素，如多边形和Bezier曲线
* 图片图像处理
* 创建复杂的动画
* 视频处理与渲染

SVG在Web端常见使用场景：

* 绘制各种图形元素，如多边形和Bezier曲线
* 渲染页面中的图标（icon）
* 制作网站Logo
* 绘制线、柱、饼等图表，甚至是更复杂的可视化图表



Canvas是自带生命周期的，包括初始化、绘制和清空，它的更新过程就会用自带API，而不是setState了。

Canvas在React中的应用，在Github上存在一个著名的库——react-canvas，它由Flipboard公司开发。

D3是业界使用最为广泛的可视化基础库之一，但它和React的思想有很多相违背的地方。

* D3支持数据与节点绑定，当数据发生变化时，节点自动发生变化。而React推崇的是单向数据流，数据从父组件流向子组件，每个子组件只实现较简单的一个模块。
* D3实现了一套selector机制，能够让开发者直接操作DOM节点、SVG节点。React使用Virtual DOM 和高性能DOM diff算法，让开发者不用关心节点操作。

推荐：[Recharts](https://github.com/recharts/recharts)