# 前端相关

## 1.状态码

- 200 请求成功
- 3xx
  - 301 永久重定向
  - 302 临时重定向
  - 304 未修改，资源找到但不符合请求条件
- 4xx
  - 400 错误请求
  - 401 要求用户身份认证
  - 403 拒绝请求
  - 404 没有找到
- 5xx
  - 502 服务器内部错误
  - 503 超载或系统维护
## 2.输入网址到页面选择的整个过程

- 浏览器根据 DNS 服务器得到域名的 IP 地址
- 向这个 IP 的机器发送 HTTP 请求 (TCP连接)
- 服务器收到、处理并返回 HTTP 请求
- 浏览器得到返回内容
- 根据 HTML 结构生成 DOM 树
- 根据 CSS 生成 CSSOM
- 将 DOM 和 CSSOM 整合形成 RenderTree
- 根据 RenderTree 开始渲染和展示
- 遇到`<script>`时，会执行并阻塞渲染

[参考链接](http://fex.baidu.com/blog/2014/05/what-happen/)

## 3.性能优化

两个方向： 减少页面体积、提升网络加载，优化页面渲染

- 减少页面体积
  - 静态资源压缩(Gzip)、合并(合并JS、CSS、小图片)
  - 静态资源缓存(开启KeepAlive)
  - 使用CDN加载静态资源
  - 按需加载
- 优化页面渲染
  - CSS在前，JS在后
  - 懒加载
  - 减少DOM操作
  - 事件节流和防抖
  - 后端渲染
  - 尽量使用CSS3动画

[常见的前端性能优化手段都有哪些？都有多大收益](https://www.zhihu.com/question/40505685/answer/86898655) 
[浏览器允许的并发请求资源数是什么意思？](https://www.zhihu.com/question/20474326) 


## 4.Web安全

**SQL注入** 
  - 预防：表单验证


**XSS：跨站脚本攻击**
它允许用户将恶意代码植入到提供给其他用户使用的页面中，可以简单的理解为一种javascript代码注入。
XSS的防御措施：

1. 过滤转义输入输出
2. 避免使用`eval`、`new Function`等执行字符串的方法，除非确定字符串和用户输入无关
3. 使用cookie的httpOnly属性，加上了这个属性的cookie字段，js是无法进行读写的
4. 使用innerHTML、document.write的时候，如果数据是用户输入的，那么需要对象关键字符进行过滤与转义

**CSRF：跨站请求伪造**
其实就是网站中的一些提交行为，被黑客利用，在你访问黑客的网站的时候进行操作，会被操作到其他网站上.借用操作的某个操作获取登录验证
CSRF防御措施：

1. 检测http referer是否是同域名
2. 避免登录的session长时间存储在客户端中
3. 关键请求使用验证码或者token机制

其他的一些攻击方法还有HTTP劫持、界面操作劫持


## 5.前端模块化

- CommonJS：服务器端模块规范，同步加载模块，只有加载完才能执行后面的操作  module.exports或者exports
- AMD：非同步加载模块，允许指定回调函数 。module transport规范接口

## 6.TCP传输的三次握手、四次挥手

_三次握手：_

- 客户端发送SYN标志的数据包
- 服务端回传一个带有SYN/ACK的数据包表示正确传达，并确认信息。
- 回传一个ACK标志代表握手结束

_四次挥手 :_

- 主动方发送一个FIN
- 被动方收到后发送ACK
- 被动方发送FIN
- 主动方收到后发送ACK

[TCP为什么是三次握手，而不是两次或四次？](TCP 为什么是三次握手，而不是两次或四次？ - 知乎
https://www.zhihu.com/question/24853633) 

## 7.重排和重绘
**重排：** 渲染树需要重新分析计算节点的尺寸
**重绘：** 几何属性和样式的改变
## 8.描述cookie、sessionStorage和localStorage的区别

sessionStorage用于在本地存储一个会话（session）中的数据，这些数据只有 在同一个会话中的页面才能访问并且当会话结束后数据页随之销毁。因此sessionStorage不是一种持久化的 本地存储，仅仅是会话级别的存储。

localStorage用于持久化的本地存储，除非主动删除数据，否则数据是永远不会过期的。

 cookie是一小块数据服务器发送到用户的浏览器。浏览器会保存它与下一个请求并将其发送回相同的服务器。通常,用来判断两个请求来自同一个浏览器,让用户登录时,例如。它是记得有状态信息的无状态的HTTP协议。需要指定作用域，不可以跨域调用。

好处：

- 离线浏览
- 速度——已缓存资源加载得更快
- 减少服务器负载
## 9.浏览器渲染原理
![tree](http://qiniu.hackslog.cn/18-11-14/80719668.jpg)

## 10.websocket和ajax的区别

[关于Ajax和websocket，你应该知道的事儿](http://www.woshipm.com/ucd/1051915.html) 

Ajax 的优点在于它在浏览器与web服务器之间使用异步数据传输（HTTP请求），不阻塞用户，核心对象是XMLHTTPRequest。通过这个对象，**js可在不重新加载页面的情况下与web服务器交换数据**。

**websocket是HTML5一种新的协议，实现了浏览器与服务器全双工通信**。其本质是：先通过HTTP/HTTPS协议进行握手后创建一个用于交换数据的TCP连接，服务端与客户端通过此TCP连接进行实时通信。

Ajax与websocket最大的不同在于：**Ajax需要客户端发起请求，websocket服务器和客户端可以互相实时推送消息。**

## 11.跨域

协议、域名、端口
防止跨站请求伪造
* JSONP
* document.domain + iframe(仅限于主域相同，子域不同)
* lcoation.hash + iframe
* window.name + iframe
* postMessage跨域
* nginx反向代理
* nodejs中间件代理
* Websocket协议
```
response.setHeader("Access-Control-Allow-Origin", "http://m.juejin.com/");  // 第二个参数填写允许跨域的域名称，不建议直接写 "*"
response.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
response.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");

// 接收跨域的cookie
response.setHeader("Access-Control-Allow-Credentials", "true");
```
## 12.HTTP请求头和响应头
* 请求头
  * 请求行
  * 请求头
  * 请求体