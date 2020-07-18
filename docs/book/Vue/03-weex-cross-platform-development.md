#  《WEEX跨平台开发实战》

## 第1章

* 涉及DOM元素的操作不被WEEX支持
* 由于WEEX并未提供浏览器中的window对象和screen对象，并且不支持使用全局变量，因此想要获取设备的屏幕或环境信息，可以使用WXEnvironment变量。
* 同时，WEEX也没有提供面向浏览器的history、location和navigator等对象，如果要管理和操作视图之间的跳转，需要借助WEEX提供的navigator 模块来实现。