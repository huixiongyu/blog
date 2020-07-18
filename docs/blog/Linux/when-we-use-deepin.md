# deepin

## 输入法 

貌似系统自带搜狗的输入法的，但是间歇性失常，我要把它卸载掉，用[官网](<https://pinyin.sogou.com/linux/>)的重装。

卸载的方式是点击任务栏输入法托盘(默认可能是个小键盘)，右键选择配置(configure),选中你的输入法，点击下面的减号就可以了。

![pinyin-uninstall](https://huixiong.oss-cn-beijing.aliyuncs.com/blog/pinyin-uninstall.png)

编辑文字状态下按Ctrl+Shift或者Ctrl+空格进行输入法切换，搜狗拼音 for Linux还是做得挺细致的，账号同步和皮肤也加了呢:

![skin](https://huixiong.oss-cn-beijing.aliyuncs.com/blog/deepin-screen-recorder_dde-desktop_20191204164923.gif)

## git

```
sudo apt-get install git
ssh-keygen -t rsa -C "邮箱号"
git config --global user.name "你的用户名"
git config --global user.email 邮箱
```

/home/huixiong/.ssh/id_rsa.pub.

## 面向谷歌编程

对比过谷歌和百度搜索差别的人应该知道，百度广告遮盖了大部分正确答案，直到第二、三页才找到正确答案，太费时间了。那怎么可以使用Linux的SS和SSR客户端呢？

deepin自带的商店有一个SS Qt版的，还好用，不过需要Chrome安装[SwitchOmega](<https://github.com/FelisCatus/SwitchyOmega>) 配置一番。

SSR在[Github](<https://github.com/qingshuisiyuan/electron-ssr-backup/releases>)上找到一个Electron备份版本

![ssr](https://huixiong.oss-cn-beijing.aliyuncs.com/blog/DeepinScreenshot_select-area_20191204143209.png)

我试过搬瓦工、Vultr之类的自己搭飞机，但是由于美帝思想侵略太猖獗，墙被迫进一步加高，有些不稳定，所以决定用别人的飞机场——次元链接。私以为不热衷于看视频的话，价格还合适，连接稳定，这是我的邀请码，拿去:

[https://cyinvite.monster/auth/register?code=J1wkGQcu](https://cyinvite.monster/auth/register?code=J1wkGQcu)

## 安装最新版本node.js

安装[Node.js](<https://github.com/nodesource/distributions/blob/master/README.md>) 官方推荐的做法，尝试了十遍八遍都无法安装，deepin大概需要适配一下呢。

![curl](https://huixiong.oss-cn-beijing.aliyuncs.com/blog/DeepinScreenshot_select-area_20191204140407.png)

12是node的版本，从8~13选择适合自己的。curl没有的话`sudo apt install curl` ,但是上面的语句运行了并不能直接运行，大概的报错是这样的：

```
## Confirming "unstable" is supported...

+ curl -sLf -o /dev/null 'https://deb.nodesource.com/node_12.x/dists/unstable/Release'

## Your distribution, identified as "unstable", is not currently supported, please contact NodeSource at https://github.com/nodesource/distributions/issues if you think this is incorrect or would like your distribution to be considered for support
```

可以先用wget把文件下载，还需要稍做修改

```
wget https://deb.nodesource.com/setup_12.x -O node_12.x.sh

vi node_12.x.sh

# 找到DISTRO=$(lsb_release -c -s)这行按i进入编辑模式(应该在第203行)，修改为：DISTRO="jessie"

# 按Esc，输入：wq! 保存退出

sudo bash node_12.x.sh

sudo apt-get install -y nodejs
```

nodejs在下载，被中断了气不气！不过它告诉了你下载的地址，把文件wget到本地

![](https://huixiong.oss-cn-beijing.aliyuncs.com/blog/DeepinScreenshot_select-area_20191204141954.png)

```
wget https://deb.nodesource.com/node_12.x/pool/main/n/nodejs/nodejs_12.13.1-1nodesource1_amd64.deb 
```

进入home目录，也就是在Downloads文件夹的上一层找到你的deb文件，双击安装。然后查看版本：

```
nodejs -v
# v12.13.1
npm -v
# 6.12.1
```

直接使用npm安装还是相当慢的，可以切换到淘宝镜像：

```
npm config set registry https://registry.npm.taobao.org
```

类似全局安装`@vue/cli` 还是需要写权限的，有-g的内容需要加sudo，比如：

```
sudo npm install -g @vue/cli
```

不过如果你遇到问题，stackoverflow建议是这样的：[permission denied](<https://stackoverflow.com/questions/46058546/error-eacces-permission-denied-access-usr-lib-node-modules>) 

![typescript-install](https://huixiong.oss-cn-beijing.aliyuncs.com/blog/typescript-install-in-deep.png)

![vue-cli-install](https://huixiong.oss-cn-beijing.aliyuncs.com/blog/vue-cli-install-in-deepin.png)

对于全局npm包用stackoverfolw的建议好像还是有点不行，我vue create就是创建不了文件，于是需要建立软连接：

```
sudo ln -s ~/.npm-global/bin/vue /usr/local/bin/vue
```

检查能不能用：

```
huixiong@hacks:~/.npm-global/bin$ vue -V
@vue/cli 4.1.1
```

撒花，结束！

参考：[ERROR when use vue create](<https://github.com/vuejs/vue-cli/issues/889>) 

## 一些Linux命令

**1.本地使用scp向服务器 传文件：**

```
scp [-r] ./html 用户名@ip地址:/var/www/
```

回车后需要输入密码，`[]`表示内容可选，比如html文件夹下面还有image、css之类的文件夹就是需要递归传送上去，最终文件夹html会放到www文件夹下，同名 的文件会被替换。

**2.ssh连接服务器：**

```
ssh 用户名@ip地址
```

**3.查看进程**

```
ps -ef | grep node
kill -9 进程序号
```

node可以替换成其他，比如nginx

## 小功能

截图：Ctrl+Alt+A

命令行：Ctrl+Alt+T

## 其他问题

**1.安装了vs code之后占用了默认资源管理器打开方式**

直接双击文件夹或者Chrome下载文件选择show in folder变成了自动用VS code打开，一条命令解决：

```
gio mime inode/directory dde-file-manager.desktop
```

**2.浏览器间歇失常——上不了网**

这个可能是网络的问题(驱动)，快捷的方式是先把网络关闭再打开，不行的话再注销(log out)。长期解决嘛，emm...等官方修复?

特定的机型一安装完就无法使用WiFi，比如我在公司用的[Thinkpad E480](https://blog.csdn.net/tudou2013goodluck/article/details/83615560),驱动是[8821ce](https://pan.baidu.com/s/1sneDK8d ) (密码：8930  ) 社区有一个兼容性[列表](<https://wiki.deepin.org/wiki/%E5%85%BC%E5%AE%B9%E6%80%A7%E8%89%AF%E5%A5%BD%E7%9A%84%E7%AC%94%E8%AE%B0%E6%9C%AC%E5%9E%8B%E5%8F%B7>) 。

**3.前端项目启动失败**

如果你的项目是在其他平台开发的，重新npm启动可能出现问题，因为有些包是依赖环境的比如node-sass。你可以把yarn.lock或者package-lock.json删掉，不放心也把node_modules删掉，重新`npm install`就可以启动了。