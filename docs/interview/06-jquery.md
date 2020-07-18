# jQuery

## 0.小知识点

- 追加内容 appendTo()
- each()方法规定每个匹配元素规定运行的函数
- eq() 方法将匹配元素集缩减值指定 index 上的一个  
- $(":header")所有标题元素
- $(":animated")正在执行的动画
- $("tr:gt(0)")大于0的行数 ,$("tr:lt(0)")小于0的行数
- $("div:has(p)")选择包含段落元素的层元素
- $("ul li:nth-child(odd)")匹配作为父元素的奇数
- 在body中插入一个class="box"的DIV  $('body').append($('div.box'));
- jQuery 提供了一个非常有用的 .clone() 方法用于对指定元素进行深拷贝
- keydown->keypress->keyup。keypress可以用来做输入框验证。

## 1.jQuery的扩展方式

_方法一_：使用jQuery本身的扩展方法extend

```
$.extend({
    hahaha:function(){
        alert('哈哈哈哈！')
    }
})

//调用
$.hahaha()
```

_方法二_ : 作用在jQuery对象上的jQuery.fn.extend()

```
$.fn.extend({
    hahaha:function(){
        alert('哈哈哈哈！')
    }
})

//调用
$(".class").hahaha();
```

## 2.事件委托
事件委派：事件委托是通过事件冒泡的原理，利用父级去触发子级的事件。

bind()或者on()给指定元素绑定事件后，如果匹配的元素是后来添加进来的，事件会无效，可以通过live()或者delegate()进行事件委派，让子元素的事件绑定在父元素上，这样新添加的元素也可以被处理

delegate()是jQuery的事件委托方法

```
<ul id="wrap">
    <li>item1</li>
    <li>item2</li>
    <li>item3</li>
    <li>item4</li>
    <li>item5</li>
</ul>


$(function(){

    // 普通事件
    $('li').click(function(){
        $(this).css('background', '#D4DFE6');
    });
      

    // 动态添加DOM节点
    $('#addBtn').click(function(){
        $('#wrap').append( $('<li>item'+ ($('li').length + 1) +'</li>') );
    });
    // jQuery的delegate写法
    $('#wrap').delegate('li', 'click', function(ev){

        // this 指向委托的对象 li
        $(this).css('background', '#D4DFE6');

        // 找到父级 ul#wrap
        $(ev.delegateTarget).css('border', '2px solid #f00');
    });
    // jQuery的on的写法
    $('#wrap').on('click', 'li', function(ev) {
        // this 指向委托的对象 li
        $(this).css('background', '#D4DFE6');

        // 找到父级 ul#wrap
        $(ev.delegateTarget).css('border', '2px solid #f00');
    })
```

## 3.jQuery中的detach()和remove()方法的区别是什么？

remove方法也是从DOM里删除元素。当你想要删除节点本身和节点里的所有东西的时候，可以使用remove方法。除了节点本身以外，节点绑定的事件 和该节点相关的JQuery数据，也会被同时清除。当需要清除节点本身，但是不需要清除绑定的事件和数据的时候，可以使用detach方法。 

detach方法和remove方法很相似，但是它会保留所有JQuery相关的数据和绑定的事件。当你删除之后，想要在后来的某个时候重新加入时，这个方法将会很有用。

## 4.jQuery中使用Ajax

```
$.ajax({
    type: "post",
    dataType: "JSON",
    url:"<%=basePath%>/prod/findTypeName.do",
    async:true,
    success: function(result){
        alert("成功");
    },
    error: function(){
        alert("失败");
    }
})
```

## 5.jQuery的插入方法

- 内部插入：append()、appendTo()、prepend()、prependTo()
- 外部插入方法：after()、insertAfter()、before()、insertBefore()
- append(content)在被选元素的结尾（仍然在内部）插入指定内容，content是HTML代码
- appendTo(selector)添加HTML代码到元素selector的末尾
- insertAfter(selector)将HTML代码插入指定元素selector的后面；如果该元素后面已有元素，这些元素会被移走而添加到被插入元素的后面            
- after(content)将HTML代码插入指定元素的后面，content是插入的内容
- bind(type)和one(type)属于事件处理，而click()和change()不属于事件处理

## 6.jQuery中的事件监听

四种事件监听方式：

- bind() 使用频率最高的
- live()  把事件绑定在根节点上
- delegate()
- on()

## 7.jQuery文档处理有哪些？

六种模式：内部插入、外部插入、包裹、替换、删除、复制

- 内部插入：append(),appendTo(),prepend(),prependTo()
- 外部插入：after(),before(),insertAfter(),insertBefore()
- 包裹：wrap(),unwrap(),wrapAll(),wrapInner()
- 替换：replaceWith(),repalceAll()
- 删除：empt(),remove(),detach()
- 复制：clone()

## 8.jQuery中的onload，ready方法怎么用，区别是什么？

当DOM加载完成以后jQuery执行回调函数，通常上写法是：

```
$(function(){
    //do somethind
});

//其实等价于
$(document).ready(function(){
    //do something
});
也等价于
$().ready(function(){
    //do something
})

```

ready表示文档结构已经加载完成，而onload是指页面包括图片在内的所有元素都加载完，ready在前，onload在后。

[jQuery--onload,ready方法详细说](https://blog.csdn.net/dreamzml/article/details/8859026) 

## 9.animate()方法怎么用？
animate() 方法执行 CSS 属性集的自定义动画。

语法：

```
$(selector).animate(styles,speed,easing,callback)
```

该方法通过CSS样式将元素从一个状态改变为另一个状态。CSS属性值是逐渐改变的，这样就可以创建动画效果。

只有数字值可创建动画（比如 "margin:30px"）。字符串值无法创建动画（比如 "background-color:red"）。

```
<html>
<head>
<script type="text/javascript" src="/jquery/jquery.js"></script>
<script type="text/javascript">
$(document).ready(function()
  {
  $(".btn1").click(function(){
    $("#box").animate({height:"300px"});
  });
  $(".btn2").click(function(){
    $("#box").animate({height:"100px"});
  });
});
</script>
</head>
<body>
<div id="box" style="background:#98bf21;height:100px;width:100px;margin:6px;">
</div>
<button class="btn1">Animate</button>
<button class="btn2">Reset</button>
</body>
</html>

```

[图片占位](http://qiniu.hackslog.cn/18-11-9/79789952.jpg)

## 10.DOM和jQuery对象的相互转化
DOM转jQuery对象

```
var v = document.getElementById('v');
var $v = $(v);
```

jQuery对象转DOM，通过index方法或者get(index)方法获得DOM对象

```
//[index]方法
var $v=$("#v");
var v = $v[0];

//get(index)方法
var $v = $("#v");
var v = $v.get(0);

```
## 11.jQuery中的Deferred和promise

跟ES6很像的Deferred

```
function runAsync(){
    var def = $.Deferred();
    //做一些异步操作
    setTimeout(function(){
        console.log('执行完成');
        def.resolve('随便什么数据');
    }, 2000);
    return def.promise(); //就在这里调用
}
var d = runAsync();
d.then(function(data){
    console.log(data)
});
d.resolve('在外部结束');
```

而promise跟Primise规范没有关系，它返回一个受限的Deferred对象的方法，无法从外部调用

```
function runAsync(){
    var def = $.Deferred();
    //做一些异步操作
    setTimeout(function(){
        console.log('执行完成');
        def.resolve('随便什么数据');
    }, 2000);
    return def.promise(); //就在这里调用
}
```

Deferred支持链式调用，使用.then(),而then()接收两个参数，分别是执行完成和执行失败的回调，还有第三个参数是pending状态。可以使用done()，fail()来调用完成和失败的方法。always怎类似于ES6的complete

```
deferred.then( doneFilter [, failFilter ] [, progressFilter ] )
```

[大白话讲解Promise(三)搞懂jQuery中的Promise](https://www.cnblogs.com/lvdabao/p/jquery-deferred.html) 

[阮一峰-jQuery的deferred对象详解](http://www.ruanyifeng.com/blog/2011/08/a_detailed_explanation_of_jquery_deferred_object.html) 

[jQuery.Deferred对象](http://javascript.ruanyifeng.com/jquery/deferred.html) 
