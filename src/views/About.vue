<template>
  <div class="container">
    <headers></headers>

    <div class="nav">
      <div class="left">关于帝度</div>
      <div class="right">当前位置： <span>首页 </span>关于帝度</div>
    </div>
    <div class="top-img">
      <img src="../assets/pinpai_story.jpg" alt="" />
    </div>
    <div id="ab1" class="date-box" >
      <div
        class="dragArea"
        ref="zhizheng"
        @mouseenter="stopIntt(0)"
        @mouseleave="stopIntt(1)"
      >
        <span class="year">{{ newdate[0] }}年</span>
        <span class="month">{{ newdate[1] }}月{{ newdate[2] }}日</span>
      </div>
      <div class="scale">
        <span
          :class="['scale-item', { active: massage[index].date == item.date }]"
          v-for="(item, res) in massage"
          :key="item.date"
          @click="goIndex(res)"
        >
          {{ item.date.substring(5) }}
        </span>
      </div>
      <div class="other">
        <span>2013</span>
        <span>2012</span>
        <span>2011</span>
      </div>

      <div class="msg" v-for="item in massage" :key="item.date">
        <div :class="{ msgActive: item.date == massage[index].date }">
          {{ item.msg }}
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
      leftSize: -40,
      interss: "",
      newdate: ["2013", "11", "28"],
      index: 0,
      massage: [
        {
          date: "2013.11.28",
          msg:
            "家博会“工业设计论坛“:打造帝度品牌家电工业设计领域领航者地位，也为全球家电工业设计领域的技术创新深入谈吐，同时发力培养和造就更多高素质的工业设计人才，从而提促进中国家电产业的升级转型。",
        },
        {
          date: "2013.11.23",
          msg: "皖军书法华夏行活动广州举行，帝度品牌文化内涵获得深度诠释。",
        },
        {
          date: "2013.11.18",
          msg:
            "2014中央电视台黄金资源招标，1.5亿元总额获得三组黄金资源广告，以及少年中国说栏目签约认购权。",
        },
        {
          date: "2013.11.08",
          msg:
            "携手品牌代言人林志玲，跨界冠名其主演电影《甜心巧克力》的首映礼，再次凸显为品牌高端定位及精致内涵。且电商渠道配合展开“双十一”购物狂欢节促销。派发电影票等新颖促销模式，使帝度洗衣机成为双十一当天，全网销售机皇。",
        },
        {
          date: "2013.09",
          msg:
            "品牌代言人林志玲为帝度冰箱拍摄的冰、洗广告正式登陆央视，品牌迎来爆发性增长，引领十一黄金周家电消费市场，保持了高端品牌增速第一的良好成绩。",
        },
        {
          date: "2013.08",
          msg:
            "2013年IFA展会上公布了2013年度中国家电产品创新奖，高端生态家电品牌帝度凭借着对冰、洗产品在节能、环保、智能等方面进行的创新升级，继去年冰箱获最具创新力产品奖后，再添“最具创新力家电品牌”殊荣，成为行业内创新科技实力的代表。",
        },
        {
          date: "2013.07.08",
          msg:
            "帝度品牌（电视购物）快乐购不仅创下节目开播以来的最高分钟订单额记录，新颖的方式也赢下电视直销的口碑之战。",
        },
        {
          date: "2013.06",
          msg:
            "以优雅气质著称的林志玲，一直被视为高端化的代表。而帝度品牌的核心诉求则是以家电应与科技、美学、家居、建筑完美结合的理念，打造出能够立体化地满足高端品牌消费者极致追求的产品，签约国际一线巨星林志玲，品牌发展迈出开拓性步伐。",
        },
        {
          date: "2013.02.22",
          msg:
            "中国南北极科考队和帝度品牌在合肥正式签订续约协议，连续两年的成功续约，成功打造帝度冰箱“极地品质”符号。  ",
        },
        {
          date: "2013.01",
          msg:
            "特约赞助的第六届南京大学EMBA年度峰会暨南京大学EMBA十周年庆典。在寻求助推企业发展的内在和外在动力的同时，践行企业社会职责，也为品牌开拓了更为宏大的市场声量。",
        },
        {
          date: "2012.11.20",
          msg: "皖军书法华夏行北京站活动举行，帝度品牌文化内涵获得深度诠释。",
        },
        {
          date: "2012.11",
          msg: "帝度冰箱以9000万一举拿下，央视黄金招标冰箱行业标王。",
        },
        {
          date: "2012.11.05",
          msg: "帝度冰箱随雪龙号共同启航第二十九次南极科考。",
        },
        {
          date: "2012.09",
          msg: "合肥家博会上，帝度洗衣机两款产品同时当选“能效之星”。",
        },
        {
          date: "2012.08",
          msg:
            "德国柏林电子消费展上，中国家用电器创新奖颁发，作为新生品牌，帝度在的评选中荣获2012年度最具成长力家电品牌。",
        },
        {
          date: "2012.04.25",
          msg:
            "记住经销商大会契机，宣布年产400万台冰箱项目一期投产。同时，“帝度”冰箱成功签约成为中国南北极科考队的指定专用产品。 ",
        },
        {
          date: "2011.02",
          msg:
            "借助此契机，帝度品牌在长三角经济圈，尤其是高端、精英人物中的影响力迅速提升，在品牌发布之初，快速建立起高端品牌效应。",
        },
        {
          date: "2011.12",
          msg:
            "帝度品牌的诞生，标志着合肥三洋正式启动多品牌多品类发展战略，也标志值企业由规模增长向品牌运营的国际化进程全面起航。",
        },
        { date: "2011.11", msg: "" },
      ],
    };
  },
  mounted() {
    this.intt();
  },
  destroyed() {
    clearInterval(this.interss);
  },
  watch: {
    index: function() {
      this.newdate = this.massage[this.index].date.split(".");
    },
  },
  methods: {
    stopIntt(res) {
      if (res) {
        this.intt();
      } else {
        clearInterval(this.interss);
      }
    },
    intt() {
      let that = this;
      that.interss = setInterval(function() {
        that.index += 1;
        if (that.index >= that.massage.length) {
          that.index = 0;
          that.leftSize = -40;
        } else {
          that.leftSize += 46;
        }
        that.$refs.zhizheng.style.left = that.leftSize + "px";
      }, 2000);
    },
    goIndex(res) {
      clearInterval(this.interss);
      this.leftSize = -40;
      this.leftSize = res * 46 - 40;
      this.$refs.zhizheng.style.left = this.leftSize + "px";
      this.index = res;
      this.intt();
    },
  },
};
</script>
<style lang="scss" scoped>
.container {
  font-family: microsoft yahei;
  display: flex;
  // justify-content: ;
  flex-direction: column;
  align-items: center;
  .nav {
    width: 100%;
    height: 37px;
    padding: 0 20px;
    background: #fff url(http://www.diqua.com/img/common/pagepath_bg.gif)
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
        background: url(http://www.diqua.com/img/common/icon01.gif) no-repeat
          left center !important;
        padding: 4px 10px;
        font-size: 12px;
        // opacity: 0.8;
        margin-right: 270px;
        span {
          padding-right: 8px;
          margin-right: 6px;
          background: url("../assets/icon02.gif") no-repeat right center;
        }
      }
    }
  }
  .top-img {
    width: 100%;
    // padding: 0 auto;
    text-align: center;
    img {
      margin: 0 auto;
    }
  }
  .date-box {
    width: 960px;
    height: 300px;
    background-color: #fff;
    position: relative;
    padding-top: 200px;
    .dragArea {
      position: absolute;
      top: 50px;
      left: -40px;
      width: 121px;
      padding: 20px;
      // background-color: gray;
      // border-radius: 50%;
      background: url("../assets/arrow.gif") no-repeat;
      background-position: center;
      height: 97px;
      color: #50616d;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: start;
      align-items: center;
      color: #50616d;
      transition: 0.4s;
      cursor: pointer;
      .year {
        padding-top: 10px;
        font-size: 24px;
        font-weight: 700;
      }
      .month {
        font-size: 18px;
        color: #11181d;
      }
    }
    .scale {
      width: 100%;
      // background-color: gray;
      height: 45px;
      display: flex;
      // justify-content: space-evenly;
      align-items: center;
      padding-left: 19px;
      background: url("../assets/datebox_bg.gif") no-repeat left bottom;
      .active {
        font-size: 18px;
        color: #c1c6cd;
        padding-bottom: 30px;
        color: #50616d;
      }
      span {
        cursor: pointer;
        transition: 0.1s;
        width: 46px;
        font-weight: 400;
        font-size: 12px;
        color: #c1c6cd;
        // line-height: 20px;
        padding-bottom: 20px;
        text-align: center;
      }
    }
  }
  .other {
    margin: 10px 0;
    margin-bottom: 40px;
    span {
      font-size: 18px;
      color: #50616d;
      font-weight: 700;
      &:nth-child(1) {
        margin-left: 20px;
      }
      &:nth-child(2) {
        margin-left: 420px;
      }
      &:nth-child(3) {
        margin-left: 240px;
      }
    }
  }
  .msg {
    width: 60%;
    position: relative;
    div {
      transition: 0.4s;
      font-size: 14px;
      color: #6c6d6f;
      width: 100%;
      height: 200px;
      // background-color: gray;
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
    }
    .msgActive {
      opacity: 1;
    }
  }
}
</style>
