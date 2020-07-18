# 基础知识

## 1. Vue中导出Excel表格



[vue文件下载实现](https://blog.csdn.net/mibi8840/article/details/86741982) 

[Vue-Blob-Excel2Excel](https://github.com/sunhuihuibuhui/vue-Blob-Export2Excel) 

[export2excel.js原生的方法](https://segmentfault.com/q/1010000016742846) 

[Blob.js](https://github.com/eligrey/Blob.js) 



## 2. 移动端无法使用click事件

Vue在移动端绑定click事件没有反应，可能是因为使用了better-scroll,它默认阻止了click事件，在初始化的时候进行配置：

```

mounted(){

  this.scroll=new Bscroll(this.$refs.wrapper, { mouseWheel: true, click: true, tap: true })

}

```



## 3.基于Vue的toast提示框

https://www.jianshu.com/p/d75cea16edf1





## 4.使用手机访问Vue页面

内网访问Vue项目，先查看自己的内网地址。Windows环境下win+R输入cmd然后再输入ipconfig找到内网ip

vue.config.js中把localhost改成自己的内网ip地址

```

module.exports = {

  devServer: {

​    open: true,

​    host: '192.168.1.133',

​    port: 8080,

​    https: false,

​    proxy: {

​     '/api': {

​      target: 'http://192.168.1.180:8899',

​      changeOrigin: true,

​      ws: true,

​      pathRewrite: {

​       '^/api': ''

​      }

​     }

​    }

  }

}

```



## 5.引入图片

Vue内联方式引用图片经常出问题，审查元素一般能够显示图片的相对路径，但是无法加载。



**方法一：** 通过require导入，然后通过方法调用



```

// HTML代码

    <div class="soil-radius">

      <img :src="getImgUrl('soli-temperature')" alt="">

  </div>



// 调用methods中的函数

  getImgUrl (name) {

   return require("@/assets/images/" + name + '.png')

  }

```



**方法二：** 内联路径拼接

```

<div :style="{background: 'url('+ imageUrl +')'}">

```



## 6. 后台一直有数据请求报错：http://localhost:8080/sockjs-node/info?t=1561624027536





## 7. 动态修改页面的标题



如果某个路由的页面标题是一直的，可以在router设置的时候设定meta,然后在beforeEach中修改页面标题



```

// 路由配置

 {

   path: '/login',

   component: Login,

   meta: {

​    title: '登录'

   }

 }

// 全局路由守卫

router.beforeEach((to, from, next) => {

  /* 路由发生变化修改页面title */

  if (to.meta.title) {

​    document.title = to.meta.title;

  }

  next();

})

```

如果某个路由是动态路由，可以在全局路由守卫中获取参数，然后修改页面标题



```

// 路由配置

 {

  path: '/:id',

  name: 'home',

  component: Home

 }



// 全局路由守卫

router.beforeEach((to, from, next) => {

 if (to.params.id) {

  document.title = to.params.id

 }

 next()

})



```



## 8.Vue中引入UEditor

[vue-ueditor-wrap](https://github.com/HaoChuan9421/vue-ueditor-wrap) 

[Vue项目中最简单的使用集成UEditor方式，含图片上传](https://juejin.im/post/5b6853eee51d4519601b112d) 

[tinymce-vue](https://github.com/tinymce/tinymce-vue) 



## 9.Vue中引入WangEditor

[vue + wangEditor小试牛刀](https://segmentfault.com/a/1190000016010354) 

[wangEditor官网](http://www.wangeditor.com/) 





## 10.Vue中配置多个Spring boot访问代理



## 11.Vue中操作checkbox



业务需求是在li标签下有图标，点中图标被选中.

在Vue中，checkbox所在的input用v-model绑定了value，该v-model是checkbox的checked的语法糖，如果checkbox被选中会自动添加到v-model绑定的数组，反选会从数组中移除。

因此，我们可以通过操作绑定的数组来实现点击图标的被选中的效果，checkbox就可以通过绝对定位加z-index的方式实现隐藏。在li标签下绑定相应的事件改变数组和动态绑定的样式。

```

// 标签

<ul>

  <template v-for="item in channelList" >

​    <li :class="{'li-selected': item.checked}" :key="item.value" @click.stop="handleCheck(item)">

            <img :class="{'img-selected': item.checked}" :src="getImgUrl(item.value)" alt=""> 

​      <input type="checkbox" :value="item.value" v-model="channel">

            <div :class="{'name-selected': item.checked}" class="icon-name">{{item.name}}</div> 

​    </li>  

  </template>

</ul>



// 数据 

 data() {

  return {

   channel: [],

   channelList: [

​    {

​      name: '邮件',

​      checked: false,

​      value: 'mail'

​    },

​    {

​      name: '短信',

​      checked: false,

​      value: 'message'

​    },

​    {

​      name: '微信',

​      checked: true,

​      value: 'wechat'

​    },

​    {

​      name: '声讯',

​      checked: false,

​      value: 'tel'

​    },

​    {

​      name: '喇叭',

​      checked: false,

​      value: 'trumpet'

​    },

​    {

​      name: 'App',

​      checked: false,

​      value: 'phone'

​    },

​    {

​      name: '电视',

​      checked: false,

​      value: 'tv'

​    },

​    {

​      name: '传真',

​      checked: false,

​      value: 'fax'

​    },

​    {

​      name: '北斗',

​      checked: false,

​      value: 'satellite'

​    },

​    {

​      name: '网站',

​      checked: false,

​      value: 'web'

​    },

​    {

​      name: '微博',

​      checked: false,

​      value: 'weibo'

​    }

   ],

  }

 }





// 绑定的方法

  methods: {

​    getImgUrl(name) {

​      return require('@/assets/images/channel/'+ name + '.png')

​    },

​    handleCheck(obj) {

​      const index = this.channel.indexOf(obj.value)

​      if(index > -1) {

​        this.channel.splice(index, 1)

​        obj.checked = false

​      }else {

​        this.channel.push(obj.value)

​        obj.checked = true

​      }

​    }

  }





```

参考： 

[Class与Style绑定](https://cn.vuejs.org/v2/guide/class-and-style.html) 

[checkbox数据绑定](https://blog.csdn.net/mutouren121/article/details/80608587) 





## 12.Vue实现内滚动

[vue-happy-scroll](https://github.com/tangdaohai/vue-happy-scroll) 

[Vue的自定义滚动，我用el-scrollbar](https://juejin.im/post/5b0c0adb6fb9a009ec7e9734) 



结构和样式：

```

<div class="tree-area">

  <el-scrollbar 

​    wrap-class="list" 

​    wrap-style="color: red;" 

​    view-style="font-weight: bold;" 

​    view-class="view-box" :native="false">

​      <el-tree

​        :data="zone"

​        show-checkbox

​        node-key="id"

​        :default-expanded-keys="[1]"

​        :default-checked-keys="[5]"

​        :props="defaultProps">

​      </el-tree>

  </el-scrollbar>

</div>





.tree-area{

  width: 80%;

  height: 220px;

  padding: 10px;

}

/deep/.list{

  max-height: 220px;

  width: 100%;

}

```

数据：

```

zone: [

  {

​    id: 1,

​    label: '靠山县',

​    children: [

​      {

​        id: 2,

​        label: '香蕉镇'

​      },

​      {

​        id: 3,

​        label: '萝卜乡'

​      },

​      {

​        id: 4,

​        label: '苹果乡'

​      },

​      {

​        id: 5,

​        label: '荔枝乡'

​      },

​      {

​        id: 6,

​        label: '荷花镇'

​      },

​      {

​        id: 7,

​        label: '煎饼镇'

​      },

​      {

​        id: 8,

​        label: '哈密瓜乡'

​      },

​      {

​        id: 9,

​        label: '蓝莓镇'

​      },

​      {

​        id: 10,

​        label: '土豆乡'

​      },

​      {

​        id: 11,

​        label: '果冻镇'

​      }

​    ]

  },

  {

​    id: 12,

​    label: '吃山县',

​    children: [

​      {

​        id: 22,

​        label: '牛奶镇'

​      },

​      {

​        id: 23,

​        label: '山楂乡'

​      },

​      {

​        id: 24,

​        label: '葡萄乡'

​      },

​      {

​        id: 25,

​        label: '柚子乡'

​      },

​      {

​        id: 26,

​        label: '西瓜镇'

​      },

​      {

​        id: 27,

​        label: '番薯镇'

​      },

​      {

​        id: 28,

​        label: '蝗虫乡'

​      },

​      {

​        id: 29,

​        label: '辣椒镇'

​      },

​      {

​        id: 30,

​        label: '八角乡'

​      },

​      {

​        id: 31,

​        label: '野猪镇'

​      }

​    ]

  }        

],

defaultProps: {

  children: 'children',

  label: 'label'

},

```



## Vue表格数据滚动加载

[vue-infinite-scroll](https://www.npmjs.com/package/vue-infinite-scroll) 





## Vue实现文件上传

```

<template>

    <div class="upload-container">

​    <Upload

​      ref="upload"

​      :before-upload="handleBeforeUpload"

​      :on-success="handleSuccess"

​      :format="['jpg', 'jpeg', 'png']"

​      :max-size="4096"

​      :data="{token: uptoken}"

​      action="http://upload.qiniup.com">

​      <Button icon="ios-cloud-upload-outline">Upload files</Button>

​    </Upload>

  </div>

</template>

<script>

import { getUploadToken } from '@/api/index';



export default {

 name: 'upload',

 data() {

  return {

   uptoken: '',

  };

 },

 methods: {

  handleBeforeUpload(file) {

   console.log((new Date()).valueOf() + '_' + file.name);

  },

  handleSuccess(res) {

   console.log(res);

  },

 },

 mounted() {

  getUploadToken().then((res) => {

   this.uptoken = res.data;

   console.log(res.data);

  });

 },

};

</script>

<style lang="less" scoped>

  .upload-container{

​    width: 100%;

​    height: 100%;

​    display: flex;

​    justify-content: center;

​    align-items: center;

  }

</style>



```

后端

```

function frontendToken() {

 const mac = new qiniu.auth.digest.Mac(qiniuConfig.ak, qiniuConfig.sk);

 const options = { 

  scope: qiniuConfig.bucket,

  expires: 7200,

 };

 const putPolicy = new qiniu.rs.PutPolicy(options);

 const uploadToken = putPolicy.uploadToken(mac);

 return uploadToken; 

}



router.get('/token', async (ctx, next) => {

  const token = frontendToken();

  ctx.body = token;

});



```



[element文件上传](https://www.cnblogs.com/tomatoto/p/9594638.html) 

[实现表单多文件上传](https://www.jianshu.com/p/c592c3009961) 

[iView + axios实现图片预览及单请求批量上传](https://hayuq.com/blog/articles/189.shtml) 

[Vue + ElementUI如何优雅的上传文件到七牛OSS](https://www.xiaoxustudent.top/p/363) 





## computed和watch

[watch的简单应用](https://www.cnblogs.com/jin-zhe/p/9319648.html) 

[computed和watch](https://www.cnblogs.com/theblogs/p/10353771.html) 

[computed VS watch](https://www.cnblogs.com/gunelark/p/8492468.html) 



## 混入mixins

[vue中mixins的使用方法](https://www.cnblogs.com/Ivy-s/p/9937173.html)



## 子组件不要改变父组件的值

[Vue报错](https://www.jianshu.com/p/392145843afe) 

[Vue坑](https://www.jianshu.com/p/54cfaa2f5d5b) 

[Vue双向绑定](https://www.cnblogs.com/xxcanghai/p/6124699.html?_t=t) 



\> Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-



```

        <div class="page-block">

​      <el-pagination

​        :current-page.sync ="currentPaging"

​        :page-sizes="[5, 10,30, 50, 100]"

​        :page-size.sync ="pageSizing"

​        layout="total,prev, pager, next, jumper,sizes"

​        :total="totalPage">

​      </el-pagination>          

​    </div>

        <div class="edit-block">

​      <el-button type="primary" icon="el-icon-edit" size="small">添加</el-button>

​      <el-button type="danger" icon="el-icon-delete" size="small">删除</el-button>

​    </div>    

  </div>

</template>

<script>

export default {

  name: 'table-template',

  props: {

​    searchTips: {

​      type: String,

​      required: true

​    },

​    totalPage: {

​      type: Number,

​      required: true

​    },

​    currentPage: {

​      type: Number,

​      required: true

​    },

​    pageSize: {

​      type: Number,

​      required: true

​    }

  },

  data() {

​    return {

​      searchName: '',

​      pageSizing: this.pageSize,

​      currentPaging: this.currentPage

​    }

  },

  watch: {

​    pageSize(val) {

​      this.pageSizing = val

​    },

​    pageSizing(val) {

​      this.$emit('change-size', val)

​    },

​    currentPage(val) {

​      this.currentPaging = val

​    },

​    currentPaging(val) {

​       this.$emit('current-change', val)

​    }

  },

```



## pagination的坑

[ElementUI-pagination](https://www.jianshu.com/p/9f38983d8e1b) 



## Select下面套Tree

[Element组件改造Select成树形选择器](https://blog.csdn.net/Mr_JavaScript/article/details/88604270) 





## 小技巧

父组件改变子组件的data里面的值：在子组件添加ref属性，通过this.$refs.xxx.data来访问



## iView文件上传

[upload携带额外参数](https://www.jianshu.com/p/a15c22909dd9)





## Vue监听vuex中数据的变化

[vuex state中的数组变化监听方法](https://blog.csdn.net/qq997843911/article/details/85055993) 





## Vue中使用百度地图

[如何在Vue单页应用中使用百度地图](https://www.cnblogs.com/jiekzou/p/10485604.html) 

[在Vue中使用百度地图的两种方法](https://www.php.cn/js-tutorial-410639.html) 

[Vue单页中使用百度地图](http://www.imooc.com/article/282058?block_id=tuijian_wz) 





## element-ui的坑

[setCheckedKeys](https://juejin.im/post/5bffda6c5188254caf186ebf) 



## iView Date组件

**两个日期选择器联动，实现只选择起始日期开始后的一个月，并且不能选今天以后的日期**

```

<template>

    <div style="padding: 32px 500px">

​    <h1>多个 DatePicker 联动的用法(联动禁用)</h1>

​    <br><br>



​    <DatePicker v-model="startDate" @on-change="handleChange"></DatePicker>

​    <DatePicker v-model="endDate" :disabled="startDate === ''" :options="options" ref="endDate"></DatePicker>

  </div>

</template>



<script>

  export default {

​    data () {

​      const that = this

​      return {

​        startDate: '',

​        endDate: '',

​        options: {

​          disabledDate: (date) => {

​            const today = new Date();

​            const last_time = (new Date(this.startDate)).getTime() + 86400000 * 30

​            return this.startDate > date || last_time < date || today < date ;

​          }

​        }

​      }

​    },

​    methods: {

​      handleChange () {

​        if (this.startDate !== '') {

​          this.$refs.endDate.handleFocus();

​        } else {

​          this.endDate = '';

​        }

​      }

​    }

  }

</script>

```

**设置仅当月日期可选**

```

<template>

    <div style="padding: 32px 500px">

​    <h1>DatePicker 设置仅当月日期可选</h1>

​    <br><br>



​    <DatePicker type="date" :options="options"></DatePicker>

  </div>

</template>



<script>

  export default {

​    data () {

​      return {

​        options: {

​          disabledDate (date) {

​            // 先判断本月第一天

​            const today = new Date();

​            const year = today.getFullYear();

​            const month = today.getMonth();



​            const first_time = (new Date(year, month, 1)).getTime();



​            // 再判断本月有多少天

​            today.setMonth(month + 1);

​            today.setDate('1');

​            today.setDate(today.getDate() - 1);



​            const days = today.getDate();



​            // 再获取本月最后一天的时间

​            const last_time = first_time + 86400000 * days;



​            const datetime = date.valueOf();



​            return datetime < first_time || datetime >= last_time;

​          }

​        }

​      }

​    }

  }

</script>

```

## iView按需引入

[iView按需引入vue项目中](https://blog.csdn.net/WXY19951125/article/details/83022688) 

`npm install babel-plugin-import --save-dev`



**.babelrc**

```

{

  "plugins": [

​    ["import", {

​    "libraryName": "iview",

​    "libraryDirectory": "src/components"

​    }]

  ]

}



```

**main.js**

```

// import iView from 'iview'

import 'iview/dist/styles/iview.css'



import { 

 Button, 

 Tabs,

 TabPane,

 Modal,

 Upload,

 Tooltip,

 Icon,

 Form,

 FormItem,

 Row,

 Col,

 Select,

 Option,

 DatePicker,

 Card,

 Message,

 Table } from 'iview'





Vue.component('Tabs', Tabs)

Vue.component('TabPane', TabPane)

Vue.component('Button', Button)

Vue.component('Table', Table)

Vue.component('Modal', Modal)

Vue.component('Upload', Upload)

Vue.component('Tooltip', Tooltip)

Vue.component('Icon', Icon)

Vue.component('Form', Form)

Vue.component('FormItem', FormItem)

Vue.component('Row', Row)

Vue.component('Col', Col)

Vue.component('Select', Select)

Vue.component('Option', Option)

Vue.component('DatePicker', DatePicker)

Vue.component('Card', Card)

Vue.prototype.$Message = Message

// Vue.use(iView)

```

按需引入时，全局api,比如this.$Message不能使用Vue.component的方式注册，引入之后应该使用Vue.prototype.xxx的方式



## 文件配置

devServe 设置内网访问，需要 host:0.0.0.0



## 路由章节

场景： Nav使用点击实践跳转到另一个页面，Header复用，并且页面都在同一个父组件下

比如

/home/card

/home/business



这时要高亮显示当前的Nav，注意路由配置中card和business是children路由，而不是/home/:path,此时 Header中的beforeRouteUpdate是不会触发的 理由如文档[beforeRouteUpdate](https://router.vuejs.org/zh/guide/advanced/navigation-guards.html#%E7%BB%84%E4%BB%B6%E5%86%85%E7%9A%84%E5%AE%88%E5%8D%AB) 

这种情况可以使用watch

```

watch: {

  $route(to) {

​    this.currentName = to.name;

  },

},

```



## 动态添加标签的轮子(基于iView)

点击添加标签后，原本的按钮变成输入框，输入完内容或者失焦的时候会添加新的标签，然后增加新的按钮。但是如果内容没输入完，输入框会替换成原来的按钮。

\* 1个属性2个事件绑定

 \* 通过`:tag-list="tagList"` 传递初始化的标签，类型为数组

 \* `@on-close` 传递要删除的index，删除父组件中对应的标签

 \* `@on-add` 传递新插入的标签value, 想父组件中插入新的标签

![mark](http://qiniu.hackslog.cn/blog/20190809/E15eYgE99PNB.gif)

```

<template>

    <div class="dynamic-tag">

   <Tag

​    v-for="item in tagContent"

​    :key="item"

​    :name="item"

​    closable @on-close="handleClose">{{ item }}</Tag>

   <Input

​    ref="input"

​    v-if="inputVisible"

​    v-model="inputValue"

​    @on-blur="handleInputComplete"

​    @on-enter="handleInputComplete"

​    style="width: 60px;" />

   <Button

​    v-else

​    icon="ios-add"

​    type="dashed"

​    size="small"

​    @click="showInput">添加</Button>

  </div>

</template>

<script>

export default {

 props: {

  TagList: {

   type: Array,

   required: true,

  },

 },

 data() {

  return {

   tagContent: this.TagList,

   inputValue: '',

   inputVisible: false,

  };

 },

 methods: {

  showInput() {

   this.inputVisible = true;

   this.$nextTick(() => {

​    this.$refs.input.focus();

   });

  },

  handleClose(event, name) {

   const index = this.tagContent.indexOf(name);

   this.$emit('on-close', index);   

  },

  handleInputComplete() {

   const value = this.inputValue;

   if (value) {

​    this.$emit('on-add', value);    

   }

   this.inputVisible = false;

   this.inputValue = '';

  },

 },

};

</script>

<style lang="less">

 .dynamic-tag{

  width: 100%;

  height: 100%;

  .ivu-input{

   height: 24px;

  }

 }

</style>

```



## 使用过渡动画

[transition](https://cn.vuejs.org/v2/guide/transitions.html) 

[Animate.css](https://daneden.github.io/animate.css/)

```

npm i animate.css -S

// main.js中引入

import animated from 'animate.css'

Vue.use(animated)



<transition 

  enter-active-class="animated zoonInLeft" 

  leave-active-class="animated zoomOutLeft">

    <div class="aaa" v-show="show"></div>

</transition>



```



## 上传图片之前检查图片的宽高

[iview upload上传图片前使用Promise判断高宽](https://www.jianshu.com/p/c91915541899) 





## 微信扫码登录



获取access_token的过程

\1. 点击微信登录链接，会打开一个微信扫码的页面(微信开放平台提供的，地址携带了第三方网站的appID和重定向地址)

\2. 用户扫码，微信弹出确认登录按钮，确认以后微信开放平台返回一个临时的code跳转到之前的"重定向地址"，这次跳转会带上临时的code

\3. 这个跳转交给了第三方网站处理，相当于一次Get请求。网站会通过code + appid + appsecret(这个放在服务器)，生成了一个access_token

\4. 第三方网站返回了access_token，一般也会携带用户信息(通过官方提供的userinfo api实现)，然后就能看过个性化的页面(比如有你的头像)，实现了登录

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

\1. 检查是不是重复获取了token

\2. 检查接口类型，公众平台和开放平台的用户请求地址是不同的



## v-if取消复用

在不需要复用的节点下面添加key值, 这样每次切换到原来的组件，组件会重新渲染一遍。

```

    <div v-if="getCurrentStep === 0" class="create-detail">

​    <basic-info key="info"></basic-info>

  </div>

    <div class="create-detail" v-if="getCurrentStep === 1">

​    <car-detail key="detail-image"></car-detail>

  </div>

    <div class="create-detail" v-if="getCurrentStep === 2">

​    <basic-setting key="basic-setting"></basic-setting>

  </div>

    <div class="create-detail" v-if="getCurrentStep === 3">

​    <more-setting key="more-setting"></more-setting>

  </div>

```