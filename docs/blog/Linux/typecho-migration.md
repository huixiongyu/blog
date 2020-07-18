# Typecho博客搬迁记

之前贪便宜99块撸了腾讯云的1核1G服务器，同时手上有一台阿里云，结果阿里云续费了800多，腾讯云到期要672块，还是算了吧，玩玩爬虫布几个网址、搭个博客一台是很够应用的了，腾讯云一定知道我这种买了基本没什么用计算存储资源所以才卖那么便宜！

## 数据库迁移

因为不想折腾，直接用了[宝塔Linux面板]( https://www.bt.cn/bbs/thread-19376-1-1.html )安装，Typecho基本实现点击按钮就部署完成了。

找到数据库，在对应网站数据库点击管理，从phpMyAdmin中把数据库下载到本地。

![phpMyAdmin](https://huixiong.oss-cn-beijing.aliyuncs.com/blog/Snipaste_2019-11-19_15-01-08.png)

![dump](https://huixiong.oss-cn-beijing.aliyuncs.com/blog/Snipaste_2019-11-19_15-01-33.png)

**在着之前，请记录一下数据库名字、数据库密码、网站的后台管理名字、后台管理密码**

在新网站的宝塔Linux面板中的phpMyAdmin创建一个跟原数据库一样名字的数据表（其实可以在typecho安装的时候指定相应的名字）格式我选的是utf-8general-ic

创建之后是导入原来的数据文件

![orignal](https://huixiong.oss-cn-beijing.aliyuncs.com/blog/Snipaste_2019-11-19_15-15-44.png)

但是如果你遇到的是这样的报错，原因在于数据库中没有这个数据表，必须先创建后才能在它下面导入。

![sql](https://huixiong.oss-cn-beijing.aliyuncs.com/blog/Snipaste_2019-11-19_15-26-28.png)

## 安装Typecho

宝塔Linux提供了源码一键安装，位置是控制面板->软件商店->宝塔一键部署源码，然后点击设置：

![one btn](https://huixiong.oss-cn-beijing.aliyuncs.com/blog/Snipaste_2019-11-19_15-56-51.png)

点击Typecho的一键部署：

![onbutton](https://huixiong.oss-cn-beijing.aliyuncs.com/blog/Snipaste_2019-11-19_15-57-06.png)

数据库的名字写以前的数据库名字，为了保险起见密码也写以前的密码，域名就填解析过的域名。

## 域名解析

在域名服务商那里把域名重新指定到新服务器的IP

## 登录

等解析完成之后，敲入网址会直接进入Typecho的数据库导入面板，注意数据库名和数据库用户名是一样的。跳完之后应该会显示导入失败，这时选择连接已有数据库。

输入原先的后台管理账号密码就可以快乐玩耍啦！

## 常用的配置

进入后台管理：https://www.hackslog.com/admin

在自己的网站添加/admin即可

插件：
* live2D-[伊斯特瓦尔](https://github.com/eeg1412/Live2dHistoire) 
* [Editor.md](https://pandao.github.io/editor.md/en.html)

外观设置：
* 固定头部
* 固定导航
* 盒子模型
* 颜色： dark-dark-light
* 渐变背景
* 渐变样式： Komorebi
* 安卓 Chrome地址颜色： #3a3f51
* 博客logo: https://huixiong.oss-cn-beijing.aliyuncs.com/blogconfig/hdImg_53e28a1c6883669caf1b8eba77b94b3a1548136657117.jpg
* 博主名称：versoon
* 博主介绍：全栈程序员/UI/小厨
* 一行字介绍：宁静致远，日新月异。
* favicon： https://huixiong.oss-cn-beijing.aliyuncs.com/blogconfig/%E5%9B%9B%E5%8F%B6%E8%8D%89.ico
* 头像图片地址 https://huixiong.oss-cn-beijing.aliyuncs.com/blogconfig/hdImg_53e28a1c6883669caf1b8eba77b94b3a1548136657117.jpg 
* 时光机
```
{"name":"email","img":"https://ww4.sinaimg.cn/large/a15b4afegy1fg2pmtjbaej201s01s0aw","value":"versoon@163.com","link":"#"},
{"name":"QQ","img":"https://ww4.sinaimg.cn/large/a15b4afegy1fg2pnirhr2j201s01va9u","value":"1589445926","link":"#"},
{"name":"微博","img":"https://ww4.sinaimg.cn/large/a15b4afegy1fg2pofbz5fj201s01swe9","value":"Versoon","link":"https://weibo.com/5637331555/profile?topnav=1&wvr=6"},
{"name":"网易云音乐","img":"https://ww4.sinaimg.cn/large/a15b4afegy1fg2pouholzj201s01s0ja","value":"versoon","link":"https://music.163.com/#/user/home?id=44919925"}
```
* 默认avatar地址： http://qiniu.hackslog.cn/18-11-28/31096200.jpg
* 云解析歌单：https://music.163.com/#/playlist?id=2229008097
## 华为云耀云服务器
由于极具性价比，所以迁移到这里，放博客和小应用合适，但是常用的配置入口不容易找，截图以备忘。

云耀云管理的入口，登录账号之后点右上角的控制台，在这个页面点左边的折叠面板找到云耀云服务器。
![Huawei cloud](https://huixiong.oss-cn-beijing.aliyuncs.com/blog/Snipaste_2020-04-27_14-14-15.png)

如果没有列出来，那还需要选择对应的区域。

![](https://huixiong.oss-cn-beijing.aliyuncs.com/blog/hua_admin_2020-04-27_14-17-47.png)

添加安全组设置，同样在这个页面点开折叠面板

![IP -config ](https://huixiong.oss-cn-beijing.aliyuncs.com/blog/IP_entrance_2020-04-27_14-21-01.png)

点击总览：

![summerize](https://huixiong.oss-cn-beijing.aliyuncs.com/blog/summerize_2020-04-27_14-23-34.png)

找到安全组：

![security-item](https://huixiong.oss-cn-beijing.aliyuncs.com/blog/security_item_2020-04-27_14-25-15.png)

点默认配置：

![default-settings](https://huixiong.oss-cn-beijing.aliyuncs.com/blog/default_settings_2020-04-27_14-27-49.png)

添加端口：

![set port ](https://huixiong.oss-cn-beijing.aliyuncs.com/blog/set_port_2020-04-27_14-30-29.png)