# 《React Native移动开发实战》

这是第一次接触React Native开发，而最近尝试用Taro开发多端程序，才发现Taro为我们屏蔽了很多复杂的API。RN看到很多View 、Navigator之类貌似Andriod原生的标签，才醒悟到小程序不光仿React ，仿的还是元素开发的标签！这本书入门刚刚好，有些细节还没认真琢磨，比如混合开发、第三方库的效果，等用Taro开发了两个程序再来瞄瞄~。

时间：3小时25分 2020年7月19日

## 第1章  React Native入门

脏检查：scope dist + 非必要DOM更新

依赖收集：重新收集依赖 + 必要DOM更新

依赖收集在初始化和数据变化的时候都需要重新收集依赖，在数据流比较小的时候几乎可以忽略，但在数据量比较大的时候就会产生一定的消耗。

在优化的版本中，Angular和Vue采用了track by $index技术后比React的效率更高。



## 第2章  React Native环境搭建

下载并安装最新版的JDK

安装Andriod SDK环境可以单独安装Andriod SDK，也可以通过Andriod Studio一并安装。

安装模拟器，推荐使用Genymotion。



## 第3章 React Native开发基础

FlexBox布局属性：

* display-flex
* flex-direction
* flex-wrap
* flex-flow
* justify-content
* align-items
* align-content

在ES6里，统一使用static成员来修饰属性类型和默认属性。

相对于ES5语法，使用ES6语法开发需要开发者自己手动绑定每一个回调函数，这对于开发者来说似乎是一种方便性上的退步。

ES6对参数的写法做了较大的改动，主要体现在参数默认值、不定参数、扩展参数方面。

事件绑定：JSX可以给元素直接绑定事件，如点击事件。React并不会真正绑定事件到每一个具体的元素上，而是采用事件代理的方式，在根节点document上为每种时间添加唯一的事件监听者（Listener），然后通过事件的目标函数（target）找到真实触发元素的相关事件。



在React Native的手势响应系统中，一个完整的触摸事件分为3个生命周期状态：开始（Start)、移动（move）和释放（release），对应Web浏览器的mouseDown、MouseMove和mouseUp3个生命周期状态。

## 第4章  常用组件介绍

常用组件：

* View
* Image
* Text
* ListView
* TextInput
* ScrollView
* Navigator
* WebView
* TabBarIOS和TarBarIOS.Item
* ToolbarAndroid
* SegementedControllOS
* ViewPagerAndroid
* Touchable系列

## 第5章  常用API介绍

常用API

* AppRegistry
* StyleSheet
* AsyncStorage
* PixelRatio
* Animated
* Geolocation
* NetInfo

AsyncStorage是React Native提供的一种轻量级数据存储方式，因为使用了Key-Value存储系统，所以是不支持SQL语句的。可以使用react-native-storage

## 第6章  组件封装

第三方库：

* react-navigation
* react-native-tab-navigator
* react-native-scrollable-tab-view
* react-native-image-picker
* Mobx
* react-native-art



Mobx最核心的对象莫过于观察者和被观察者，对应于Mobx的@observer和@observable。使用@observeable将对象变为一个被观察者。

## 第7章  网络与通信



## 第8章  混合开发高级篇



## 第9章  热更新与打包部署



## 第10章 基于LBS的天气预报应用开发



## 第11章  O2O移动团购应用