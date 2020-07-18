## 微信扫码登录

获取access_token的过程

1. 点击微信登录链接，会打开一个微信扫码的页面(微信开放平台提供的，地址携带了第三方网站的appID和重定向地址)

2. 用户扫码，微信弹出确认登录按钮，确认以后微信开放平台返回一个临时的code跳转到之前的"重定向地址"，这次跳转会带上临时的code

3. 这个跳转交给了第三方网站处理，相当于一次Get请求。网站会通过code + appid + appsecret(这个放在服务器)，生成了一个access_token

4. 第三方网站返回了access_token，一般也会携带用户信息(通过官方提供的userinfo api实现)，然后就能看过个性化的页面(比如有你的头像)，实现了登录

这个过程可以联想一下银行排队叫号，他们给了你临时Code，用了一次后会过期，叫到了你不办理业务也会过期。

access_token相当于给你通过了认证，可以实现免密支付啦。

[有关Vue使用微信扫码登录的一点小总结](https://blog.csdn.net/sinat_22014829/article/details/73087651) 

[开放平台-应用开发指南](https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1419316505&token=58cc123fad27e306bfedc323d4cb9c5a32020b77&lang=zh_CN)

[开放平台-授权后接口回调](https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1419316518&token=58cc123fad27e306bfedc323d4cb9c5a32020b77&lang=zh_CN) 

[设置多个微信授权回调页面域名](https://www.cnblogs.com/lyzg/p/6159617.html) 

[突破微信公众平台一个公众号最多设置2个网页授权回调域名的限制](https://github.com/lionskys/codetoany) 

[公众测试账号获取](http://mp.weixin.qq.com/debug/cgi-bin/sandboxinfo?action=showinfo&t=sandbox/index) 

[微信公众平台开发————微信授权登录](https://www.cnblogs.com/0201zcr/p/5131602.html) 



```
 { errcode: 40001,

   errmsg:

   'invalid credential, access_token is invalid or not latest hint: [4IkU_a00893943!]' 
  } 
```

1. 检查是不是重复获取了token

2. 检查接口类型，公众平台和开放平台的用户请求地址是不同的