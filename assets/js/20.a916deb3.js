(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{366:function(e,s,t){"use strict";t.r(s);var n=t(42),a=Object(n.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"deepin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#deepin"}},[e._v("#")]),e._v(" deepin")]),e._v(" "),t("h2",{attrs:{id:"输入法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#输入法"}},[e._v("#")]),e._v(" 输入法")]),e._v(" "),t("p",[e._v("貌似系统自带搜狗的输入法的，但是间歇性失常，我要把它卸载掉，用"),t("a",{attrs:{href:"https://pinyin.sogou.com/linux/",target:"_blank",rel:"noopener noreferrer"}},[e._v("官网"),t("OutboundLink")],1),e._v("的重装。")]),e._v(" "),t("p",[e._v("卸载的方式是点击任务栏输入法托盘(默认可能是个小键盘)，右键选择配置(configure),选中你的输入法，点击下面的减号就可以了。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://huixiong.oss-cn-beijing.aliyuncs.com/blog/pinyin-uninstall.png",alt:"pinyin-uninstall"}})]),e._v(" "),t("p",[e._v("编辑文字状态下按Ctrl+Shift或者Ctrl+空格进行输入法切换，搜狗拼音 for Linux还是做得挺细致的，账号同步和皮肤也加了呢:")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://huixiong.oss-cn-beijing.aliyuncs.com/blog/deepin-screen-recorder_dde-desktop_20191204164923.gif",alt:"skin"}})]),e._v(" "),t("h2",{attrs:{id:"git"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git"}},[e._v("#")]),e._v(" git")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('sudo apt-get install git\nssh-keygen -t rsa -C "邮箱号"\ngit config --global user.name "你的用户名"\ngit config --global user.email 邮箱\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br")])]),t("p",[e._v("/home/huixiong/.ssh/id_rsa.pub.")]),e._v(" "),t("h2",{attrs:{id:"面向谷歌编程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#面向谷歌编程"}},[e._v("#")]),e._v(" 面向谷歌编程")]),e._v(" "),t("p",[e._v("对比过谷歌和百度搜索差别的人应该知道，百度广告遮盖了大部分正确答案，直到第二、三页才找到正确答案，太费时间了。那怎么可以使用Linux的SS和SSR客户端呢？")]),e._v(" "),t("p",[e._v("deepin自带的商店有一个SS Qt版的，还好用，不过需要Chrome安装"),t("a",{attrs:{href:"https://github.com/FelisCatus/SwitchyOmega",target:"_blank",rel:"noopener noreferrer"}},[e._v("SwitchOmega"),t("OutboundLink")],1),e._v(" 配置一番。")]),e._v(" "),t("p",[e._v("SSR在"),t("a",{attrs:{href:"https://github.com/qingshuisiyuan/electron-ssr-backup/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("Github"),t("OutboundLink")],1),e._v("上找到一个Electron备份版本")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://huixiong.oss-cn-beijing.aliyuncs.com/blog/DeepinScreenshot_select-area_20191204143209.png",alt:"ssr"}})]),e._v(" "),t("p",[e._v("我试过搬瓦工、Vultr之类的自己搭飞机，但是由于美帝思想侵略太猖獗，墙被迫进一步加高，有些不稳定，所以决定用别人的飞机场——次元链接。私以为不热衷于看视频的话，价格还合适，连接稳定，这是我的邀请码，拿去:")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://cyinvite.monster/auth/register?code=J1wkGQcu",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://cyinvite.monster/auth/register?code=J1wkGQcu"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"安装最新版本node-js"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装最新版本node-js"}},[e._v("#")]),e._v(" 安装最新版本node.js")]),e._v(" "),t("p",[e._v("安装"),t("a",{attrs:{href:"https://github.com/nodesource/distributions/blob/master/README.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("Node.js"),t("OutboundLink")],1),e._v(" 官方推荐的做法，尝试了十遍八遍都无法安装，deepin大概需要适配一下呢。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://huixiong.oss-cn-beijing.aliyuncs.com/blog/DeepinScreenshot_select-area_20191204140407.png",alt:"curl"}})]),e._v(" "),t("p",[e._v("12是node的版本，从8~13选择适合自己的。curl没有的话"),t("code",[e._v("sudo apt install curl")]),e._v(" ,但是上面的语句运行了并不能直接运行，大概的报错是这样的：")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('## Confirming "unstable" is supported...\n\n+ curl -sLf -o /dev/null \'https://deb.nodesource.com/node_12.x/dists/unstable/Release\'\n\n## Your distribution, identified as "unstable", is not currently supported, please contact NodeSource at https://github.com/nodesource/distributions/issues if you think this is incorrect or would like your distribution to be considered for support\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br")])]),t("p",[e._v("可以先用wget把文件下载，还需要稍做修改")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('wget https://deb.nodesource.com/setup_12.x -O node_12.x.sh\n\nvi node_12.x.sh\n\n# 找到DISTRO=$(lsb_release -c -s)这行按i进入编辑模式(应该在第203行)，修改为：DISTRO="jessie"\n\n# 按Esc，输入：wq! 保存退出\n\nsudo bash node_12.x.sh\n\nsudo apt-get install -y nodejs\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br")])]),t("p",[e._v("nodejs在下载，被中断了气不气！不过它告诉了你下载的地址，把文件wget到本地")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://huixiong.oss-cn-beijing.aliyuncs.com/blog/DeepinScreenshot_select-area_20191204141954.png",alt:""}})]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("wget https://deb.nodesource.com/node_12.x/pool/main/n/nodejs/nodejs_12.13.1-1nodesource1_amd64.deb \n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("进入home目录，也就是在Downloads文件夹的上一层找到你的deb文件，双击安装。然后查看版本：")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("nodejs -v\n# v12.13.1\nnpm -v\n# 6.12.1\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br")])]),t("p",[e._v("直接使用npm安装还是相当慢的，可以切换到淘宝镜像：")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("npm config set registry https://registry.npm.taobao.org\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("类似全局安装"),t("code",[e._v("@vue/cli")]),e._v(" 还是需要写权限的，有-g的内容需要加sudo，比如：")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("sudo npm install -g @vue/cli\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("不过如果你遇到问题，stackoverflow建议是这样的："),t("a",{attrs:{href:"https://stackoverflow.com/questions/46058546/error-eacces-permission-denied-access-usr-lib-node-modules",target:"_blank",rel:"noopener noreferrer"}},[e._v("permission denied"),t("OutboundLink")],1)]),e._v(" "),t("p",[t("img",{attrs:{src:"https://huixiong.oss-cn-beijing.aliyuncs.com/blog/typescript-install-in-deep.png",alt:"typescript-install"}})]),e._v(" "),t("p",[t("img",{attrs:{src:"https://huixiong.oss-cn-beijing.aliyuncs.com/blog/vue-cli-install-in-deepin.png",alt:"vue-cli-install"}})]),e._v(" "),t("p",[e._v("对于全局npm包用stackoverfolw的建议好像还是有点不行，我vue create就是创建不了文件，于是需要建立软连接：")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("sudo ln -s ~/.npm-global/bin/vue /usr/local/bin/vue\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("检查能不能用：")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("huixiong@hacks:~/.npm-global/bin$ vue -V\n@vue/cli 4.1.1\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])]),t("p",[e._v("撒花，结束！")]),e._v(" "),t("p",[e._v("参考："),t("a",{attrs:{href:"https://github.com/vuejs/vue-cli/issues/889",target:"_blank",rel:"noopener noreferrer"}},[e._v("ERROR when use vue create"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"一些linux命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一些linux命令"}},[e._v("#")]),e._v(" 一些Linux命令")]),e._v(" "),t("p",[t("strong",[e._v("1.本地使用scp向服务器 传文件：")])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("scp [-r] ./html 用户名@ip地址:/var/www/\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("回车后需要输入密码，"),t("code",[e._v("[]")]),e._v("表示内容可选，比如html文件夹下面还有image、css之类的文件夹就是需要递归传送上去，最终文件夹html会放到www文件夹下，同名 的文件会被替换。")]),e._v(" "),t("p",[t("strong",[e._v("2.ssh连接服务器：")])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("ssh 用户名@ip地址\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[t("strong",[e._v("3.查看进程")])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("ps -ef | grep node\nkill -9 进程序号\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])]),t("p",[e._v("node可以替换成其他，比如nginx")]),e._v(" "),t("h2",{attrs:{id:"小功能"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#小功能"}},[e._v("#")]),e._v(" 小功能")]),e._v(" "),t("p",[e._v("截图：Ctrl+Alt+A")]),e._v(" "),t("p",[e._v("命令行：Ctrl+Alt+T")]),e._v(" "),t("h2",{attrs:{id:"其他问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#其他问题"}},[e._v("#")]),e._v(" 其他问题")]),e._v(" "),t("p",[t("strong",[e._v("1.安装了vs code之后占用了默认资源管理器打开方式")])]),e._v(" "),t("p",[e._v("直接双击文件夹或者Chrome下载文件选择show in folder变成了自动用VS code打开，一条命令解决：")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("gio mime inode/directory dde-file-manager.desktop\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[t("strong",[e._v("2.浏览器间歇失常——上不了网")])]),e._v(" "),t("p",[e._v("这个可能是网络的问题(驱动)，快捷的方式是先把网络关闭再打开，不行的话再注销(log out)。长期解决嘛，emm...等官方修复?")]),e._v(" "),t("p",[e._v("特定的机型一安装完就无法使用WiFi，比如我在公司用的"),t("a",{attrs:{href:"https://blog.csdn.net/tudou2013goodluck/article/details/83615560",target:"_blank",rel:"noopener noreferrer"}},[e._v("Thinkpad E480"),t("OutboundLink")],1),e._v(",驱动是"),t("a",{attrs:{href:"https://pan.baidu.com/s/1sneDK8d",target:"_blank",rel:"noopener noreferrer"}},[e._v("8821ce"),t("OutboundLink")],1),e._v(" (密码：8930  ) 社区有一个兼容性"),t("a",{attrs:{href:"https://wiki.deepin.org/wiki/%E5%85%BC%E5%AE%B9%E6%80%A7%E8%89%AF%E5%A5%BD%E7%9A%84%E7%AC%94%E8%AE%B0%E6%9C%AC%E5%9E%8B%E5%8F%B7",target:"_blank",rel:"noopener noreferrer"}},[e._v("列表"),t("OutboundLink")],1),e._v(" 。")]),e._v(" "),t("p",[t("strong",[e._v("3.前端项目启动失败")])]),e._v(" "),t("p",[e._v("如果你的项目是在其他平台开发的，重新npm启动可能出现问题，因为有些包是依赖环境的比如node-sass。你可以把yarn.lock或者package-lock.json删掉，不放心也把node_modules删掉，重新"),t("code",[e._v("npm install")]),e._v("就可以启动了。")])])}),[],!1,null,null,null);s.default=a.exports}}]);