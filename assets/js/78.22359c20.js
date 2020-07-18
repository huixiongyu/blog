(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{422:function(s,a,n){"use strict";n.r(a);var e=n(42),i=Object(e.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"地图"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#地图"}},[s._v("#")]),s._v(" 地图")]),s._v(" "),n("h2",{attrs:{id:"vue-baidu-map插件bm-markder组件嵌套bm-info-window组件使用异常"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vue-baidu-map插件bm-markder组件嵌套bm-info-window组件使用异常"}},[s._v("#")]),s._v(" vue-baidu-map插件bm-markder组件嵌套bm-info-window组件使用异常")]),s._v(" "),n("p",[s._v("现象就是：虽然地理位置能够标准了，到时信息窗口的内容全部都是一样的\n解决方法：在bm-markder最外层套一层div，在上面使用v-for循环数组，注意在每个info-window设置独自的infoShow来控制窗口显示")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('      <bm-marker v-for="item in stationInfoList" :key="item.stationId" :position="{lng: item.longtitude, lat: item.latitude}" :dragging="true" @click="infoWindowOpen(item)">\n        <bm-info-window :show="item.infoShow" @close="infoWindowClose(item)" @open="infoWindowOpen(item)">\n          <Card class="station-info" :bordered="false">\n            <div class="weather">\n              <div class="weather-staion">\n                <div>地址：{{item.address}}</div>\n                <div>经度：{{item.longtitude}}°</div>\n                <div>纬度：{{item.latitude}}°</div>\n                <div>高度：{{item.altitude}}m</div>\n              </div>\n              <div class="weather-detail"> \n                <div class="weather-item">\n                  <div class="weather-pic-test">\n                      <img :src="temperature" alt="">\n                  </div>\n                  <div class="weather-value">气温</div>\n                  <div class="weather-value">{{item.temperature}}</div>\n                  <div class="weather-value">°C</div>\n                </div>\n                <div class="weather-item">\n                  <div class="weather-pic-test">\n                    <img :src="humidity" alt="">\n                  </div>\n                  <div class="weather-value">湿度</div>\n                  <div class="weather-value">{{item.humidity}}</div>\n                  <div class="weather-value">%</div>\n                </div> \n                <div class="weather-item">\n                  <div class="weather-pic-test">\n                    <img :src="rain" alt="">\n                  </div>\n                  <div class="weather-value">降雨</div>\n                  <div class="weather-value">{{item.rain}}</div>\n                  <div class="weather-value">mm</div>\n                </div> \n                <div class="weather-item">\n                  <div class="weather-pic-test">\n                    <img :src="speed" alt="">\n                  </div>\n                  <div class="weather-value">风速</div>\n                  <div class="weather-value">{{item.speed}}</div>\n                  <div class="weather-value">m/s</div>\n                </div> \n                <div class="weather-item">\n                  <div class="weather-pic-test">\n                    <img :src="direction" alt="">\n                  </div>\n                  <div class="weather-value">风向</div>\n                  <div class="weather-value">{{item.direction}}</div>\n                  <div class="weather-value">°</div>\n                </div>                                                                                                                                               \n              </div>\n              <div class="weather-control">\n                <Button type="primary" shape="circle" icon="md-refresh">更新数据</Button>\n                <Button type="info" shape="circle" icon="md-phone-portrait" @click="handleQrcode(item)">获取二维码</Button>\n              </div>\n            </div>\n          </Card>          \n        </bm-info-window>\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br")])]),n("p",[s._v("显示效果：")]),s._v(" "),n("p",[s._v("参考文档：\n"),n("a",{attrs:{href:"https://dafrok.github.io/vue-baidu-map/#/zh/overlay/info-window",target:"_blank",rel:"noopener noreferrer"}},[s._v("info-window"),n("OutboundLink")],1)]),s._v(" "),n("h2",{attrs:{id:"去掉百度地图左下角的logo"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#去掉百度地图左下角的logo"}},[s._v("#")]),s._v(" 去掉百度地图左下角的logo")]),s._v(" "),n("p",[n("code",[s._v(".anchorBL{display:none;}")])])])}),[],!1,null,null,null);a.default=i.exports}}]);