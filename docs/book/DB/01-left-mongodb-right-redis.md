# 《左手MongoDB，右手Redis》

[配套视频资源](https://www.yuque.com/kingname/wtago8/xwg3gb)

[代码下载](https://github.com/kingname/SourceCodeofMongoRedis)

阅读时间：2020年3月12日完成，耗时5h20min

## 一、MongoDB基础与入门

[MongoDB下载&安装](https://www.mongodb.com/download-center/community):  [Mac教程](https://www.imooc.com/article/22733)&[windows教程](https://www.imooc.com/article/18438)

Linux下使用
```
sudo apt update
sudo apt install -y mongodb
// 确认是否在运行
systemctl status mongodb
// 启动
sudo systemctl start mongod
sudo systemctl enable mongod
````

[Robo 3T下载](https://robomongo.org/download)

Create Database

Create Collections...

### **插入操作** 

Ctrl + R运行

```
db.getCollection('classes').insertOne({"name": " 张小二 ", "age": 17,"address":"浙江"})
```

在设计数据库时，应尽量保证同一个字段使用同一种类型的数据，并提前考虑好应该有哪些字段。

### **批量插入**

```
db.getCollection('classes').insertMany({
	{'name': '朱小三', 'age': 20, 'address': '北京'},
	{'name': '刘小四', 'age': 21, 'address': '上海'},
	{'name': '马小伍', 'age': 22, 'address': '广州'}
})
```

无论是插入一条数据还是插入多条数据，每一条数据被插入 MongoDB 后都会被自动添加一个字段“_id”。“_id”读作“Object Id”，它是由时间、机器码、进程pid和自增计数器构成的。

_id前8位转化为十进制为时间戳。

### **查询数据**

```
// 1.查询所有
db.getCollection('example_data_1').find({})

// 2.查询特定的，键值对可以是多个
db.getCollection('example_data_1').find({'age': 25})

// 3.查询数值范围, 被限定的条件编程了一个字典
db.getCollection('example_data_1').find({'age': {'$gte': 25}})

// 4.设定返回字段，0的字段不返回，1则返回 ，_id默认是返回，除非指定为0
db.getCollection('example_data_1').find({}, {'address': 0, 'age': 0})

// 5.修饰返回结果
// (1)统计数量
db.getCollection('example_data_1').find({'age': {'$gt': 21}}).count()

// (2)限定返回条数
db.getCollection('example_data_1').find().limit(4)

// (3)对结果排序，比如倒序
db.getCollection('example_data_1').find({'age': {'$gt': 21}}).sort({'age': -1})
```

### **修改数据**

*  updateOne：只更新第1条满足要求的数据。

* updateMany：更新所有满足要求的数据。

```
db.getCollection('example_data_1').updateMany(
	{'name': '王小六'},
	{'$set': {'address': '苏州', 'work': '工程师'}}
)
```

### **删除数据**

为了防止误删数据，一般的做法是先查询要删除的数据，然后再将查出的数据删除，工程上会使用字段标记，默认情况deleted为0， 更新为1表示删除。

```
// 返回acknowledged为true表示删除成功，deletedCount表示删除的条数
db.getCollection('example_data_1').deleteMany({'hello': 'world'})
```

### 数据去重

参数1：字段名，参数2：查询条件

```
db.getCollection('example_data_1').distinct(
	'age',
	{'age': {'$gte': 24}}
)
```

---

### Python中使用MongoDB

安装：

```
python3 -m pip install pymongo
```

使用

```
from pymongo import MongoClient
client = MongoClient('mongodb://用户名：密码@服务器IP:端口')
database = client.数据库名
# 或者 database = client[db_name]
collection = database.集合名
# 或者 collection = database[collection_name]
```

在Python中使用，找到需要用的collection，驼峰方法都转换为下划线

```
# pymongo中， insert()相当于insert_one(),还可以传入字典包含的多个集合，相当于insert_many()
collection.insert_one({'name': ’王小六’, 'age': 25, 'work': ’厨师’})

# 更新,存在则更新，不存在则插入
collection.update_many(
	{'name': '公孙小八'},
	{'$set', {'address': '美国', 'age': 80}},
	upsert=True)
	
# 删除
collection.delete_many({'age': 0})
```

绝大部分MongoDB命令复制到Python中可以使用

例外的是

* 含有null的数据，需要用None替代
* true/false改写成True/False
* sort（），Python中接收，第一个字段名，第二个 -1/1
* ObjectId用bson导入

```
from bson import ObjectId
collection.find({'_id': ObjectId('5b2f75d26b78a61364d09f45')})
```



**学习数据库绝对不能仅仅学习数据库本身的命令，一定要配合一门编程语言，这样才能掌握如何应用数据库。**

---

**参考：**

[MongoDB CRUD Operations](https://docs.mongodb.com/manual/crud/)

Python中使用[pymongo](https://api.mongodb.com/python/current/tutorial.html)

项目代码：

## 二、MongoDB高级应用

### 	AND和OR操作

```
// 隐式AND操作
db.getCollection('example_data_1').find({'age': {'$gt': 20}, 'sex': '男'})

// 显式AND操作
// collection.find({'$and': [字典1, 字典2, 字典3, ..., 字典n]})
db.getCollection('example_data_1').find({
	'$and': [{'age': {'$gt': 20}, {'sex': '男'}}]
})

// 显式和隐式混合
db.getCollection('example_data_1').find({
	'id': {'$lt': 10},
	'$and': [{'age': {'$gt': 20}}, {'sex': '男'}]
})

// OR操作
// 1.显式OR操作
// collection.find({'$or': [字典1, 字典2, 字典3, ..., 字典n]})
db.getCollection('example_data_1').find({
	'$or': [{'age': {'$gt': 28}}, {'salary': {'$gt': 9900}}]
})
```

OR操作会自动按顺序去检查每一个条件，直到某一个查询条件找到至少一条数据为止。MongoDB在执行OR操作时会遵循一个“短路原则”：只要前面的条件满足了，那后面的条件就直接跳过。

**OR操作一定是显式的，不存在隐式的OR操作。**

### 嵌入式文档的应用

```
// 1.使用点号定位嵌套字段
db.getCollection('example_data_2').find({'user.followed': {'$gt': 10}})

// 2.返回嵌套字段中的特定内容
db.getCollection('example_data_2').find(
	{'user.followed': {'$gt': 10}},
	{'_id': 0, 'user.name': 1, 'user.user_id': 1}	
)
```

### 查询数组

三种情况：

1. 数组包含或者不包含某些数据。
2. 数组长度。
3. 数组中特定位置的数满足某些条件。

```
// 查询数组包含数据
db.getCollection('example_data_3').find({'size': 'M'})

// 查询数组不含数据
db.getCollection('example_data_3').find({'size': {'$ne': 'M'}})

// 数组中至少有一个元素在另一个范围空间内
db.getCollection('example_data_3').find({'price': {'$lt': 300, '$gte': 200}})

// 根据数组长度查询
db.getCollection('example_data_3').find({'price': {'$size': 2}})

// 根据索引查询数组
db.getCollection('example_data_3').find({'size.0': 'S'})

// 根据数组索引比较数据的大小
db.getCollection('example_data_3').find({'price.0': {'$gt': 500}})
```

### 聚合查询

基本格式为： ` collection.aggregate([阶段1, 阶段2, 阶段3, ..., 阶段N])`

聚合操作可以有0个、1个或者多个阶段。

```
// 这个聚合效果和find()效果完全相同，单好处是组合
db.getCollection('example_data_1').aggregate([{
	'$match': {
		'$or': [{'age': {'$gt': 28}}, {'sex': '男'}]
	}
}])

// 添加新字段
// 1.添加固定文本
db.getCollection('example_data_1').aggregate([
	{'$match': {'age': {'$gt': 28}}},
	{'$project': {'_id': 0, 'sex': 1, 'age': 1, 'hello': 'world'}}
])

// 2.复制现有字段
db.getCollection('example_data_1').aggregate([
	{'$match': {'age': {'$gt': 28}}},
	{'$project': {'_id': 0, 'sex': 1, 'age': 1, 'hello': '$age'}}
])

// 3. 修改现有字段的数据
db.getCollection('example_data_1').aggregate([
	{'$match': {'age': {'$gt': 28}}},
	{'$project': {'_id': 0, 'sex': 1, 'age': 'this is page'}}
])

// 抽取嵌套字段
db.getCollection('example_data_2').aggregate([
	{'$project': {'name': '$user.name', 'user_id': '$user.user_id'}}
])

// 处理特殊字段，下面'$literal'指定了要修改的值为$开头的，和值为1
db.getCollection('example_data_2').aggregate([
	{'$project': {'_id': 0, 'id': 1, 'hello': {'$literal': '$normalstring'}, 'abcd': 
		{'$literal': 1}}}
])

// 分组操作
// 1.去重，如果使用distinct函数返回的是数组
db.getCollection('example_data_4').aggregate([{'$group': {'_id': '$name'}}])

// 2．分组并计算统计值,计算最大值、最小值、得分之和和平均分,{$关键字： $已有的字段}
// 这里引入了四个关键字：“$max”“$min”“$sum”和“$avg”
db.getCollection('example_data_4').aggregate([
	{'$group': 
		{'_id': '$name',
		'max_score': {'$max': '$score'},
		'min_score': {'$min': '$score'},
		'sum_score': {'$sum': '$score'},
		'average_score': {'$avg': '$score'}
		}
        }
])

// 3．去重并选择最新或最老的数据
// 根据不同的统计方法，操作方式可能不止一种
db.getCollection('example_data_4').aggregate({
	{'$group': {'_id': '$name',
		'date': {'$last': '$date'},
		'score': {'$last': '$score'}
		}
	}
})

// 拆分数组
db.getCollection('example_data_3').aggregate({
	{'$unwind': '$size'},
	{'$unwind': '$price'}
})
```

### 联集合查询

关键字：**$lookup**

语法：

```
主集合.aggregate({
	{'$lookup': {
		'from': '被查集合名',
		'localField': '主集合的字段',
		'foreignField': '被查集合的字段',
		'as': '保存查询结果的字段名'
		}
	}
})
```

“主集合”与“被查集合”需要搞清楚。如果顺序搞反了，则结果会不同。

实例：

```
// 在微博集合中查询用户信息,主集合就是微博集合，被查集合就是用户集合
db.getCollection('example_post').aggregate({
	{'$lookup': {
		'from': 'example_user',
		'localField': 'user_id',
		'foreignField': 'id',
		'as': 'user_info'
		}
	}
})

// 美化输出结果，user_info是数组，拆分一下
// 1.将用户数组展开
db.getCollection('example_post').aggregate({
	{'$lookup': {
		'from': 'example_user',
		'localField': 'user_id',
		'foreignField': 'id',
		'as': 'user_info'
		}
	},
	{'$unwind': '$user_info'}
})

// 2.提取出“name”字段和“work”字段
db.getCollection('example_post').aggregate({
	{'$lookup': {
		'from': 'example_user',
		'localField': 'user_id',
		'foreignField': 'id',
		'as': 'user_info'
		}},
	{'$unwind': '$user_info'},
	{'$project': {
		'content': 1,
		'post_time': 1,
		'name': '$user_info.name',
		'work': '$user_info.work'
	}}
})
```

MongoDB聚合功能的核心思想是：充分里面各个阶段的搭配与协作来提前处理数据，从而充分利用MongoDB的性能来提高查询效率。但是在Python有更加强大、直观易用、易调试、易维护的数据分析库Pandas的情况下，是否还需更加深入的去学习MongoDB的聚合功能，需要读者自行权衡。

### 提高读写性能

批量比逐条插入好，考虑到远程的带宽，可以借助Redis批量插入到MongoDB。

对于必需逐条更新大量数据的情况，也可以使用插入代替更新来提高性能。

使用“索引”提高查询速度：如果不使用索引，则每一次查询数据 MongoDB 都会遍历整个集合；而如果使用了索引，则MongoDB会直接根据索引快速找到需要的内容。

使用Redis，以降低MongoDB的查询频率，从而提高新闻爬虫的爬取效率。Redis还可以帮助去重。

增添适当冗余信息，以提高查询速度。根据已有字段推算出来的，但是对查询性能很有帮助。

### 提高安全性

配置权限管理机制：角色、特权和用户

1. 创建管理员用户
2. 创建普通用户
3. 创建能操作数据库的管理员用户，这个要慎重

```
// 管理员
use admin
db.createUser({
	user: 'admin',
	pwd: 'kingnameisgenius',
	roles: [{role: 'userAdminAnyDatabase', db: 'admin'}]
})
exit
// 以后使用必须先登录
mongo -u 'admin' -p 'kingnameisgenius' --authenticationDatabase 'admin'

// 普通用户
use chapter
db.createUser({
	user: 'kingname',
	pwd: 'kingnameisgenius',
	roles: [{role: 'readWrite', db: 'chapter'},
		{role: 'read', db: 'capter4'}]
})

// 能操作数据库的
user admin
db.createUser({
	user: 'root',
	pwd: 'iamsuperuser',
	roles: ['root']
})
```

MongoDB连接：

```
一般情况：
mongodb://用户名：密码@数据库地址：端口/数据库名

// 本地没有权限限制的
mongodb://localhost

// 本地有账户密码的
mongodb://kingname:genius@localhost

// 远程有账号密码的
mongodb://kingname:genius@10.11.212.37

// 远程没有限制但有端口的
mongodb://10.11.200.100:8001

// 远程，有端口，要密码，有特定数据库
mongodb://kingname:genius@10.11.111.21:8001/chapter_8
```

**开放外网限制**

修改mongodb.conf

`bindIp:127.0.0.1` 改成：`bindIp:0.0.0.0`

最好同时配置防火墙，设定来源的IP访问MongoDB的端口。

##  三、Redis快速入门

[Redis下载](https://redis.io/) 

[Redis练习网站](http://try.redis.io/)

```
apt-get update
apt-get install redis-server
redis-cli
// 返回PONG表示成功
ping
```

### 创建字符串

```
set key value
```

### 查询字符串

```
// keys不建议使用中文
keys *
```

### 读取字符串

```
// 不存在的key返回(nil)
get a_word
```

### 修改Key里面的值

```
set key 新的值
// 如果不直接覆盖（有不覆盖，无插入）
set key value NX

// 在末尾添加
append key value

// 有引号需要使用双括号
set key "word1 word2 word3"

// 加减
// 加
incr key

// 减
decr key

// 增加n
incrby key n

// 减少n
decrby key n
```

### Python中使用Reids

安装

```
python3 -m pip install redis
```

使用

```
import redis
client = redis.Redis()

// 创建
client.set('key', 'value')

// 使用
client.get('key')

// 非覆盖插入
 client.set('key', 'value', nx=True)
 
 // 添加在最后
 client.append('key', 'value')
 
 // 增加、减少,第二个参数默认1
 client.incr('number_inc')
 client.decr('number_dec', 10)
```

字符串只应用在小量级的数据记录中。如果数据量超过百万级别，那么使用字符串来保存简单的映射关系将会浪费大量内存。此时需要使用Redis的另一种数据结构——Hash。

绝对不应该在不清楚当前有多少Key的情况下冒然列出当前所有的Key**

### 列表的创建、查询和修改

列表是Redis的一种基本数据结构，分左右

越左边的数据，编号越小。

```
// 列表的插入
lpush key value1 value2 value3
rpush key value1 value2 value3

// 查看列表长度
llen key

// 根据索引查看数据，格式是lrange key 开始索引 结束索引（包括）
lrange example_list 2 5

//查看所有数据
lrange key 0 -11

// 弹出数据
lpop key
rpop key

// 修改数据
lset key index 新的值
```

由于一个列表可以储存几百万条数据，所以，**绝对不要冒然列出一个列表里面的所有数据，否则可能导致大量数据输出而瞬间耗尽系统的I/O资源。**

应该是：先查看列表的长度，如确定数据量很小，则列出所有的值；如果数据量很大，则可以使用索引查看头几条数据与末尾几条数据。

Python中列表插入，建议是先把数据放在列表中，然后使用*号，元组的方式导入

```
# 查看列表长度
client.llen(key)

# 获取列表中一定索引范围的数据
client.lrange(key， 开始索引，结束索引)

# 从左右侧弹出数据
client.lpop(key)
client.rop(key)

# 修改数据
client.lset(key, index, value)
```

应用场景：多台服务器向用户发送短信

### 集合的操作

集合的数据是不重复的

```
// 1.插入数据
sadd key value1 value2 value3

// 2.查询集合中元素的个数
scard key

// 3.集合中获取数据,如果不填count，则获取1条数据
spop key count

// 4.获取集合中的所有数据
smembers key

// 5.检查是否在集合中
sismember key value

// 6.删除特定数据
srem key value1 value2 value3

// 7.求集合交集
sinter key1 key2 key3

// 8.集合并集
sunion key1 key2 key3

// 9.结合差集
sdiff key1 key2 key3
```

smembers命令不会删除数据。但是如果集合里的数据量极大，就应该慎重使用“获取所有数据”，因为这样会导致系统的I/O资源瞬间被耗尽。

在Python中，“spop”关键字没有“count”参数，因此一次只能获取一条数据，不能一次性获取多条数据。如果要一次获取多条数据，则可以使用循环来实现



应用场景：实时统计选课集合的数据

实战内容：

* 列表裁剪
* 利用key添加过期时间
* 检查Key剩余过期时间

## 四、Redis高级应用

### 哈希表

哈希表（Hash Table）是一种数据结构，它实现了“键-值”（Key-Value）的映射。根据Key就能快速找到 Value。

Redis的一个哈希表里面可以储存约43亿个键值对。

一个哈希表的Key里面可以设置成百上千个键值对。

[百万个键值对迁移到哈希表的分享](https://instagram-engineering.com/storing-hundreds-of-millions-of-simple-key-value-pairs-in-redis-1091ae80f74c)

使用：

* hset一次只能添加一个键值对
* hmset一次可以添加多个键值对

```
client.hset('Key', ’字段名’, ’值’)
client.hmset('Key', {’字段名1': ’值1', ’字段名2': ’值2', ’字段名n': ’值n'})
```

读取：

hkeys用于获取所有字段的字段名，返回的数据是包含bytes型数据的列表

```
field_names = client.hkeys(’哈希表名’)
```

获取，没有的返回None

* hget：获取一个字段的值
* hmget：一次性获取多个字段的值
* hgetall：获取一个哈希表中的所有字段名和值

```
client.hget(’哈希表名’, ’字段名’)
client.hmget(’哈希表名’, [’字段名1', ’字段名2', ’字段名n'])
client.hgetall(’哈希表名’)
```

判断是否存在：`client.hexists(’哈希表名’, ’字段名’)`

查看一个哈希表中有多少个字段: `client.hlen(’哈希表名’)`

### 发布消息/订阅消息

Redis的“发布/订阅”模式是一种消息通信模式，实现了一对多的消息实时发布功能。

```
// 发布消息
client.publish(’频道名’, ’消息’)

// 订阅频道
listener = client.pubsub()
listener.subscribe(’频道名1', ’频道名2', ’频道名n')
```

### 有序集合

有序集合里面的数据跟集合一样，也是不能重复的，但是每一个元素又关联了一个分数（Score），根据这个分数可以对元素进行排序。分数可以重复。

场景应用：排行榜

```
rank = client.zrevrank('rank', 0, 10000, withscores=True)
```

1. 向有序集合添加数据
2. 修改评分
3. 对有序集合元素基于评分范围进行排序
   1.  zrangebyscore根据评分按照从小到大的顺序排序
   2. zrevrangebyscore根据评分按照从大到小的顺序排序
4. 对有序集合基于位置进行排序
   1. zrange对评分按照从小到大的顺序排序
   2. zrevrange对评分按照从大到小的顺序排序
5. 根据值查询排名，根据值查询评分
   1. zrank,如果值存在，则返回值的排名。排名是从0开始的，评分越小则排名越靠近0，评分最小的值的排名为0
   2. zrevrank,如果值存在，则返回值的排名。排名是从0开始的，评分越大排名越靠近0，评分最大的值的排名为0
6. 其他常用方法
   1. zcard： 查询有序集合里面一共有多少个值
   2. zcount：查询在某个评分范围内的值有多少

```
// 1.两种方法，这两种方式的效果是一样的，但是第1种的值可以使用变量，而第2种的值不能使用变量
client.zadd(’有序集合名’， 值1， 评分1， 值2， 评分2， 值n， 评分n)
client.zadd(’有序集合’， 值1=评分1， 值2=评分2， 值3=评分3)

// 2
client.zincrby(’有序集合名’， 值，改变量)

// 3
client.zrangebyscore(’有序集合名’， 评分上限， 评分下限， 结果切片起始位置， 结果数量， withscores=False)
client.zrevrangebyscore(’有序集合名’， 评分上限， 评分下限， 结果切片起始位置， 结果数量， withscores=False)

// 4
client.zrange(’有序集合名’， 开始位置（含）， 结束位置（含）, desc=False,withscores=False)
client.zrevrange(’有序集合名’， 开始位置（含）， 结束位置（含）, withscores=False)

// 5
client.zrank(’有序列表名’, ’值’)
client.zrevrank(’有序列表名’, ’值’)
```

### 安全管理

配置文件把“requirepass”这一行注释

“foobared”就是默认密码，可以改成自己的密码

然后重启，连接的时候加上-a参数

```
import redis
client = redis.Redis(password='密码')
```

**开放外网访问**

配置中把bind这一行去掉

```
redis-cli –h Redis地址 –p 端口 –a 密码
```

Python中：

```
import redisclient = redis.Redis(host='192.163.2.10', port=3129, password='kingnameisgenius')
```

**禁用危险命令**

```
rename-command ...
```

## 五、商业实战

功能描述

1. 类似知乎
2. 问题点赞
3. 权限管理：登录注册、文章管理
4. 标签功能

 使用“$inc”操作符实现字段自增自减

```
handler.update_one({'_id'： 问题或答案的ObjectId}, {'$inc': {'vote_up': 1}})
```

哈希表来存储session

### 布隆过滤器

**布隆过滤器是一种基于概率进行验重的数据结构。它的基本原理是：小概率事件不容易同时发生。**

布隆过滤器使用多个哈希函数把同一个字符串转换成多个不同的哈希值，并记录这些哈希值的特征。下次再面对一个字符串时，布隆过滤器再次使用这些哈希函数把这个字符串转换为多个哈希值。如果这些哈希值全部符合原先的那个字符串对应的各个哈希值的特征，则认为这两个字符串是相同的。

哈希算法不是一种加密算法，而是一种不可逆的摘要算法。

Redis内部限制一个字符串最多存储2的32次方个字符

**布隆过滤器只能添加数据，不能删除数据。**

应用场景：使用“布隆过滤器”对注册用户进行验重

避免注册重复，使用Redis实现一个简单的分布式锁。

### 查询限制

PyMongo默认会一次性取101行数据，突破限制：

* batch_size
* no_cursor_timeout

```
import pymongo
import time 
handler = pymongo.MongoClient().chapter_13.test_data

for data in handler.find().batch_size(85):
	print(f'这一行数据为：{data}')
	time.sleep(7)
	

cursor = handler.find(no_cursor_timeout=True)
for data in cursor:
	print(f'这一行数据为：{data}')
	time.sleep()
cursor.close()
```

### 硬盘空间释放

简单通用的方法

1. 把新的数据写入新的集合中
2. 老数据里需要留下的部分也重新插入新的集合
3. 删除老集合
4. 重建索引

### “多Redis实例”与“单Redis实例多数据库”的差异

运行多个实例：

由于Redis服务的启动命令为：redis-server 配置文件路径所以，只要有多个配置文件，每个配置文件里面保证端口号、日志路径、pid文件路径、数据文件路径不同，就可以通过多次运行此命令来启动多个Redis实例。

单Redis多数据库

一个Redis实例，实际上自带了16个命名空间互相隔离的数据库。

```
import redis
client = redis.Redis(db=2) # 进入编号为“2”的数据库，省略“db”参数表示使用“0”号数据库
```

由于Redis是单线程的数据库，所以，一个实例里的多个数据库的Key可以同名，且互不冲突。但是，一旦其中一个数据库卡住（例如对几百万个Key执行“keys *”命令），那么其他数据库也不能正常使用。一旦对某一个数据库进行了一个比较耗时的操作，那么对其他数据库的操作都会受到影响。一个Redis实例的所有数据库都只能共享CPU的一个核。而如果通过多个配置文件启动多个 Redis 实例，则不会存在这种问题，即使一个实例卡死了，其他的实例仍能正常工作。

###  尽可能为每个Key设置过期时间

```
import redis
client = redis.Redis()
client.hset('test', 'field', 123)
client.expire(test, 100) # 第2个参数表示过期时间，单位为秒
```

