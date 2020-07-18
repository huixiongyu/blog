# 小程序


## 1.小程序的生命周期
* onLoad() 页面加载时触发，只会调用一次，可获取当前页面路径中的参数。
* onShow() 页面显示/切入前台时触发，一般用来发送数据请求；
* onReady() 页面初次渲染完成时触发, 只会调用一次，代表页面已可和视图层进行交互。
* onHide() 页面隐藏/切入后台时触发, 如底部 tab 切换到其他页面或小程序切入后台等。
* onUnload() 页面卸载时触发，如redirectTo或navigateBack到其他页面时。
![mark](http://qiniu.hackslog.cn/blog/20190528/UmXblGKmf9pu.png?imageslim)

小程序分为webview(展现UI)和jsCore(处理业务逻辑、数据及接口调用)
两个部分在两个进程同时运行，通过系统曾JSBridge实现通信、实现UI的渲染、事件的处理等。


## 2.小程序文件类型和用途

* app.json: 包括文件路径、界面表现、网络超时、底部tab的设置等
* app.js：监听并处理生命周期函数、声明全局变量
* project.config.json： 界面颜色、编辑配置
* wxml: 跟HTML很像，不过不能直接用HTML的标签，取而代之是view、button、text和wx:if、{{}}等
* wxss: 具有大部分CSS特征， app.wxss作为全局样式，page.wxss会覆盖全局样式。 1rpx = 0.5px = 1物理像素
* page的js文件进行交互逻辑，比如响应点击事件、获取用户位置、获取页面数据等
* page.json: 独立页的一些属性

## 3.小程序的事件
1. 事件分类：
* 冒泡事件：当一个组件上的事件被触发后，该事件会向父节点传递
* 非冒泡事件：当一个组件上的事件被触发后，该事件不会向父节点传递

2. 事件绑定：绑定key和value
* 对key，bindtap或者catchtab，bind不阻止冒泡，catch可以阻止冒泡
* key，在js文件可以找到对应

3. 实现下拉刷新
* app.json的window选项设置enablePullDownRefresh
* wx.startPullDownRefresh触发刷新


## 4.小程序路由

* 打开页面：wx.navigateTo或者\<navigator open-type="navigateTo" />
* 页面重定向： wx.redirectTo或者\<navigator open-type="redirectTo" />
* 页面返回： wx.navigateBack或者\<navigator open-type="navigateBack" />,可以通过getCurrentPages()决定返回的层数
* Tab切换： wx.switchTab或者\<navigator open-type="switchTo" />
* 重启动：wx.reLaunch或者\<navigator open-type="reLaunch" /> 可以打开任何页面
可以通过路由携带参数
wx.navigateTo和wx.redirectTo**不允许**跳转到tab所包含的页面
onLoad只执行一次，在这里获取页面参数



## 5.数据请求
* HTTPS： wx.request
* 上传文件：wx.uploadFile
* 下载文件：wx.downloadFile
* WebSocket通信： wx.connectSocket

可以将所有接口放在同一个js文件，封装get、put和upload等，设置请求体和带上token、异常处理等，然后导出，实现数据请求的封装

## 6.小程序的wxss和css有哪些不一样的地方：
相似，wxss在css上做了写修改和补充
尺寸到位rpx:响应式像素，可以根据屏幕宽度进行自适应。规定屏幕宽度未750rpx
在iphone6上，屏幕宽度375px,有750个物理像素，750rpx=375px=750物理像素

@import导入外联样式

## 7.如何提高微信小程序的相应速度
1. 提高页面加载速度
2. 用户行为预测
3. 减少默认data的大小
4. 组件化方案

## 8.说说常用的一些API

* wx.getLocation 获取地理位置
* wx.scanCode 扫码
* wx.getCurrentPages获取当前页面栈
* getApp()获取唯一APP实例
* wx.getStorageSync
* wx.login


## 9.小程序登录流程
![mark](http://qiniu.hackslog.cn/blog/20190528/QhX8Uuz63ydx.jpg?imageslim)

## 10.自定义组件

组件生命周期：
* created
* attached
* detached

页面内的生命周期：
* show
* hide
* resize


























