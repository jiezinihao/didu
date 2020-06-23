<template>
  <div class="container">
    <headers ref="top"></headers>
    <div class="nav">
      <div>产品 > 洗衣机</div>
      <div>当前位置：洗衣机</div>
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
      <div class="choose-title">选择适合你的商品</div>
      <div class="choose-body">
        <div class="choose-item" @click="goSelect">
          <span>
            <h3>波轮洗衣机</h3>
            <span>PULSATOR WASHING MACHINE</span>
          </span>
          <img
            src="http://api.diqua.com/uploads/cat/20200523/84d5f599a2d7a519e894d8c620a2d346.jpg"
            alt=""
          />
        </div>
        <div class="choose-item">
          <span>
            <h3>滚筒洗衣机</h3>
            <span>DRUM WASHING MACHINE</span>
          </span>
          <div>
            <img
              src="http://api.diqua.com/uploads/cat/20200523/6a74dcb1ff23455f1dd8a81d873ace6c.jpg"
              alt=""
            />
          </div>
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
        "http://api.diqua.com/uploads/ad/20200523/7663bd3fd463b54f542b7260e4e5205f.jpg",
        "http://api.diqua.com/uploads/ad/20200523/f85ab9cf88dae1fcd1bd39e51de3d4a3.jpg",
        "http://api.diqua.com/uploads/ad/20200523/495ced9f5f8e327d25c7cca9fe9960b1.jpg",
      ],
      Id: 2,
    };
  },
  methods: {
    goSelect() {
      this.$router.push({ name: "SelectProduct", params: { sortId: this.Id } });
      localStorage.removeItem("sortId");
      localStorage.setItem("sortId", "2");
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
  font-family: Helvetica Neue, Helvetica, STHeiTi, sans-serif;
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
        margin-right: 270px;
        // opacity: 0.8;
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
      left: -160px;
      top: 0;
    }
    @media #{$type} and ($proto: $value) {
      .itemImg {
        display: block;
        position: relative;
        img {
          position: absolute;
          left: -300px;
          top: 0;
        }
      }
    }
  }
  .choose-box {
    text-align: center;
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
      width: 550px;
      // display: flex;
      // flex-direction: row;
      // justify-content: center;
      margin: 0 auto;
      margin-bottom: 20px;
      .choose-item {
        display: inline-block;
        cursor: pointer;
        height: 342px;
        width: 259px;
        // display: flex;
        // flex-direction: column;
        // justify-content: start;
        // padding: 10px;
        background-color: #fff;
        margin: 2px;

        img {
          height: 282px;
          width: 255px;
        }
        span {
          color: #333;
          // margin: 10px;

          text-align: center;
          h3 {
            font-size: 18px;
            margin: 0;
            margin-top: 8px;
            font-weight: 700;
            //  color: gray;
            // opacity: 0.8;
          }
          span {
            font-size: 0.7rem;
            // color: gray;
          }
        }
      }
    }
  }
}
</style>
