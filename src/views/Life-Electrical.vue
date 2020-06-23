<template>
  <div class="container">
    <headers ref="top"></headers>
    <div class="nav">
      <div>产品 > 生活电器</div>
      <div>当前位置: 生活电器</div>
    </div>
    <div class="block">
      <el-carousel arrow="hover" height="600px">
        <el-carousel-item v-for="item in carouselImg" :key="item">
          <div class="itemImg">
            <img :src="item" alt="" />
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="choose-box">
      <div class="choose-title">选择您需要的生活电器</div>
      <div class="choose-body">
        <div class="choose-item" @click="goSelect">
          <span>
            <h3>空气净化器 <span>AIR PURIFIER</span></h3>
          </span>
          <img
            src="http://www.diqua.com/img/product/life/images01.jpg"
            alt=""
          />
        </div>
        <div class="choose-item">
          <span>
            <h3>洁身器 <span>BIDET</span></h3>
          </span>
          <img
            src="http://www.diqua.com/img/product/life/images02.jpg"
            alt=""
          />
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
      carouselImg: [
        "http://www.diqua.com/img/product/kitchen/list_slidephoto01.jpg",
        "http://www.diqua.com/img/product/kitchen/list_slidephoto02.jpg",
        "http://www.diqua.com/img/product/kitchen/list_slidephoto03.jpg",
      ],
    };
  },
  methods: {
    goSelect() {
      this.$router.push({ name: "SelectProduct", params: { sortId: 4 } });
      // this.$cookies.remove("sortId")
      // this.$cookies.set("sortId","4")
      localStorage.removeItem("sortId");
      localStorage.setItem("sortId", "4");
    },
  },

  // beforeRouteEnter (to, from, next) {

  //   // this.$refs.top.scrollIntoView({behavior:"smooth",inline:"start"})
  //   next()
  // }
};
</script>
<style lang="scss" scoped>
$type: screen;
$proto: max-width;
$value: 1000px;

.container {
  font-family: microsoft yahei;
  @media screen and ($proto: $value) {
    .itemImg {
      display: block;
      position: relative;
      img {
        position: absolute;
        left: -50%;
        top: 50%;
      }
    }
  }
  @media screen and ($proto: 600px) {
    .itemImg {
      display: block;
      position: relative;
      img {
      }
    }
  }
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
      }
    }
  }
  .block {
    width: 100%;
    // margin: 20px 0;
    overflow: hidden;
    text-align: center;
    position: relative;
    .itemImg {
      position: absolute;
      left: -200px;
      top: 0;
    }
    @media #{$type} and ($proto: $value) {
      .itemImg {
        display: block;
        position: relative;
        img {
          position: absolute;
          left: -200px;
          top: 0;
        }
      }
    }
  }
  .choose-box {
    padding: 40px 0 65px 0;
    background-color: #f7f7f7;
    .choose-title {
      text-align: center;
      color: #999;
      font-size: 24px;
      line-height: 1.2;
      text-align: center;
      font-weight: 600;
      margin: 20px 0 45px 0;
    }
    .choose-body {
      display: flex;
      flex-direction: row;
      justify-content: center;

      .choose-item {
        height: 372px;
        width: 340px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        // padding: 10px;
        cursor: pointer;
        background-color: #fff;
        margin: 2.5px;
        span {
          display: inline-block;
          height: 74px;
          text-align: center;
          // margin: 10px 0;
          background-color: #fff;
          h3 {
            padding-top: 15px;
            font-size: 24px;
            font-weight: 700;
            color: #ef8009;
            //  color: gray;
            //   opacity: .8;
            margin: 0;
            span {
              display: block;
              font-weight: 400;

              font-size: 11px;
              color: #737373;
              // padding-bottom: 20px;
            }
          }
        }
        img {
          height: 298px;
          width: 340px;
        }
      }
    }
  }
}
</style>
