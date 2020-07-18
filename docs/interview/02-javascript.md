# JavaScript

## 0.小知识点
- JavaScript是基于对象的、事件驱动的脚本程序设计语言。
- substr方法截取字符串，参数一开始位置，参数二截取长度  
- indexOf(string) 可以查找某字符串是否包含字符串，方便截取.没有返回-1
- \s 元字符用于查找空白字符
- typeof返回的数据类型：**undefined、boolean、string、number、object、function**
- typeof(null)  结果是object
- charAt()可以获取字符串对应位置的字符
- 有var声明的是局部变量（方法内有效），没var声明的是全局变量（页面内有效）。
- console.log(MATH.PI++)仍然是3.141592653589793，系统对象的属性是只读的。
- split()作用是分割字符串，没有参数每个字符之间都分割，有参数则按该字符分割字符串，然后返回数组。作用跟join相反
- undefined实际是从null派生出来的，undefined是声明了变量未赋值，null是找不到对象。
- false被当做数值运算是，值为0，那么false==0   值为true
- innerHTML是DOM元素的对象属性，用于设置内容；document.write
- 消息提醒：alert弹出警告框，confirm弹出确认框，prompt弹出输入框
- window.location.reload()方法是用来刷新当前整个页面的。location.replace使用后不能使用history跳转页面
- 节点操作的常用语句：appendChild添加节点，removeChild移除节点，cloneNode复制节点，createElement创建元素，createTextNode创建文本节点，createAttibute创建指定名字的Attr节点。查找节点：getElementById、getElementsByTagName、getElementsByName
- Math.random()  取0~1的随机数，Math.floor(num)取整数部分，Math.round(num)  取四舍五入，Math.ceil(num)向上取整
- for/in是循环遍历对象的属性 
- 判断对象是数组的常用方法：  a.constructor == Array
- 数组在第n个地方插入元素用splice,参数是(位置，删除数量，插入的元素)
- typeof用于判断数据类型，instanceof用于判断一个变量是否为某个对象的实例。
- unshift()向数组开头插入元素，并返回长度。shift()删除数组第一个元素，并返回它的值.push（）末尾插入元素，返回数组的长度。
- slice() 字符串的字符添加、删除、替换，跟splice（对象是数组）相似
- 当判断对象属性存在时，hasOwnProperty是唯一可以依赖的方法，使用for in loop来遍历对象时，使用hasOwnProperty将会很好地避免来自原型对象扩展带来的困扰。
- 0.1+0.2 == 0.3  答案是false  ,进制数运算导致的。
- 判断是否是数组：  arr instance of Array  或者arr.\__proto__.constructor ==Array   
- DOM操作：appendChild添加，removeChild移除,replaceChild，clone复制，createElement创建,getElementById、getElementsByTagName查找，
- 阻止冒泡e.stopPropagation(IEcancleBubble),取消默认行为：event.preventDefault()
- 如何判断图片加载完成：readystatechange事件判断readState是loaded或complete
- Ajax的全称：**Asynchronous JavaScript and XML** 异步的JavaScript和XML

## 1.原型和原型链
可以用套娃去理解...

JavaScript中的每个对象都有一个prototype属性，称为原型，而**原型的值**也是一个对象，因此它也有自己的原型，这样就串联一条原型链。原型链的链头是object，它的prototype比较特殊，值为null.

在JavaScript中，原型也是一个对象，用原型可以实现对象的属性继承，JavaScript的对象中都包含了一个“prototype"内部属性，这个属性所对应的就是该对象的原型。

- 所有的引用类型（数组、对象、函数）都具有对象特征，可以自由扩展属性（null除外）
- 所有的引用类型（数组、对象、函数）都有一个\__proto__属性，属性值是一个普通的对象。
- 所有的函数都有一个prototype属性，属性值也是一个普通的对象
- 对于所有的引用类型（数组、对象、函数），\__proto__属性值指向它的构造函数的“prototype”属性值。
- 当试图得到一个对象的某个属性时，如果对象本身没有这个属性，那么会从它的\__proto__（构造函数的prototype）中寻找

![mark](http://qiniu.hackslog.cn/blog/20190523/iXa6MfnTJrcb.png?imageslim)

- 任何对象都有一个 `__proto__` 属性。
- 任何方法都有一个 `prototype` 属性。

`__proto__`指向 new 出来的构造函数的原型`prototype`。

`prototype` 是一个对象，当函数被定义的时候默认被创建的。

需要注意的是：

- `prototype` 也是一个对象 ，所以其中也有一个`__proto__`属性，指向对象的原型 `Object.protytype`。
- `Object` 本身是构造函数，继承了 Function.prototype。`Object.__proto__ === Function.prototype`
- `Function` 本身就是函数，继承了 Function.prototype。`Function.__proto__ === Function.prototype`

```
function A() {}

var a = new A();

console.log(a.__proto__ === A.prototype);

console.log(A.prototype.__proto__ === Object.prototype);

console.log(Object.prototype.__proto__ === null);

console.log(a.__proto__.__proto__.__proto__ === null);
```

任何一个对象都有一个`__proto__`属性，指向构造函数的原型 prototype，而 prototype 也是一个对象，也有一个`__proto__`属性，这样一环接一环，就形成了一个链，到最后 Object.protytype 截止。

- 函数对象有 `__proto__` 和 prototype 属性。
- 非函数对象只有 `__proto__` 属性。
- prototype 中有 `__proto__` 属性。且是 Object 构造函数创建的。
- 函数对象 `__proto__` 指向它的创建者及 Function 构造函数。
- Function 构造函数 `__proto__` 指向它自己。
- Object 对象的 prototype 中的 `__proto__` 是 null。

**prototype和contructor**
- prototype：这个属性将被该类型创建的所有实例共享，但是这种共享是只读的。在任何一个实例中只能够用自己的同名属性覆盖这个属性，而不能改变它。换句话说，对象在读取某个属性时，总是先检查自身的属性表，如果有这个属性，则会返回这个属性，**否则就会去读取prototype域**，返回prototype域上的属性。
- contructor:即构造函数，在**对象构造或者实例化时**被调用的方法。通常使用该方法来初始化数据成员和所需资源。构造器contructor不能被继承，因此不能重写overriding，但可以被重载overloading.对象的contructor属性返回创建该对象的函数的引用。


## 2.fetch和Ajax的区别
fetch基于Promise设计,不依赖于第三方

```
fetch(url).then(response => response.json())
  .then(data => console.log(data))
  .catch(e => console.log("Oops, error", e))

```
可以使用await来获取异步的数据
* Fetch 请求默认是不带 cookie 的，需要设置 fetch(url, {credentials: 'include'})

* 服务器返回 400，500 错误码时并不会 reject，只有网络错误这些导致请求不能完成时，fetch 才会被 reject。

[Ajax与Fetch比较](https://juejin.im/entry/599cfac56fb9a0249b4841b8) 
[github-fetch](https://github.com/github/fetch) 


## 3.作用域和闭包

闭包的三个特征：

1. 函数嵌套函数
2. 函数内部可以引用外部的参数和变量
3. 参数和变量不会以垃圾回收机制回收

闭包常驻内存，使用不当容易造成内存泄露。

## 4.宏任务和微任务
主线程在任务队列中读取事件

同步：synchronous
异步：asynchronous

异步有一个机制，就是遇到宏任务，先执行宏任务，将宏任务放入 eventqueue，然后在执行微任务，将微任务放入 eventqueue，并且这两个队列不是一个队列。当你往外拿的时候，先从微任务队列里**拿回掉函数**，然后再从宏任务队列里拿回掉函数。

在当前的微任务没有执行完成时，是不会执行下一个宏任务的。

在同步代码执行完成后才回去检查是否有异步任务完成，并执行对应的回调，而微任务又会在宏任务之前执行。

微任务包括 process.nextTick ，promise ，MutationObserver，其中 process.nextTick 为 Node 独有。

宏任务包括 script ， setTimeout ，setInterval ，setImmediate ，I/O ，UI rendering。

执行顺序：宏任务 -> 微任务 -> 宏任务。

node环境中，微任务的promise比async的优先级高
```
//第一个例子：
setTimeout(_ => console.log(4))

new Promise(resolve => {
  resolve()
  console.log(1)
}).then(_ => {
  console.log(3)
})
console.log(2)


//第二个例子：
Promise.resolve().then(()=>{
  console.log('Promise1')  
  setTimeout(()=>{
    console.log('setTimeout2')
  },0)
})

setTimeout(()=>{
  console.log('setTimeout1')
  Promise.resolve().then(()=>{
    console.log('Promise2')    
  })
},0)


//第三个例子：
console.log('1');

setTimeout(function() {
    console.log('2');
    process.nextTick(function() {
        console.log('3');
    })
    new Promise(function(resolve) {
        console.log('4');
        resolve();
    }).then(function() {
        console.log('5')
    })
})
process.nextTick(function() {
    console.log('6');
})
new Promise(function(resolve) {
    console.log('7');
    resolve();
}).then(function() {
    console.log('8')
})

setTimeout(function() {
    console.log('9');
    process.nextTick(function() {
        console.log('10');
    })
    new Promise(function(resolve) {
        console.log('11');
        resolve();
    }).then(function() {
        console.log('12')
    })
})

//第四个例子：
async function async1() {
  console.log('async1 start');
  await async2();
  console.log('async1 end');
}
async function async2() {
  console.log('async2');
}
console.log('script start');
setTimeout(function() {
    console.log('setTimeout');
}, 0);
async1();
new Promise(function(resolve) {
    console.log('promise1');
    resolve();
  }).then(function() {
    console.log('promise2');
  });
console.log('script end');

//第五个例子
 console.log(1)
    setTimeout(() => {
        console.log(2)
    })
    process.nextTick(() => {
        console.log(3)
    })
    setImmediate(() => {
        console.log(4)
    })
    new Promise(resolve => {
        console.log(5)
        resolve()
        console.log(6)
    })
    .then(() => {
        console.log(7)
    })
    Promise.resolve()
    .then(() => {
        console.log(8)
        process.nextTick(() => {
            console.log(9)
        })
    })

//例子1输出顺序是：1、2、3、4
//例子2输出顺序是：Promise1、setTimeout1、Promise2、setTimeout2
//例子3输出前端环境输出顺序是： 1、7、6、8、2、4、9、11、3、10、5、12
//例子3前端环境输出顺序是：1、7、6、8、2、4、3、5、9、11、10、12
//例子4输出顺序是：script start、async1 start、async2、promise1、script end、promise2、async1 end、setTimeout
//例子5输出顺序是：1、5、6、3、7、8、9、2、4
```

[微任务、宏任务与Event-loop](https://juejin.im/post/5b73d7a6518825610072b42b) 

[事件循环机制之宏任务与微任务](https://juejin.im/post/5b498d245188251b193d4059)

## 5.this

在一个函数的执行上下文中，this由该函数的调用者提供，由调用函数的方式来决定其指向
- 作为构造函数执行，构造函数中
- 作为对象属性执行，`foo.fn()`
- 作为普通函数执行，指向全局
- 用于`call` `apply` `bind`，`a.fn.call({name: 'B'})`

**一、纯粹的函数调用**

这时this属于全局对象

```
var x = 1;
function test() {
   console.log(this.x);
}
test();  // 1

```

**二、作为对象方法**

函数作为对象的方法，那么this指它的上级对象

```
function test() {
  console.log(this.x);
}

var obj = {};
obj.x = 1;
obj.m = test;

obj.m(); // 1
```

**三、作为构造函数**

这个函数可以生产一个新的对象，那么this此时指向这个新对象，不会指向全局。

```
function test() {
　this.x = 1;
}

var obj = new test();
obj.x // 1
```

**四、apply调用**

apply参数为空，默认调用全局对象,this就指全局对象。如果apply参数为对象，this代表该对象。

```
var x = 0;
function test() {
　console.log(this.x);
}

var obj = {};
obj.x = 1;
obj.m = test;
obj.m.apply() // 0
//obj.m.apply(obj); //1

```

[阮一峰-JavaScript的this的用法](http://www.ruanyifeng.com/blog/2010/04/using_this_keyword_in_javascript.html) 

## 6.深拷贝

在使用React和Redux的时候经常要对数据操作但是不能影响原来的数据，比如操作一个对象，直接用`=` 号只是使用了引用，实际上指向同一个对象。

浅拷贝对值类型来说是直接值传递的，不会出现什么问题，但是对于对象、数组等只是个引用，两个值指向同一个。

深拷贝针对对象和数组等情况，不单拷贝了字面的值，而且引用不指向同一个对象。也就是说新值的改变不会影响旧值。

对数组，使用新建数组然后push元素、slice()和concat()等方式能够复制第一级数组元素，如果数组里面的是数组或者对象，那么拷贝的还只是引用。

相似的，深层拷贝失败也会出现在多层嵌套的对象上。对应的情况是新建对象然后指定键值，Object.assign({}, obj)和扩展运算符（...）

通常写React时，最常用的深拷贝方式是：**JSON.parse(JSON.stringify(xxx))** 

或者手动递归拷贝：

```
//版本一：清纯版
function deepCopy(obj){
    var newObj = instanceof(Array) ? [] : {};
    if(typeof obj !== object){
        return;
    }
    for(var i in obj){
        newObj[i] = typeof obj[i] === 'object' ? deepCopy ： obj[i];
    }
    return newObj;
}

//版本二：明晰版
function clone(obj){
    var buf;
    if(obj instanceof Array){
        var i = obj.length;
        buf = [];
        while(i--){
            buf[i] = clone(obj[i]);
        }
        return buf;
    }else if(obj instanceof Object){
        buf = {};
        for(var i in obj){
            buf[i] = clone(obj[i]);
        }
        return buf;
    }else{
        return buf = obj;
    }
}
```

## 7.new怎么写

new后面跟的是构造函数

1. 新建一个对象
2. 将新创建的空对象的隐式原型指向其构造函数的显式原型
3. this指向这个新对象
4. 返回新的创建对象

生成实例，this变量会绑定在实例对象上，也就是所有的实例都包含一个constructor属性，指向它们的构造函数。

[new运算符](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/new) ，[JavaScript中的new的作用](https://blog.csdn.net/nyist327/article/details/53790404) 

## 8.typeof与instanceof的区别是什么？

typeof用来判断一个变量的类型，

- 数字类型返回number
- 字符串类型返回 string
- 布尔类型返回boolean
- 对象、数组、null返回的值是object
- 函数类型返回function
- 不存在的变量、函数或者undefined返回undefined

instanceof用来判断某个对象是否被另一个类构造（该类的实例化对象）

## 9.什么是冒泡和捕获

事件冒泡是指事件开始时由最具体的元素接收，然后逐级向上传播到较为不具体的节点（document对象）。由外到内

事件捕获是指不太具体的元素更早地接收事件，而最具体的节点最后接收到事件。

阻止冒泡：stopPropagation()

## 10.Ajax创建过程

1. 创建XMLHttpRequest对象，也就是创建一个异步调用对象
2. 设置响应HTTP请求状态变化的函数
3. 打开一个新的HTTP请求，并指定该HTTP请求的方法，URL及验证信息
4. 发送HTTP请求
5. 在响应回调函数中，根据改变状态和请求状态码，获取异步请求返回的数据
6. 渲染返回的数据
属性：onreadystatechange、responseText、responseXML、status/statusText

```
var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      console.log(this.responseText);
    }
  };
  xhttp.open("GET", "/", true);
  xhttp.send();

```


## 11.对ES6的了解

- 模板字符串  ${}
- 箭头函数
- for-of
- 剩余参数和默认参数
- let和const
- Symbol
- module： import,export
- 解构赋值
- Promise
- 类的概念

```
//类的定义
class SkinnedMesh extends THREE.Mesh {
  constructor(geometry, materials) {
    super(geometry, materials);

    this.idMatrix = SkinnedMesh.defaultMatrix();
    this.bones = [];
    this.boneMatrices = [];
    //...
  }
  update(camera) {
    //...
    super.update();
  }
  get boneCount() {
    return this.bones.length;
  }
  set matrixType(matrixType) {
    this.idMatrix = SkinnedMesh[matrixType]();
  }
  static defaultMatrix() {
    return new THREE.Matrix4();
  }
}

//类的声明
const instance = new SkinnedMesh();
```
## 12.Promise
问题：
* Promise解决的痛点是什么？
* 如何使用Promise？
* 能不能手写一个polyfill？

解决痛点是回调地狱
1. 嵌套层次很深，难以维护
2. 无法正常使用return和throw
3. 无法正常检索堆栈信息
4. 多个回调之间难以建立联系

**基本用法：**
```
new Promise(请求1)
    .then(请求2(请求结果1))
    .then(请求3(请求结果2))
    .then(请求4(请求结果3))
    .then(请求5(请求结果4))
    .catch(处理异常(异常信息))
```
**常用API**
* Promise.resolve(value)
  * 如果传入的 value 本身就是 Promise 对象，则该对象作为 Promise.resolve 方法的返回值返回。
  * 传入 thenable 对象，返回 Promise 对象跟随 thenable 对象的最终状态。
  * 其他情况以该值为成功状态返回一个 Promise 对象。
* Promise.reject
  * 返回状态是rejected
* Promise.race
  * 多个 Promise 任务同时执行，返回最先执行结束的 Promise 任务的结果，不管这个 Promise 结果是成功还是失败。
* Promise.all
  * 如果全部成功执行，则以数组的方式返回所有 Promise 任务的执行结果。 如果有一个 Promise 任务 rejected，则只返回 rejected 任务的结果。

一个 Promise 对象有三个状态，并且状态一旦改变，便不能再被更改为其他状态。

pending，异步任务正在进行。
resolved (也可以叫fulfilled)，异步任务执行成功。
rejected，异步任务执行失败。


如果then里不返回Promise会怎样？
.then()接受两个函数作为参数，分别代表fulfilled和rejected
外层的then会等里面的then先执行完再执行

Promise实现队列


[面试精选之Promise](https://juejin.im/post/5b31a4b7f265da595725f322) 




## 13.函数节流与函数防抖
* 函数节流：指定时间间隔内只会执行**一次** 任务。通常使用锁的标记
```
function throttle (fn, interval = 100) {
    let canRun = ture;
    return function () {
        if (! canRun) return;
        canRun = false;
        setTimeout(() => {
        fn.apply(this, arguments);
        canRun = true;
        }, interval);
    }
}

```


* 函数防抖：任务频繁触发的情况下，只有任务触发的间隔超过**指定间隔** 的时候，任务才会执行。例如clearTimeout(timeout);
```
function debounce (fn, interval = 300) {
    let timer = null;
    return function () {
        clearTimeout(timer);
        setTimeout(() => {
        fn.apply(this, arguments);
        }, interval);
    }
}

```



## 14.变量提升
函数及变量的声明都将被提升到函数的最顶部，函数被提升到变量声明之上。
使用let不会被提升

经典问题：**生成十个按钮，每个按钮点击的时候弹出1-10**

```
//ES3的写法
var i = 0;
for (i =1 ; i <= 10; i++)
{
    (function(i){
        var btn = document.createElement('button');
        btn.innerText = i;
        btn.onclick = function(){
            alert(i)
        };
        document.body.appendChild(btn);
    })(i);
}

//#ES6的写法
for (let i =1 ; i <= 10; i++){  
    var btn = document.createElement('button');
    btn.innerText = i;
    btn.onclick = function(){
        alert(i) 	};
	document.body.appendChild(btn);
}
```

[深入理解JavaScript立即执行函数](https://segmentfault.com/a/1190000008887645) 

## 15.作用域
**作用域：**每个函数有各自的作用域，只有在函数内部才可以访问到该函数的变量。操作变量时先在内部找，如果找不到，向外查找。记得如果内部有变量声明的话变量会提升到作用域顶部，而且是没有赋值的，变成了undefined，因此不会跑到外层作用域寻找变量。
作用域是名字和实体的绑定有效的那部分程序。
```
var bar = 1;
function test(){
  console.log(bar); //undefined
  var bar = 2;
  console.log(bar);  //2
}
test();
```

[词法作用域](https://www.kancloud.cn/kancloud/you-dont-know-js-scope-closures/516610) 



**函数提升优先于变量提升：**

```
var getName=function(){
  console.log(2);
}

function getName(){
  console.log(1);
}

getName();
//结果为2
```

上面结果不是1，函数优先提升会放在匿名函数的上面，然后才是getName变量声明。函数是JavaScript中的一等公民，所以在写JS代码的时候可以执行函数，而函数的定义在执行后面是可以的，因为在预编译的时候函数声明会提前；如果同一个作用域存在多个相同的函数声明，后面会覆盖前面的。

**没有块作用域**

```
function test(){
    var tmp;
    tmp =2;
    {
        tmp =4;
    }
    console.log(tmp);   //4
}
test();
```

JavaScript没有块作用域，只有全局作用域和函数作用域。

**在深刻体会一下：**

```
var tmp = 3;
function foo(){
    tmp = 10;
    alert(tmp);
}
foo();  // 10
alert(tmp);  //3


//等价于
function foo(){
	var tmp;
    tmp = 10;
    alert(tmp);
}
var tmp = 3;
foo();
alert(tmp);
```

最后的tmp为3是因为函数中的tmp并没有调用函数外的tmp，或者想象成foo()的定义放在了var tmp =3之前，虽然声明了tmp = 10,后来被覆盖成了3.

闭包能够实现类似块级作用域的效果：

```
function foo() {
    var x = 1;
    if (x) {
        (function () {
            var x = 2;
            // some other code
        }());
    }
    // x is still 1.
}
```



建议：

- 先声明，后使用
- 使用let替代var

参考：

[JavaScript变量提升](http://www.runoob.com/js/js-hoisting.html) 

[JavaScript系列：变量提升和函数提升](https://www.cnblogs.com/liuhe688/p/5891273.html) 

[JavaScript作用域和变量提升](https://segmentfault.com/a/1190000003114255) 

[使用let](https://segmentfault.com/a/1190000014401234) 

## 16.闭包
含义：闭包能够读取其他函数内部变量的函数

作用和原理：因为闭包只有在被调用时才执行操作，所以它可以被用来定义控制结构。

多个函数可以使用同一个相同的环境，这使得它们可以通过改变那个环境相互交流

闭包可以用来实现对象系统

使用场景：

1. 采用函数引用方式的setTimeout调用
2. 将函数关联到对象的实例方法
3. 封装相关的功能集
4. 实现静态变量
5. 缓存数据、柯里化
```
function a(){
    var i=0;
    function b(){
        alert(++i);
    }
    return b;
}
var c=a();
c();
```

这段代码输出的是什么？
```
    for (var i = 0; i < 5; ++i) {
    
         setTimeout(function () {
    
                 console.log(i + ' ');
    
            }, 1000);
    
    }
```
答案是：5 5 5 5 5

JavaScript是单线程执行，setTimeout是异步执行函数，等for循环结束之后执行异步队列中的事件，此时i已经变成5了，所以控制台输出的i都是同一个

改进的方法是使用立即执行函数来创建新的闭包函数：
```
    for (var i = 0; i < 5; ++i) {
    
          (function (i) {
    
                setTimeout(function () {
    
                      console.log(i + ' ');
    
                }, 1000);
    
          }(i));
    
    }
```
这回结果是：0 1 2 3 4
```
    var z=10;
    function foo(){
        console.log(this.z);
    }
    (function(funArg){
    
        funArg();
        var z=20;
    
    })(foo);

```


```
function foo(){
  function bar(a){
    i =  3;
    console.log(a + i);
  }
  for(var i= 0; i < 10; i++){
    bar(i * 2);
  }
}

foo();

```
答案是 3  11  11   11   11   11 ...无限循环
我也好惊讶，怎么console.log变异步了？呜，后来搜了一下，bing是我认识的人写的一篇博客，哈哈哈
[console.log是异步的吗？](https://www.cnblogs.com/sevenskey/p/5476386.html) 


```
function m(){
  var i =2;
  return function(){
    console.log(i++);
  }
}

var F1 = m();

var F2 = m();

F1();
F1();
F2();

```
答案是  2 3 2
记得，加括号的时候才是调用！


## 17.关于offsetLeft、scrollTop、clientTop

- 网页可见区域宽： document.body.clientWidth;
- 网页可见区域高： document.body.clientHeight;
- 网页可见区域宽： document.body.offsetWidth   (包括边线的宽);
- 网页可见区域高： document.body.offsetHeight  (包括边线的宽);
- 网页正文全文宽： document.body.scrollWidth;
- 网页正文全文高： document.body.scrollHeight;
- 网页被卷去的高： document.body.scrollTop;
- 网页被卷去的左： document.body.scrollLeft;
- 网页正文部分上： window.screenTop;
- 网页正文部分左： window.screenLeft;
- 屏幕分辨率的高： window.screen.height;
- 屏幕分辨率的宽： window.screen.width;
- 屏幕可用工作区高度： window.screen.availHeight;
- 屏幕可用工作区宽度：window.screen.availWidth;

[Js中 关于top、clientTop、scrollTop、offsetTop](https://www.cnblogs.com/seven_cheng/archive/2009/11/16/1603787.html)
## 18.CommonJS和ES6 Module的区别
* es6 
  * export : '可以输出多个，输出方式为 {}' ，
  * export default : ' 只能输出一个 ，可以与export 同时输出，但是不建议这么做'，
  * **解析阶段确定对外输出的接口，解析阶段生成接口**
  * 模块不是对象，加载的不是对象，
  * 可以单独加载其中的某个接口（方法），
  * 静态分析，动态引用，输出的是值的引用，值改变，引用也改变，即原来模块中的值改变则该加载的值也改变，
  * this 指向undefined

* commonJS
  * module.exports = ... : '只能输出一个，且后面的会覆盖上面的' ，
  * exports. ... : ' 可以输出多个'，
  * **运行阶段确定接口，运行时才会加载模块**
  * 模块就是对象，加载的是该对象，
  * 加载的是整个模块，即将所有的接口全部加载进来，
  * 输出的是值的**拷贝**，即原来模块中的值改变不会影响已经加载的该值，
  * this 指向当前模块

## 19.创建对象的几种方式
* 工厂模式
* 构造函数模式
* 原型模式
* 构造函数模式和原型模式
* 动态原型模式
* 寄生构造函数模式
* 稳妥构造函数模式

[JavaScript创建对象的七种方式](https://xxxgitone.github.io/2017/06/10/JavaScript%E5%88%9B%E5%BB%BA%E5%AF%B9%E8%B1%A1%E7%9A%84%E4%B8%83%E7%A7%8D%E6%96%B9%E5%BC%8F/) 

## 20.JavaScript实现继承方式
利用原型链来实现继承

构造函数设置了一个prototype属性，所有实例对象需要共享的属性和方法都放在这个对象里面，而那些不需要共享的属性和方法，就放在构造函数里面。
* 原型链继承
* 构造函数继承
* 组合继承
* 寄生组合式继承
* extends继承

**1. 原型链继承（父和子都用prototype）**
```
function Parent () {
    this.name = 'kevin';
}

Parent.prototype.getName = function () {
    console.log(this.name);
}

function Child () {

}

Child.prototype = new Parent();

var child1 = new Child();

console.log(child1.getName()) // kevin

```
* 引用类型的属性被所有实例共享
* 在创建Child的实例时，不能向Parent传参

**2. 构造函数继承(子类调用父类并call(this))**

```
function Parent () {
    this.names = ['kevin', 'daisy'];
}

function Child () {
    Parent.call(this);
}

var child1 = new Child();

child1.names.push('yayu');

console.log(child1.names); // ["kevin", "daisy", "yayu"]

var child2 = new Child();

console.log(child2.names); // ["kevin", "daisy"]

```
* 可以避免属性被所有实例共享
* 可以在Child中向Parent传参
* 不足：方法在构造函数中定义，方法每次创建实例都会被创建一遍


[JavaScript深入继承之多种方式和优缺点](https://github.com/mqyqingfeng/Blog/issues/16) 

**3. 组合继承**
结合原型链和构造函数

这是最最常用的继承方式
```
function Parent (name) {
    this.name = name;
    this.colors = ['red', 'blue', 'green'];
}

Parent.prototype.getName = function () {
    console.log(this.name)
}

function Child (name, age) {

    Parent.call(this, name);
    
    this.age = age;

}

Child.prototype = new Parent();
Child.prototype.constructor = Child;

var child1 = new Child('kevin', '18');

child1.colors.push('black');

console.log(child1.name); // kevin
console.log(child1.age); // 18
console.log(child1.colors); // ["red", "blue", "green", "black"]

var child2 = new Child('daisy', '20');

console.log(child2.name); // daisy
console.log(child2.age); // 20
console.log(child2.colors); // ["red", "blue", "green"]

```

**4. 寄生组合式继承**

```
function Parent (name) {
    this.name = name;
    this.colors = ['red', 'blue', 'green'];
}

Parent.prototype.getName = function () {
    console.log(this.name)
}

function Child (name, age) {
    Parent.call(this, name);
    this.age = age;
}

Child.prototype = new Parent();

var child1 = new Child('kevin', '18');

console.log(child1)

```

[廖雪峰-JavaScript继承机制的设计思想](http://www.ruanyifeng.com/blog/2011/06/designing_ideas_of_inheritance_mechanism_in_javascript.html) , [JavaScript六种继承方式](https://xxxgitone.github.io/2017/06/12/JavaScript%E5%85%AD%E7%A7%8D%E7%BB%A7%E6%89%BF%E6%96%B9%E5%BC%8F/) 

[前端面试必备之JS继承方式总结](https://www.imooc.com/article/20162) , [MDN-继承与原型链](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) 

[JavaScript深入之继承的多种方式和优缺点](https://github.com/mqyqingfeng/Blog/issues/16) 

[JavaScript常见的继承方式](https://juejin.im/entry/5993eeaa51882524382f3c0b) 

## 21.使用JavaScript实现简单的拖拽
使用 JavaScript 实现拖拽的步骤：

让元素捕获事件（mousedown, mousemove & mouseup）
单击并不释放，触发 mousedown，标记开始拖拽，并获取元素和鼠标的位置
拖动鼠标，触发 mousemove，不断的获取鼠标的位置，并通过计算重新确定元素的位置
释放师表，触发 mouseup，结束拖拽，确定元素位置并更新

**被拖拽的元素必须是相对父元素定位，或者是绝对定位**

鼠标位置可以在 event 对象中获得，常用的属性有：

* clientX / clientY : 相对浏览器窗口坐标
* offsetX / offsetY : 相对事件目标对象坐标
* pageX / pageY : 相对 document 对象坐标

[JavaScript实现拖拽](https://www.ahonn.me/posts/2016051418#comment) 
[js实现拖拽效果](https://x-front-team.github.io/2017/03/01/js%E5%AE%9E%E7%8E%B0%E6%8B%96%E6%8B%BD%E6%95%88%E6%9E%9C/)
[HTML5实现拖拽效果](https://juejin.im/entry/59eebc39f265da431c6f7bdb) 

## 22.柯里化
柯里化是一种将对具有多个形参的函数的求值转换为对一组只有一个形参的函数的求值的技术。
柯里化函数的真正能力是它们可以简化函数组合。一个函数可以接受任意数量的输入，但是只返回一个输出。

```

function currying (fn, ...args1) {

    return function (...args2) {

        return fn(...args1, ...args2)

    }
}

var increment = currying(add, 1)

increment(2) === 3

// true

var addTen = currying(add, 10)

addTen(2) === 12

// true


```
[JavaScript专题之函数柯里化](https://github.com/mqyqingfeng/Blog/issues/42) 
[邂逅函数柯里化](https://segmentfault.com/a/1190000008263193) 
[JS中的柯里化](https://www.zhangxinxu.com/wordpress/2013/02/js-currying/) 
[柯里化对函数式编程有何意义？](https://www.zhihu.com/question/20037482) 
[柯里化与函数组合](https://juejin.im/post/5c1a0d516fb9a049d05daee9) 

## 23.箭头函数
箭头函数会继承外层函数调用的this

**注意要点：**
（1）函数体内的this对象，就是**定义时**所在的对象，而不是使用时所在的对象。比如不要在对象里使用箭头函数
（2）不可以当作构造函数，也就是说，**不可以使用new命令**，否则会抛出一个错误。
（3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用Rest参数代替。
（4）不可以使用yield命令，因此箭头函数不能用作Generator函数。
（5）在动态上下文回调函数中慎用this

[少年，不要滥用箭头函数啊](https://jingsam.github.io/2016/12/08/things-you-should-know-about-arrow-functions.html) 


## 24.如何避免JavaScript内存泄漏
由于某些原因，内存没有被操作系统或可用内存池回收。

JavaScript常见的内存泄漏：
1. 意外的全局变量
2. 被遗忘的指针和回调函数
3. 脱离DOM的引用
4. 闭包

[4类JavaScript内存泄漏及如何避免](https://jinlong.github.io/2016/05/01/4-Types-of-Memory-Leaks-in-JavaScript-and-How-to-Get-Rid-Of-Them/) 

## 25.常用的数组方法有哪些？


* copyWithin
* find
* findIndex
* fill
* entries
* keys
* values
* includes
* from
* of
* every
* some