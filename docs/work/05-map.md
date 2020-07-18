# 地图

## vue-baidu-map插件bm-markder组件嵌套bm-info-window组件使用异常

现象就是：虽然地理位置能够标准了，到时信息窗口的内容全部都是一样的
解决方法：在bm-markder最外层套一层div，在上面使用v-for循环数组，注意在每个info-window设置独自的infoShow来控制窗口显示
```
      <bm-marker v-for="item in stationInfoList" :key="item.stationId" :position="{lng: item.longtitude, lat: item.latitude}" :dragging="true" @click="infoWindowOpen(item)">
        <bm-info-window :show="item.infoShow" @close="infoWindowClose(item)" @open="infoWindowOpen(item)">
          <Card class="station-info" :bordered="false">
            <div class="weather">
              <div class="weather-staion">
                <div>地址：{{item.address}}</div>
                <div>经度：{{item.longtitude}}°</div>
                <div>纬度：{{item.latitude}}°</div>
                <div>高度：{{item.altitude}}m</div>
              </div>
              <div class="weather-detail"> 
                <div class="weather-item">
                  <div class="weather-pic-test">
                      <img :src="temperature" alt="">
                  </div>
                  <div class="weather-value">气温</div>
                  <div class="weather-value">{{item.temperature}}</div>
                  <div class="weather-value">°C</div>
                </div>
                <div class="weather-item">
                  <div class="weather-pic-test">
                    <img :src="humidity" alt="">
                  </div>
                  <div class="weather-value">湿度</div>
                  <div class="weather-value">{{item.humidity}}</div>
                  <div class="weather-value">%</div>
                </div> 
                <div class="weather-item">
                  <div class="weather-pic-test">
                    <img :src="rain" alt="">
                  </div>
                  <div class="weather-value">降雨</div>
                  <div class="weather-value">{{item.rain}}</div>
                  <div class="weather-value">mm</div>
                </div> 
                <div class="weather-item">
                  <div class="weather-pic-test">
                    <img :src="speed" alt="">
                  </div>
                  <div class="weather-value">风速</div>
                  <div class="weather-value">{{item.speed}}</div>
                  <div class="weather-value">m/s</div>
                </div> 
                <div class="weather-item">
                  <div class="weather-pic-test">
                    <img :src="direction" alt="">
                  </div>
                  <div class="weather-value">风向</div>
                  <div class="weather-value">{{item.direction}}</div>
                  <div class="weather-value">°</div>
                </div>                                                                                                                                               
              </div>
              <div class="weather-control">
                <Button type="primary" shape="circle" icon="md-refresh">更新数据</Button>
                <Button type="info" shape="circle" icon="md-phone-portrait" @click="handleQrcode(item)">获取二维码</Button>
              </div>
            </div>
          </Card>          
        </bm-info-window>
```
显示效果：


参考文档：
[info-window](https://dafrok.github.io/vue-baidu-map/#/zh/overlay/info-window) 

## 去掉百度地图左下角的logo

`.anchorBL{display:none;}`