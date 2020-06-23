<template>
  <div class="home">
    <headers></headers>
    <div class="nav">
      <div class="left">产品 > 冰箱</div>
      <div class="right">当前位置：冰箱</div>
    </div>
    <div class="block">
      <el-carousel height="600px">
        <el-carousel-item v-for="item in carouselImg" :key="item">
          <div class="itemImg">
            <img :src="item" alt="" />
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="choose-box">
      <div class="choose-title">
        <p>选择适合你的商品</p>
      </div>
      <div class="choose-body">
        <div class="choose-item" @click="goSelect(1)">
          <div class="item-title">
            <span>
              <h3>对开门冰箱</h3>
              <p>ON THE REFRIGERATOR DOOR</p>
            </span>
          </div>
          <img
            src="http://api.diqua.com/uploads/cat/20200522/2be327d0cfda6d800149d2bb4045ebea.png"
            alt=""
          />
        </div>
        <div class="choose-item">
          <div class="item-title">
            <span>
              <h3>多门冰箱</h3>
              <p>MULTI-DOOR REFRIGERATOR</p>
            </span>
          </div>
          <img
            src="http://api.diqua.com/uploads/cat/20200522/cb72a4ff9b02e18bf9a0362bb1cc93a1.png"
            alt=""
          />
        </div>
        <div class="choose-item">
          <div class="item-title">
            <span>
              <h3>三门冰箱</h3>
              <p>THREE-DOOR REFRIGERATOR</p>
            </span>
          </div>
          <img
            src="http://api.diqua.com/uploads/cat/20200522/aee41001c9f2c61372dae68528d44e14.png"
            alt=""
          />
        </div>
        <div class="choose-item">
          <div class="item-title">
            <h3>两门冰箱</h3>
            <p>TWO DOOR REFRIGERATOR</p>
          </div>
          <img
            src="http://api.diqua.com/uploads/cat/20200522/befe5c984a156c87d188d0c39bc65f9a.png"
            alt=""
          />
        </div>
        <div class="choose-item">
          <div class="item-title">
            <span>
              <h3>冰柜</h3>
              <p>Freezer</p>
            </span>
          </div>
          <img
            src="http://api.diqua.com/uploads/cat/20200522/cc0c4c05d6fcce6d63d44e0796e331ff.jpg"
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
        "http://api.diqua.com/uploads/ad/20200523/7b47a4cc8e9e193ad85d10a938dd8c19.jpg",
        "http://api.diqua.com/uploads/ad/20200523/3110f485737fab5f2e7ef50db34f984d.jpg",
        "http://api.diqua.com/uploads/ad/20200523/000c015b62f5c4e53de871d227707a7b.jpg",
        "http://api.diqua.com/uploads/ad/20200523/caef0d5d7de488bab73e18c1341899a2.jpg",
      ],
    };
  },
  methods: {
    goSelect(Id) {
      this.$router.push({ name: "SelectProduct", params: { sortId: Id } });
      // this.$cookies.remove("sortId")
      // this.$cookies.set("sortId",Id)
      localStorage.clear();
      localStorage.setItem("sortId", "1");
    },
  },
};
</script>
<style lang="scss" scoped>
$type: screen;
$proto: max-width;
$value: 1125px;

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
      margin-left: 250px;
      font-size: 18px;
      @media screen and (max-width: 1250px) {
        margin-left: 20px;
      }
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
.block {
  width: 100%;
  // margin: 20px 0;
  overflow: hidden;
  text-align: center;
  position: relative;
  .itemImg {
    position: absolute;
    left: -150px;
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
  // width: 80vw;
  background-color: #f7f7f7;
  text-align: center;
  .choose-title {
    // color: #999;
    font-size: 24px;
    line-height: 1.2;
    text-align: center;
    padding: 70px 0 45px 0;
    // margin: 20px;
    color: #999;
    // opacity: 0.7;
    font-weight: 600;
    font-family: Helvetica Neue, Helvetica, STHeiTi, sans-serif;
    p {
      margin: 0;
    }
  }
  .choose-body {
    // @media #{$type} and ($proto: $value) {
    //   padding: 0;
    //   // justify-content: center;
    //   width: 760px;
    // }
    margin: 0 auto;
    width: 1028px;
    // padding: 0 10vw;
    display: flex;
    justify-content: start;
    align-items: center;
    flex-wrap: wrap;
    .choose-item {
      font-family: Helvetica Neue, Helvetica, STHeiTi, sans-serif;
      width: 255px;
      margin-bottom: 12px;
      cursor: pointer;
      // margin: 0 5px;
      .item-title {
        background-color: #fff;
        margin: 1px;
        padding: 12px 20px;

        h3 {
          font-size: 18px;
          font-weight: 700;
          color: #575757;
          margin: 0;
          margin-bottom: 2px;
          // opacity: 0.9;
        }
        p {
          margin: 0;
          color: #333;
          // color: gray;
          font-size: 11px;
        }
      }
    }
  }
}
</style>
<style lang="scss">
.el-carousel .el-carousel--horizontal {
  z-index: 1;
}
.el-carousel__button {
  display: block !important;
  opacity: 0.48 !important;
  width: 15px !important;
  height: 15px !important;
  border-radius: 50% !important;
  background-color: #fff;
  border: none;
  outline: 0;
  padding: 0;
  margin: 0;
  cursor: pointer;
  transition: all 0.3s ease !important;
}
.el-carousel__indicators--horizontal {
  bottom: 30px !important;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  li {
    margin: 0 3px !important;
  }
}
.is-active {
  button {
    opacity: 1 !important;
    background-color: #ef8009;
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }
}
</style>
