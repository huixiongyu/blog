# 数据结构

**八种排序算法：**
1. 快速排序
2. 冒泡排序
3. 

## 1.快速排序
双指针+递归分治


[微软前端社招笔试详解](https://juejin.im/post/5c89bb52f265da2dbc59cf27) 

## 2.编写一个从小到大的冒泡排序算法

```
function bubbleSort(arr){
    for(var i=0;i<arr.length;i++){
        for(var j=i;j<arr.length;j++){
            if(arr[i]<arr[j]){
                var temp = arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
        }
    }
}
var arr=[23,344,2,43,12,34,-94,88,236];
bubbleSort(arr);
```



## 






