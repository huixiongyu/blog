# 《Vue.js快跑》
![](http://qiniu.hackslog.cn/1535114374-1_w_1.jpg)

这本书介绍的Vue核心知识，其实我已经对Vue有比较充分的了解了（只差阅读源码），算是巩固一下基础。

书的工程创建还只是vue-cli2.x，现在有更好用的3.x了，等Vue3.0出来可能这本书不太适合了。

有些知识已经内化了的我就不记录了，那些了解不多或者觉得重要的我会扩展一下。

![vue.js running](http://qiniu.hackslog.cn/Snipaste_2019-10-03_15-25-25.png)



## 1.基础

[fetch的用法](<https://aotu.io/notes/2017/04/10/fetch-API/index.html>) 

* v-if值为假不会插入DOM，v-show都会插入DOM中，因此如果希望频繁地切换某些内容，那么v-show会是更好的选择。
* v-for参数顺序是(value, key),我一般写成(item, index)
* [v-bind](<https://cn.vuejs.org/v2/api/#v-bind>) 修饰符包括.prop, .camel, .sync  prop的情况比如可以绑定disabled实现v-if的情况
* 官方文档中[深入响应式原理](<https://cn.vuejs.org/v2/guide/reactivity.html#ad>) 这一节非常重要，概括的情况：
  * 给定对象添加新的属性不会有变化侦测，可以用Object.assign覆盖对象，或者this.$set设置新属性
  * 数组用index设置元素也是不能响应式的，要用splice或者Vue.set()
* [v-model](<https://cn.vuejs.org/v2/guide/forms.html>)双向绑定，针对表单元素value、checked、selected这些情况
* v-html要防止跨站脚本攻击
* 计算属性会被缓存：如果在模板中多次调用一个方法，方法中的代码在每一次调用时都会执行一遍；但如果计算属性被多次调用，其中的代码只会执行一次，之后的每次调用都会使用被缓存的值。计算属性还可以设置setter和getter
* 侦听器很适合用于处理异步操作
  * 侦听对象里的值，可以使用 . 操作符
  * 当监听的属性发生变化时，侦听器会被传入两个参数：所监听 属性的当前值和原来的旧值（val，oldVal)
  * 侦听整个对象的变化，需要把deep选项设置为true
* filters，这个确实用得不够多，很多情况我是直接在请求数据之后用三元表达式把数据内容转换了一下
  * **过滤器是组件中唯一不能使用this来访问数据或者方法的地方**，因为过滤器应该是纯函数，会React应该更能理解这个原理
  * 如果想在过滤器中访问其他数据，可以将它作为参数传入
  * 只可以在插值和v-bind指令中使用过滤器，其实在v-bind表达式中建议使用方法或者计算属性
* 关于ref，我经常是通过this.$refs来调用子组件的方法，如果用的是第三方组件，通过阅读源码可以调用它们不曾暴露出来的方法挺管用
* 生命周期
  * 在Vue2.0中，mounted钩子触发时并不保证元素已经被添加到DOM上。如果想保证元素已经被添加，可以调用Vue.nextTick()方法（也可以通过this.$nextTick()调用）并传入一个回调函数，在回调函数中添加需要在元素被添加DOM之后运行的代码。
  * 生命周期钩子在业务开发的时候用before那些还是比较少的，记住created、mounted、updated、destroyed即可。
* Vue.directive()注册全局指令。一共有5个钩子函数，分别是bind、inserted、update、componentUpdated和unbind。最常用的是bind和update钩子
  * bind钩子函数会在指令绑定到元素时被调用。
  * inserted钩子会在绑定的元素被添加到父节点时被调用，跟mounted一样
  * update钩子会在绑定该指令的组件节点被更新时调用，但是该组价你的子组件可能此时还未更新
  * componentUpdated钩子和 updated钩子类似，但它会在组件的子组件都更新完成后调用
  * unbind钩子用于指令的拆除，当指令从元素上解绑时会被调用
  * **参数：name、value、oldValue、expression、arg、modifiers**
* 过渡
  * {name}-enter 设置那些需要在元素开始进入过渡时被移除的CSS属性
  * {name}-enter-active 设置过渡的时间、长度、过渡的属性和使用的曲线函数
  * {name}-enter-to设置那些在元素开始进入过渡时添加的CSS属性，可以设置-enter相反的属性效果好一些
  * {name}-leave 跟-enter-to一样不太有用，设置-leave-to相反的动画就行
  * {name}-leave-active应用于离开过渡的整个阶段
  * {name}-leave-to 在离开过渡被触发之后下一帧生效，在过渡完成之后才被移除。
  * 最实用的四个类名：
    * {name}-enter:**设置在进入过渡阶段需要过渡的CSS属性**
    * {name}-enter-active：**设置进入过渡的transition CSS属性**
    * {name}-leave-acitve：**设置离开过渡的transition CSS属性**
    * {name}-leave-to： **设置在离开过渡阶段需要过渡的CSS属性** 
* 动画，类似Velocity
  * 用法是在transition里v-on绑定特定的钩子函数
  * 钩子
    * beforeEnter
    * enter
    * afterEnter
    * enterCancelled
    * beforeLeave
    * leave
    * afterLeave



## 2.组件

Vue实例中的data属性是一个对象，然而组件中的data属性是一个函数。这是因为一个组件可以在同一个页面上被多次引用，你大概不希望它们共享一个data对象。vue-cli3创建出来的都是使用函数来写的，就相当于立即执行函数的做法，确定一个作用域。

props的属性可以通过this来访问，可以指定prop的类型，相当于React用了proptype.

```
props: {
    price: {
        type: Number,
        required: true,
        default: 100,
        validator(value) {
            return value >=0;
        }
    },
},
```

props的属性和组件名在父组件里写都是驼峰转横杠的。

数据流和.sync修饰符：如果需要数据双向绑定，可以使用.sync修饰符，比如分页组件当前所在页数；在input中的话可以使用update

* 自定义方法，this.#emit('方法名', 参数)，此外还有$off移除函数
* 插槽
  * \<slot>\</solt>
  * 具名插槽\<slot name="">\</slot>
  * 作用域插槽，里面的户型可以用slot-scope属性中定义的变量来获取

```
<blog-listing>
	<img
		slot="summary"
		slot-scope="{ image, summary }"
		:src="image"
		:alt="summary">
</blog-listing>
```

* 混入mixins的使用，可以减少组件中重复的属性、方法、计算属性等的使用。我试过一个后台管理重复了60次相同内容的不同组件，用了mixins，实在太方便了。mixins:[userMixin]  不过要小心方法、计算属性、非生命周期钩子属性的重复，因为组件的会覆盖混入的内容，可以使用私有方法或属性的方式，如$开头，或者_开头
* 大部分属性会覆盖组件内部模板中同名属性，但是class和style里面的会被合并，不过如果CSS内部的相同则会被覆盖



## 3.添加样式

class绑定为数组，每一项即为函数名，当然也可以用方法返回函数名

绑定为对象的时候key就是函数名，但是可以根据value的true或显示来决定显示与否

style用v-bind绑定对象时，CSS属性驼峰式



## 4.render函数和JSX

* createElement参数
  * 组件名
  * 组件属性
    * attrs，比如type
    * props
    * domProps, 比如innnerHTML
    * on
    * slot
    * key
    * ref
    * class
    * style
  * 组件内容

因为class和style可以设置为数组和对象，所以需要把他们从attrs剥离出attrs属性

Vue中使用[JSX: babel-plugin-transform-vue-jsx](<https://www.npmjs.com/package/babel-plugin-transform-vue-jsx>) ,我滴天，居然这么多人用React的方式写Vue...



## 5.vue-router

\<router-view />

[vue-router官方文档](<https://router.vuejs.org/zh/>) 

动态路由的实现其实用到的库时[path-to-regexp](<https://github.com/pillarjs/path-to-regexp>) ，Express、Koa和react-router都有用到，400行不到的正则匹配轮子。

获取动态路由参数，this.$route.params

由/user/123调到/user/456的时候，因为组件被重用了，生命周期钩子mounted不会被触发，这时需要用到路由的生命周期钩子：beforeRouteUpdate，注意参数传入的to、from、next。

另外的一种方式是使用watch来监听：

```
const PageUser = {
    template: '<div> ... user ... </div>',
    watch: {
        '$route'() {
            console.log('Route updated');
        }
    }
}
```

如果让组件的属性由动态路由中传入，可以在定义路由的时候设置props为true。不过通常用$route.params获取就行了，定义跟路由相关的数组可能把情况搞得复杂。

重定向：redirect属性， alias也可以实现重定向

\<router-link>的好处是它不用重新加载页面

* 默认的tag属性是a，也可以写tag="li" , tag="div"之类的、
* 默认渲染的类名是router-link-active，可以通过active-class来指定
* 原生事件的点击需要用到@click.native



**编程式导航：**

* router.push()
* router.replace()
* router.go()



**导航守卫**

* router.beforeEach()
  * 参数to、from、next
  * 可以判断路径开头，比如to.path.startsWith('/account')
  * 路由元信息meta协助判断权限  meta: { requiresAuth: true} ,这里的信息内容是你自己指定的

```
router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some((record) => {
    	return record.meta.requiredsAuth;
    })
    if (requiresAuth && !userAuthenticated()) {
        next('/login');
    } else {
        next();
    }
});
```

* router.afterEach 可以用来设置标题，比如

```
router.afterEach((to) => {
    document.title = to.meta.title;
})
```



**路由独享守卫**

* beforeRouteEnter
* beforeRouteUpdate
* beforeRouteLeave

注意：在beforeRouteEnter中this是undefined，因此此时组件还尚未被创建。但是可以在next里传一个回调，该回调会被传入组件实例作为其第一个参数：

```
const PageAccount = {
    template: '<div>...account page...</div>'
    beforeRouteEnter(to, from, next) {
        next((vm) => {
            console.log(vm.$route);
        })
    }
};
```



404页面,放在最后

```
const router = new VueRoute({
    routes: [
        {
            path: '*',
            component: PageNotFound
        }
    ]
});
```

子路由里可能也有无法匹配的，在子路由数组的最后一个也放一个PageNotFound.

路由命名可以为写router-link和router.push节省代码量。



## 6.vuex

提供一种集中式存储，可以在整个应用中使用它来存储和维护全局状态。

异步的操作，dispatch到actions，辅助函数mapActions

mapState返回一个被用作计算属性的函数对象，比如直接通过return state属性的那种操作适合放在计算属性中。如果返回的是跟store中不同名称，适合用对象的写法，如果是相同的可以使用数组的方式。另外还有解构的方式对对象展开。

getter：为了多个组件重用一些计算属性的操作，可以使用getters属性，通过this.$store.getters获取，而getters里面可以调用已经定义的小getter。辅助函数：mapGetters，放到组件的computed里面。

```
computed: mapGetters(['unread', 'unreadFrom'])
// 等效于
computed: {
    unread() {
        return this.$store.getters.unread;
    },
    unreadFrom() {
        return this.$store.getters.unreadFrom;
    }
}
```

对数据进行修改:commit 到actions，辅助函数mapMutations。

如果使用module来管理store，那么访问state的时候需要指定哪个state，使用辅助函数的时候也要指定module。

对于辅助函数，在设置模块的时候指定一下命名空间，比如：

```
export const namespaced = true;

// 则
computed：{
    unreadFrom() {
        return this.$store.getterrs['messages/unreadFrom'];
    }
}
// dispatch和commit的操作类似
```



## 7.测试

[vue-test-utils](<https://vue-test-utils.vuejs.org/zh/guides/#常用技巧>) 



