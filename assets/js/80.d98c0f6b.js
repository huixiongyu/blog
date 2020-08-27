(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{424:function(s,n,a){"use strict";a.r(n);var t=a(42),e=Object(t.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"图表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#图表"}},[s._v("#")]),s._v(" 图表")]),s._v(" "),a("h2",{attrs:{id:"_1-echart导出pdf"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-echart导出pdf"}},[s._v("#")]),s._v(" 1. Echart导出PDF")]),s._v(" "),a("h2",{attrs:{id:"_2-echart自适应div"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-echart自适应div"}},[s._v("#")]),s._v(" 2. Echart自适应div")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://www.cnblogs.com/goloving/p/9008165.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("echarts图表自适应resize问题"),a("OutboundLink")],1)]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(' window.addEventListener("resize", () => { myChart.resize();});   \n \n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"_3-echart周围空白太大-显示区域很小-如何放大"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-echart周围空白太大-显示区域很小-如何放大"}},[s._v("#")]),s._v(" 3.Echart周围空白太大，显示区域很小，如何放大")]),s._v(" "),a("p",[s._v("文档"),a("a",{attrs:{href:"https://echarts.baidu.com/option.html#grid",target:"_blank",rel:"noopener noreferrer"}},[s._v("grid属性"),a("OutboundLink")],1),s._v(" 可以设置显示区域，比如配置成：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    grid: {\n        top: '40',\n        left: '3%',\n        right: '25',\n        bottom: '3%',   \n        containLabel: true\n    },\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h2",{attrs:{id:"_4-echart画风玫瑰图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-echart画风玫瑰图"}},[s._v("#")]),s._v(" 4.Echart画风玫瑰图")]),s._v(" "),a("p",[a("strong",[s._v("Highchart上的画法：")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('var createRose = function (data){  \n\t$(\'#rose\').highcharts({\n\t\t chart: {\n        \t polar: true,\n        \t type: \'line\'\n        },\n        title: {\n            text: \'风玫瑰图\',\n        },\n        pane: {\n            startAngle: 0,\n            endAngle: 360\n        },       \n        xAxis: {\n            tickmarkPlacement: \'on\',\n            categories: ["NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW","N"],\n        },\n        yAxis: {\n            min: 0,\n            endOnTick: false,\n            showLastLabel: true,\n            title: {\n                text: \'频率 (%)\'\n            },\n            labels: {\n                formatter: function () {\n                    return this.value + \'%\';\n                }\n            },\n            reversedStacks: false\n        },\n        tooltip: {\n            valueSuffix: \'%\'\n        },\n        plotOptions: {\n            series: {\n                stacking: \'normal\',\n                shadow: false,\n                groupPadding: 0,\n                pointPlacement: \'on\'\n            }\n        },\n        series: [{\n            type: \'area\',\n            name: stationTree.getSelected().data.siteName,\n            data: (function () {\n                var modify1 = [],i;\n                for (i = 0; i <data.length; i++) {\n              \t if(data[i]<100){\n              \t\t modify1.push(data[i]); \n              \t }\n              \t else{\n              \t\t modify1.push({y:null,marker: {symbol: \'diamond\',fillColor: \'#000000\',radius: 8}});  \n              \t }                \t\t                       \n                } \n                return modify1;\n            }()),\n        }],\n        credits:{\n            enabled:false // 禁用版权信息\n       }, \n        exporting: {\n            buttons: {\n                contextButton: {\n                    text: \'图表打印/下载\'\n                }\n            }\n        }\n    });\n};\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br"),a("span",{staticClass:"line-number"},[s._v("68")]),a("br"),a("span",{staticClass:"line-number"},[s._v("69")]),a("br"),a("span",{staticClass:"line-number"},[s._v("70")]),a("br")])]),a("p",[a("strong",[s._v("Echart上的画法：")])]),s._v(" "),a("h2",{attrs:{id:"多个折线-每次只显示一条"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多个折线-每次只显示一条"}},[s._v("#")]),s._v(" 多个折线，每次只显示一条")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://www.jianshu.com/p/b2dfe16ae5e4",target:"_blank",rel:"noopener noreferrer"}},[s._v("多个折线图每次只显示一条"),a("OutboundLink")],1),s._v("\nlegend .selectedMode=single；\n"),a("a",{attrs:{href:"https://echarts.baidu.com/examples/editor.html?c=line-stack",target:"_blank",rel:"noopener noreferrer"}},[s._v("实例文档-折线堆叠图"),a("OutboundLink")],1),s._v(" "),a("strong",[s._v("注意：legend.data和series的name的值要一一对应，否则会直接在图表中显示")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("<template>\n  <div class=\"home\">\n    <div id=\"myChart\" ref=\"chart\" :style=\"{width: '600px', height: '600px'}\"></div>\n  </div>\n</template>\n\n<script>\n// @ is an alias to /src\nexport default {\n  name: 'home',\n  components: {\n  },\n  mounted(){\n    this.drawLine();\n  },\n  methods: {\n    drawLine(){\n        // 基于准备好的dom，初始化echarts实例\n        let myChart = this.$echarts.init(document.getElementById('myChart'))\n        // 绘制图表\n        myChart.setOption({\n      　　title: {\n      　　  text: '折线多选择图'\n          },\n          tooltip: {\n          　　trigger: 'axis',\n          　　axisPointer: {\n          　　　　type: 'cross'\n          　　}\n          },\n          legend: {\n            data: ['气温', '湿度', '风速'],\n            selectedMode: 'single'\n          },\n          xAxis: {\n              type: 'category',\n              boundaryGap: false,\n              data: ['0','1','2','3','4','5','6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18']\n          },\n          yAxis: {\n              type: 'value'\n          },\n          series: [\n            {\n              name: '气温',\n              type: 'line',\n              data: [22.9, 22.6, 22.6, 22.6, 22.7, 24.1,21.3,21.9, 23.8, 25.6, 28, 28.2, 28.5, 28.5, 31, 30.5, 30.6, 29.5, 27.4]\n            },\n            {\n              name: '湿度',\n              type: 'line',\n              data: [100,100,100,100,100,100,100,100,100,100,100,99,95,98,94,92,89,89,97]\n            },\n            {\n              name: '风速',\n              type: 'line',\n              data: [0.3, 0.5,0.6,0.8,0.5,0.7,1.6,0.1,0.7,0.8,1.2,1.1,1.3,1.8,0.6,1.5,0.6,1.1,0.7]\n            },                        \n          ]          \n      })\n    },\n  }  \n}\n<\/script>\n<style>\n.home {\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  align-items: center;\n}\n</style>\n\n\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br"),a("span",{staticClass:"line-number"},[s._v("68")]),a("br"),a("span",{staticClass:"line-number"},[s._v("69")]),a("br"),a("span",{staticClass:"line-number"},[s._v("70")]),a("br"),a("span",{staticClass:"line-number"},[s._v("71")]),a("br"),a("span",{staticClass:"line-number"},[s._v("72")]),a("br"),a("span",{staticClass:"line-number"},[s._v("73")]),a("br"),a("span",{staticClass:"line-number"},[s._v("74")]),a("br"),a("span",{staticClass:"line-number"},[s._v("75")]),a("br")])]),a("h2",{attrs:{id:"tooltip显示单位信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tooltip显示单位信息"}},[s._v("#")]),s._v(" tooltip显示单位信息")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("  tooltip: {\n  　　trigger: 'axis',\n  　　axisPointer: {\n  　　　　type: 'cross'\n  　　},\n      formatter: function (params) {\n          var relVal = params[0].name;\n          const seriesName = params[0].seriesName\n          let unit = ''\n          switch(seriesName){\n              case '气温':\n                  unit = '°C'\n                  break\n              case '湿度':\n                  unit = '%'\n                  break\n              case '降雨量':\n                  unit = 'mm'\n                  break\n              case '风速':\n                  unit = 'm/s'\n                  break\n          }\n          for (var i = 0, len = params.length; i < len; i++) {  \n                  relVal += '<br/>' + params[i].seriesName + ' : ' + params[i].value+unit;  \n          }  \n          return relVal; \n      }\n  }\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br")])]),a("h2",{attrs:{id:"formatter-y轴字符串"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#formatter-y轴字符串"}},[s._v("#")]),s._v(" formatter y轴字符串")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/weixin_34416649/article/details/91659130",target:"_blank",rel:"noopener noreferrer"}},[s._v("echart formatter Y轴字符串的情况"),a("OutboundLink")],1),s._v(" "),a("a",{attrs:{href:"https://echarts.baidu.com/option.html#yAxis.axisLabel.formatter",target:"_blank",rel:"noopener noreferrer"}},[s._v("echarts-yAxis-axisLabel"),a("OutboundLink")],1)])])}),[],!1,null,null,null);n.default=e.exports}}]);