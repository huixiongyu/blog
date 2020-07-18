# 《Python网络爬虫从入门到实践（第2版）》——唐松

![image](http://oss.hackslog.cn/blog/Snipaste_2019-11-09_11-48-47.png)

## 1. 入门

爬虫：实现实时自动化获取数据

在爬取网站的时候需要限制自己的爬虫，遵守Robots协议和约束网络爬虫程序的速度；在使用数据的时候必须遵守网站的知识产权。

Python爬虫流程：

1. 获取网页：request、urllib和selenium
2. 解析网页: re正则表达式、BeautifulSoup和lxml
3. 存储数据: 存入txt、csv，存入MySQL和MongoDB

## 2.编写第一个网络爬虫

安装[Anaconda](<https://www.anaconda.com/>) 

使用pip安装BeautifulSoup: `pip install bs4`

使用jupyter, cmd输入 `jupyter notebook`

安装Pycharm

基础知识：

* print和严格缩进
* 数据类型
  * 字符串
  * 数字
  * 列表
  * 字典
* 条件语句和循环语句
* 函数
* 面向对象编程
* 错误处理

**如何选择函数式编程和面向对象编程呢？可以这样进行选择，如果各个函数之间独立且无共用的数据，就选用函数式编程；如果各个函数之间有一定的关联性，那么选用面向对象编程比较好。**

```
import requests
from bs4 import BeautifulSoup
link = "http://www.santostang.com/"
headers = {'User-Agent': 'Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US; rv;1.9.1.6) Gecko/20091201 Firefox/3.5.6'}

r = requests.get(link, headers= headers)
soup = BeautifulSoup(r.text, "html.parser")
title = soup.find("h1", class_="post-title").a.text.strip()
print(title)
with open('title_test.txt', "a+") as f:
    f.write(title)
```

基础巩固，建议练习：[Python 100例](<https://www.runoob.com/python/python-100-examples.html>) 

