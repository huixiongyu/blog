# 常用工具

## better-scroll

参考：
[better-scroll之吸顶效果巨坑挣扎中](https://www.cnblogs.com/cq1715584439/archive/2019/04/05/10660265.html) 


## QRcode

### 生成二维码并下载

[npm-qrcode地址](https://www.npmjs.com/package/qrcode) 

安装： `npm i qrcode` 
引入： `import QRCode from 'qrcode'`

生成二维码的时候需要有一个canvas标签
```
    gencode(){
      var canvas = document.getElementById('canvas')
      this.url = 'http://192.168.1.133:8080/' + this.currentStation
      QRCode.toCanvas(canvas, this.url , function (error) {
        if (error) console.error(error)
      })
    }
```
下载二维码：
```
    handleDownload(){
      console.log('download')
      let canvas = document.getElementById('canvas')
      QRCode.toCanvas(canvas, this.url, error => {
        if(error) {
          this.$Message.error('下载失败！')
        }
      })
      let base64Img  = canvas.toDataURL()
      let a  = document.createElement('a')
      a.href = base64Img
      a.download = this.currentStation
      let event = document.createEvent('MouseEvents')
      event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
      a.dispatchEvent(event)
    }
```
## ESlint的使用
自动修复错误，比如`Expected linebreaks to be 'LF' but found 'CRLF' (linebreak-style) at src\components\PageHeader.vue:19:9:`
在package.json添加：
`"lint-fix": "eslint --fix --ext .js --ext .jsx --ext .vue src/"` 

**或者：**
在.eslintrc.js中配置：
```
module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": 0
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "never"
        ]
    }
};

```
不应该在for循环里面用await，我在上传的操作下改成这样：用Promise.all()
```
    queueUpload(file) {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('token', this.qiniuToken);
      return axios({
        method: 'POST',
        url: this.postURL,
        data: formData,
      }).then((res) => {
        console.log(res.data.key);
        this.keyList.push(res.data.key);
      })
        .catch((err) => {
          console.log(err);
          this.$Message.error('上传失败！');
        });
    },
    async confirmUpload() {
      if (this.uploadList.length === 0) {
        this.$Notice.error({
          title: '还没有可上传的文件！',
        });
        return;
      }
      const resultList = [];
      this.uploadList.forEach((file) => {
        resultList.push(this.queueUpload(file));
      });
      await Promise.all(resultList);
      // const len = this.uploadList.length;
      // for (let index = 0; index < len; index++) {
      //   await this.queueUpload(this.uploadList[index]);
      // }
      this.$Notice.success({
        title: '上传成功！',
      });
      console.log(this.keyList);
      this.imageList.splice(0, this.imageList.length);
      this.uploadList.splice(0, this.uploadList.length);
    },
```

[使用VSCode + ESlint实践前端编码规范](https://segmentfault.com/a/1190000009077086) 
[不允许向函数参数赋值](https://cn.eslint.org/docs/rules/no-param-reassign) 
[不期望的返回值，比如我before-upload return false报错](https://cn.eslint.org/docs/rules/consistent-return)
[令人抓狂的Eslint语法](https://segmentfault.com/a/1190000008742240)
[优先使用数组和对象解构 (prefer-destructuring)](https://cn.eslint.org/docs/rules/prefer-destructuring)
[no-await-in-loop](https://eslint.org/docs/rules/no-await-in-loop)

## 云主机的使用

腾讯云主机默认不使用root账号，登录账号是ubuntu
[登录及远程连接](https://cloud.tencent.com/document/product/213/17278) 
[宝塔Linux安装准备](https://www.bt.cn/bbs/thread-1229-1-1.html)
[宝塔Linux安装](https://www.bt.cn/bbs/thread-19376-1-1.html) 

## Typecho博客
`#1046 - No database selected`
没有指定数据库
登录地址： domain.com/admin/
```
<div id="landlord" style="left:5px;bottom:0px;">
    <div class="message" style="opacity:0"></div>
    <canvas id="live2d" width="500" height="560" class="live2d"></canvas>
    <div class="live_talk_input_body">
    	<div class="live_talk_input_name_body">
        	<input name="name" type="text" class="live_talk_name white_input" id="AIuserName" autocomplete="off" placeholder="你的名字" />
        </div>
        <div class="live_talk_input_text_body">
        	<input name="talk" type="text" class="live_talk_talk white_input" id="AIuserText" autocomplete="off" placeholder="要和我聊什么呀？"/>
            <button type="button" class="live_talk_send_btn" id="talk_send">发送</button>
        </div>
    </div>
    <input name="live_talk" id="live_talk" value="1" type="hidden" />
    <div class="live_ico_box">
    	<div class="live_ico_item type_info" id="showInfoBtn"></div>
    	<div class="live_ico_item type_talk" id="showTalkBtn"></div>
        <div class="live_ico_item type_music" id="musicButton"></div>
        <div class="live_ico_item type_youdu" id="youduButton"></div>
        <div class="live_ico_item type_quit" id="hideButton"></div>
        <input name="live_statu_val" id="live_statu_val" value="0" type="hidden" />
        <audio src="" style="display:none;" id="live2d_bgm" data-bgm="0" preload="none"></audio>
        <input name="live2dBGM" value="音乐地址" type="hidden">
        <input id="duType" value="douqilai,l2d_caihong" type="hidden">
    </div>
</div>
<div id="open_live2d">召唤伊斯特瓦尔</div>

```

```
<script type="text/javascript" src="https://apps.bdimg.com/libs/jquery/1.7.1/jquery.min.js"></script>
<script type="text/javascript" src="Live2dHistoire/js/live2d.js"></script>
<script type="text/javascript" src="Live2dHistoire/js/message.js"></script>

```

```
<link rel="stylesheet" href="/Live2dHistoire/css/live2d.css" />

```

```
 <script async src="//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"></script>
<span id="busuanzi_container_site_uv">
  本站访客数<span id="busuanzi_value_site_uv"></span>人次
</span>

```

## git的使用
前一天晚上在家修改了代码之后，回到公司想把本地的代码跟库的同步一下，我仅仅`git pull`了一下，不过报错了。
```
error: Your local changes to the following files would be overwritten by merge:
        docs/work/06-tools.md
```
这时想保留本地的更改，又想同步库的更改，需要的操作是：
```
git stash
git pull origin master
git stash pop
```
这时本地可能出现文件冲突，需要把提示冲突的修改完，然后git add, git commit 和 git push一遍就行了。