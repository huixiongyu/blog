# 《Vue.js项目实战》

* 1-Vue开发入门
* 2-项目1：Markdown笔记本
* 3-项目2：城堡决斗游戏
* 4-高级项目设置
* 5-项目3：支持中心
* 6-项目4：博客地图
* 7-项目5：在线商店以及扩展
* 8-项目6：使用Meteor开发实时仪表盘

## Markdown笔记本

使用了[Marked]( https://github.com/markedjs/marked ) ——将编写的内容转化为HTML。

watch

* 传入新值和旧值
* deep，侦听嵌套对象
* immediate：立即调用触发调用处理函数

良好的编程准则之一：**不要重复自己**

再methods和watch的处理函数中都可以直接通过this访问Vue实例的属性。

生命周期：创建、挂载到页面、更新、最终销毁。

* beforeCreate
* created
* beforeMount
* mounted
* beforeUpdate
* updated
* beforeDestroy
* destroyed

再Javascript中，如果值为false、0、空字符串、null、undefined或NaN(不是一个数)，则它就是假值。在浏览器的本地存储数据中，如果对应的键不存在，localStorage.getItem()方法返回null

```
created() {
  // 将 content 设置为存储的内容
  // 如果没有保存任何内容则设置为一个默认字符串
  this.content = localStorage.getItem('content') || 'You can write in ** markdown ** '
   },
})
```

JSON.stringify()和JSON.parse()

引入moment.js日期格式化



