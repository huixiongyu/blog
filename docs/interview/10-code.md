# 手撕代码

## 1.判断一个字符串出现最多的字符

```
	function max_char(str){
		var obj = {};
		for(var i =0;i<str.length;i++){
			if(!obj[str.charAt(i)]){
				obj[str.charAt(i)]=1;
			}else{
				obj[str.charAt(i)]++;
			}
		}
		var num = 0;
		var ch ='';
		for(var key in obj){
			if(obj[key]>num){
				ch = key;
				num = obj[key];
			}
		}
		return ch;
	}

	console.log(max_char('how are you?'));
```

## 2.解析URL，将=号分割为对象的形式

"?"号后面是参数，键值对是按"&"分隔的，键和值在"="两边

```
function queryString(url){
	let arr = [];
	let res ={};
	arr=url.split("?")[1].split('&');
	for(let i=0;i<arr.length;i++){
		if(arr[i].indexOf("=")!=-1){
			let str=arr[i].split("=");
			res[str[0]]=str[1];
		}else{
			res[arr[i]]="";
		}
	}
	res=JSON.stringify(res);
	return res;
}
 console.log(queryString('www.baidu.com?a=1&b=2&c=test&d'));

```

方法二：正则表达式

## 3.多维数组转化为一维数组

1. 字符串方法

```
var arr = [1,[2,3],[4,5,6]];
newArr = arr.toString().split(',');
```

2. 递归

```
var tmp = [];
function sortArr (arr) {

    for(var i = 0;i<arr.length;i++){

        if(arr[i] instanceof Array){

        sortArr(arr[i]);

        }else{

            tmp.push(arr[i]);

        }

    }

    return tmp;

} 
```

[js多维数组转一维](https://blog.csdn.net/u010705091/article/details/75369710) 

## 4.jQuery 实现复选框的全选和反选效果

![checkbox](http://qiniu.hackslog.cn/18-11-9/66378542.jpg)

```
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
        <div id="box1">
            <button>全选</button>
            <button>不选</button>
            <button>反选</button>
        </div>
        <div id="box2">
            <ul>
                <li>选项1：<input type="checkbox"></li>
                <li>选项2：<input type="checkbox"></li>
                <li>选项3：<input type="checkbox"></li>
                <li>选项4：<input type="checkbox"></li>
                <li>选项5：<input type="checkbox"></li>
                <li>选项6：<input type="checkbox"></li>
                <li>选项7：<input type="checkbox"></li>
                <li>选项8：<input type="checkbox"></li>
                <li>选项9：<input type="checkbox"></li>

            </ul>
        </div>
       <script>
            window.onload = function(){
                // 获取所有的按钮
                var btns = document.getElementsByTagName("button");
                // 获取所有的选项input
                var inputs = document.getElementsByTagName("input");

                // 全选或者不选的时候 调用此函数
                function fun(flag){
                    for (var i=0; i<inputs.length;i++) {
                        inputs[i].checked = flag;
                    }
                }

                //获取第一个按钮  “全选”
                btns[0].onclick = function(){
                    fun(true);
                }

                // 获取第二个按钮 "不选"
                btns[1].onclick = function(){
                    fun(false);
                }
                // 获取第三个按钮 “反选”
                btns[2].onclick = function(){
                    // 遍历所有的选项，判断每一个选项是否被选中
                    for (var i=0;i<inputs.length;i++) {
                        inputs[i].checked == true ? inputs[i].checked = false : inputs[i].checked = true;
                    }
                }

            }
        </script>
    </body>
</html>


```

jQuery实现：

![check](http://qiniu.hackslog.cn/18-11-9/9904814.jpg)

```
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title></title>

        <link rel="stylesheet" type="text/css" href="http://www.sucaihuo.com/jquery/css/common.css" />
        <style type="text/css">
            ul li{line-height:30px; padding:4px 0; font-size:14px}
        </style>

    </head>
   <body>
        <div class="container">
            <h2 class="title">jQuery全选、反选与获取选中值</h2>
            <div class="demo">
                <ul id="list">   
                    <li><label><input type="checkbox" value="1"> 1.老男孩</label></li> 
                    <li><label><input type="checkbox" value="2"> 2.我最亲爱的</label></li> 
                    <li><label><input type="checkbox" value="3"> 3.邂逅</label></li> 
                    <li><label><input type="checkbox" value="4"> 4.心痛2013</label></li> 
                    <li><label><input type="checkbox" value="5"> 5.要爱爱</label></li> 
                    <li><label><input type="checkbox" value="6"> 6.怎么说我不爱你</label></li> 
                </ul> 
                <input type="checkbox" id="all"/> 
                <input type="button" value="全选" class="btn" id="selectAll"/>   
                <input type="button" value="全不选" class="btn" id="unSelect"/>   
                <input type="button" value="反选" class="btn" id="reverse"/>   
                <input type="button" value="获得选中值" class="btn" id="getValue"/> 
            </div>  
        </div>
        
        <script type="text/javascript" src="http://code.jquery.com/jquery-1.4.1.min.js"></script>
        <script type="text/javascript">
            $(function() {
                //全选或全不选
                $("#all").click(function() {
                    if (this.checked) {
                        $("#list :checkbox").attr("checked", true);
                    } else {
                        $("#list :checkbox").attr("checked", false);
                    }
                });
                //全选  
                $("#selectAll").click(function() {
                    $("#list :checkbox,#all").attr("checked", true);
                });
                //全不选
                $("#unSelect").click(function() {
                    $("#list :checkbox,#all").attr("checked", false);
                });
                //反选 
                $("#reverse").click(function() {
                    $("#list :checkbox").each(function() {
                        $(this).attr("checked", !$(this).attr("checked"));
                    });
                    allCheck();
                });
 
                //设置全选复选框
                $("#list :checkbox").click(function() {
                    allCheck();
                });
 
                //获取选中选项的值
                $("#getValue").click(function() {
                    var valArr = new Array;
                    $("#list :checkbox[checked]").each(function(i) {
                        valArr[i] = $(this).val();
                    });
                    var vals = valArr.join(',');
                    alert(vals);
                });
            });
            function allCheck() {
                var num_all = $("#list :checkbox").size(); //选项总个数
                var num_checked = $("#list :checkbox:checked").size(); //选中个数
                if (num_all == num_checked) { //若选项总个数等于选中个数 
                    $("#all").attr("checked", true); //全选选中
                } else {
                    $("#all").attr("checked", false);
                }
            }
        </script> 
 
    </body>

</html>


```

[js实现全选、不选和反选效果](https://blog.csdn.net/diligentkong/article/details/54709694) 

[jQuery checkbox的相关操作——全选、反选、获得所有选中的checkbox](https://www.cnblogs.com/0201zcr/p/4704468.html) 

## 5.实现数组去重
基本的操作：

```
function unique(arr){
    var result =[],isRepeat;
    for(var i=0,len = arr.length;i<len;i++){
        isRepeat = false;
        for(var j=0,len=result.length; j<len;j++){
            if(arr[i] == result[j]){
                isRepeat = true;
                break;
            }
        }
        if(!isRepeat){
            result.push(arr[i]);
        }
    }
}
```

使用对象的方式去重：

```
		var arr = [5,'5', 5, 2,"2",2,1,3];

		function unique(arr){
	  		var brr =[],obj={};
  			for(var i=0;i<arr.length; i++){
  				if(!obj[arr[i]]){
  					obj[arr[i]] = true;
  					brr.push(arr[i]);
  				}
  			}	
  			return brr;		
		}
		var result = (unique(arr));
		console.log(result);  //5 2 1 3
```

[面试必问：数组去重](https://mp.weixin.qq.com/s?__biz=MzAxODE2MjM1MA==&mid=2651550928&idx=1&sn=0912e56c7ccbb68cf36562e723e29da0&scene=1&srcid=0612ekFt6xkwpwwFhCDSPKnM#rd)  

## 斐波那契数列

```
function fibonacci(n){
    if(n==0 || n == 1 ) return n;
    else return fibonacci(n-1) + fibonacci(n-2);
 }

console.log(fibonacci(10));

```