<template>
  <div class="container">
    <headers></headers>
    <div class="nav">
      <div class="left">产品 > 微波炉</div>
      <div class="right">当前位置： 微波炉</div>
    </div>
    <div class="addAfter">
      <div class="introduce">
        <div class="left">
          <img class="big-img" ref="bigImg" :src="imgUrl" alt="" />
          <div class="thumb">
            <span class="thumb-opeartor1" @click="goBefore(0)"> </span>
            <div class="thumb-body">
              <span class="thumb-item">
                <span
                  :class="['thumb-bgc', { 'active-thumb': isActive == 1 }]"
                  @click="changeChumb(1)"
                >
                </span>
                <img src="../assets/weibolu0.jpg" alt="" />
              </span>
              <span class="thumb-item">
                <span
                  :class="['thumb-bgc', { 'active-thumb': isActive == 2 }]"
                  @click="changeChumb(2)"
                ></span>
                <img src="../assets/weibolu1.jpg" alt="" />
              </span>
              <span class="thumb-item">
                <span
                  :class="['thumb-bgc', { 'active-thumb': isActive == 3 }]"
                  @click="changeChumb(3)"
                ></span>
                <img src="../assets/weibolu2.jpg" alt="" />
              </span>
              <span class="thumb-item">
                <span
                  :class="['thumb-bgc', { 'active-thumb': isActive == 4 }]"
                  @click="changeChumb(4)"
                ></span>
                <img src="../assets/weibolu3.jpg" alt="" />
              </span>
            </div>
            <span class="thumb-opeartor" @click="goBefore(1)"> </span>
          </div>
        </div>

        <div class="right">
          <div class="pro-title">
            EM-310BX
          </div>
          <ul>
            <li>精智变频</li>
            <li>十级或八级变频火力可调</li>
            <li>旋波蒸汽技术</li>
            <li>平台旋波技术</li>
            <li>蒸汽烹饪</li>
            <li>智能快捷菜单</li>
            <li>双面钢化玻璃门</li>
            <li>专用高硼硅钢化玻璃底板</li>
            <li>整体不锈钢炉腔</li>
            <li>高通透门网，6倍精密屏蔽网</li>
            <li>6秒延时启动</li>
            <li>儿童锁</li>
            <li>好记芯</li>
          </ul>
          <div class="tips">
            *具体以实物为准，数据规格如有变更恕不另行通知。
          </div>
          <div class="opeator">
            <span>在线购买</span>
          </div>
          <div class="share">
            <span>分享到:</span>
            <a
              target="_blank"
              href="http://service.weibo.com/share/share.php?title=http://products.diqua.com/detail?goods_id=72#_loginLayer_1592290910919"
            ></a>
            <a
              target="_blank"
              href="http://qr.topscan.com/api.php?text=http://products.diqua.com/detail?goods_id=72"
            ></a>
            <a
              target="_blank"
              href="http://widget.renren.com/dialog/share?resourceUrl=http://products.diqua.com/detail?goods_id=72&title=BCD-592WDGF%E9%83%81%E9%A6%99%E9%87%91"
            ></a>
            <a
              target="_blank"
              href="https://connect.qq.com/widget/shareqq/index.html?url=http://products.diqua.com/detail?goods_id=72"
            ></a>
          </div>
        </div>
      </div>
    </div>
    <div class="detail">
      <div class="detail-title">
        <span @click="index = 0" :class="{ active: index == 0 }"
          >商品介绍
          <p :class="{ pActive: index == 0 }"></p
        ></span>
        <span @click="index = 1" :class="{ active: index == 1 }"
          >规格参数
          <p :class="{ pActive: index == 1 }"></p>
        </span>
      </div>
      <ul
        v-if="!index"
        style="list-style:none; width:100vw; padding:0;margin:0;"
      >
        <li
          style="background: url(http://www.diqua.com/img/product/airpurifier/images01.jpg) no-repeat center top;width:100%;height:602px;"
        ></li>
        <li
          style="background: url(http://www.diqua.com/img/product/airpurifier/images02.jpg) no-repeat center top;width:100%;height:546px;"
        ></li>
        <li
          style="background: url(http://www.diqua.com/img/product/airpurifier/images03.jpg) no-repeat center top;width:100%;height:552px;"
        ></li>
        <li
          style="background: url(http://www.diqua.com/img/product/airpurifier/images04.jpg) no-repeat center top;width:100%;height:1024px;"
        ></li>
        <li
          style="background: url(http://www.diqua.com/img/product/airpurifier/images05.jpg) no-repeat center top;width:100%;height:924px;"
        ></li>
        <li
          style="background: url(http://www.diqua.com/img/product/airpurifier/images06.jpg) no-repeat center top;width:100%;height:552px;"
        ></li>
        <li
          style="background: url(http://www.diqua.com/img/product/airpurifier/images07.jpg) no-repeat center top;width:100%;height:796px;"
        ></li>
        <li
          style="background: url(http://www.diqua.com/img/product/airpurifier/images08.jpg) no-repeat center top;width:100%;height:736px;"
        ></li>
        <li
          style="background: url(http://www.diqua.com/img/product/airpurifier/images09.jpg) no-repeat center top;width:100%;height:548px;"
        ></li>
        <li
          style="background: url(http://www.diqua.com/img/product/airpurifier/images10.jpg) no-repeat center top;width:100%;height:668px;"
        ></li>
      </ul>
      <div v-else class="canshu">
        <div class="detail-tit">EM-310BX</div>
        <div class="detail-body">
          <div>容量：23L</div>
          <div>拉门方式：侧拉门</div>
          <div>控制方式：电子式</div>
          <div>微波功率（W）：1000</div>
          <div>能效等级：1级</div>
          <div>外观颜色：玫瑰金</div>
          <div>门玻璃：印花</div>
          <div>外形尺寸：520*398*312mm</div>
        </div>
      </div>
    </div>
    <bottom></bottom>
  </div>
</template>
<script>
export default {
  data() {
    return {
      index: 0,
      isActive: 1,
      imgUrl: require("../assets/weibolu0.jpg"),
    };
  },
  methods: {
    changeChumb(res) {
      this.isActive = res;
      this.imgUrl = require("../assets/weibolu" + (res - 1) + ".jpg");
      // this.$refs.bigImg.src = this.imgUrl
    },
    goBefore(res) {
      if (this.isActive < 5 && this.isActive > -1) {
        if (res) {
          this.isActive += 1;
          if (this.isActive == 5) {
            this.isActive = 4;
          }
        } else {
          this.isActive -= 1;
          if (this.isActive == 0) {
            this.isActive = 1;
          }
        }
        this.imgUrl = require("../assets/weibolu" +
          (this.isActive - 1) +
          ".jpg");
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@mixin keyframes($animationName) {
  @-webkit-keyframes #{$animationName} {
    @content;
  }
  @-moz-keyframes #{$animationName} {
    @content;
  }
  @-o-keyframes #{$animationName} {
    @content;
  }
  @keyframes #{$animationName} {
    @content;
  }
}
@include keyframes(move) {
  25% {
    transform: translateX(2px);
  }
  50% {
    transform: translateX(10px);
  }
  75% {
    transform: translateX(2px);
  }
  100% {
    transform: translateX(0px);
  }
}
.nav {
  width: 100%;
  height: 37px;
  padding: 0 20px;
  background: #d50080 url(http://www.diqua.com/img/common/pagepath_bg.gif)
    repeat-x left top;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  div {
    &:first-child {
      @media screen and (max-width: 1250px) {
        margin-left: 20px;
      }
      margin-left: 250px;
      font-size: 18px;
    }
    &:nth-child(2) {
      @media screen and (max-width: 1250px) {
        margin-right: 50px;
      }
      background: url(http://www.diqua.com/img/common/icon01.gif) no-repeat left
        center !important;
      padding: 4px 10px;
      font-size: 12px;
      margin-right: 270px;
      // opacity: 0.8;
    }
  }
}
.container {
  font-family: Helvetica Neue, Helvetica, STHeiTi, sans-serif;
  .addAfter {
    text-align: center;
    width: 100%;
    height: 700px;
    background: url(http://products.diqua.com/static2/img/detail_slide_bg.1e3a9f0.jpg)
      no-repeat;
    background-position: center;
    background-color: #f7f7f7;
  }
  .introduce {
    width: 990px;
    text-align: left;
    margin: 0 auto;
    padding-top: 80px;
    padding-left: 30px;
    display: flex;
    // justify-content: center;
    // padding: 76px 0;
    .left {
      margin-right: 50px;
      // margin-left: 290px;
      .big-img {
        width: 423px;
        height: 469px;
      }
      .thumb {
        height: 63px;
        width: 425px;
        // margin-top: 20px;
        margin: 0;
        // background-color: #fff;
        display: flex;
        overflow: hidden;
        justify-content: space-between;
        // align-items: center;
        .thumb-body {
          width: 350px;
          // flex: 1;
          .thumb-item {
            //   padding: 0 10px;
            height: 63px;
            width: 80px;
            display: inline-block;
            z-index: 10;
            margin: 0 2px;
            position: relative;
            .thumb-bgc:hover {
              background: url("../assets/detail_slidephoto_on.gif") no-repeat
                center center;
              // background: none;
            }
            .thumb-bgc {
              position: absolute;
              // display: inline-block;
              left: 0;
              // right: ;
              top: 0;
              // background: url("../assets/detail_slidephoto_on.gif") no-repeat
              //   center center;
              height: 103%;
              width: 107%;
              z-index: 999;
            }
            .active-thumb {
              background: url("../assets/detail_slidephoto_on.gif") no-repeat
                center center;
            }
            img {
              border-radius: 5px;
              padding-left: 1px;
              // padding-bottom: 1px;
              padding-top: 2px;
              margin: 0 2px;
              // border: 1px solid rgba(189, 195, 199, 1);
              height: 60px;
              width: 80px;
            }
          }
        }

        .thumb-opeartor {
          transition: 0.2s;
          height: 62px;
          width: 42px;
          background: url(data:image/gif;base64,R0lGODlhKAA8ANUAAOTr7+ju8ebt8MHL0Oft8eXs7+Xs8Ofu8env8uPr7uft8OPr7+Pq7ubs8Onu8tDZ3cPN0tDY3cXP1NLb39Tc4NPb38PM0eHo7MbP1N3k6N7m6t3k6dPb4N3l6MjS1tHZ3ufs8M7X29La3tPc4MfR1uPq7dLa383W2szW2t/m6cbQ1MnS1t3l6eHp7NDa3t/l6dTb4M/Y3OPp7dDZ3tfe49zk6MLM0eLp7N7l6t7l6dbe4gAAAAAAAAAAAAAAAAAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS4zLWMwMTEgNjYuMTQ1NjYxLCAyMDEyLzAyLzA2LTE0OjU2OjI3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjc4RkUzMDNBRDQxMkUzMTFBMUExRDYzOUEzNDY4Rjg1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkM4QkM0NDQ0NkQ1NDExRTNBNjYyRTUwQjdGRjAwNzczIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkM4QkM0NDQzNkQ1NDExRTNBNjYyRTUwQjdGRjAwNzczIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5ODRCMjBCNjNEMjA2ODExODA4MzhDMDNCRDEwQzA2QyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3OEZFMzAzQUQ0MTJFMzExQTFBMUQ2MzlBMzQ2OEY4NSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgH//v38+/r5+Pf29fTz8vHw7+7t7Ovq6ejn5uXk4+Lh4N/e3dzb2tnY19bV1NPS0dDPzs3My8rJyMfGxcTDwsHAv769vLu6ubi3trW0s7KxsK+urayrqqmop6alpKOioaCfnp2cm5qZmJeWlZSTkpGQj46NjIuKiYiHhoWEg4KBgH9+fXx7enl4d3Z1dHNycXBvbm1sa2ppaGdmZWRjYmFgX15dXFtaWVhXVlVUU1JRUE9OTUxLSklIR0ZFRENCQUA/Pj08Ozo5ODc2NTQzMjEwLy4tLCsqKSgnJiUkIyIhIB8eHRwbGhkYFxYVFBMSERAPDg0MCwoJCAcGBQQDAgEAACH5BAAAAAAALAAAAAAoADwAAAb/QISCohoYj8ikconEwEDCVaSEqFqv2KwW4ejKIh4QJbItb7tdLrobq2Co5nK6G6ij7fUbZhC/ru90dXYOgoJGZ39qf4WMjQFGcw6KhAGLjpeMkJKElpSYn4VGlYGgpZiipqmfqKqtmQOusQEHj7Cynwe0ubust4K5s7u7s72uw8HCyQfFoMLIwgQEB9HU0cy/dcrK0bnV3gSi2uLT1OTf5+Cw48no7d4KRuvd7vTU8APk5vXtCv3+/0b2faNhwp4CAv4ECOinUGFAgfZSQBDxT8FCiw0zPkTXD2FFBS8gTEh4EWNGARs/qvwnIIfIhSdjohyw8uNJjCwgVJAZ08hK/54yO+gE2tCITJNEGwrdSdRo0qcCOlgY0bCBVYVWncp8wLWr169cPQygKsCq2awDgIJdG6EtmAEUzjYwQNeA1qRXM57NYCOu1bqA78q8KlduBgscACumezdvWbOPzdKdWwPx4sVGCjeILPlyBgiJLyvO/NdAZ9OiDWwQmdpAgdcFSM9tvXj1hMWv6cJ+bYS26NUmdBdwvbt47AG+L+sQMZy4ceO9Uz+fTn13dMDVsxcHwL17b+3gd3cfD8BI+Onk05M3f169e/Xst7+fT98I9wL08+e3r7//fP7+BbjeAAIWuMAC5RFYoH4IHngggAuSdyB3DlYIoYATZljhgQl0mHLAhe9VSOGGDnZYoocgAiBigyRy6OGLMDLAgH0TjtiiiTjCqKOMCchohIgqnqjjkB7KaOSRM0qgQQIVEhkjklBCqYEELoTg5Is8dhjllkaGMEMLJKCwZI9GPsnlmTicQMIFCVzwgQRMxClnEhJ8cAEDQQAAOw==)
            no-repeat center center;
          &:hover {
            background: url(data:image/gif;base64,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)
              no-repeat center center;
          }
        }
        .thumb-opeartor1 {
          transition: 0.2s;
          height: 62px;
          width: 42px;
          background: url(data:image/gif;base64,R0lGODlhKAA8ANUAANrk6dji6Nnj6Nnj6cHL0Nvl6tfi59jj6Nfi6Nvk6dvk6tbh59fh59zl6svV2sLM0czW283X3NPd4sTO08zX3MbQ1crU2dPe5NLd4tXf5NTe49jh5tPe48XP1Nbg5cPO09Xg5tPd48nT2M7Z3tXf5c/Z3svV29zm68nT2c7X3MzW3MjS2AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS4zLWMwMTEgNjYuMTQ1NjYxLCAyMDEyLzAyLzA2LTE0OjU2OjI3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjc4RkUzMDNBRDQxMkUzMTFBMUExRDYzOUEzNDY4Rjg1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkM4QkM0NDQwNkQ1NDExRTNBNjYyRTUwQjdGRjAwNzczIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkM4QkM0NDNGNkQ1NDExRTNBNjYyRTUwQjdGRjAwNzczIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5ODRCMjBCNjNEMjA2ODExODA4MzhDMDNCRDEwQzA2QyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3OEZFMzAzQUQ0MTJFMzExQTFBMUQ2MzlBMzQ2OEY4NSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgH//v38+/r5+Pf29fTz8vHw7+7t7Ovq6ejn5uXk4+Lh4N/e3dzb2tnY19bV1NPS0dDPzs3My8rJyMfGxcTDwsHAv769vLu6ubi3trW0s7KxsK+urayrqqmop6alpKOioaCfnp2cm5qZmJeWlZSTkpGQj46NjIuKiYiHhoWEg4KBgH9+fXx7enl4d3Z1dHNycXBvbm1sa2ppaGdmZWRjYmFgX15dXFtaWVhXVlVUU1JRUE9OTUxLSklIR0ZFRENCQUA/Pj08Ozo5ODc2NTQzMjEwLy4tLCsqKSgnJiUkIyIhIB8eHRwbGhkYFxYVFBMSERAPDg0MCwoJCAcGBQQDAgEAACH5BAAAAAAALAAAAAAoADwAAAb/QIAgMiEYj8ikcomcRAonQcXiAViv1oQ2oegWvuBwoUEubxyVRMSCbWe3XLF8XC47UpOq273teudgdQ0bRQN7e1p+f4CCDUYDkIdtfX6AX4KPkZKTiYtzdZmGm1hwnpaOBJCao29clZZjoaujcK4Kp6iqqqwAtYq3gEYCArq8V52vc8LEuqKslMliy83Fz5TBBMPD1M60yMrZ2tTGvddyy+Ljz1m/Yeja29W80H9GB/Dp8vO2wPb48eqs8VPg7x9AfZJK+SlokBuEEvs6GQlwoKJBgBAeZIiYaCLFexchZdQAYFbCLR4rgoSnSsUDDQg3aUmpUiW8jCGakZtJIIDP/582h2WUwEznPI8/P4KM8IBo0YAJkQJVydTpwZh7pE6lQKCCg69gw4r9Kkkr0Ahdx6oNW7Zn0qQHmGJYmQ8rFrNwKTzA0BCqGyMIELzN25TuVZN3CQQe/Fav1bp+AQBezNjngaH/uCE2YoByZZ8ZOfTllriz4M8/QxvWvEsyAdOeP0MYYZjZYSucYZ/+XPPiU125Dejezbhm7cPBhQeOXTxo5mbJlS9HrdQiy4PRhcNGbTykquzSiVfuPRp8587Up1rPbISBe+3wh/Mm/6/9+/jhmb+lj8+++//wISAdd8YZ5t9/DOC3XXrODWPEAgsgqKBuDNL3IIQRIphgfIvpB2OXcxdimOF9HE5H3XohYiihgiZWeECKIq5YonjjVQRjjCQG6GFzBHxwgYg4Aojfci0OdgAJEziAApBAashheKhZAAEIHazwI5Mj5qjjZxmI0AEDC4BgwgdMlGlmEhNAwEAAQQAAOw==)
            no-repeat center center;
          &:hover {
            background: url(data:image/gif;base64,R0lGODlhKAA8AOYAAMvV2t7MtNzl6sLM0d3LtODNtd/Rvd/MtN3Ls8zW297QvN3MtNPd4uDRveDMtNzKs9/QvODMtd3Ks83X3MzX3N/QvexzFuebXeheKdk2gtPe48bQ1eBFWOZSNeRVQMHL0Ot5IdLd4tTe4+x1F+aaXO9/C9jZ1eS2gtza5t7Hq+VsQ+GlgNuyrNhqr9lsrup3K87Z3tdqr9bg58/Z3tprkOK+l9bW4tPd49ra1tzm693Fqtjh6NjW4uZtQ+NWTdttkd2yreZVMuZWMd9xceW3g+p3Kt9DWOBDWNbV4djW48zW3ODBn+JVTdXf5NrY5OKlgep4J9hrreLBndzY5OO/l99ycdrX49bh59fh5+pmIdvk6tvk6dfi6OliJdjj6Nfi59vl6tnj6Nnj6dji6Nrk6QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS4wLWMwNjAgNjEuMTM0Nzc3LCAyMDEwLzAyLzEyLTE3OjMyOjAwICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RkIwM0M4MDg5QjJCMTFFQUJBMTRBNUVFMDQwNTJGNjciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RkIwM0M4MDk5QjJCMTFFQUJBMTRBNUVFMDQwNTJGNjciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGQjAzQzgwNjlCMkIxMUVBQkExNEE1RUUwNDA1MkY2NyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGQjAzQzgwNzlCMkIxMUVBQkExNEE1RUUwNDA1MkY2NyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgH//v38+/r5+Pf29fTz8vHw7+7t7Ovq6ejn5uXk4+Lh4N/e3dzb2tnY19bV1NPS0dDPzs3My8rJyMfGxcTDwsHAv769vLu6ubi3trW0s7KxsK+urayrqqmop6alpKOioaCfnp2cm5qZmJeWlZSTkpGQj46NjIuKiYiHhoWEg4KBgH9+fXx7enl4d3Z1dHNycXBvbm1sa2ppaGdmZWRjYmFgX15dXFtaWVhXVlVUU1JRUE9OTUxLSklIR0ZFRENCQUA/Pj08Ozo5ODc2NTQzMjEwLy4tLCsqKSgnJiUkIyIhIB8eHRwbGhkYFxYVFBMSERAPDg0MCwoJCAcGBQQDAgEAACH5BAAAAAAALAAAAAAoADwAAAf/gGROMRwdWYeIiYqLjIcdHC0oOVYZRSQ1CpmaChCdEBWgBqKjpAYNp6dUFy8ZU1EgJ2Sys7RbtrZaYLq7vLoCv8BEIC5GJLTHtbhay73NwL8XR0JLyNVkysu5zbvPAlJBXQFiYtbHt9na22DPBV3h4+XI58zq67/t7+Txycr1vPji4O2bNY9ePYDjBA68ha2eAIQJ9e1juAVdul4Aw0QcmMyiuowRFU7EZvCfuwAaQybkyLDkroxhUobkeK0hxpMxZa6k2fKiLpgxVUqMt0VWRXQvcebMOZMnyVz4Fixl2tQp0qhTgwp1enRZBHdSs2qtSrTg1y5hxQpNMIPlubME/7zIFTs2wYAmbm/BHTOX7ji7IsiILHfLgTsCfPsuTahkgIiNPA13QSy3suIwdm+QnSgZ8ZjPib3ktMtA586BnUF/rhxzwoDSpiHHS63asmvYYzdXO3BY9WovFD5sAEC8uPHjxK3xnux79QThyKMbV967OV/XIURP3VpuuWfrwAeEUKuy+2Eu1ldTeK19cfnd59ODXo+bqtChZLxzQS/fC+ms9+G3HAL7yQeaXRqQx11+7hDIn4FjINheblsNuF+BECYAw4RaUUjOgF9c+GB6ltEVmxgBNPjFiiKO2JxlHNo3TopdILAiixdCWKKCM6p4Y4g5GgjjdmPRaOOPOLro28SQChqJZJIQhhajVk4+yUWIUf522VI0SoAFFk8miSF4O07V5ZdhAhkkiaxldeaXcP54JZBCwjjhm3CCaeWYdd7pzgNX5JmmiFEySSOgVwSap55yosfni20emuikgu75KJkxSTqpomiGuaaOXizw56aUxmlplnKJioEOpJbKaKNKkpgCBh6s0Gqii3raYn9PeEBDCSbcimulN875qW84QPEDEkyowIIMt+aqa3o7ANGDDzxcYcMQI1jQyLfgImLBCFUkMUYgADs=)
              no-repeat center center;
          }
        }
      }
      .big-img {
        height: 440px;
        // padding: 30px 5px;
        border: 1px solid rgba(189, 195, 199, 0.7);
        margin-bottom: 12px;
      }
    }
    .right {
      width: 400px;
      padding: 20px 0;
      position: relative;
      .pro-title {
        font-size: 36px;
        color: #ef8009;
        font-family: microsoft yahei;
      }
      ul {
        padding-top: 8px;
        padding-left: 4px;
        padding-bottom: 10px;
        width: 140%;
        display: flex;
        flex-wrap: wrap;
        list-style: none;
        li {
          line-height: 1.7;
          background: url(data:image/gif;base64,R0lGODlhBQAFALMAAJ6enrS0tPDw8fLy8pubm7W1tbe3uLGxspmZmQAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS4wLWMwNjAgNjEuMTM0Nzc3LCAyMDEwLzAyLzEyLTE3OjMyOjAwICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjc4RkUzMDNBRDQxMkUzMTFBMUExRDYzOUEzNDY4Rjg1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkY2RTU3OEM4Njk0MTExRTNCNzgzQjg2RjExMjg5RDM1IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkY2RTU3OEM3Njk0MTExRTNCNzgzQjg2RjExMjg5RDM1IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzUgV2luZG93cyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkI5RTVEN0REMkQ2OUUzMTE4MzlEQkI3RkQyMUIzN0EwIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjc4RkUzMDNBRDQxMkUzMTFBMUExRDYzOUEzNDY4Rjg1Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Af/+/fz7+vn49/b19PPy8fDv7u3s6+rp6Ofm5eTj4uHg397d3Nva2djX1tXU09LR0M/OzczLysnIx8bFxMPCwcC/vr28u7q5uLe2tbSzsrGwr66trKuqqainpqWko6KhoJ+enZybmpmYl5aVlJOSkZCPjo2Mi4qJiIeGhYSDgoGAf359fHt6eXh3dnV0c3JxcG9ubWxramloZ2ZlZGNiYWBfXl1cW1pZWFdWVVRTUlFQT05NTEtKSUhHRkVEQ0JBQD8+PTw7Ojk4NzY1NDMyMTAvLi0sKyopKCcmJSQjIiEgHx4dHBsaGRgXFhUUExIREA8ODQwLCgkIBwYFBAMCAQAAIfkEAAAAAAAsAAAAAAUABQAABA9wGGJGQPgAjMjNQoEUQgQAOw==)
            no-repeat left center;
          // display: inline-block;
          width: 35%;
          padding: 0 12px;
          color: #666;
          font-size: 14px;
          // margin: 2px 0;
        }
      }
      .tips {
        padding-top: 3px;

        padding-left: 4px;
        font-size: 12px;
        color: #888;
      }
      .opeator {
        position: relative;
        margin: 10px 4px;
        &::after {
          content: "";
          position: absolute;
          left: -30px;
          bottom: -30px;
          height: 20px;
          width: 100%;
          background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAAAbCAYAAAAu0FDWAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo3OEZFMzAzQUQ0MTJFMzExQTFBMUQ2MzlBMzQ2OEY4NSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0ODNBQjM0NTY5NDIxMUUzOEM5NUFBQkNEODc3MDJEOSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0ODNBQjM0NDY5NDIxMUUzOEM5NUFBQkNEODc3MDJEOSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IFdpbmRvd3MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCQUU1RDdERDJENjlFMzExODM5REJCN0ZEMjFCMzdBMCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3OEZFMzAzQUQ0MTJFMzExQTFBMUQ2MzlBMzQ2OEY4NSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PvQHshMAAAMbSURBVHja7FztboQwDMOs7//Gh/dnkxDXpkmaAnck0jREvwK1G6crA8klLe3ptuYrSEtLIqSlJRHS0v4NF47Jh7+HO9kd5+JUn4oDJAwCD5IIaRPmhB3cmoiAQQcTWKkMropgUNxnjQi46KXtQ2AtHCIBdmsJE/EMPQyMvFcTWcqEyYSxHBPHypX7frkGOve0hKBxHLU0QsCEIHgCcTKonijpGBh1EEAUlZT5K6dhHEh1SwCwMYE8ESBFMMnwRWAfrRvRHw314CSLliDc5wgQBoYT1FC2bdWRxrH4FBGpPj1acKAejcBmpx6dxNgU+YbkWysnQREm3KLlYQDpKgAVQn0IPsLpPxQvcYRECCbQFgB6Kvunkgxs/D7eY6dMc/9HMWYvolBKlr0JLDqAXgVAo/JTK18qddZGec8PLZkXwwLhJdKMVZ0D2p+d1Z0CCI/Xm9C2db01+q/1hUo0YCc3YCO3eJNGlpVfu4JLAIZQ7/96bRCmVa4lJTrPigACzJJT3t2UzUEaiQQ1smyHNsefrdE3d/NzrP+zuz4CHoboB4kMxTABtfDCgGTZI0kwaVwEAfiM3S4G+MTg8UZ2epbB+uyAX7RiXIlakYCVa1batiTMWunz1Ygux4ihkUYa8syICGdLI29E0LTTSKOtIX+O5UtF/tAQjWr+ooI9NelKJ5mgYYuKDT3WAuf+/ktRv5dw92SPZidKA2Drid2ziaDdubHs2tCQLGtJowE4BTkmkdu688WiyKypCK04OCtFBxjAZdn6XB1AXCcD2irfGEgEbzSx+kBlhOmBlAayWjYCVH4VYWW3aC0qM/QWODYjQEeOcdxR9882TmpP53h0kp7O8SmolzdpRAWwrQkSFateDWCvE5PObwF7FMh5ESE5SGLPH/260sibnMGR/XuO1M4iQtp1RDgzIonSiAbAWM+FeI9XcyKY89933JtE0fmS68McqQMEPUDE9wh3BTM+CHBXksX7PUL4OyqL7ciqdgAriPnFk502putPSf6LQ/cziCxPWsGTuOc/S8g3y9EJidmxtMcSIQonpna/AgwA2ZxsZBP6tIEAAAAASUVORK5CYII=)
            no-repeat left 100%;
        }
        span {
          font-size: 12px;
          display: inline-block;
          cursor: pointer;
          height: 18px;
          width: 76px;
          padding: 8px 10px;
          line-height: 17px;
          color: #999;
          // border: 1px solid gray;
          background: url(data:image/gif;base64,R0lGODlhDwAPAJEAANHR0ZSUlP///wAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS4wLWMwNjAgNjEuMTM0Nzc3LCAyMDEwLzAyLzEyLTE3OjMyOjAwICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjc4RkUzMDNBRDQxMkUzMTFBMUExRDYzOUEzNDY4Rjg1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjA0QTExOTcwNjk0NzExRTNBRDJEOEY5NDdFRTY5NEQxIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjA0QTExOTZGNjk0NzExRTNBRDJEOEY5NDdFRTY5NEQxIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzUgV2luZG93cyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkJBRTVEN0REMkQ2OUUzMTE4MzlEQkI3RkQyMUIzN0EwIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjc4RkUzMDNBRDQxMkUzMTFBMUExRDYzOUEzNDY4Rjg1Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Af/+/fz7+vn49/b19PPy8fDv7u3s6+rp6Ofm5eTj4uHg397d3Nva2djX1tXU09LR0M/OzczLysnIx8bFxMPCwcC/vr28u7q5uLe2tbSzsrGwr66trKuqqainpqWko6KhoJ+enZybmpmYl5aVlJOSkZCPjo2Mi4qJiIeGhYSDgoGAf359fHt6eXh3dnV0c3JxcG9ubWxramloZ2ZlZGNiYWBfXl1cW1pZWFdWVVRTUlFQT05NTEtKSUhHRkVEQ0JBQD8+PTw7Ojk4NzY1NDMyMTAvLi0sKyopKCcmJSQjIiEgHx4dHBsaGRgXFhUUExIREA8ODQwLCgkIBwYFBAMCAQAAIfkEAAAAAAAsAAAAAA8ADwAAAiCEjoErxsqOWzDOFGWs7B6+eAKIiKRpbemzUi3WqTEbFQA7)
            no-repeat;
          background-position: 90%;
          background-color: #fff;
          &:hover {
            color: white;
            background: url(data:image/gif;base64,R0lGODlhDwAPAJEAANNOV+yzt8ABDwAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS4wLWMwNjAgNjEuMTM0Nzc3LCAyMDEwLzAyLzEyLTE3OjMyOjAwICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjc4RkUzMDNBRDQxMkUzMTFBMUExRDYzOUEzNDY4Rjg1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkU4Q0VCOTAzNjlGNzExRTM5MjY1QUE5NUEzRTRDMENBIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkU4Q0VCOTAyNjlGNzExRTM5MjY1QUE5NUEzRTRDMENBIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzUgV2luZG93cyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkJBRTVEN0REMkQ2OUUzMTE4MzlEQkI3RkQyMUIzN0EwIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjc4RkUzMDNBRDQxMkUzMTFBMUExRDYzOUEzNDY4Rjg1Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Af/+/fz7+vn49/b19PPy8fDv7u3s6+rp6Ofm5eTj4uHg397d3Nva2djX1tXU09LR0M/OzczLysnIx8bFxMPCwcC/vr28u7q5uLe2tbSzsrGwr66trKuqqainpqWko6KhoJ+enZybmpmYl5aVlJOSkZCPjo2Mi4qJiIeGhYSDgoGAf359fHt6eXh3dnV0c3JxcG9ubWxramloZ2ZlZGNiYWBfXl1cW1pZWFdWVVRTUlFQT05NTEtKSUhHRkVEQ0JBQD8+PTw7Ojk4NzY1NDMyMTAvLi0sKyopKCcmJSQjIiEgHx4dHBsaGRgXFhUUExIREA8ODQwLCgkIBwYFBAMCAQAAIfkEAAAAAAAsAAAAAA8ADwAAAiCEjoErxsqOWzDOFGWs7B6+eAKIiKRpbemzUi3WqTEbFQA7)
              no-repeat;
            background-position: 90%;
            background-color: #c0010f;
          }
        }
      }
      .share {
        border-top: 1px solid rgba(189, 195, 199, 0.7);
        border-bottom: 1px solid rgba(189, 195, 199, 0.7);
        position: absolute;
        bottom: 0px;
        left: 4px;
        height: 20px;
        padding: 20px 10px;
        // background-color: #fff;
        width: 100%;
        display: flex;
        align-items: center;

        span {
          color: #8a9fa8;
          font-size: 12px;
          margin: 0 10px;
        }
        a {
          display: inline-block;
          width: 28px;
          height: 27px;
          margin: 0 2px;
          &:nth-child(2) {
            background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAbCAYAAABvCO8sAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowNTgwMTE3NDA3MjA2ODExODA4MzgyRDhGM0VBNzVBOCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDOUNERjRCOTcxMUExMUUzQjY4OUJDMUI4RDdGMjRENyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDOUNERjRCODcxMUExMUUzQjY4OUJDMUI4RDdGMjRENyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDE4MDExNzQwNzIwNjgxMTgyMkE5OTE4OTMzMzFGNTUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDU4MDExNzQwNzIwNjgxMTgwODM4MkQ4RjNFQTc1QTgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5nDqyHAAAC5klEQVR42rSWbWiOURjHn2cewzOvEz6M8AzNvJQ0ah/4IFKmtA8ykpKJIfNSo8g+DCkva0X4IKGU5aW8xJaMFoZPZlOyaR9skYRZlhi/a/1vne7uPc/K81z167rvc859/uc+57rOOeGWlpaQY6tgC8yBjND/2zd4Ckeh1grSnMpTsBeOwDgIJ4GJcB7OQpmJRCS2FuZBPnSFkmdf4DLch2f2t57gTpFMMdc+QjmU2pSmw3R4GEqt2RrmmeAQ6IaeFAt+h6GRZPTU2tq6HbcfRsMnuAZVsVisyd82LUmjHwMdcAk6YSO8YiCb/A3D5OEIfBuMTPAXM3EFMBUaGX2lr36A9Uf5L55n8VwPw2EhZY/wvTqRfkyXrXEVbPCVN9FRrVO0B7ZS/pnyGfgc3tvhNOR6jSIJxLJx9yA7oDpMfRS/BKZoSi2Xb1LejGguvoH3+e5HkThilir2wbA+mhyC8dqVPLPpLoUHTv4lDhrELNoexxEzm+sTM8sDW68CrelypUPCKL3lC6JqBUymZsXqFkEFuLt/FlPZA7d5/gMHYU3cKGVkhbirqredvpgOLMRHSdTa1VHWqPa2SR/XVJq9hUKv3rFenSDBGtxihf5slR3TXutaJfU7nGWosxTQ6zuYZiniFwya0hz5Xeoo3xHr1t//sD+ibpLzXY3zPBkGBa1VkGCHfLt8MXxltGENJqazzizqfLfMeW6gfVd/BQ/LV8jfsengb1bid+s2MBiu02mzZqFMZ6ln2/oK7cCtjQ5O4koUnXbtWCox2wBewkXErtAuUwPbrE9/QxF11QFawUHjiK7X1cDC+xy8V059UNk67TKe2clejtibPn4uvqAjvBq3QoEwECYoH+0YegE34C5CbQm25X+C6bpdRVN8CGfZvcaC5ie8hgUpPvEtt597UXpCd8eMFImNhQO2WXiCF7Qe9YrIZAnbulk6PYEztiW6x5NdB4pgn3ItmgTBTu3HJTpXQ38FGAA8tvvf0MauxQAAAABJRU5ErkJggg==)
              no-repeat 0 0;
            &:hover {
              background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAbCAYAAABvCO8sAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkY1QjU0OTU0OUIyOTExRUFBMTExODFBMTU4QkMzQTA0IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkY1QjU0OTU1OUIyOTExRUFBMTExODFBMTU4QkMzQTA0Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RjVCNTQ5NTI5QjI5MTFFQUExMTE4MUExNThCQzNBMDQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RjVCNTQ5NTM5QjI5MTFFQUExMTE4MUExNThCQzNBMDQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6PTqNnAAAC2UlEQVR42ryWa2iNcRzHzzmOscltC8kl5pJbwprbC29kbzYSRRGxwjJyLV4MU5spIZRrViSK5pLbIbm9kLWUZtsL5QXKInOfywvm86vvU0+n8zznOXbmV5/z+5/n+f+f7///+//+l/DH8syQrDOsgeUwErqE2m/v4S5U9drx/ak9iOpFFtyEb7AC7OWvIF/kQ57vPu3M6o+bDzHKpdStCWuEh6A3LIG2VIbgJ+gSHo+7A3kRfnrAUliXqlgKnarHnYISEzT1JmgJdazZCPNNsOd/EDNrhcxoOr7EHNl0bIMcZeZFOEgoG+PrRtLU+z7QDGfgK6yEBjpS0h7BcbAVTsL6uKQow02wNUw5V3nxBY4gOiNVQVs3J+CZLWAohv0wK66edeY1Ao2IWt1Ren7UXSnZHA6DW/LxFrYNA4EC/HCFdDJc5VkTomPwtfyfElRwNFiD7h7vd8FA6Od6NkLhvqf/74LOoWXbIx8xs7w4MbN8eAhFjK4Tfra2y6SC1ywXXP8v2EcgW1GxdzOhAl646g0glH/gunatSlicLKTzYKrKj7WZN2ivLZLYfZ0CxnbYp1DuYWSr7BtKnLIgIXXWjjWYJrG98AFO24KGemWqLYk22EDxgdpZAl1BOGF+JBJ00nmT/HTYqPJPqIEfGtEQV7vbrvJQr/M0kWCz/Bt5C+lnLQPrTK7KzjnqWKGrXMuoW4MKVslXyN/QBr8ANsNE6AqXdMrYXrpFkXBsrVdqJxK8DIdhLpxXCAs1t3OUwQuVXNmIWd3davvbOsbo6rwEvRZ+KTyB47pqVCszTeyt2tkOVOBqcw7KEXvut3X57TTVYpFGO0kXrUFaj3YMxRSRGEIvg5wAUSVEjk+ds+Kf7zSybpbdEa23sep1R5rtTHURjdAuOAdc6Z5W061tGRxzstTSerCSwo6TjDQJ9YXVSjC7l74Ku27eGcrOYt280yHaoqOq0rl5/xVgAA6qygYNoeFWAAAAAElFTkSuQmCC);
            }
          }
          &:nth-child(3) {
            background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAbCAYAAABvCO8sAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowNTgwMTE3NDA3MjA2ODExODA4MzgyRDhGM0VBNzVBOCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDOUNERjRCRDcxMUExMUUzQjY4OUJDMUI4RDdGMjRENyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDOUNERjRCQzcxMUExMUUzQjY4OUJDMUI4RDdGMjRENyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDE4MDExNzQwNzIwNjgxMTgyMkE5OTE4OTMzMzFGNTUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDU4MDExNzQwNzIwNjgxMTgwODM4MkQ4RjNFQTc1QTgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz76moTpAAACaElEQVR42rSWXUgVQRTH710/EBNLSC1CqGtghN8S0UsZEVEIBkVQQeV9FwlECUIFCbKC6qGeKiIoDIJ66aGgL6EwKgzqJereCqJEfejDlCLN34mzsAzr7lS7B34Ms7uz/zlzzpyZZCaTSXhsJ3RAAyxI/L99g8dwAm7JA8fz8jT0wgAsgWQEVMA5OAOHRSRXxfbCBlgHk4no7AtchXswDI9cDw9CZ8RiXhuDHtFx1MsanUWcdgfWOJoc0zATs+AUFOQGfZHNZiXwu2AbrIJi+CqvdMaDqVTqr8KQZFsspH0PiwyxVk3nlQHjx6EP0bMWWn90nHk8S9PcCBETK5WU5/tTth46PmKVNOc9j9bqUk57nskyF8FH7Xcwbt8/CWJdRr8KqnUju7YcmmEpfIAX0Goj6Jc0jUb/ks83x+AzXIDfWpkq8fI67UsJB3F9ZitoY7dhBNZrdXKtDrZLGUP8Cm0a4R9hS/owROwpPIduQ8y0PfIvhHPCBAcCisCMepbWviRSuY4R+6lxPaL9JjgUKMgSfKLZArM+gm91KyzWfh4chc3az9H+Vs+YA2EeiqhUkVof0TIoMXKgzZNoIrjfSLxi26Qp0wldg9e6H6WMvdGjzNaGbAUlNi14e9MoDPk0uzVWNtZtVUtDinqVFu9lAZ9JvNuY8IPQWhpm/OSVnh5SAN4Zrye0ve8RC04aS9FJkOVKwWrYBPWwQmvtKCtR4Hc8SRy/Q2HMh7DEfEQ8/KXFtznmE38jPHGX9CQcj+guOt+52S86ruBlraFylWuJUFgyc4f+9yLcTRo3bwl2u1aKwjhu3nMCDAAyQ6CE3Yf/ZgAAAABJRU5ErkJggg==)
              no-repeat 0 0;
            &:hover {
              background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAbCAYAAABvCO8sAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkVGOEVGRkIzOUIyOTExRUE4Mjg1RjJEQzQzQTJCQTUwIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkVGOEVGRkI0OUIyOTExRUE4Mjg1RjJEQzQzQTJCQTUwIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RUY4RUZGQjE5QjI5MTFFQTgyODVGMkRDNDNBMkJBNTAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RUY4RUZGQjI5QjI5MTFFQTgyODVGMkRDNDNBMkJBNTAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6K/Uo2AAACe0lEQVR42rSWW4hNURjH9zkzGEODhnHJg/tlcouQEiNJpMiDxjwMxmUK8WYo5RIxnhSexMM8aIoaL15IGfJARCiXMSjXBwwa1zr4ffXftdptZ6/jnPPV76y99tp7/c9e32WtVNfe3oGsBDbBRpgIZUH+9hHaobn/nm837EapBnrCeYlsg1vww2dGJvrn2Kd95VU0K6CN650825LSFx6AybASMrl8QjZBR3gszTWYn+anF2wVmaAIxp/qoDlhGiY4Dt7Ay6C4dglmmmA/+BAU375CeWnCQylYBUthAlTAF3gGl6EVunNRTWcZWw5PNGk9zJKotbVw0oQJiM2FEGxQmoxJeH+QBQOiR/MRHA2nnP5sLeV3554tc18Fm9l2ROv/V3BHpD8eJsmfoY2AGhgKr+C+XJBocUEzPdJviXnmiOUznIY/MMRWhq9so31g7iD3bvsK+thFuAPzYI5zf6pK2W7Ez1gsIPwzaUmvJ4hZnb0LTRGxqNXZXAiXJAk2ZylxGX1Zg/oWSIP1jtkv+fWg+jNgV5LgW1gMv2PGnisVBqrfAw7DImeLs/4S5521Pj60KjIF7kX+lG03AyLvr3P6JrgmMleFb9BUSewcdCgfrYw9tW0mhwC76itovlkGFyL3bbNeLV/5WJNvLW2NEQsDYwG8ThAyf9eQFp2+gtnssQq5FYAXkbH3aq8g1p7LbpFk3VquUVANC2EajFStfUcOlsVVms9QmcfxwUrbQxHaWeFaH8vbtPa8YTC8yDu+5epNE7RadxyOKY8Kbjq1bbG9M/Thfp3erCjP1XUhhCphvQ7Ddi59lHJO3ubPRtigk3chRLuU+IfCk/dfAQYAByqarQT/01EAAAAASUVORK5CYII=);
            }
          }
          &:nth-child(4) {
            background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAbCAYAAABvCO8sAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowNTgwMTE3NDA3MjA2ODExODA4MzgyRDhGM0VBNzVBOCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDQTE5Q0JFMzcxMUExMUUzQjY4OUJDMUI4RDdGMjRENyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDQTE5Q0JFMjcxMUExMUUzQjY4OUJDMUI4RDdGMjRENyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDE4MDExNzQwNzIwNjgxMTgyMkE5OTE4OTMzMzFGNTUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDU4MDExNzQwNzIwNjgxMTgwODM4MkQ4RjNFQTc1QTgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz43h6JuAAAChElEQVR42sSWTUhUURTH30waVKJlGlS0aDBy0QdkC92ERhb0QdkoZYEQua4oclGLNgpKE7XJImgh2pcSFRQk9GFBUtTGoEXGTLZQIgmJPklj+h04Fy6XN+OI8/TAj3vfufed/33349wXisfjnmV74BhshAXe9O07vIIY9IojbDWehxY4B0shlAVWwGW4CGdEJEfF9kE1lOuosmXf4DY81y/tN194Ek5kWcy2UTgNTSI4B9bBUy9YewzrRTAPfsHfgAW/QHHYm2GbccGcdI2JRKKO4ig0wjzogO5IJNJs9VlM0aa7/ABtL/A9pH6P+qWMBXmpm6LOcs2FtQJtVZSHoAR6oFD7JLXcJtBvC6LRSaeUjtcdMbFcq74ZPunOK/SJZ47XXmLdTStIh+0U9Y77j56lyeyjlhOWbzcxD6f7wuM+vmGm5r3jk7Vttp7H6DNsxp0qpp/gGuf5CYHGGWVYk7Cxa06yOEKfEsinfsGJkT+VY3GQIDUSHGFJgSPWtJmpG6KtS/Nml9a/ZnoO31n1Bl7+THkLNiFcxvNybWvXHOzhW0lbhabIXdRX4yuyBjeWTvCqrBns4KVOXu6zduhrCabXjtyXi6AUn9yf/fYy4MvVwd2AVtMQ4gIu0C2+0Nqpcj43wB1Y5jOoSoI90761ehZd+y1Hi34PLF/Sdw3pJGtzKoWYWKeKFaQQ8zQz1WScSxGV3439Mj3wQbf6G92pq7SPXLCyVldgQM/hINyHrbQ3unF9pzRAS87K9fQD5mtyDtKWSHoUwX/wFqoCFpSEP2CmNKbkBSRWpL+gMSN4Ex7BS9iZpZ9gk0OjGleOUm/I+fOO6i1Qpus6XfupYmfNn/d/AQYA+v3H0/IgLegAAAAASUVORK5CYII=)
              no-repeat 0 0;
            &:hover {
              background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAbCAYAAABvCO8sAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkUxMTdCNTJGOUIyOTExRUFCRTQxQUQ2OTYwQkJFMDRGIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkUxMTdCNTMwOUIyOTExRUFCRTQxQUQ2OTYwQkJFMDRGIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RTExN0I1MkQ5QjI5MTFFQUJFNDFBRDY5NjBCQkUwNEYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RTExN0I1MkU5QjI5MTFFQUJFNDFBRDY5NjBCQkUwNEYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5sELYQAAACdklEQVR42syWXUhUQRTH764amWFZPSVFUaCBBVERYlREUGTfEFGRFIIWhEFQSggVhYkUhA/7VE+aYRH0GEhl0BdIL0FYPVgSRtDHtvQJRvY78Femy+7dvbgbHvgxM+fOnf+dOWdmbiR+utCTReEAHIIKGHswDvsCD6F1+qkfD8yRrwd5cA1KoQkew89MRmSg1Gpnpsyk2GxjUz9P31hEMzwBG2AjDIeZQpCgIzyH4glsjWopj8KRsGIhPuotRRs0mNhsGIF+L7fWAytMsAQ+e7m3b1AU9f6zTTjBXWD7pxyWwjNo9qc+XIZBqJLvNhwOK3hdVKk9CRbDWbgDc2EdvIJatUfU17ZYDNGbmQp2aXauFTh1ExqU8Iwk431VuRPRW+kEN8Een+8XfMggRK9V/nZ82xCtDRI8lsQ3BC99PjsszjntOBt8SPWBVGMmE6zwte/qBLK+Fxz/VbjntBuYyUIopn7JN0ZxmG2xD3Zo8OPwzlm20aV7w+w6KS1JOlX/lGmWPnfqNfAeumE1LNONYhbTB9hZOZ+ZVVJdAluol+Gb5XxcPEjwimJWDR3Q62RoH5SBnf5FOhbLEVhO+cgNA74CREt17bUGCdqWmAcfJbzGeRaBF7AAtsMq7c0+3xh2ISQQrUZ0L3Sli6HF5qReTGYdKqfBjRR9ChX7fyw/IFlsBruhTkuYp1ul1zneEmCxaoGVysZhnT7tzKwnjKCnZOlOc7laNtZP6NsirmzLtU2F71HtFYvPohwLrrdsNsE/OorafTdC1kx/bY2mMRrDi1pay8C1MDlLQiWwXz/DLSTY04jvz/ug8+edDdGExNoQu2+OvwIMALSwtIEd5bkUAAAAAElFTkSuQmCC);
            }
          }
          &:nth-child(5) {
            background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAbCAYAAABvCO8sAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowNTgwMTE3NDA3MjA2ODExODA4MzgyRDhGM0VBNzVBOCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDQTE5Q0JFNzcxMUExMUUzQjY4OUJDMUI4RDdGMjRENyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDQTE5Q0JFNjcxMUExMUUzQjY4OUJDMUI4RDdGMjRENyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDE4MDExNzQwNzIwNjgxMTgyMkE5OTE4OTMzMzFGNTUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDU4MDExNzQwNzIwNjgxMTgwODM4MkQ4RjNFQTc1QTgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7duuXHAAACaElEQVR42rSWTUgVURTH54kQkZq2CAQ/8GVulChS1MCEMiJCFBdG6SZwW/KqRW1E8QuS1+cial8EFUWQJaK4EEMrkqhN4CsKWrgoxExJcfwdOQOXYUac9+Yd+HHeu3fu+c/9OGduxLZtK5FIWGrN0AlVsMtK3f7CNMThtTRkGJ03YABuQT5EQqAA7sEd6BaRTBVrgZNQCwtWeCaxnsE4vJfZOjO8DFdDFjPtD1yDmCN4GEaDRGDf41AdYIjEr3SWdAesBBArxV2SAFAfYJZ5GUkuUZ/6o4gfCDIwsCACJbgzRtODtApig67/1bzEqbQIErjcNTvH7m83RqZH0It6GH7Cujbb8B/Owj9N6p3GsELGvcGPQY7RLon/KRqN3vQVxGZBRPd59C3q8f4BX2AV5uEXHIMh1/PL8NRsiGgttfWtzZlKObqwRY2U7XjO27fr8y9wTcYzj+Ec/bbRZvsKapBOra1e9hYaoEIL8x6jrxuhHo8x9paHhkG3ca26h6bF6TuiX5Vpl9h5H7Ftn1Kz5K1BOwGv6JJPeDw/kWpa1Ohyv5STidhDbf8I/bpXn43C3xAoLTysWL2cxhgzK8JnaXpIqnzTOFKPd0N5qoJ71Xe42ifhoIqbtj/VJS10/R+GQyxtHWTzu0vzMTTBWvVf5cQichpmjZPciyuDR9pUxrIXJCXIQOn/DXdlbwj+xCd9vkObJv47KPKL6SS+fHxzg3yEk7A8mHNm+AGOW+m1E3KRcgSlml/XY52u2W1eQR1BqegjMAWNHkc9WcvWK6iUPykYwxGPm3dMb3Fh3LyXYEZv3q+kYUOAAQD2BrmwORZMmwAAAABJRU5ErkJggg==)
              no-repeat 0 0;
            &:hover {
              background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAbCAYAAABvCO8sAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkU4RjYzMzMyOUIyOTExRUE4NDM5QTg0RTJENDAzNDFGIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkU4RjYzMzMzOUIyOTExRUE4NDM5QTg0RTJENDAzNDFGIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RThGNjMzMzA5QjI5MTFFQTg0MzlBODRFMkQ0MDM0MUYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RThGNjMzMzE5QjI5MTFFQTg0MzlBODRFMkQ0MDM0MUYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6Fh/KYAAACaUlEQVR42rSWTUhUURTHZwahlCmlhbTQIio3gRhYllBBVCAt2iWZEEXoojSLVi3UwSKiwj42WW0ToSBwUZEGgxh9LQpRgiAShYgWpZlTVGi/C/+Bx+U9nfuec+HHmXfvfe8/95xzz73x752FMbU4HIITUAVFsejtB7yEyyUdmUHTUeARuyuhczAMs7l8kQ8Fjk2likowdXCH37eYeymuFTbDMdgFv12WsJCgR7gU8xqOJNR3Bk65ijn8qa+YFLQZwZWwWr52aVehxmH+U9hiYmj8POUotkFeqVYYcmk/IZkI6aXzsjuJT6XLi2EE10G95/l2vgUvWs81rLIuX4KbrNVlW0+uHyjw6WtVMkzCnPrm4Y8qUUaFotDzTjmrfIJ9pqzPtjIYYVt0LyT4TqLrfcZmYAAmYAz+gtljn2G3KWHW/F/wYLEVDintb0CLNbYCDijFTTge8u8bVU3arbl90MD4/GKCXtd+hGs+Y0l4AU0IbcU+hlWe8U6EUmGS5jocVAztKlNrKge8ssSOBonlmqUDnt//wLjwrFye9pmfjrottikr+5WZ99T/Fi4oVqMwrf49rtvCbmtlTTaehjWKYUZb5ZO+swyKtVcjCZbKHrf6h3VgJ63+jVFdWm49P4LNsEPbpF37cckEt8t+UMbuV3HIHq5dmAroVVcFW6UsrKAZ/wY3FZv7ASf6OBxWUXijOAfGcFqHsF+bczhgjXC/sjkWUCxmExL84nhdCNP2mtVnXdqtErY8H0q6tXUYjYTnPHsPz2GfdfREESqGetXdHlyejls3bxP4k1C5RKIzug1eQczc2mL/BRgAUBabczYWblcAAAAASUVORK5CYII=);
            }
          }
        }
      }
    }
  }
  .detail {
    text-align: center;
    img {
      margin-bottom: 100px;
    }
    .detail-title {
           text-align: left;
      margin: 0 auto;
      width: 990px;
      // width: 100%;
      //   margin-bottom: 10px;
      span {
        text-align: center;
        display: inline-block;
        height: 100%;
        width: 166px;
        line-height: 68px;
        cursor: pointer;
        font-size: 24px;
        p {
          margin: 0;
          height: 10px;
          z-index: 99;
        }
        .pActive {
          background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAICAYAAADwdn+XAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkIxMTM4QUFGOUIyOTExRUE5QzQ1RUNGQjE1ODU1NzE3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkIxMTM4QUIwOUIyOTExRUE5QzQ1RUNGQjE1ODU1NzE3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QjExMzhBQUQ5QjI5MTFFQTlDNDVFQ0ZCMTU4NTU3MTciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QjExMzhBQUU5QjI5MTFFQTlDNDVFQ0ZCMTU4NTU3MTciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7PIkPSAAAAUElEQVR42mJ838DZwMDAUM9AHmhkAhIgAxrJ0QzSywTlkGpII1QPAxOSILGGwDWjG0CMISiasRmAzxAMzbgMwGYIVs0gwILHuQ042CgAIMAAPHQQFqSgMAMAAAAASUVORK5CYII=)
            no-repeat 50% 0;
        }
        &:hover {
          // p {
          //   background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAICAYAAADwdn+XAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkIxMTM4QUFGOUIyOTExRUE5QzQ1RUNGQjE1ODU1NzE3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkIxMTM4QUIwOUIyOTExRUE5QzQ1RUNGQjE1ODU1NzE3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QjExMzhBQUQ5QjI5MTFFQTlDNDVFQ0ZCMTU4NTU3MTciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QjExMzhBQUU5QjI5MTFFQTlDNDVFQ0ZCMTU4NTU3MTciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7PIkPSAAAAUElEQVR42mJ838DZwMDAUM9AHmhkAhIgAxrJ0QzSywTlkGpII1QPAxOSILGGwDWjG0CMISiasRmAzxAMzbgMwGYIVs0gwILHuQ042CgAIMAAPHQQFqSgMAMAAAAASUVORK5CYII=)
          //     no-repeat 50% 0;
          // }
          background-color: #ef8009;
          color: white;
        }
      }

      .active {
        background-color: #ef8009;
        color: white;
      }
    }
    .canshu {
      background-color: #eef2f3;
      width: 100%;
      padding-bottom: 150px;
      display: flex;
      flex-direction: column;
      //   justify-content: center;
      align-items: center;
      .detail-tit {
        text-align: left;
        height: 109px;
        line-height: 109px;
        // margin-bottom: 8px;
        padding-right: 500px;
        color: #ef8009;
        font-size: 24px;
        font-weight: 600;
        font-family: Helvetica Neue, Helvetica, STHeiTi, sans-serif;
      }
      .detail-body {
        border-top: 1px solid rgba(189, 195, 199, 0.7);
        border-bottom: 1px solid rgba(189, 195, 199, 0.7);
        margin-left: 150px;
        width: 1000px;
        display: flex;
        justify-content: start;
        align-items: center;
        flex-direction: row;
        flex-wrap: wrap;
        // padding-left: 50px;

        div {
          font-size: 14px;
          opacity: 0.7;
          text-align: left;
          width: 24%;
          overflow: hidden;
          padding: 15px 5px;
          font-family: Helvetica Neue, Helvetica, STHeiTi, sans-serif;
        }
      }
    }
  }
}
</style>
