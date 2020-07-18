# 《微信小程序项目开发实战：用WePY、mpvue、Taro打造高效的小程序》

[书籍代码页面入口](http://www.broadview.com.cn/book/5826)

现在uni-app和Taro应该是更好的开发方式，书里的“高级”应用如在线聊天、摇一摇、富文本显示之类可以进一步练习和扩展。开发文档是很容易掌握的，但是业务问题，应用审美和上线发布的问题需要亲身实践才能真正了然于胸。

## 第1章-走进微信小程序

[微信公众平台官网](https://mp.weixin.qq.com/)

注意：小程序的注册是有数量限制的，暂时对于个人主体每个自然人只允许注册5个小程序，而公司主体最多支持注册50个小程序。

需要牢记的是微信的AppID和秘钥.



开发工具：[下载](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)

[WePY](https://wepyjs.github.io/wepy-docs/2.x/#/) 

```\
npm install wepy-cli -g 
wepy init standard HelloWorld
wepy build -watch 
```

## 第2章-微信小程序组件

重要组件：

* scroll-view
* swiper
* movable-view
* cover-view和cover-image

**注意：movable-view必须设置width和height属性，默认为10px。movable-view默认为绝对定位，top和left属性为0px。movable-view必须位于＜movable-area/＞组件中，并且必须是直接子节点，否则不能移动。**



基础组件：

* text
* rich-text
* progress
* form
* button，记得open-type属性



媒体组件和导航组件：

* navigator
  * navigate
  * redirect
  * swtichTab
  * reLaunch
  * navigateBack
* image: mode设置裁剪
* video和API：wx.createVideoContext
* camera和API：wx.createCameraContext

**注意：camera组件在隐藏时设置成hidden或者display:none，或者使用fixed定位将整个组件移出屏幕，在部分手机或者系统中可能会出现无法隐藏的情况，而官方暂时没有给出解决方案，可以使用跳转页面的方式进行拍照。**

**对图片处理和动画绘制而言，Canvas组件是必须要使用的，也是唯一能使用的。**

canvas-id是必须配置的，否则在下方的JavaScript代码中无法获得该组件的实例。

[微信小程序-个性地图使用指南](https://lbs.qq.com/product/miniapp/guide/) 



HTML 和开放能力：

* 开放数据域：open-data，用于显示用户的昵称、头像、性别、地址、语言等
* HTML等网页支持：web-view，配合使用提供了相关的jssdk
*  开发者的收入来源：ad
* 小程序引导关注公众号：official-account

**注意：虽然web-view在某些时候非常好用，但是这个组件并不支持个人开发者和针对海外用户的小程序。**

通过“设置”→“接口设置”→“公众号关注组件”设置要展示的公众号。

```
<official-account></official-account>
```

**official-account组件可以套用在原生组件中。**

[场景值文档](https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/scene.html)

## 第3章-微信小程序API

**注意：每个小程序都需要事先设置一个通信域名，小程序可以跟指定的域名进行网络通信，包括普通HTTPS请求（request）、上传文件（uploadFile）、下载文件（downloadFile）和WebSocket通信（connectSocket）。在微信开发者工具中，开发者可以临时开启“开发环境不校验请求域名、TLS版本及HTTPS证书”，跳过服务器域名的校验，这样，在微信开发者工具中及手机开启调试模式时，不会校验服务器域名。**

微信小程序的上传是将本地资源上传到开发者服务器，客户端发起一个HTTPS POST请求，其中content-type为multipart/form-data.

对于每一个wx.connectSocket（）方法均会返回一个WebSocket任务，也就是说，当用户使用多个不同的socket连接时，不能使用之前的连接和发送的API，而应当使用该Task对象自身包含的发送、监听及关闭方法。

```
// 使用connectSocket创建一个task后
// 发送消息
SocketTask.send(OBJECT)
// 接收消息
SocketTask.onMessage(CALLBACK)
// 关闭链接
SocketTask.close(OBJECT)
// 监听事件
SocketTask.onOpen(CALLBACK)
SocketTask.onClose(CALLBACK)
SocketTask.onError(CALLBACK)

```

[ws：websocket仓库](https://www.npmjs.com/package/ws)

wx.getUpdateManager（）提供拉取更新版本。

**更新事件也可以选择不提示的方式进行重启更新，或者无论用户是否单击确定按钮都强制执行更新事件。**

wx.getClipboardData() 获取剪贴板数据

wx.getLocation()获取地理定位



页面跳转：

* wx.navigateTo
* wx.navigateBack
*  wx.switchTab
* wx.reLaunch
* wx.redirectTo



TabBar小红点：

* wx.showTabBarRedDot
* wx.setTabBarBadge
* wx.removeTabBarBadge



加载网络字体：

```
wx.loadFontFace({
	family: '',
	soucre: 'url("http://xxxx")',
	success: 方法
})
```

长页面滚动效果：

```
wx.pageScrollTo({
	scrollTop: 0,
	duration: 300,
})
```



媒体和上传：

* wx.chooseImage
* wx.uploadFile
* wx.getImageInfo 获取图片的信息
* wx.saveImageToPhotosAlbum 保存图片到系统（需要授权）
* wx.chooseVideo
* wx.saveVideoToPhotosAlbum 保存视频到系统（需要授权）
* wx.getRecorderManager 录音
* wx.getFileSystemManager 文件管理



获取收货地址： wx.chooseAddress



## 第4章-微信小程序的服务器端

​	

获取Access_token

```
 https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=APPID&secret=APPSECRET
```

获取用户手机号，需要用户触发

```
<button open-type="getPhoneNumber" bindgetphonenumber="getPhoneNumber"></button>
```



## 第5章-实战：问卷小程序

校验用户id，防止重复提交问卷。

## 第6章-实战：摇一摇游戏

传感器的接口（加速度、角速度）：

* wx.stopAccelerometer（Object object）
*  wx.startAccelerometer（Object object）
*  wx.onAccelerometerChange（function callback）

定时器指定周期、重复执行。



## 第7章-实战：百度图片识别API

[百度大脑AI开放平台](http://ai.baidu.com/tech/imagerecognition)

[使用SDK](http://ai.baidu.com/ai-doc/IMAGERECOGNITION/bk3bcxkdg)



## 第8章-实战：文字信息发布小程序

[文本内容审核](https://ai.baidu.com/ai-doc/ANTIPORN/Vk3h6xaga)

[wxParse](https://github.com/icindy/wxParse)解析HTML/Markdown转换



## 第9章-实战：使用Canvas绘制图片

小程序运营：[滥用分享行为]([https://developers.weixin.qq.com/miniprogram/product/#_5-1-%E6%BB%A5%E7%94%A8%E5%88%86%E4%BA%AB%E8%A1%8C%E4%B8%BA](https://developers.weixin.qq.com/miniprogram/product/#_5-1-滥用分享行为))

两个Canvas API：

* canvasToTempFilePath
* createCanvasContext

保存图片：wx.saveImageToPhotosAlbum



## 第10章：实战: 使用mpvue 实现“历史今日”小程序

历史今日的公共API：[https://www.uneedzf.com/wepyBook/api/getToday ](https://www.uneedzf.com/wepyBook/api/getToday )

[flyio](https://github.com/wendux/fly)数据请求

```
var Fly=require("flyio/dist/npm/wx") 
var fly=new Fly
```



## 第11章：实战：使用Taro实现星座测试小程序

[Taro](https://taro-docs.jd.com/taro/docs/README.html)

```
npm install -g @tarojs/cli
taro init myApp
```

