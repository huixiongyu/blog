# 《数据结构与算法JavaScript描述》

JavaScript数组和字符串等内置了很多API，可惜没有强大的内置库（类似C++的STL），大部分算法实现需要自己手写。基于这种缺陷，对JavaScript深入地数据结构编程应该是个稀缺能力，不妨从这本书启发然后加深学习。



## 第1章-编程环境和模型

声明的变量都是局部变量。



JavaScript中，函数的参数传递方式都是按值传递，没有按引用传递的参数。但是JavaScript中有保存引用的对象，比如数组，它们是按引用传递的。



在主程序中，如果在函数外定义一个变量，那么该变量拥有全局作用域，这是指可以在包括函数体内的程序的任何部分访问该变量。



当一个函数被递归调用，在递归没有完成时，函数的计算结果暂时被挂起。

## 第2章-数组

**对数组的操作：**

* indexOf()
* lastIndexOf()
* join()
* toString()
* concat()
* splice()
* forEach()
* every()
* some()
* reduce()
* map()
* filter()

这些数字索引在内部被转换为字符串类型，这是因为JavaScript对象中的属性名必须是字符串。数组在JavaScript中知识一种特殊技的对象，所以效率上不如其他语言中的数组高。



### 创建数组

1. 通过[] 声明。  var numbers = [];
2. 在[] 中放入一组元素。 var numbers = [1, 2, 3, 4, 5];
3. 构造函数中传入一组元素。var numbers = new Array(1, 2, 3, 4, 5);
4. 构造函数中传入一个参数，用来表示数组的长度。var numbers = new Array(10);

推荐使用 []



JavaScript中数组也是对象，数组的长度可以任意增长，超出其创建时指定的长度。length属性反映的是当前数组中元素的个数，使用它，可以确保循环遍历了数组中的所有元素。



调用字符串对象的split()方法也可以生成数组。

```
var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(' ');
```



当把一个数组赋给另外一个数组时，只是为被赋值的数组增加了一个新的引用。

这种行为被称为浅复制，新数组依然指向原来的数组。

### 存取函数

indexOf()函数是最常用的存取函数之一，用来查找传进来的参数在目标数组中是否存在。

如果数组中包含多个相同的元素，indexOf()函数总是返回第一个与参数相同的元素的索引。有另外一个功能与之类似的函数：lastIndexOf()



有两个方法可以将数组转化为字符串：join()和toString()。这两个方法都返回一个包含数组所有元素的字符串，各元素之间用逗号分隔开。



concat()和splice()方法允许通过已有数组创建新数组。concat方法可以合并多个数组创建一个新数组，splice()方法截取一个数组的子集创建一个新数组。

concat()该方法的发起者是一个数组，参数是另一个数组。作为参数的数组，其中的所有元素都被连接到调用concat()方法的数组后面。



splice()方法从现有数组里截取一个新数组。该方法的第一个参数是截取的起始索引，第二个参数是截取的长度。

splice()方法还有其他用法，比如为一个数组添加或移除元素。



push()方法会将一个元素添加到数组末尾。

unshift()方法可以将元素添加在数组的开头。

unshift()方法展示了可以通过一次调用，为数组添加多个元素。

### 删除元素

使用pop()方法可以删除数组末尾的元素。

shift()方法可以删除数组的第一个元素。

pop()和shift()方法都将删掉的元素作为方法的返回值返回。

使用splice()方法为数组添加元素，需提供如下参数：

1. 起始索引（也就是你希望开始添加元素的地方）；
2. 需要删除的元素个数（添加元素时该参数设为0）；
3. 想要添加进数组的元素。

要插入数组的元素不必组织成一个数组，它可以是任意的元素序列。



### 数组排序

sort()方法是按照字典顺序对元素进行排序的，因此它假定元素都是字符串类型。即使元素是数字类型，也被认为是字符串类型。为了让sort()方法也能排序数字类型的元素，可以在调用方法时传入一个大小比较函数，排序时，sort()方法将会根据该函数比较数组中两个元素的大小，从而决定整个数组的顺序。

### 迭代器方法

forEach()方法接受一个函数作为参数，对数组中的每个元素使用该函数。

every()方法接受一个返回值为布尔类型的函数，对数组中的每个元素使用该函数。如果对于所有的元素，该函数均返回true，则该方法返回true。

some()方法也接受一个返回值为布尔类型的函数，只要有一个元素使得该函数返回true，该方法就返回true。

reduce()方法接受一个函数，返回一个值。该方法会从一个累加值开始，不断对累加值和数组中的后续元素调用该函数，知道数组中的最后一个元素，最后返回得到的累加值。

JavaScript还提供了reduceRight()方法和reduce()方法不同，它是从右到左执行。

### 生成新数组的迭代器方法

有两个迭代器方法可以产生新数组：map()和filter。map()和forEach()有点儿像，对数组中的每个元素使用某个函数。两者的区别是map()返回一个新的数组，该数组的元素是对原有元素应用某个函数得到的结果。

filter()和every()类似，传入一个返回值为布尔类型的函数。和every()方法不同的是，当对数组中的所有元素应用该函数，结果均为true时，该方法并不返回true,而是返回一个新数组，该数组包含应用该函数后结果为true的元素。

### 二维和多维数组

在JavaScript中创建二维数组

## 第3章-列表

  列表的抽象数据类型定义：

* listSize属性：列表的元素个数
* pos属性：列表的当前位置
* length属性：返回列表中元素的个数
* clear方法：清空列表中的所有元素
* toString方法：返回列表的字符串形式
* getElement方法：返回当前位置的元素
* insert方法：在现有元素后插入新元素
* append方法：在列表的末尾添加新元素
* remove方法：从列表中删除元素
* front方法：将列表的当前位置移动到第一个元素
* end方法：将列表的当前位置移动到最后一个元素
* prev方法：将当前位置后移一位
* next方法：将当前位置前移一位
* hasNext方法：判断后一位
* hasPrev方法：判断前一位
* currPos方法：返回列表的当前位置
* moveTo方法：将当前位置移动到指定位置

``` {
function List() {
	this.listSize = 0;
	this.pos = 0;
	this.dataStore = [];
	this.clear = clear();
	this.find = find();
	this.toString = toString();
	this.insert = insert;
	this.append = append;
	this.remove = remove;
	this.front = front;
	this.end = end;
	this.prev = prev;
	this.next = next;
	this.hasNext;
	this.hasPrev;
	this.length = length;
	this.currPos = currPos;
	this.moveTo = moveTo;
	this.getElement = getElement;
	this.contains = contains;
}

function find(element) {
	for(var i = 0;i < this.dataStore.length; ++i) {
		if (this.dataStore[i] == element) {
			return i;
		}
	}
	return -1;
}

function remove(element) {
	var foundAt = this.find(element);
	if (foundAt > -1) {
		this.dataStore.splice(fountAt, 1);
		--this.listSize;
		return true;
	}
	return false;
}

function length() {
	return this.listSize;
}

function toString() {
	return this.dataStore;
}

function insert(element, after) {
	var insertPos = this.find(after);
	if (insertPos > -1) {
		this.dataStore.splice(insertPos + 1, 0, element);
		++this.listSize;
		return true;
	}
	return false;
}

function clear() {
	delete this.dataStore;
	this.dataStore.length = 0;
	this.listSize = this.pos = 0;
}

function contains(element) {
	for (var i = 0;i < this.dataStore.length; ++i) {
		if (this.dataStore[i] == element) {
			return true;
		}
	}
	return false;
}

function front() {
	this.pos = 0;
}

function end() {
	this.pos = this.listSize - 1;
}

function prev() {
	--this.pos;
}

function next() {
	if (this.pos < this.listSize) {
		++this.pos;
	}
}

function currPos() {
	return this.pos;
}

function moveTo(position) {
	this.pos = position;
}

function getElement() {
	return this.dataStore[this.pos];
}

function hasNext() {
	return this.pos < this.listSize;
}

function hasPrev() {
	return this.pos >= 0;
}
```

## 第4章-栈

栈被称为一种后入先出（LIFO, last-in-first-out）的数据结构。

对栈的两种主要操作是将一个元素压入栈和将一个元素弹出栈。入栈使用push()方法，出栈使用pop()方法。



### Stack类

```
function Stack() {
	this.dataStore = [];
	this.top = 0;
	this.push = push;
	this.pop = pop;
	this.peek = peek;
	this.clear = clear;
	this.length = length;
}

function push(element) {
	this.dataStore[this.top++] = element;
}

function peek() {
	return this.dataStore[this.top - 1];
}

function top() {
	return this.dataStore[--this.top];
}

function clear() {
	this.top = 0;
}

function length() {
	return this.top;
}
```



实战：

### 判断给定字符是否回文

```
function isPalindrome(word) {
	var s = new Stack();
	for (var i = 0;i < word.length; ++i) {
		s.push(word[i]);
	}
	var reword = "";
	while(s.length() > 0) {
		reword += s.pop();
	}
	if (word === reword) return true;
	else return fasle;
}
```

### 使用栈模拟递归调用

```
function fact(n) {
	var s = new Stack();
	while(n > 1) {
		s.push(n--);
	}
	var product = 1;
	while(s.length() > 0) {
		product *= s.pop();
	}
	return product;
}
```



### 练习

1. 编写一个函数，该函数接受一个算术表达式作为参数，返回括号缺失的位置。下面是一个括号不匹配的算术表达式的例子：2.3+23/12+（3.14159×0.24。
2. 使用两个栈，一个用来存储操作数，另外一个用来存储操作符，设计并实现一个JavaScript函数，该函数可以将中缀表达式转换为后缀表达式，然后利用栈对该表达式求值。

## 第5章-队列

队列是一种列表，不同的是队列只能在队尾插入元素，在队首删除元素。

队列是一种先进先出（First-In-First-Out, FIFO）的数据结构。



JavaScript中的数组具有其他编程语言中没有的优点，数组的push()方法可以在数组末尾加入元素，shift()方法则可删除数组的第一个元素。

### Queue类的定义

```
function Queue() {
	this.dataStore = [];
	this.enqueue = enqueue;
	this.dequeue = dequeue;
	this.front = front;
	this.back = back;
	this.toString = toString;
	this.empty = empty;
}

function enqueue(element) {
	this.dataStore.push(element);
}

function dequeue() {
	return this.dataStore[0];
}

function back() {
	return this.dataStore[this.dataStore.length - 1];
}

function toString() {
	var retStr = "";
	for(var i = 0;i < this.dataStore.length; ++i) {
		retStr += this.dataStore[i] + "\n";
	}
	return resStr;
}

function empty() {
	if(this.dataStore.length == 0) {
		return true;
	} else {
		return false;
	}
}
```

### 舞伴分配问题

舞池中男女各一队，两队分别出列组成的男女组成舞伴。

```
function Dancer(name, sex) {
	this.name = name;
	this.sex = sex;
}

function getDancers(males, females) {
	var names = read("dancers.txt").split("\n");
	for(var i = 0;i < names.length; ++i) {
		names[i] = names[i].trim();
	}
	for(var i = 0;i < names.length; ++i) {
		var dancer = names[i].split(" ");
		var sex = dancer[0];
		var name = dancer[1];
		if (sex == "F") {
			females.enqueue(new Dancer(name, sex));
		} else {
			males.enqueue(new Dancer(name, sex));
		}
	}
}

// 匹配结果
function dance(males, females) {
	print("The dance partners are: \n");
	while(!females.empty() && !males.empty()) {
		person = females.dequeue();
		putstr("Female dancer is :" + person.name);
		person = males.dequeue();
		print(" and the male dancer is : " + person.name);
	}
	print();
}
```



## 练习

1. 基数排序
2. 优先队列
3. 双向队列
4. 判断单词回文

## 第6章-链表

链表是由一组节点组成的集合。每个节点都使用一个对象的引用指向它的后继。指向另一个节点的引用叫做链。

链表的尾元素指向一个null节点。

许多链表的实现都在链表最前面有一个特殊节点，叫做头节点。

链表中插入一个节点的效率很高。向链表中插入一个节点，需要修改它前面的节点（前驱），使其指向新加入的节点，而新加入的节点则指向原来前驱指向的节点。

从链表中删除一个元素也很简单。将待删除元素的前驱节点指向待删除元素的后继节点，同时将待删除元素指向null，元素就删除成功了。

## Node类和LinkedList类

``` 
function Node(element) {
	this.element = element;
	this.next = null;
}

function LList() {
	this.head = new Node("head");
	this.find = find;
	this.insert = insert;
	this.display = display;
	this.findPrevious = findPrevious;
	this.remove = remove;
}

function remove() {
	var prevNode = this.findPrevious(item);
	if(!(prevNode.next == null)) {
		prevNode.next = prevNode.next.next;
	}
}

function findPrevious(item) {
	var currNode = this.head;
	while(!(currNode.next == null) && (currNode.next.element != item)) {
		currNode = currNode.next;
	}
	return currNode;
}

function display() {
	var currNode = this.head;
	while(!(currNode.next == null)) {
		print(currNode.next.element);
		currNode = currNode.next;
	}
}

function find(item) {
	var currNode = this.head;
	while(currNode.element != item) {
		currNode = currNode.next;
	}
	return currNode;
}

function insert(newElement, item) {
	var newNode = new Node(newElement);
	var current = this.find(item);
	newNode.next = current.next;
	current.next = newNode;
}
```

### 双向链表

增加一个previous

```
function Node(element) {
	this.element = element;
	this.next = null;
	this.previous = null;
}
```

插入

```
function insert(newElement, item) {
	var newNode = new Node(newElement);
	var current = this.find(item);
	newNode.next = current.next;
	newNode.previous = current;
	current.next = newNode;
}
```

双向链表的remove()方法比单向链表的效率更高，因为不需要再查找前驱节点了。首先需要在链表中找出存储待删除数据的节点，然后设置该节点前驱的next属性，使其指向待删除节点的后继；设置该节点后继的previous属性，使其指向待删除节点的前驱。

```
function remove(item) {
	var currNode = this.find(item);
	if (!(currNode.next == null)) {
		currNode.previous.next = currNode.next;
		currNode.next.previous = currNode.previous;
		currNode.next = null;
		currNode.previous = null;
	}
}
```

增加查找最后节点的方法，免除从前往后遍历

```
function findLast() {
	var currNode = this.head;
	while(!(currNode.next == null)) {
		currNode = currNode.next;
	}
	return currNode;
}
```

反序显示双链表：

```
function dispReverse() {
	var currNode = this.head;
	currNode = this.findLast();
	while(!(currNode.previous == null)) {
		print(currNode.elment);
		currNode = currNode.previous;
	}
}
```

### 循环链表

如果你希望可以从后向前遍历链表，但是又不想付出额外代价来创建一个双向链表，那么就需要使用循环链表。从循环链表的尾节点向后移动，就等于从后向前遍历链表。

修改构造函数:**只需要修改一处，就将单向链表变成了循环链表。** 

```
function LList() {
	this.head = new Node("head");
	this.head.next = this.head;
	this.find = find;
	this.insert = insert;
	this.display = display;
	this.findPrevious = findPrevious;
	this.remove = remove;
}
```

但是display()需要修改，原来的方式在循环链表里会陷入死循环。while循环的循环条件需要修改，需要检查头节点，当循环到头节点时退出循环。

```
function display() {
	var currNode = new Node();
	while(!(currNode.next == null) && !(currNode.next.element == "head")) {
		print(currNode.next.element);
		currNode = currNode.next;
	}
}
```

### 练习

1. advance(n)： 在链表中向前移动n个节点
2. back(n)：在双向链表中向后移动n个节点
3. show()：只显示当前节点。
4. 约瑟夫环

## 第7章-字典

Dictionay类的基础是Array类，而不是Object类。

### Dictionary类

```
function Dictionary() {
	this.add = add;
	this.dataStore = new Array();
	this.find = find;
	this.remove = remove;
	this.showAll = showAll;
}

function add(key, value) {
	this.dataStore[key] = value;
}

function find(key) {
	return this.dataStore[key];
}

function remove(key) {
	delete this.dataStore[key];
}

finction showAll() {
	var datakeys = Array.prototype.splice.call(object.keys(this.dataStore));
}

function count() {
	var n = 0;
	for(var key in Object.keys(this.dataStore)) {
		++n;
	}
	return n;
}

function clear() {
	for(var key in Object.keys(this.dataStore)) {
		delete this.dataStore[key];
	}
}
```

统计字典属性的个数，为什么不使用length属性？这是因为当键的类型为字符串时，length属性就不管用了。

**Amazing!!!**

```
var nums = new Array();
nums[0] = 1;
nums[1] = 2;
print(nums.length); // 显示2
var pbook = new Array();
pbook["David"] = 1;
pbook["Jenny"] = 2;
print(pbook.length); // 显示0
```

排序：

从数组datastore拿到键后，调用sort()方法对键重新排了序。

``` 
function showAll() {
	for(var key in Object.keys(this.dataStore).sort()) {
		print(key + "->" + this.dataStore[key]);
	}
}
```

## 第8章-散列

### HashTable类

``` {
function HashTable() {
	this.table = new Array(137);
	this.simpleHash = simpleHash;
	this.betterHash = betterhash;
	this.showDistro = showDistro;
	this.put = put;
	// this.get = get;
}

function put(data) {
	var pos = this.betterHash(data);
	this.table[pos] = data;
}

function simpleHash(data) {
	var total = 0;
	for( var i = 0; i < data.length; ++i) {
		total += data.chatCodeAt(i);
	}
	print("Hash value: " + data + "->" + total);
	return total % this.table.length;
}

function showDistro() {
	var n = 0;
	for( var i = 0;i < this.table.length; ++i) {
		if(this.table[i] != undefined) {
			print(i + ":" + this.table[i]);
		}
	}
}

function betterHash(string) {
	const H = 37;
	var total = 0;
	for(var i = 0;i < string.length; i++) {
		total += H * total + string.charCodeAt(i);
	}
	total = total % this.table.length;
	if (total < 0) {
		total += this.table.length - 1;
	}
	return parseInt(total);
}
```

### 碰撞处理

1. 开链法
2. 线性探测法



## 第9章-集合

集合（set）是一种包含不同元素的数据结构。

集合的两个最重要特性是：首先，集合中的成员是无序的；其次，集合中不允许相同成员存在。



对集合的操作：

1. 并集：将两个集合中的成员进行合并，得到一个新集合。
2. 交集：两个集合中共同存在的成员组成一个新的集合。
3. 补集属于一个集合而不属于另一个集合的成员组成的集合。



### Set类的实现

```
function Set() {
	this.dataStore = [];
	this.add = add;
	this.remove = remove;
	this.size = size;
	this.union = union;
	this.intersect = intersect;
	this.subset = subset;
	this.difference = difference;
	this.show = show;
}

function add(data) {
	if (this.dataStore.indexOf(data) < 0) {
		this.dataStore.push(data);
		return true;
	} else {
		return false;
	}
}

function remove(data) {
	var pos = this.dataStore.indexOf(data);
	if (pos > -1) {
		this.dataStore.splice(pos, 1);
		return true;
	} else {
		return false;
	}
}

function show() {
	return this.dataStore;
}
```

### 更多集合操作

定义union()、subset()和difference()方法。

union()实现：

```
// 判断是否包含
function contains(data) {
	if (this.dataStore.indexOf(data) > -1) {
		return true;
	} else {
		return false;
	}
}

funciton union(set) {
	var tempSet = new Set();
	for(var i = 0; i < this.dataStore.length; ++i){
		tempSet.add(this.dataStore[i]);
	}
	for(var i = 0; i < set.dataStore.length; ++i) {
		if(!tempSet.contains(set.dataStore[i])) {
			tempSet.dataStore.push(set.dataStore[i]);
		}
	}
	return tempSet;
 }
```

intersect()实现：

```
function intersect(set) {
	var tempSet = new Set();
	for(var i = 0; i < this.dataStore.length; ++i) {
		if (!set.contains(this.dataStore[i])) {
			tempSet.dataStore.push(set.dataStore[i]);
		}
	}
	return tempSet;
}
```

subset()实现:

```
// 判断是否属于子集
function subset() {
	if (this.size() > set.size()) {
		return false;
	} else {
		for(var member in this.dataStore) {
			if(!set.contains(member)) {
				return false;
			}
		}
	}
	return true;
}

function size() {
	return this.dataStore.length;
}
```

最后一个操作是difference()，该方法返回一个新集合，该集合包含的是那些属于第一个集合但不属于第二个集合的成员。

```
function difference(set) {
	var tempSet = new Set();
	for( var i = 0; i < this.dataStore.length; ++i) {
		if (!set.contains(this.dataStore[i])) {
			tempSet.add(this.dataStore[i]);
		}
	}
	return tempSet;
}
```

## 练习

1. 修改Set类，使里面的元素按顺序存储。写一段测试代码来测试你的修改。
2. 修改Set类，将存储方式从数组替换为链表。写一段测试代码来测试你的修改。
3. 为Set类增加一个higher(element)方法，该方法返回比传入元素大的元素中最小的那个。写一段测试代码来测试这个方法。
4. 为Set类增加一个lower(element)方法，该方法返回比传入元素小的元素中最大的那个。写一段测试代码来测试这个方法。

## 第10章-二叉树和二叉查找树

树是计算机科学中经常用到的一种数据结构。树是一种非线性的数据结构，以分层的方式存储数据。树被用来存储具有层级关系的数据，比如文件系统中的文件；树还被用来存储有序列表。

### 实现二叉查找树

```
function Node(data, left, right) {
	this.data = data;
	this.left = left;
	this.right = right;
	this.show = show;
}

function show() {
	return this.data;
}

function BST() {
	this.root = null;
	this.insert = insert;
	this.inOrder = inOrder;
}

function insert(data) {
	var n = new Node(data, null, null);
	if (this.root == null) {
		this.root = n;
	} else {
		var current = this.root;
		var parent;
		while(true) {
			parent = current;
			if (data < current.data) {
				current = current.left;
				if(current == null) {
					parent.left = n;
					break;
				}
			} else {
				current = current.right;
				if (current == null) {
					parent.right = n;
                    break;
				}
			}
		}
	}
}

// 中序遍历
function inOder(node) {
	if(!(node == null)) {
		inOrder(node.left);
		putstr(node.show() + " ");
		inOrder(node.right);
	}
}

// 先序遍历
function preOrder(node) {
	if(!(node == null)) {
		putstr(nodw.show() + " ");
		preOrder(node.left);
		preOrder(node.right);
	}
}

// 后序遍历
function postOrder(node) {
	if(!(node == null)) {
		postOrder(node.left);
		postOrder(node.right);
		putstr(node.show() + " ");
	}
}
```

### 在二叉树上进行查找

1. 查找给定值
2. 查找最小值
3. 查找最大值

```
function getMin() {
	var current = this.root;
	while(!(current.left == null)) {
		current = current.left;
	}
	return current.data;
}

function getMax() {
	var current = this.root;
	while(!(current.right == null)) {
		current = current.right;
	}
	return current.data;
}

function find(data) {
	var current = this.root;
	while(current != null) {
		if(current.data == data) {
			return current;
		} else if (data < current.data) {
			current = current.left;
		} else {
			current = current.right;
		}
	}
	return null;
}
```

### 从二叉查找树上删除节点

从BST上删除节点的操作最复杂，其复杂程度取决于删除哪个节点。

```
function remove(data) {
	root = removeNode(this.root, data);
}

function removeNode(node, data) {
	if(node == null) {
		return null;
	}
	if (data == node.data) {
		// 没有子节点的节点
		if (node.left == null && node.right == null) {
			return null;
		}
		// 没有左子节点的节点
		if (node.left == null) {
			return node.right;
		}
		// 没有右子节点的节点
		if (node.right == null) {
			return node.left;
		}
		// 有两个子节点的节点
		var tempNode = getSmallest(node.right);
		node.data = tempNode.data;
		node.right = removeNode(node.right, tempNode.Data);
		return node;
	} else if(data < node.data) {
		node.left = removeNode(node.left, data);
		return node;
	} else {
		node.right = removeNode(node.right, data);
		return node;
	}
}
```

### 练习

1. 为BST类增加一个新方法，该方法返回BST中节点的个数。
2. 为BST类增加一个新方法，该方法返回BST中边的个数。
3. 为BST类增加一个新方法max()，该方法返回BST中的最大值。
4. 为BST类增加一个新方法min()，该方法返回BST中的最小值。
5. 写一段程序，读入一个较大的文本文件，并将其中的单词保存到BST中，显示每个单词在文本中出现的次数。

## 第11章-图和图算法



### 构建图

```
function Graph(v) {
	this.vertices = v;
	this.edges = 0;
	this.adj = [];
	for(var i = 0;i < this.vertices; ++i) {
		this.adj[i] = [];
		this.adj[i].push("");
	}
	this.addEdge = addEdge;
	this.showGraph = showGraph;
}

function addEdge(v, w) {
	this.adj[v].push(w);
	this.adj[w].push(v);
	this.edges++;
}

// showGraph()函数会通过打印所有顶点及其相邻顶点列表的方式来显示图
function showGraph() {
	for (var i = 0;i < this.vertices; ++i) {
		putstr(i + "->");
		for(var j = 0;j < this.vertices; ++j) {
			if(this.adj[i][j] != undefined) {
				putstr(this.adj[i][j] + '');
			}
		}
		print();
	}
}
```



### 搜索图

在图上可以执行两种基础搜索：深度优先搜索和广度优先搜索。

**深度优先搜索**

深度优先搜索包括从一条路径的起始顶点开始追溯，直到到达最后一个顶点，然后回溯，继续追溯下一条路径，直到到达最后的顶点，如此往复，直到没有路径为止。

深度优先搜索算法比较简单：访问一个没有访问过的顶点，将它标记为已访问，再递归地去访问在初始顶点的邻接表中其他没有访问过的顶点。

```
// 添加标记
function Graph(v) {
	this.vertices = v;
	this.edges = 0;
	this.adj = [];
	for(var i = 0;i < this.vertices; ++i) {
		this.adj[i] = [];
		this.adj[i].push("");
	}
	this.addEdge = addEdge;
	this.showGraph = showGraph;
	this.dfs = dfs;
	this.marked = [];
	for(var i = 0;i < this.vertices; ++i) {
		this.marked[i] = false;
	}
}

function dfs(v) {
	this.marked[v] = true;
	if(this.adj[v] != undefined) {
		print("Visited vertex: " + v);
	}
	for(var w in this.adj[v]) {
		if(!this.marked[w]) {
			this.dfs(w);
		}
	}
}
```

**广度优先搜索**

广度优先搜索从第一个顶点开始，尝试访问尽可能靠近它的顶点。

广度优先搜索算法使用了抽象的队列而不是数组来对已访问过的顶点进行排序。其算法的工作原理如下：

（1）查找与当前顶点相邻的未访问顶点，将其添加到已访问顶点列表及队列中；

（2）从图中取出下一个顶点v，添加到已访问的顶点列表；

（3）将所有与v相邻的未访问顶点添加到队列。

```
function bfs(s) {
	var queue = [];
	this.marked[s] = true;
	queue.push(s); // 添加到队尾
	while(queue.length > 0) {
		var v = queue.shift(); //从队首删除
		if (this.adj[v] != undefined) {
			print("Visisted vertex: " + v);
		}
		for(var w in this.adj[v]) {
			if(!this.marked[w]) {
				this.marked[w] = true;
				queue.push(w);
			}
		}
	}
}
```

### 查找最短路径

```
// 将这行添加到Graph类
this.edgeTo = [];

// bfs函数
function bfs(s) {
	var queue = [];
	this.marked[s] = true;
	queue.push(s); // 添加到队尾
	while(queue.length > 0) {
		var v = queue.shift(); // 从队首移除
		if (v == undefined) {
			print("Visisted vertex: " + v);
		}
		for(var w in this.adj[v]) {
			if(!this.marked[w]) {
				this.edgeTo[w] = v;
				this.marked[w] = true;
				queue.push(w);
			}
		}
	}
}

// 展示连接到不同顶点的路径
function pathTo(v) {
	var source = 0;
	if (!this.hasPathTo(v)) {
		return undefined;
	}
	var path = [];
	for(var i = v; i != source; i = this.edgeTo[i]) {
		path.push(i);
	}
	path.push(source);
	return path;
}

// 记得在构造函数中补充：
// this.pathTo = pathTo;
// this.hasPathTo = hasPathTo;
function hasPathTo(v) {
	return this.marked[v];
}
```

### 拓扑排序

拓扑排序会对有向图的所有顶点进行排序，使有向边从前面的顶点指向后面的顶点。

拓扑排序算法与深度优先搜索类似。不同的是，拓扑排序算法不会立即输出已访问的顶点，而是访问当前顶点邻接表中的所有相邻顶点，直到这个列表穷尽时，才将当前顶点压入栈中。

```
function topSort() {
	var stack = [];
	var visited = [];
	for(var i = 0;i < this.vertices; i++) {
		visited[i] = false;
	}
	for(var i = 0;i < this.vertices; i++) {
		if(visited[i] == false) {
			this.topSortHelper(i, visited, stack);
		}
	}
	for(var i = 0; i < stack.length; i++) {
		if(stack[i] != undefined && stack[i] != false) {
			print(this.vertexList[stack[i]]);
		}
	}
}

function topSortHelper(v, visited, stack) {
	visited[v] = true;
	for(var w in this.adj[v]) {
		if(!visited[w]) {
			this.topSortHelper(visited[w], visited, stack);
		}
	}
	stack.push(v);
}

// 构造器中添加
// this.topSortHelper = topSortHelper;
// this.topSort = topSort;
```

### 练习

1. 编写一个程序，测试广度优先和深度优先这两种图搜索算法哪一种速度更快。请使用不同大小的图来测试你的程序。
2. 编写一个用文件来存储图的程序。
3. 编写一个从文件读取图的程序。
4. 构建一个图，用它为你居住地的地图建模。测试一下从一个开始顶点到最后顶点的最短路径。
5. 对上一题中创建的图执行深度优先搜索和广度优先搜索。

## 第12章-排序算法

### 数组测试平台

```
function CArray(numElements) {
	this.dataStore = [];
	this.pos = 0;
	this.numElements = numElements;
	this.insert = insert;
	this.toString = toString;
	this.clear = clear;
	this.setData = setData;
	this.swap = swap;
	for(var i = 0; i < numElements; ++i) {
		this.dataStore[i] = i;
	}
}

function setData() {
	for(var i = 0;i < this.numElements; ++i) {
		this.dataStore[i] = Math.floor(Math.random() * (this.numElements + 1));
	}
}

function clear() {
	for(var i = 0;i < this.dataStore.length; ++i) {
		this.dataStore[i] = 0;
	}
}

function insert(element) {
	this.dataStore[this.pos++] = element;
}

function toString() {
	var restr = "";
	for(var i = 0;i < this.dataStore.length; ++i) {
		restr += this.dataStore[i] + " ";
		if(i > 0 & i % 10 == 0) {
			restr += "\n";
		}
	}
	return restr;
}

function swap(arr, index1, index2) {
	var temp =arr[index1];
	arr[index1] = arr[index2];
	arr[index2] = temp;
}
```

### 冒泡排序

```
function bubbleSort() {
	var numElements = this.dataStore.length;
	var temp;
	for(var outer = numElements; outer >= 2; --outer) {
		for(var inner = 0; inner <= outer - 1; ++inner) {
			if(this.dataStore[inner] > this.dataStore[inner + 1]) {
				swap(this.dataStore, inner, inner + 1);
			}
		}
		print(this.toString());
	}
}
```

### 选择排序

选择排序从数组的开头开始，将第一个元素和其他元素进行比较。检查完所有元素后，最小的元素会被放到数组的第一个位置，然后算法会从第二个位置继续。这个过程一直进行，当进行到数组的倒数第二个位置时，所有的数据便完成了排序。

```
function selectionSort() {
	var min, temp;
	for(var outer = 0;outer <= this.dataStore.length - 2; ++outer) {
		min = outer;
		for(var inner = outer + 1; inner <= this.dataStore.length - 1; ++inner) {
			if (this.dataStore[inner] < this.dataStore[min]) {
				min = inner;
			}
			swap(this.dataStore, outer, min);
		}
	}
}
```

### 插入排序

插入排序有两个循环。外循环将数组元素挨个移动，而内循环则对外循环中选中的元素及它后面的那个元素进行比较。如果外循环中选中的元素比内循环中选中的元素小，那么数组元素会向右移动，为内循环中的这个元素腾出位置

```
function insertSort() {
	var temp, inner;
	for(var outer = 1;outer <= this.dataStore.length - 1; ++outer) {
		temp = this.dataStore[outer];
		inner = outer;
		while(inner > 0 && (this.dataStore[inner - 1] >= temp)) {
			this.dataStore[inner] = this.dataStore[inner - 1];
			--inner;
		}
		this.dataStore[inner] = temp;
	}
}
```

### 希尔排序

希尔排序的工作原理是，通过定义一个间隔序列来表示在排序过程中进行比较的元素之间有多远的间隔。

```
function shellSort() {
	for(var g = 0;g < this.gaps.length; ++g) {
		for(var i = this.gaps[g];i < this.dataStore.length; ++i) {
			var temp = this.dataStore[i];
			for(var j = i;j >= this.gaps[g] && this.dataStore[j - this.gaps[g]] > temp; j-= this.gaps[g]) {
				this.dataStore[j] = this.dataStore[j - this.gaps[g]];
			}
			this.dataStore[j] = temp;
		}
	}
}
```

### 归并排序

归并排序的命名来自它的实现原理：把一系列排好序的子序列合并成一个大的完整有序序列。

在实际情况中，归并排序还有一些问题，当我们用这个算法对一个很大的数据集进行排序时，我们需要相当大的空间来合并存储两个子数组。

通常来讲（也不一定），归并排序会使用递归的算法来实现。然而，在JavaScript中这种方式不太可行，因为这个算法的递归深度对它来讲太深了。所以，我们将使用一种非递归的方式来实现这个算法，这种策略称为自底向上的归并排序。

```
funciton mergeSort(arr) {
	if(arr.length < 2) {
		return;
	}
	var step = 1;
	var left,right;
	while(step < arr.length) {
		left = 0;
		right = step;
		while(right + step < arr.length) {
			mergeArrays(arr, left, left + step, right, right + step);
			left = right + step;
			right = left + step;
		}
		if (right < arr.length) {
			mergeArray(arr, left, left + step, right, arr.length);
		}
		step *= 2;
	}
}

function mergeArrays(arr, startLeft, stopLeft, startRight, stopRight) {
	var rightArr = new Array(stopRgith - startRight + 1);
	var leftArr = new Array(stopLeft - startLeft + 1);
	k = startRight;
	for(var i = 0 ;i < (rightArr.length - 1); ++i) {
		rightArr[i] = arr[k];
		++k;
	}
	k = startLeft;
	for(var i = 0;i < (leftArr.length - 1); ++i) {
		leftArr[i] = arr[k];
		++k;
	}
	rightArr[rightArr.length - 1] = Infinity; // 哨兵值
	leftArr[leftArr.length - 1] = Infinity; // 哨兵值
	var m = 0;
	var n = 0;
	for(var k = startLeft; k < stopRight; ++k) {
		if(leftArr[m] <= rightArr[n]) {
			arr[k] = leftArr[m];
			m++;
		} else {
			arr[k] = rightArr[n];
			n++;
		}
	}
	print("left array - ", leftArr);
	print("right array - ", rightArr);
}
```

### 快速排序

快速排序是处理大数据集最快的排序算法之一。它是一种分而治之的算法，通过递归的方式将数据依次分解为包含较小元素和较大元素的不同子序列。该算法不断重复这个步骤直到所有数据都是有序的。

快速排序的算法如下：

（1）选择一个基准元素，将列表分隔成两个子序列；

（2）对列表重新排序，将所有小于基准值的元素放在基准值的前面，所有大于基准值的元素放在基准值的后面；（3）分别对较小元素的子序列和较大元素的子序列重复步骤1和2。

```
function qSort(list) {
	if(list.length == 0) {
		return [];
	}
	var lesser = [];
	var greater = [];
	var pivot = list[0];
	for(var i = 1;i < list.length; i++) {
		if(list[i] < pivot) {
			lesser.push(list[i]);
		} else {
			greater.push(list[i]);
		}
	}
	return qSort(lesser).concat(pivot, qSort(greater));
}
```

## 第13章-检索算法

在列表中查找数据有两种方式：顺序查找和二分查找。顺序查找适用于元素随机排列的列表；二分查找适用于元素已排序的列表。二分查找效率更高，但是你必须在进行查找之前花费额外的时间将列表中的元素排序。

### 顺序查找

使用自组织数据

查找最频繁的元素最终会移动到数据集的起始位置。

```
function seqSearch(arr, data) {
	for(var i = 0;i < arr.length; ++i) {
		if(arr[i] == data && i > (arr.length * 0.2)) {
			swap(arr, i, 0);
			return true;
		} else if(arr[i] == data) {
			return true;
		}
	}
	return false;
}
```

### 二分查找算法

```
function binSearch(arr, data) {
	var upperBound = arr.length - 1;
	var lowerBound = 0;
	while(lowerBound <= upperBound) {
		var mid = Math.floor(upperBound + lowerBound / 2);
		if (arr[mid] < data) {
			lowerBound = mid + 1;
		} else if(arr[mid] > data) {
			upperBound = mid - 1;
		} else {
			return mid;
		}
	}
	return -1;
}
```

## 第14章-高级算法

递归是从顶部开始将问题分解，通过解决掉所有分解出小问题的方式，来解决整个问题。动态规划解决方案从底部开始解决问题，将所有小问题解决掉，然后合并成一个整体解决方案，从而解决掉整个大问题。

### 动态规划

递归和动态规划版本的斐波那契数列

```
function recurFib(n) {
	if (n < 2) {
		return n;
	} else {
		return recurFib(n - 1) + recurFib(n - 2);
	}
}

function dynFib(n) {
	var val = [];
	for(var i = 0;i <= n; ++i) {
		val[i] = 0;
	}
	if (n == 1 || n == 2){
		return 1;
	} else {
		val[1] = 1;
		val[2] = 2;
		for(var i = 3; i <= n; ++i) {
			val[i] = val[i - 1] + val[i - 2];
		}
		return val[n -1];
	}
}
```

**最大公共子串**

```
function lcs(word1, word2) {
	// 初始化了两个变量以及一个二维数组
	var max = 0;
	var index = 0;
	var lcsarr = new Array(word1.length + 1);
	for(var i = 0;i <= word1.length + 1; ++i) {
		lcsarr[i] = new Array(word2.length + 1);
		for(var j = 0;j <= word2.length + 1; ++j) {
			lcsarr[i][j] = 0;
		}
	}
	// 构建了用于保存字符匹配记录的表
	for(var i = 0;i <= word1.length; ++i) {
		for(var j = 0; j <= word2.length; ++j) {
			if(i == 0 || j == 0) {
				lcsarr[i][j] = 0;
			} else {
				if(word[i - 1] === word2[j - 1]) {
					lcsarr[i][j] = lcsarr[i - 1][j - 1] + 1;
				} else {
					lcsarr[i][j] = 0;
				}
			}
			if (max < lcsarr[i][j]) {
				max = lcsarr[i][j];
				index = i;
			}
		}
	}
	var str = "";
	if (max == 0) {
		return "";
	} else {
		for(var i = index - max; i <= max; ++i) {
			str += word2[i];
		}
		return str;
	}
}
```

**背包问题：递归解决方案**

```
funtion max(a, b) {
	return (a > b) ? a : b;
}

function knapsack(capacity, size, value, n) {
	if (n == 0 || capacity == 0) {
		return 0;
	}
	if (size[n - 1] > capacity) {
		return knapsack(capacity, size, value, n - 1);
	} else {
		return max(value[n - 1] + knapsack(capacity - size[n - 1], size, value, n - 1),
			knapsack(capacity, size, value, n - 1));
	}
}

var value = [4, 5, 10, 11, 13];
var size = [3, 4, 7, 8, 9];
var capacity = 16;
var n = 5;
print(knapsack(capacity, size, value, n));

// 答案 12
```

**动态规划解决背包问题**

```
funtion max(a, b) {
	return (a > b) ? a : b;
}

function dKnapsack(capacity, size, value, n) {
	var K = [];
	for(var i = 0; i <= capacity + 1; i++) {
		K[i] = [];
	}
	for(var i = 0; i <= n; i++) {
		for(var w = 0; w <= capacity; w++) {
			if(i == 0 || w == 0) {
				K[i][w] = 0;
			} else if(size[i - 1] <= w) {
				K[i][w] = max(value[i - 1] + K[i - 1][w - size[i - 1]], K[i - 1][w]);
			} else {
				K[i][w] = K[i - 1][w];
			}
			putstr(K[i][w] + " ");
		}
		print();
	}
	return K[n][capacity];
}

var value = [4, 5, 10, 11, 13];
var size = [3, 4, 7, 8, 9];
var capacity = 16;
var n = 5;
print(dKnapsack(capacity, size, value, n));
```

### 贪心算法

贪心算法总是会选择当下的最优解，而不去考虑这一次的选择会不会对未来的选择造成影响。

找零问题



**背包问题的贪心算法解决方案**

```
function ksack(values, weights, capacity) {
	var load = 0;
	var i = 0;
	var w = 0;
	while(load < capacity && i < 4) {
		if(weights[i] <= (capacity - load)) {
			w += values[i];
			load += weights[i];
		} else {
			var r = (capacity - load) / weights[i];
			w += r * values[i];
			load += weights[i];
		}
		++i;
	}
	return w;
}

var items = ['A', 'B', 'C', 'D'];
var values = [50, 140, 60, 60];
var weights = [5, 20, 10, 12];
var capacity = 30;
print(ksack(values, weights, capacity)) // 显示220
```

