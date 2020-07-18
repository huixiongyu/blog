# 《精通Python怕红框架Scrapy》

1. Scrapy简介
2. 理解HTML和XPath
3. 爬虫基础
4. 从Scrapy到移动应用
5. 迅速的爬虫技巧
6. 部署到Scrapinghub
7. 配置与管理
8. Scrapy编程
9. 管道秘诀
10. 理解Scrapy性能
11. 使用Scrapyd与实时分析进行分布式爬取



## 1.Scrapy简介

Scrapy还提供了一种在lxml之上更高级的XPath接口——selectors,它能够更高效地处理残缺的HTML代码和混乱的编码。

请使用流量限速将你产生的流量减少到可以接受的普通用户的水平。此外，还应该监控响应时间，如果发现响应时间增加了，就需要降低爬虫的强度。好消息是Scrapy对于这些功能都提供了开箱即用的实现。

## 2.理解HTML和XPath

DNS-->IP-->网页

Ctrl+U显示网页源码

XPath选择并抽取元素、属性和文本。

* 用单斜杠区分层次
* p[1]是获取第一个p标签
* 双斜杠选择所有的相同标签
* 使用符号@来访问属性
* text()函数只选取文本
* 使用\*符号来选择指定层级的所有元素
* a[@href]获取包含href属性的链接，如果=有值那么获取特定值的
* 还有特定的函数

[XPath教程]( https://www.w3school.com.cn/xpath/index.asp ) 

这个语法学好会比bs4方便

```
response.xpath('/html').extract()
response.xpath('//a').extract()

# 获取id为“toc”的div标签内的无序列表(ul)中所有链接URL。
//div[@id=“toc”]/ul//a/@href


# 获取class属性包含“ltr”以及class属性包含“skin-vector”的任意元素内所有标题元素(h1)中的文本。这两个字符串可能在同一个class中，也可能在不同的class中。
//-*[contains(@class,“ltr”)and contains(@class,“skin-vector”)]//h1//text()

# 选择class属性值为“infobox”的表格中第一张图片的URL。
//table[@class=“infobox”]//img[1]/@src

# 选择class属性以“reflist”开头的div标签中所有链接的URL。
//div[starts-with(@class,“reflist”)]//a/@href

# 选择子元素包含文本“References”的元素之后的div元素中所有链接的URL。
//-*[text()=“References”]/../following-sibling::div//a

# 获取页面中每张图片的URL
/img/@src
```

实践推荐：

1. 避免使用数组索引（数值）
2. 类并不靠谱，尽可能找有意义得类名
3. ID通常是最可靠的

## 3.爬虫基础

安装[Scrapy]( https://scrapy.org/ )。。。

本书项目[代码](https://github.com/scalingexcellence/scrapybook.git) 

scrapy shell下按Ctrl + D退出

```
scrapy shell --pdb https://gumtree.com
# 获取页面的前50个字符
response.body[:50] 
```

[Scrapy Selectors]( http://doc.scrapy.org/en/latest/topics/selectors.html ) 

xpath()和css()返回的Selector对象可以被串联使用，为了获取真实的值可以用extract()和re()。



创建项目

```
scrapy startproject [name]
```

三个文件： items.py、pipelines.py、settings.py

items.py:

```
from scrapy.item import Item, Field


class PropertiesItem(Item):
    # Primary fields
    title = Field()
    price = Field()
    description = Field()
    address = Field()
    image_urls = Field()

    # Calculated fields
    images = Field()
    location = Field()

    # Housekeeping fields
    url = Field()
    project = Field()
    spider = Field()
    server = Field()
    date = Field()
```

创建爬虫：`scrapy genspider basic web `

运行爬虫： `scrapy crawl basic`

Scrapy是围绕着Item的概念构建的。

ItemLoader提供了许多有趣的结合数据及对数据进行格式化和清洗的方式。

















