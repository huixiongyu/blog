# HTML&CSS

 ## 1. img在div中居中

```
<div class="img-area">
<img :src="getImgUrl(item.picture)" alt="">
</div>
```

 ```
  .img-area{
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: white;
    img{
      width: auto;
      height: auto;
      max-width: 100%;
      max-height: 100%;
    }
  }

 ```
 也可以直接在div中设置背景，但是目测效果没那么好
 ```
  .img-area {
    width: 40px;
    height: 70px;
    background-repeat: no-repeat;
    background-position: center center;
  }
 ```

 ## 2. 字体小于12px

 ```
  -webkit-text-size-adjust:none;
  font-size: 10px;

 ```

 