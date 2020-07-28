(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{383:function(e,a,t){"use strict";t.r(a);var r=t(42),s=Object(r.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"《微信小程序项目开发实战：用wepy、mpvue、taro打造高效的小程序》"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#《微信小程序项目开发实战：用wepy、mpvue、taro打造高效的小程序》"}},[e._v("#")]),e._v(" 《微信小程序项目开发实战：用WePY、mpvue、Taro打造高效的小程序》")]),e._v(" "),t("p",[t("a",{attrs:{href:"http://www.broadview.com.cn/book/5826",target:"_blank",rel:"noopener noreferrer"}},[e._v("书籍代码页面入口"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("现在uni-app和Taro应该是更好的开发方式，书里的“高级”应用如在线聊天、摇一摇、富文本显示之类可以进一步练习和扩展。开发文档是很容易掌握的，但是业务问题，应用审美和上线发布的问题需要亲身实践才能真正了然于胸。")]),e._v(" "),t("h2",{attrs:{id:"第1章-走进微信小程序"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第1章-走进微信小程序"}},[e._v("#")]),e._v(" 第1章-走进微信小程序")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://mp.weixin.qq.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("微信公众平台官网"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("注意：小程序的注册是有数量限制的，暂时对于个人主体每个自然人只允许注册5个小程序，而公司主体最多支持注册50个小程序。")]),e._v(" "),t("p",[e._v("需要牢记的是微信的AppID和秘钥.")]),e._v(" "),t("p",[e._v("开发工具："),t("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("下载"),t("OutboundLink")],1)]),e._v(" "),t("p",[t("a",{attrs:{href:"https://wepyjs.github.io/wepy-docs/2.x/#/",target:"_blank",rel:"noopener noreferrer"}},[e._v("WePY"),t("OutboundLink")],1)]),e._v(" "),t("div",{staticClass:"language-\\ line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("npm install wepy-cli -g \nwepy init standard HelloWorld\nwepy build -watch \n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("h2",{attrs:{id:"第2章-微信小程序组件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第2章-微信小程序组件"}},[e._v("#")]),e._v(" 第2章-微信小程序组件")]),e._v(" "),t("p",[e._v("重要组件：")]),e._v(" "),t("ul",[t("li",[e._v("scroll-view")]),e._v(" "),t("li",[e._v("swiper")]),e._v(" "),t("li",[e._v("movable-view")]),e._v(" "),t("li",[e._v("cover-view和cover-image")])]),e._v(" "),t("p",[t("strong",[e._v("注意：movable-view必须设置width和height属性，默认为10px。movable-view默认为绝对定位，top和left属性为0px。movable-view必须位于＜movable-area/＞组件中，并且必须是直接子节点，否则不能移动。")])]),e._v(" "),t("p",[e._v("基础组件：")]),e._v(" "),t("ul",[t("li",[e._v("text")]),e._v(" "),t("li",[e._v("rich-text")]),e._v(" "),t("li",[e._v("progress")]),e._v(" "),t("li",[e._v("form")]),e._v(" "),t("li",[e._v("button，记得open-type属性")])]),e._v(" "),t("p",[e._v("媒体组件和导航组件：")]),e._v(" "),t("ul",[t("li",[e._v("navigator\n"),t("ul",[t("li",[e._v("navigate")]),e._v(" "),t("li",[e._v("redirect")]),e._v(" "),t("li",[e._v("swtichTab")]),e._v(" "),t("li",[e._v("reLaunch")]),e._v(" "),t("li",[e._v("navigateBack")])])]),e._v(" "),t("li",[e._v("image: mode设置裁剪")]),e._v(" "),t("li",[e._v("video和API：wx.createVideoContext")]),e._v(" "),t("li",[e._v("camera和API：wx.createCameraContext")])]),e._v(" "),t("p",[t("strong",[e._v("注意：camera组件在隐藏时设置成hidden或者display:none，或者使用fixed定位将整个组件移出屏幕，在部分手机或者系统中可能会出现无法隐藏的情况，而官方暂时没有给出解决方案，可以使用跳转页面的方式进行拍照。")])]),e._v(" "),t("p",[t("strong",[e._v("对图片处理和动画绘制而言，Canvas组件是必须要使用的，也是唯一能使用的。")])]),e._v(" "),t("p",[e._v("canvas-id是必须配置的，否则在下方的JavaScript代码中无法获得该组件的实例。")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://lbs.qq.com/product/miniapp/guide/",target:"_blank",rel:"noopener noreferrer"}},[e._v("微信小程序-个性地图使用指南"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("HTML 和开放能力：")]),e._v(" "),t("ul",[t("li",[e._v("开放数据域：open-data，用于显示用户的昵称、头像、性别、地址、语言等")]),e._v(" "),t("li",[e._v("HTML等网页支持：web-view，配合使用提供了相关的jssdk")]),e._v(" "),t("li",[e._v("开发者的收入来源：ad")]),e._v(" "),t("li",[e._v("小程序引导关注公众号：official-account")])]),e._v(" "),t("p",[t("strong",[e._v("注意：虽然web-view在某些时候非常好用，但是这个组件并不支持个人开发者和针对海外用户的小程序。")])]),e._v(" "),t("p",[e._v("通过“设置”→“接口设置”→“公众号关注组件”设置要展示的公众号。")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("<official-account></official-account>\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[t("strong",[e._v("official-account组件可以套用在原生组件中。")])]),e._v(" "),t("p",[t("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/scene.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("场景值文档"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"第3章-微信小程序api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第3章-微信小程序api"}},[e._v("#")]),e._v(" 第3章-微信小程序API")]),e._v(" "),t("p",[t("strong",[e._v("注意：每个小程序都需要事先设置一个通信域名，小程序可以跟指定的域名进行网络通信，包括普通HTTPS请求（request）、上传文件（uploadFile）、下载文件（downloadFile）和WebSocket通信（connectSocket）。在微信开发者工具中，开发者可以临时开启“开发环境不校验请求域名、TLS版本及HTTPS证书”，跳过服务器域名的校验，这样，在微信开发者工具中及手机开启调试模式时，不会校验服务器域名。")])]),e._v(" "),t("p",[e._v("微信小程序的上传是将本地资源上传到开发者服务器，客户端发起一个HTTPS POST请求，其中content-type为multipart/form-data.")]),e._v(" "),t("p",[e._v("对于每一个wx.connectSocket（）方法均会返回一个WebSocket任务，也就是说，当用户使用多个不同的socket连接时，不能使用之前的连接和发送的API，而应当使用该Task对象自身包含的发送、监听及关闭方法。")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// 使用connectSocket创建一个task后\n// 发送消息\nSocketTask.send(OBJECT)\n// 接收消息\nSocketTask.onMessage(CALLBACK)\n// 关闭链接\nSocketTask.close(OBJECT)\n// 监听事件\nSocketTask.onOpen(CALLBACK)\nSocketTask.onClose(CALLBACK)\nSocketTask.onError(CALLBACK)\n\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br")])]),t("p",[t("a",{attrs:{href:"https://www.npmjs.com/package/ws",target:"_blank",rel:"noopener noreferrer"}},[e._v("ws：websocket仓库"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("wx.getUpdateManager（）提供拉取更新版本。")]),e._v(" "),t("p",[t("strong",[e._v("更新事件也可以选择不提示的方式进行重启更新，或者无论用户是否单击确定按钮都强制执行更新事件。")])]),e._v(" "),t("p",[e._v("wx.getClipboardData() 获取剪贴板数据")]),e._v(" "),t("p",[e._v("wx.getLocation()获取地理定位")]),e._v(" "),t("p",[e._v("页面跳转：")]),e._v(" "),t("ul",[t("li",[e._v("wx.navigateTo")]),e._v(" "),t("li",[e._v("wx.navigateBack")]),e._v(" "),t("li",[e._v("wx.switchTab")]),e._v(" "),t("li",[e._v("wx.reLaunch")]),e._v(" "),t("li",[e._v("wx.redirectTo")])]),e._v(" "),t("p",[e._v("TabBar小红点：")]),e._v(" "),t("ul",[t("li",[e._v("wx.showTabBarRedDot")]),e._v(" "),t("li",[e._v("wx.setTabBarBadge")]),e._v(" "),t("li",[e._v("wx.removeTabBarBadge")])]),e._v(" "),t("p",[e._v("加载网络字体：")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("wx.loadFontFace({\n\tfamily: '',\n\tsoucre: 'url(\"http://xxxx\")',\n\tsuccess: 方法\n})\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br")])]),t("p",[e._v("长页面滚动效果：")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("wx.pageScrollTo({\n\tscrollTop: 0,\n\tduration: 300,\n})\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br")])]),t("p",[e._v("媒体和上传：")]),e._v(" "),t("ul",[t("li",[e._v("wx.chooseImage")]),e._v(" "),t("li",[e._v("wx.uploadFile")]),e._v(" "),t("li",[e._v("wx.getImageInfo 获取图片的信息")]),e._v(" "),t("li",[e._v("wx.saveImageToPhotosAlbum 保存图片到系统（需要授权）")]),e._v(" "),t("li",[e._v("wx.chooseVideo")]),e._v(" "),t("li",[e._v("wx.saveVideoToPhotosAlbum 保存视频到系统（需要授权）")]),e._v(" "),t("li",[e._v("wx.getRecorderManager 录音")]),e._v(" "),t("li",[e._v("wx.getFileSystemManager 文件管理")])]),e._v(" "),t("p",[e._v("获取收货地址： wx.chooseAddress")]),e._v(" "),t("h2",{attrs:{id:"第4章-微信小程序的服务器端"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第4章-微信小程序的服务器端"}},[e._v("#")]),e._v(" 第4章-微信小程序的服务器端")]),e._v(" "),t("p",[e._v("​")]),e._v(" "),t("p",[e._v("获取Access_token")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(" https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=APPID&secret=APPSECRET\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("获取用户手机号，需要用户触发")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('<button open-type="getPhoneNumber" bindgetphonenumber="getPhoneNumber"></button>\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("h2",{attrs:{id:"第5章-实战：问卷小程序"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第5章-实战：问卷小程序"}},[e._v("#")]),e._v(" 第5章-实战：问卷小程序")]),e._v(" "),t("p",[e._v("校验用户id，防止重复提交问卷。")]),e._v(" "),t("h2",{attrs:{id:"第6章-实战：摇一摇游戏"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第6章-实战：摇一摇游戏"}},[e._v("#")]),e._v(" 第6章-实战：摇一摇游戏")]),e._v(" "),t("p",[e._v("传感器的接口（加速度、角速度）：")]),e._v(" "),t("ul",[t("li",[e._v("wx.stopAccelerometer（Object object）")]),e._v(" "),t("li",[e._v("wx.startAccelerometer（Object object）")]),e._v(" "),t("li",[e._v("wx.onAccelerometerChange（function callback）")])]),e._v(" "),t("p",[e._v("定时器指定周期、重复执行。")]),e._v(" "),t("h2",{attrs:{id:"第7章-实战：百度图片识别api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第7章-实战：百度图片识别api"}},[e._v("#")]),e._v(" 第7章-实战：百度图片识别API")]),e._v(" "),t("p",[t("a",{attrs:{href:"http://ai.baidu.com/tech/imagerecognition",target:"_blank",rel:"noopener noreferrer"}},[e._v("百度大脑AI开放平台"),t("OutboundLink")],1)]),e._v(" "),t("p",[t("a",{attrs:{href:"http://ai.baidu.com/ai-doc/IMAGERECOGNITION/bk3bcxkdg",target:"_blank",rel:"noopener noreferrer"}},[e._v("使用SDK"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"第8章-实战：文字信息发布小程序"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第8章-实战：文字信息发布小程序"}},[e._v("#")]),e._v(" 第8章-实战：文字信息发布小程序")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://ai.baidu.com/ai-doc/ANTIPORN/Vk3h6xaga",target:"_blank",rel:"noopener noreferrer"}},[e._v("文本内容审核"),t("OutboundLink")],1)]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/icindy/wxParse",target:"_blank",rel:"noopener noreferrer"}},[e._v("wxParse"),t("OutboundLink")],1),e._v("解析HTML/Markdown转换")]),e._v(" "),t("h2",{attrs:{id:"第9章-实战：使用canvas绘制图片"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第9章-实战：使用canvas绘制图片"}},[e._v("#")]),e._v(" 第9章-实战：使用Canvas绘制图片")]),e._v(" "),t("p",[e._v("小程序运营："),t("RouterLink",{attrs:{to:"/book/Mini/[https://developers.weixin.qq.com/miniprogram/product/#_5-1-滥用分享行为](https://developers.weixin.qq.com/miniprogram/product/#_5-1-滥用分享行为)"}},[e._v("滥用分享行为")])],1),e._v(" "),t("p",[e._v("两个Canvas API：")]),e._v(" "),t("ul",[t("li",[e._v("canvasToTempFilePath")]),e._v(" "),t("li",[e._v("createCanvasContext")])]),e._v(" "),t("p",[e._v("保存图片：wx.saveImageToPhotosAlbum")]),e._v(" "),t("h2",{attrs:{id:"第10章：实战-使用mpvue-实现-历史今日-小程序"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第10章：实战-使用mpvue-实现-历史今日-小程序"}},[e._v("#")]),e._v(" 第10章：实战: 使用mpvue 实现“历史今日”小程序")]),e._v(" "),t("p",[e._v("历史今日的公共API："),t("a",{attrs:{href:"https://www.uneedzf.com/wepyBook/api/getToday",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.uneedzf.com/wepyBook/api/getToday "),t("OutboundLink")],1)]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/wendux/fly",target:"_blank",rel:"noopener noreferrer"}},[e._v("flyio"),t("OutboundLink")],1),e._v("数据请求")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('var Fly=require("flyio/dist/npm/wx") \nvar fly=new Fly\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])]),t("h2",{attrs:{id:"第11章：实战：使用taro实现星座测试小程序"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第11章：实战：使用taro实现星座测试小程序"}},[e._v("#")]),e._v(" 第11章：实战：使用Taro实现星座测试小程序")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://taro-docs.jd.com/taro/docs/README.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Taro"),t("OutboundLink")],1)]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("npm install -g @tarojs/cli\ntaro init myApp\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])])])}),[],!1,null,null,null);a.default=s.exports}}]);