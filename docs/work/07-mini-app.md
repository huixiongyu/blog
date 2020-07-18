# 小程序
## 基础知识
携带参数跳转
使用data-你的参数   来传递函数的变量，然后从event.crrrentTarget.dataset中获取对应的变量，
data绑定的变量驼峰模式的要把大写变成"-"
wx.navigateTo可以携带参数，比如在url中写 'camp?id=2'，在对应的具体页面通过onLoad传递的option获取传递过来的参数
如果要传递参数是一个对象，你可以使用JSON.stringify()转化拼接在路径上，或者在新页面中从globalData中获取
```
    <block wx:for="{{campList}}" wx:key="{{item.name}}">
      <view class="more-item" data-id="{{item.id}}" bindtap="toCampDetail">
        <view class="img-area">
          <image src="{{item.imgUrl}}"></image>
        </view>
        <view class="more-camp-right">
          <view class="more-camp-name">
            {{item.name}}
            <van-tag color="{{item.color}}">{{item.type}}</van-tag>
          </view>
          <view class="camp-value">
            <view>距离{{item.distance}}公里</view>
            <view>共有{{item.campNum}}个营位</view>
            <view class="price">￥{{item.price}}</view>
          </view>
        </view>
      </view>
    </block>
// js代码
  toCampDetail(event) {
    console.log(event.currentTarget.dataset.id);
  },
```


## 登录相关逻辑
[获取手机号](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/getPhoneNumber.html) 


## 获取当前城市定位
[微信小程序获取当前用户定位](https://blog.csdn.net/weixin_42262436/article/details/80458430) 
[微信小程序原生LBS能力的最佳拍档](https://lbs.qq.com/qqmap_wx_jssdk/index.html) 

满屏显示： width：100%; height: 100vh;


## 登录并实现登录状态维持
[微信小程序中用户登录和登录态维护](https://www.jianshu.com/p/c5f6c98b2685) 
[服务端登录获取session_key](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/login/auth.code2Session.html) 



## 获取unionid
公众平台的账号需要绑定开放平台的应用才能获取unionid
或者采用服务端解密可以获取私密数据
[服务端获取开放数据](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/signature.html#加密数据解密算法) 



## 监测用户授权



## 页面分享


```
onShareAppMessage: function( options ){
　　// 自定义分享内容
　　var shareObj = {
　　　　title: "转发的标题",        // 小程序的名称
　　　　path: '/pages/share/share',        // 默认是当前页面，必须是以‘/’开头的完整路径
　　　　imgUrl: '',     //自定义图片路径，支持PNG及JPG，不传入 imageUrl 则使用默认截图。显示图片长宽比是 5:4
　　　　success: function(res){
　　　　　　// 转发成功之后的回调
　　　　　　if(res.errMsg == 'shareAppMessage:ok'){
　　　　　　}
　　　　},
　　　　fail: function(){
　　　　　　// 转发失败之后的回调
　　　　　　if(res.errMsg == 'shareAppMessage:fail cancel'){
　　　　　　　　// 用户取消转发
　　　　　　}else if(res.errMsg == 'shareAppMessage:fail'){
　　　　　　　　// 转发失败，其中 detail message 为详细失败信息
　　　　　　}
　　　　},
　　　　complete: fucntion(){
　　　　　　// 转发结束之后的回调（转发成不成功都会执行）
　　　　}
　　};
　　// 来自页面内的按钮的转发
　　if( options.from == 'button' ){
　　　　console.log("来源于button");
　　　　// 此处可以修改 shareObj 中的内容
　　　　shareObj.path = '/pages/btnname/btnname?btn_name='+eData.name;
　　}
　　// 返回shareObj
　　return shareObj;
}


```
使用按钮转发：
```
<button open-type="share">转发</button>
```
嵌套图片转发，引用网络图片：
```
      <button
        class="share-btn"
        open-type="share">
      </button>
// 样式

.share-btn{
  opacity: 1;
  width: 48rpx;
  height: 48rpx;
  border: none;
  background: url('http://qiniu.rvties.com/FqiM0gPSh0qjnUnkGzura9g8r1Hz') center center;
  background-repeat:no-repeat;
  background-size: 48rpx 48rpx;
  margin: auto;
}
```

## 微信支付
1. 通过登录得到code，服务端用code换取用户的openid
2. 生成预定订单号，为了获取prepay_id，需要向[统一下单接口](https://api.mch.weixin.qq.com/pay/unifiedorder)请求，然后吧prepay_id返回给小程序
3. 小程序拿到prepay_id调用支付接口wx.requestPayment发起支付
4. 成功or失败的跳转到商户小程序的页面
5. 更新商品数据和记录用户订单情况
[统一下单-API](https://pay.weixin.qq.com/wiki/doc/api/wxa/wxa_api.php?chapter=9_1&index=1) 
[干货|必看！从零接入微信小程序支付](https://cloud.tencent.com/developer/article/1037348) 
[微信小程序支付简单小结与梳理](https://www.cnblogs.com/catcher1994/p/6664404.html) 


开发用到： xmlreader
商户平台下载API安全证书
js-sdk


主要问题：
* 签名参数错误
* 签名的Key错误