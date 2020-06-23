<template>
  <div class="container">
    <div class="detail" ref="detail">
      <div class="opa" ref="opa">
        <div class="image">
          <img
            src="http://www.diqua.com/img/message/left_icon.gif"
            alt=""
            @click="goNext(0)"
          />
          <img
            src="http://www.diqua.com/img/message/right_icon.gif"
            alt=""
            @click="goNext(1)"
          />
        </div>
        <img
          class="quite"
          src="http://www.diqua.com/img/message/close.jpg"
          alt=""
          @click="quite()"
        />
        <div class="comment">
          {{ message[pageIndex - 1][currentIndex].msg }}
        </div>
        <div class="replay">
          {{ message[pageIndex - 1][currentIndex].reply }}
        </div>
      </div>
    </div>
    <headers></headers>
    <div class="nav">
      <div class="left">商品留言</div>
      <div class="right"> 当前位置： <span>首页</span><span>服务中心</span>商品留言</div>
    </div>
    <div class="main">
      <div class="top-title">
        有疑问，尝试一下搜索您需要的答案
      </div>
      <div class="search">
        <input type="text" class="search-input" />
        <div class="search-body"><span>搜索</span></div>
      </div>
      <div class="manu">
        <div
          class="manu-item"
          v-for="(item, index) in message[pageIndex - 1]"
          :key="index"
        >
          <div class="left" @click="goDetail(index)">{{ item.msg }}</div>
          <div class="right">已有{{ item.look }}人查看</div>
        </div>
      </div>
      <div class="silde-page">
        <img
          src="http://www.diqua.com/img/message/prev.gif"
          alt=""
          @click="goNextPage(-1)"
        />
        <div
          :class="['page-item', { active: index == pageIndex - 1 }]"
          v-for="(item, index) in message"
          :key="index"
          @click="pageIndex = index + 1"
        >
          {{ index + 1 }}
        </div>
        <img
          src="http://www.diqua.com/img/message/next.gif"
          alt=""
          @click="goNextPage(1)"
        />
      </div>
    </div>
    <div class="feed-back">
      <div class="feed-body">
        <div class="feed-tit">商品留言</div>
        <div>
          <span>称 &nbsp; &nbsp;呼:</span
          ><input style="width:188px" type="text" />
        </div>
        <div>
          <span>联系方式:</span><input style="width:287px" type="text" />
        </div>
        <div style="display:flex;">
          <span>留言内容：</span
          ><textarea type="text" cols="2" rows="5"></textarea>
        </div>
        <div style="display:flex;align-items:center;">
          <span>验 证 码：</span><input style="width:151px" type="text" />
          <img
            @click="fleshV()"
            ref="iimg"
            style="margin: 0 6px"
            src="http://www.diqua.com/message/checknum.php"
            alt=""
          />
          <span
            @click="fleshV()"
            style="width:100px;font-size:12px;cursor: pointer;color: #000;"
          >
            看不清？换一个</span
          >
        </div>
        <div class="btn"></div>
      </div>
    </div>
    <bottom></bottom>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentIndex: 1,
      pageIndex: 1,
      message: [
        [
          {
            msg:
              "1.帝度冰箱BCD-180Y型号是在哪个时间段发售的，何止停售，当时售价是多少，现在根据折损市场价大概在多少？",
            reply:
              "帝度冰箱BCD-180Y主要供线上销售，最后一批生产时间为17年9月，规划成交价1199元，18年此产品逐步退出市场。",
            look: "5",
          },
          {
            msg: "2.需要DG-F75366BCX说明书",
            reply:
              "您好，因为没有您的联系邮箱，无法直接将说明书发送给您，所以，请您在我们网站中的 服务中心 >> 说明书下载 栏目中，直接检索 DG-F75366BCX 获得说明书下载链接。",
            look: "2",
          },
          {
            msg: "3.DG-L7533BHC电子版说明书麻烦给我发一下.邮箱664016691@qq.com",
            reply: "您好，感谢您的使用，说明书已发送至您邮箱，请您查收。",
            look: "6",
          },
          {
            msg:
              "4.对帝都洗衣机都无语了，买了两年修理五六次，态度还及其恶劣，一副老子天不怕，地不怕的样子。 真是不要脸。 帝都的老板们，都当缩头乌龟吗？ 你们到底要不要脸，你们挣钱，晚上能睡着着吗，不怕做噩梦，你们不怕着报应吗？ 反正你们就是骗子公司，天生就是干昧良心的事。",
            reply:
              "先生，给您带来了困扰，我们深感抱歉，您可致电客服中心：4008899360或95105958报修，也可在此平台留下您的姓名、电话、具体地址、品牌型号，稍后为您登记，您可以将问题反馈给我们，我们会妥善处理！",
            look: "119",
          },
        ],
        [
          {
            msg: "5.帝度冰箱发票网上如何申请开具？",
            reply: "请问您具体指的是什么发票，网购机的发票，还是维修的发票？",
            look: "34",
          },
          {
            msg:
              "6.用了没多久冰箱内胆就坏了，整个裂了个缝还特别大。找售后说是产品质量问题",
            reply:
              "抱歉给您添麻烦了，请问您有没有打过售后电话报修过，我们可以帮您安排专业师傅检查一下",
            look: "42",
          },
          {
            msg:
              "7.帝度DB7058ES电源开关开启不亮，波轮转动但不进水，是什么情况啊？",
            reply:
              "抱歉给您添麻烦了，此种情况需要专业人员上门检查，请您拨打我们的客服热线4008899360/95105958报修",
            look: "24",
          },
          {
            msg: "8.DIQUA ECO DG-P75366BG精智变频电机多少钱",
            reply:
              "您好，我公司的配件是不单独出售的，如果要报修，请拨打全国售后电话",
            look: "22",
          },
        ],
      ],
    };
  },
  methods: {
    fleshV(){
      this.$refs.iimg.src += "?"
    },
    goNextPage(res) {
      if (this.pageIndex + res < 1 || this.pageIndex + res > 2) {
        console.log("1");
      } else {
        this.pageIndex += res;
      }
    },
    goNext(res) {
      if (res) {
        this.currentIndex += 1;
        if (this.currentIndex > 3) {
          this.pageIndex += 1;
          this.currentIndex = 0;
        }
      } else {
        this.currentIndex -= 1;
        if (this.currentIndex < 0) {
          this.pageIndex -= 1;
          this.currentIndex = 3;
        }
      }
      if (this.pageIndex > 2) {
        this.pageIndex = 2;
        alert("最后一条了");
        this.currentIndex = 3;
      }
      if (this.pageIndex <= 0) {
        this.pageIndex = 1;
        this.currentIndex = 0;
        alert("已经是第一条");
      }
      //   console.log(this.currentIndex);
    },
    goDetail(res) {
      this.$refs.detail.style.display = "block";
      this.$refs.opa.style.top =
        document.documentElement.scrollTop + 100 + "px";
      console.log();
      this.currentIndex = res;
      // console.log(this.currentIndex)
    },
    quite() {
      this.$refs.detail.style.display = "none";
    },
  },
};
</script>
<style lang="scss" scoped>
  .nav {
    width: 100%;
    height: 37px;
    padding: 0 20px;
    background: #fff url(http://www.diqua.com/img/common/pagepath_bg.gif) repeat-x left top;
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
        cursor: pointer;
     background: url(http://www.diqua.com/img/common/icon01.gif) no-repeat left center !important;
      padding: 4px 10px;
      font-size: 12px;
      margin-right: 270px;
        // opacity: 0.8;
        span{
          padding-right: 8px;
          margin-right: 6px;
          background: url("../assets/icon02.gif") no-repeat right center;
        }
      }
    }
  }
.container {
  width: 100%;
  text-align: center;
  .detail {
    display: none;
    width: 100%;
    height: 225%; 
    position: absolute;
    background: url(http://www.diqua.com/img/message/fancybox_overlay.png)
      repeat left top;
    opacity: 1;
    z-index: 1000;

    .opa {
      position: absolute;
      //   top: 100px;
      left: 50%;
      transform: translateX(-50%);
      padding: 29px 58px 70px;
      width: 885px;
      min-height: 117px;
      text-align: center;
      //   height: 200px;
      background-color: #fff;
      color: #363636;
      font-family: microsoft yahei;
      text-align: left;
      .image {
        // position: absolute;
        width: 100%;
        margin: 0 auto;
        // top: 10px;
        // background-color: gray;
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
        // height: 80px;
        cursor: pointer;
      }
      .quite {
        position: absolute;
        top: 0;
        right: -62px;
        height: 62px;
        width: 62px;
      }
      .comment {
        margin-left: 100px;

        margin-bottom: 10px;
        font-size: 15px;
      }
      .replay {
        margin-left: 100px;

        padding-left: 18px;
        font-size: 12px;
      }
    }
  }
  .main {
    width: 922px;
    margin: 0 auto;
    position: relative;
    text-align:center;
    .top-title {
      padding: 76px 0 25px;
      // text-align: center;
      font-size: 24px;
      color: #888;
      // font-weight: 400;
    }
    .search {
      margin: 0 auto;
          position: relative;
      .search-input {
        display: inline-block;
        width: 500px;
        height: 28px;

        // margin-top: 2px;
        border: 1px solid #ddd;
        border-right: none;
        // line-height: 30px;
        text-align: center;
        font-size: 14px;
        color: #666;
        margin-right: 85px;
        &:focus {
          // outline:1px solid #dddddd;
          outline: none;
        }
      }
      .search-body {
        display: inline-block;
                position:absolute;
        top:0;
        left: 670px;
        color: #fff;
        width: 75px;
        height: 32px;
        // margin-bottom: 1px;
        // float: right;
        text-align: center;
        background-color: #ef8009;
        cursor: pointer;
        span {
          // margin-left: 10px;
          display: inline-block;
          height: 32px;
          font-size: 12px;
          text-align: center;
          line-height: 32px;
          padding-right: 12px;
          width: 37px;
          background: url(http://www.diqua.com/img/message/icon01.gif) no-repeat
            right center;
        }
      }
    }
    .manu {
      width: 922px;
      font-size: 13px;
      overflow: hidden;
      margin-top: 53px;
      color: #888;
      border-top: 3px solid #ef8009;
      .manu-item {
        background: url(http://www.diqua.com/img/message/line01.gif) repeat-x
          left bottom;
        padding: 12.8px 23px 10px 19px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .left {
          text-align: left;
          width: 650px;
          cursor: pointer;
          overflow: hidden;
          word-break: keep-all;
          white-space: nowrap;
          text-overflow: ellipsis;
          &:hover {
            text-decoration: underline;
          }
        }
        .right {
          margin-right: 20px;
        }
      }
    }
  }
  .silde-page {
    display: flex;
    //   flex-direction: row;
    margin: 50px 30px;
    img {
      cursor: pointer;
    }
    .active {
      background-color: #ef8009 !important;
    }
    .page-item {
      width: 35px;
      height: 35px;
      color: #fff;
      background-color: #ccc;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 5px;
      //   display: inline-block;
      cursor: pointer;
      &:hover {
        background-color: #ef8009;
      }
    }
  }
  .feed-back {
    padding: 50px 0 60px;
    background: url(http://www.diqua.com/img/message/bg01.jpg) repeat-x left top;
    text-align: center;
    // margin: 0 auto;
    div {
      padding: 3px 6px;
      &:nth-child(2) {
        padding: 0 6px !important;
      }
    }
    .feed-body {
      margin: 0 auto;
      width: 920px;
      text-align: left;
      // div {
      //   height: 50px;
      // }
      span {
        display: inline-block;
        font-size: 14px;
        width: 73px;
        color: #6f6f6f;
        height: 90%;
        line-height: 50px;
      }

      textarea {
        padding: 5px;
        margin: 0;
        width: 758px;
        border: 1px solid #d2d2d2;
        background: 0 0;
        height: 210px;
        font-family: microsoft yahei;
        &:focus {
          outline: none;
        }
      }
      input {
        padding: 0;
        margin: 0;
        border: 1px solid #d2d2d2;
        background: 0 0;
        height: 34px;
        line-height: 34px;
        &:focus {
          outline: none;
        }
      }
      .feed-tit {
        margin: 0 55px 50px 0;
        font-size: 36px;
        color: #353535;
        font-weight: 700;
      }

      .btn {
        margin-left: 80px;
        margin-top: 50px;
        height: 36px;
        width: 99px;
        padding: 0;
        background: url(http://www.diqua.com/img/message/btn.gif);
      }
    }
  }
}
</style>
