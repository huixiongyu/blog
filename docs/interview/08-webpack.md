# Webpack

## 1.介绍webpack

Webpack是一个 模块打包工具，可以使用Webpack管理模块依赖，并编译输出模块所需的静态文件。经常用来压缩合并CSS、JavaScript代码，压缩图片生成，base64，使用loader对各种资源进行处理。

关键：

1. 通过entry配置入口文件
2. 通过output指定输出的文件
3. 使用各种loader处理CSS、JavaScript、image等资源，并将他们编译与打包成浏览器可以解析的内容。
4. plugins负责对载入的文件进行处理并且最终输出到编译后的文件中

常用的Webpack操作：

`webpack-bundle-analyzer` 占用分析

`compression-webpack-plugin`  gzip文件压缩

## 2.webpack的插件如何实现？
Plugins可以在打包过程的不同阶段拦截运行时事件。

异步事件钩子：
* tapAsync
* tapPromise
同步钩子：
* SyncHook
* Bail Hooks保释钩子
* Waterfall Hooks瀑布钩子
异步钩子：
* Async Series Hook异步串行钩子
* Async waterfall异步瀑布钩子
* Async Series Bail
* Async Parallel
[编写一个插件](https://webpack.docschina.org/contribute/writing-a-plugin/) 
[Webpack原理-编写插件](https://segmentfault.com/a/1190000012840742) 

## 3.dev-server怎么跑起来的？

[devServer](https://webpack.docschina.org/configuration/dev-server/) 


## 4.import { Button } from 'antd'，打包时只打包 button，分模块加载，是如何实现的
考察：按需加载

通过`babel-plugin-import` 配置处理
```
{
  "plugins": [
    ["import", {
      "libraryName": "antd",
      "libraryDirectory": "es",
      "style": "css"
    }]
  ]
}

```
相当于：

```
import Button from 'antd/es/button';
import 'antd/es/button/style/css';

```
自行查看：node_modules/antd

需要配置css-loader，而且不要配置exclude

## 5.使用 import 时，webpack 对 node_modules 里的依赖会做什么


[什么是webpack](https://segmentfault.com/a/1190000015980312) 


## 6.webpack的生命周期和打包过程

[webpack流程图](https://img.alicdn.com/tps/
TB1GVGFNXXXXXaTapXXXXXXXXXX-4436-4244.jpg) 
[细说webpackz之流程篇](http://taobaofed.org/blog/2016/09/09/webpack-flow/) 

## 7.loader 和 plugin 有什么区别
* loader用于加载，作用在一个个文件上
* plugin扩展了webpack，处理打包过程，比如打包优化、压缩

[webpack之loader和plugin简介](https://juejin.im/post/5980752ef265da3e2e56e82e) 

## 8.配CSS需要哪些 loader

css-loader
style-loader
[css-loader](https://webpack.docschina.org/loaders/css-loader/) 


## 9.如何配置把JS、CSS、HTML单独打包

extract-text-webpack-plugin
MiniCssExtractPlugin 

## 10.打包时 hash 是如何生成的
webpack-md5-hash
[chunkhash]

```
    output:{
        filename:'[name]-[chunkhash].js'
    },

```