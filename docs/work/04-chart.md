# 图表

## 1. Echart导出PDF

## 2. Echart自适应div
[echarts图表自适应resize问题](https://www.cnblogs.com/goloving/p/9008165.html) 
```
 window.addEventListener("resize", () => { myChart.resize();});   
 
```

## 3.Echart周围空白太大，显示区域很小，如何放大
文档[grid属性](https://echarts.baidu.com/option.html#grid) 可以设置显示区域，比如配置成：
```
    grid: {
        top: '40',
        left: '3%',
        right: '25',
        bottom: '3%',   
        containLabel: true
    },
```
## 4.Echart画风玫瑰图

**Highchart上的画法：**
```
var createRose = function (data){  
	$('#rose').highcharts({
		 chart: {
        	 polar: true,
        	 type: 'line'
        },
        title: {
            text: '风玫瑰图',
        },
        pane: {
            startAngle: 0,
            endAngle: 360
        },       
        xAxis: {
            tickmarkPlacement: 'on',
            categories: ["NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW","N"],
        },
        yAxis: {
            min: 0,
            endOnTick: false,
            showLastLabel: true,
            title: {
                text: '频率 (%)'
            },
            labels: {
                formatter: function () {
                    return this.value + '%';
                }
            },
            reversedStacks: false
        },
        tooltip: {
            valueSuffix: '%'
        },
        plotOptions: {
            series: {
                stacking: 'normal',
                shadow: false,
                groupPadding: 0,
                pointPlacement: 'on'
            }
        },
        series: [{
            type: 'area',
            name: stationTree.getSelected().data.siteName,
            data: (function () {
                var modify1 = [],i;
                for (i = 0; i <data.length; i++) {
              	 if(data[i]<100){
              		 modify1.push(data[i]); 
              	 }
              	 else{
              		 modify1.push({y:null,marker: {symbol: 'diamond',fillColor: '#000000',radius: 8}});  
              	 }                		                       
                } 
                return modify1;
            }()),
        }],
        credits:{
            enabled:false // 禁用版权信息
       }, 
        exporting: {
            buttons: {
                contextButton: {
                    text: '图表打印/下载'
                }
            }
        }
    });
};
```
**Echart上的画法：**


## 多个折线，每次只显示一条
[多个折线图每次只显示一条](https://www.jianshu.com/p/b2dfe16ae5e4)
legend .selectedMode=single；
[实例文档-折线堆叠图](https://echarts.baidu.com/examples/editor.html?c=line-stack) 
**注意：legend.data和series的name的值要一一对应，否则会直接在图表中显示**
```
<template>
  <div class="home">
    <div id="myChart" ref="chart" :style="{width: '600px', height: '600px'}"></div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'home',
  components: {
  },
  mounted(){
    this.drawLine();
  },
  methods: {
    drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
      　　title: {
      　　  text: '折线多选择图'
          },
          tooltip: {
          　　trigger: 'axis',
          　　axisPointer: {
          　　　　type: 'cross'
          　　}
          },
          legend: {
            data: ['气温', '湿度', '风速'],
            selectedMode: 'single'
          },
          xAxis: {
              type: 'category',
              boundaryGap: false,
              data: ['0','1','2','3','4','5','6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18']
          },
          yAxis: {
              type: 'value'
          },
          series: [
            {
              name: '气温',
              type: 'line',
              data: [22.9, 22.6, 22.6, 22.6, 22.7, 24.1,21.3,21.9, 23.8, 25.6, 28, 28.2, 28.5, 28.5, 31, 30.5, 30.6, 29.5, 27.4]
            },
            {
              name: '湿度',
              type: 'line',
              data: [100,100,100,100,100,100,100,100,100,100,100,99,95,98,94,92,89,89,97]
            },
            {
              name: '风速',
              type: 'line',
              data: [0.3, 0.5,0.6,0.8,0.5,0.7,1.6,0.1,0.7,0.8,1.2,1.1,1.3,1.8,0.6,1.5,0.6,1.1,0.7]
            },                        
          ]          
      })
    },
  }  
}
</script>
<style>
.home {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
}
</style>



```

## tooltip显示单位信息

```
  tooltip: {
  　　trigger: 'axis',
  　　axisPointer: {
  　　　　type: 'cross'
  　　},
      formatter: function (params) {
          var relVal = params[0].name;
          const seriesName = params[0].seriesName
          let unit = ''
          switch(seriesName){
              case '气温':
                  unit = '°C'
                  break
              case '湿度':
                  unit = '%'
                  break
              case '降雨量':
                  unit = 'mm'
                  break
              case '风速':
                  unit = 'm/s'
                  break
          }
          for (var i = 0, len = params.length; i < len; i++) {  
                  relVal += '<br/>' + params[i].seriesName + ' : ' + params[i].value+unit;  
          }  
          return relVal; 
      }
  }
```

## formatter y轴字符串
[echart formatter Y轴字符串的情况](https://blog.csdn.net/weixin_34416649/article/details/91659130) 
[echarts-yAxis-axisLabel](https://echarts.baidu.com/option.html#yAxis.axisLabel.formatter) 
