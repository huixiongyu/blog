(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{433:function(a,e,t){"use strict";t.r(e);var s=t(40),r=Object(s.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"webpack"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webpack"}},[a._v("#")]),a._v(" Webpack")]),a._v(" "),t("h2",{attrs:{id:"_1-介绍webpack"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-介绍webpack"}},[a._v("#")]),a._v(" 1.介绍webpack")]),a._v(" "),t("p",[a._v("Webpack是一个 模块打包工具，可以使用Webpack管理模块依赖，并编译输出模块所需的静态文件。经常用来压缩合并CSS、JavaScript代码，压缩图片生成，base64，使用loader对各种资源进行处理。")]),a._v(" "),t("p",[a._v("关键：")]),a._v(" "),t("ol",[t("li",[a._v("通过entry配置入口文件")]),a._v(" "),t("li",[a._v("通过output指定输出的文件")]),a._v(" "),t("li",[a._v("使用各种loader处理CSS、JavaScript、image等资源，并将他们编译与打包成浏览器可以解析的内容。")]),a._v(" "),t("li",[a._v("plugins负责对载入的文件进行处理并且最终输出到编译后的文件中")])]),a._v(" "),t("p",[a._v("常用的Webpack操作：")]),a._v(" "),t("p",[t("code",[a._v("webpack-bundle-analyzer")]),a._v(" 占用分析")]),a._v(" "),t("p",[t("code",[a._v("compression-webpack-plugin")]),a._v("  gzip文件压缩")]),a._v(" "),t("h2",{attrs:{id:"_2-webpack的插件如何实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-webpack的插件如何实现"}},[a._v("#")]),a._v(" 2.webpack的插件如何实现？")]),a._v(" "),t("p",[a._v("Plugins可以在打包过程的不同阶段拦截运行时事件。")]),a._v(" "),t("p",[a._v("异步事件钩子：")]),a._v(" "),t("ul",[t("li",[a._v("tapAsync")]),a._v(" "),t("li",[a._v("tapPromise\n同步钩子：")]),a._v(" "),t("li",[a._v("SyncHook")]),a._v(" "),t("li",[a._v("Bail Hooks保释钩子")]),a._v(" "),t("li",[a._v("Waterfall Hooks瀑布钩子\n异步钩子：")]),a._v(" "),t("li",[a._v("Async Series Hook异步串行钩子")]),a._v(" "),t("li",[a._v("Async waterfall异步瀑布钩子")]),a._v(" "),t("li",[a._v("Async Series Bail")]),a._v(" "),t("li",[a._v("Async Parallel\n"),t("a",{attrs:{href:"https://webpack.docschina.org/contribute/writing-a-plugin/",target:"_blank",rel:"noopener noreferrer"}},[a._v("编写一个插件"),t("OutboundLink")],1),a._v(" "),t("a",{attrs:{href:"https://segmentfault.com/a/1190000012840742",target:"_blank",rel:"noopener noreferrer"}},[a._v("Webpack原理-编写插件"),t("OutboundLink")],1)])]),a._v(" "),t("h2",{attrs:{id:"_3-dev-server怎么跑起来的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-dev-server怎么跑起来的"}},[a._v("#")]),a._v(" 3.dev-server怎么跑起来的？")]),a._v(" "),t("p",[t("a",{attrs:{href:"https://webpack.docschina.org/configuration/dev-server/",target:"_blank",rel:"noopener noreferrer"}},[a._v("devServer"),t("OutboundLink")],1)]),a._v(" "),t("h2",{attrs:{id:"_4-import-button-from-antd-打包时只打包-button-分模块加载-是如何实现的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-import-button-from-antd-打包时只打包-button-分模块加载-是如何实现的"}},[a._v("#")]),a._v(" 4.import { Button } from 'antd'，打包时只打包 button，分模块加载，是如何实现的")]),a._v(" "),t("p",[a._v("考察：按需加载")]),a._v(" "),t("p",[a._v("通过"),t("code",[a._v("babel-plugin-import")]),a._v(" 配置处理")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('{\n  "plugins": [\n    ["import", {\n      "libraryName": "antd",\n      "libraryDirectory": "es",\n      "style": "css"\n    }]\n  ]\n}\n\n')])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br")])]),t("p",[a._v("相当于：")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("import Button from 'antd/es/button';\nimport 'antd/es/button/style/css';\n\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("p",[a._v("自行查看：node_modules/antd")]),a._v(" "),t("p",[a._v("需要配置css-loader，而且不要配置exclude")]),a._v(" "),t("h2",{attrs:{id:"_5-使用-import-时-webpack-对-node-modules-里的依赖会做什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-使用-import-时-webpack-对-node-modules-里的依赖会做什么"}},[a._v("#")]),a._v(" 5.使用 import 时，webpack 对 node_modules 里的依赖会做什么")]),a._v(" "),t("p",[t("a",{attrs:{href:"https://segmentfault.com/a/1190000015980312",target:"_blank",rel:"noopener noreferrer"}},[a._v("什么是webpack"),t("OutboundLink")],1)]),a._v(" "),t("h2",{attrs:{id:"_6-webpack的生命周期和打包过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-webpack的生命周期和打包过程"}},[a._v("#")]),a._v(" 6.webpack的生命周期和打包过程")]),a._v(" "),t("p",[a._v("[webpack流程图](https://img.alicdn.com/tps/\nTB1GVGFNXXXXXaTapXXXXXXXXXX-4436-4244.jpg)\n"),t("a",{attrs:{href:"http://taobaofed.org/blog/2016/09/09/webpack-flow/",target:"_blank",rel:"noopener noreferrer"}},[a._v("细说webpackz之流程篇"),t("OutboundLink")],1)]),a._v(" "),t("h2",{attrs:{id:"_7-loader-和-plugin-有什么区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-loader-和-plugin-有什么区别"}},[a._v("#")]),a._v(" 7.loader 和 plugin 有什么区别")]),a._v(" "),t("ul",[t("li",[a._v("loader用于加载，作用在一个个文件上")]),a._v(" "),t("li",[a._v("plugin扩展了webpack，处理打包过程，比如打包优化、压缩")])]),a._v(" "),t("p",[t("a",{attrs:{href:"https://juejin.im/post/5980752ef265da3e2e56e82e",target:"_blank",rel:"noopener noreferrer"}},[a._v("webpack之loader和plugin简介"),t("OutboundLink")],1)]),a._v(" "),t("h2",{attrs:{id:"_8-配css需要哪些-loader"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-配css需要哪些-loader"}},[a._v("#")]),a._v(" 8.配CSS需要哪些 loader")]),a._v(" "),t("p",[a._v("css-loader\nstyle-loader\n"),t("a",{attrs:{href:"https://webpack.docschina.org/loaders/css-loader/",target:"_blank",rel:"noopener noreferrer"}},[a._v("css-loader"),t("OutboundLink")],1)]),a._v(" "),t("h2",{attrs:{id:"_9-如何配置把js、css、html单独打包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-如何配置把js、css、html单独打包"}},[a._v("#")]),a._v(" 9.如何配置把JS、CSS、HTML单独打包")]),a._v(" "),t("p",[a._v("extract-text-webpack-plugin\nMiniCssExtractPlugin")]),a._v(" "),t("h2",{attrs:{id:"_10-打包时-hash-是如何生成的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_10-打包时-hash-是如何生成的"}},[a._v("#")]),a._v(" 10.打包时 hash 是如何生成的")]),a._v(" "),t("p",[a._v("webpack-md5-hash\n[chunkhash]")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("    output:{\n        filename:'[name]-[chunkhash].js'\n    },\n\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br")])])])}),[],!1,null,null,null);e.default=r.exports}}]);