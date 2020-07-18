# HTML+CSS

## 1.选择器和选择器优先级

- id选择器  #
- 类选择器  .class-name
- 标签选择器  div  p h1
- 相邻选择器  h1+ p
- 子选择器  ul > li
- 后代选择器  li a
- 属性选择器  [ ]
- 伪类选择器  a:hover 

*优先级*

1. 内联样式  1000
2. ID选择器 0100
3. 类、伪类和属性选择器  0010
4. 元素选择器和伪元素选择器  0001

## 2.盒模型

box-sizing
- content-box: 默认的模型，width指的是内容（content）的宽度，真实宽度还会加上padding和border
- border-box:width = 内容宽度 + padding + 边框宽度
- padding-box: padding并入width或height的大小

## 3.清除浮动

起因：float破坏了父标签的原本结构，被设置了float的元素会脱离文档流。 

![mark](http://qiniu.hackslog.cn/blog/20190521/E8inpFYSThJr.png?imageslim)

元素含有浮动属性->破坏inline box->破坏linebox的高度->没有高度->塌陷
方法：
1. 添加一个盒子，加入clear:both
2. 给父元素加入：overflow: hidden(在浮动元素的父元素上创建一个bfc)
3. 最常用的一种方式：after伪元素

代码：

```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style type="text/css" media="screen">
          .box1, .box2, .box3{
            width: 100px;
            height: 60px;
            float: left;
          }
          .container{
            width: 600px;
            border: 1px solid black;
          }
          .box1{
            background: blue;
          }
          .box2{
            background: red;
          }
          .box3{
            background: yellow;
          }
           footer{
            width: 600px;
            height: 40px;
            border: 2px dotted black;
          }
    </style>
</head>

<body>
  <div class="container">
    <div class="box1"></div>
    <div class="box2"></div>
    <div class="box3"></div>
  </div>
   <footer></footer>
</body>
</html>
```

**目标：**将父元素的高度撑起来，将浮动元素包裹其中，避免浮动元素影响父元素外部元素的排列。

方法一：添加一个盒子

在父元素结束前加一个用于清除浮动的盒子

```
  <div class="container">
    <div class="box1"></div>
    <div class="box2"></div>
    <div class="box3"></div>
    <div class="clearfloat">
    </div>
  </div>
  
  //样式部分增加：
    .clearfloat{
        clear: both;
      }
```

![mark](http://qiniu.hackslog.cn/blog/20190521/ikGs9NzGrLSR.png?imageslim)

方法二：给父元素添加overflow:hidden;

```
.container{
    width: 600px;
    border: 1px solid black;
    overflow: hidden;
}
```

方法三：使用after伪元素

```
  .container:after{
    content: ".";
    height: 0;
    display: block;
    clear: both;
  }
```

浮动定位和清除浮动时只会应用于同一个BFC内的元素。

参考：[清除浮动的四种方法及其原理理解](https://juejin.im/post/59e7190bf265da4307025d91)

## 4.常见布局

- 静态布局
- 弹性布局
- 流式布局
- 自适应布局
- 响应式布局
- 圣杯布局
- 双飞翼布局
- 两列布局

实例：**左中右盒子，左右盒子200px，中间自适应，先加载中间（双飞翼布局）**

圣杯布局：左右利用margin靠置到左右，padding压缩两边，左右在利用padding负值撑开中间的内容。

![mark](http://qiniu.hackslog.cn/blog/20190521/3xiggiUnFWyB.png?imageslim)

```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style type="text/css" media="screen">
      .middle,.left,.right{
        position: relative;
        height: 40px;
      }
      .middle{
      	float: left;
        width: 100%;
        background: red;
      }
      .left{
        width: 200px;
        left: -200px;
        background: blue;
        margin-left: -100%;
      }
      .right{
        width: 200px;
        right: -200px;
        background: orange;
        margin-left: -200px;
      }
      .main{
        overflow: hidden;
        padding: 0 200px;
      }
    </style>
</head>

<body>
  <div class="main">
    <div class="middle">中间</div>
    <div class="left">左边</div>
    <div class="right">右边</div>
  </div>
</body>
</html>
```

但是中间是必须设置最小宽度的，不然这个布局会被撕碎!

![mark](http://qiniu.hackslog.cn/blog/20190521/Y1eKlojYErTD.png?imageslim)

双飞翼布局解决了这个问题：

```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style type="text/css" media="screen">
      .main{
        overflow: hidden;
        padding: 0;
      }
      .middle,.left,.right{
        float: left;
        height: 40px;
      }
      .middle{
        width: 100%;
        background: red;
      }
      .inner-middle{
        margin: 0 200px 0 200px;
      }
      .left{
        width: 200px;
        background: blue;
        margin-left: -100%;
      }
      .right{
        width: 200px;
        height: 40px;
        background: orange;
        margin-left: -200px;
      }

    </style>
</head>

<body>
  <div class="main">
    <div class="middle">
      <div class="inner-middle">中间</div>
    </div>
    <div class="left">左边</div>
    <div class="right">右边</div>
  </div>
</body>
</html>
```

三个部分都设定为左浮动，然后设置middle的宽度为100%，此时，left和right部分会跳到下一行；

通过设置margin-left为负值让left和right部分回到与center部分同一行；

center部分增加一个内层div，并设margin: 0 200px；

参考：

[1.聊聊淘宝为什么要提出双飞翼布局](https://github.com/zwwill/blog/issues/11)

[2.几种常见的CSS布局](https://juejin.im/post/5bbcd7ff5188255c80668028) 

## 5.定位position

- static： 默认，按正常文档流排列
- relative 导致相对自身的位置变化，不会影响其他元素的变化
- absolute  脱离文档流，相对最近的position不是static的父元素，否则是window
- fixed 根据window来确定位置
- - position: sticky 是relative和fixed的结合体。超过某个阈值后一个阈值后定位方式变为fixed。类似豆瓣的小组边栏广告位设计。

## 6.实现居中

- inline元素使用`text-align:center`
- block元素使用`margin：auto`
- flexbox居中 `justify-content: center; align-content: center; align-item: center;`
- p元素居中设置vertical-align: middle将行距增加到和整个p一样高
- 绝对定位的使用margin和left实现，有负值
- transform

```
/*绝对定位加margin和left */
position: absolute;
float: left;
width: 200px;
height: 100px;
border: 1px solid red;
left: 50%;
top: 50%;
margin: -50px 0 0 -100px; 

/* transform */
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
```

## 7.垂直居中

- inline元素使用line-height == height的设置
- 元素无固定高度：display: table-cell; vertical-align: middle;
- 绝对定位元素使用left和margin
- 绝对定位元素使用`transform： translate( -50%, -50%);`
- 绝对定位元素使用`margin: auto`
- display: flex; flex-direction: row; justify-content: center;
行内居中：
```
text-align: center;
vertical-align: middle;
```

## 8.CSS3动画

- @keyframes（关键帧）定义一个动画名，然后animation-name使用哪个动画
  - animation-name 动画名
  - animation-duration 动画时长
  - animation-timing-function 动画曲线
  - animation-delay 规定动画开始时间（延时）
  - animation-iteration-count 重复次数，默认是一次
  - animation-direction 下个周期逆向播放，默认normal
  - animation-play-state 动画是否正在运行或暂停，默认running
- transition 过渡效果

animation(动画）、transforms(变形)、transition（过渡动画）、translate(移动)

![mark](http://qiniu.hackslog.cn/blog/20190521/RSPwHHVWP673.gif)

transition关注更多的是CSS Property的变化，property值和时间的关系是三次贝塞尔曲线

局限：

1. transition需要时间出发，所以没法在网页加载自动发生。
2. transition是一次性的，不能重复发生，除非一再触发
3. transition只能定义开始状态和结束状态，不能定义中间状态
4. 一条transition规则只能定义一个属性的变化，不能涉及多个属性。

animation作用于元素本身而不是样式属性，可以使用关键帧概念，实现自由的动画效果。它提供keyframe方法

参考：[CSS动画简介](http://www.ruanyifeng.com/blog/2014/02/css_transition_and_animation.html) , [过渡效果VS动效](https://cssanimation.rocks/cn/transition-vs-animation/) ，[CSS动画：animation、transition、transform、translate傻傻分不清](https://juejin.im/post/5b137e6e51882513ac201dfb) 

## 9.Flex布局
重点：主轴(main axis) 交叉轴：(cross axis)
* flex-direction排列方向
    * row
    * row-reverse
    * column
    * column-reverse
* flex-wrap 换行
    * nowrap 
    * wrap
    * wrap-reverse
* justify-content 主轴的对齐方式
    * flex-start
    * flex-end
    * center
    * space-between
    * space-around
* align-items 交叉轴的对齐方式
* align-content 轴线对齐方式
* 项目属性
    * order
    * flex-grow
    * flex-shrink
    * flex-basis
    * flex
    * align-self

参考链接：

[1.30分钟学会Flex布局](https://zhuanlan.zhihu.com/p/25303493) 

[2.弹性布局flex](https://juejin.im/post/58e3a5a0a0bb9f0069fc16bb) 

[3.mozilla flex布局基本概念](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox) 

[4.Flex布局完全教程](https://segmentfault.com/a/1190000008823763) 

[5.w3cplus Flex布局指南](https://www.w3cplus.com/css3/a-guide-to-flexbox-new.html) 

[深刻理解flex布局以及计算](https://www.w3cplus.com/css3/flexbox-layout-and-calculation.html) 

[6.Flex布局教程实例篇](https://www.jianshu.com/p/7b368e79801b) 
[7.阮一峰介绍flex](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)

## 10.隐藏一个元素的方法
- display： none;
- position: absolute; left:  -999px;
- visibility: hidden;
- opacity: 0;
## 11.在HTML中如何做SEO

1. h1只出现一次
2. strong标签的使用
3. title和meta description
4. 有丰富的超链接
5. 超链接有说明，title属性和alt属性
6. 加上copyright,有网站名称和链接
7. 优化逻辑，层次分明

注：alt属性是给搜索引擎识别的，在图片无法显示时替代文本；title是关于元素的注释信息，主要是给用户解读的：在鼠标放到文字或是图片上时，有title文字显示。

## 12.什么是BFC
块级格式化上下文(Block Formatting Context),是用于布局块级盒子的一块渲染区域
* 普通流  FC
* 浮动
* 绝对定位

应用：
1. 自适应两栏布局
2. 可以阻止元素被浮动元素覆盖
3. 可以包含浮动元素——清除内部浮动
4. 分属于不同的BFC时可以阻止margin重叠

块格式化上下文对浮动定位与清除浮动都很重要。
浮动定位和清除浮动时只会应用于同一个BFC内的元素。
浮动不会影响其它BFC中元素的布局，而清除浮动只能清除同一BFC中在它前面的元素的浮动。
外边距折叠（Margin collapsing）也只会发生在属于同一BFC的块级元素之间。

[关于CSS-BFC深入理解](https://juejin.im/post/5909db2fda2f60005d2093db) 
[CSS中重要的BFC](https://juejin.im/post/5b51ee276fb9a04f86062cea) 
[史上最全面、最透彻的BFC原理剖析](https://github.com/zuopf769/notebook/blob/master/fe/BFC%E5%8E%9F%E7%90%86%E5%89%96%E6%9E%90/README.md) 


## 13.CSS 中 inline 元素可以设置 padding 和 margin 吗？
1. inline元素设置width，height属性无效
2. inline元素的padding和margin可以设置，但是水平方向的padding-right，padding-left，margin-right，margin-left都产生了效果，而垂直方向的padding-top，padding-bottom，margin-bottom，margin-top是没有效果的

## 14.em、rem和px
* px 在缩放页面时无法调整那些使用它作为单位的字体、按钮等的大小；
* em 的值并不是固定的，会继承父级元素的字体大小，代表倍数；
* rem 的值并不是固定的，始终是基于**根元素** \<html> 的，也代表倍数。

## 15.高度自适应
一个对象的宽高是否能使用百分比显示，取决于对象父元素的设置。比如设置背景图片，需要给html和body标签设置`height: 100%;`

[高度自适应](http://web.jobbole.com/88670/) 



