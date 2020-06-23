<template>
  <div>
    <headers></headers>
    <div class="nav">
      <div class="left">说明书下载</div>
      <div class="right">当前位置：<span> 服务中心 </span>说明书下载</div>
    </div>
    <div class="main">
      <div class="m-body">
        <div class="left">
          <div class="search">
            <img
              src="http://www.diqua.com/img/service/instructions/h3_img.jpg"
              alt=""
            />
            <div class="search-body">
              <input type="text" placeholder="请输入你的型号" />
              <img
                src="http://www.diqua.com/img/service/instructions/btn_search.gif"
                alt=""
              />
            </div>
          </div>
        </div>
        <div class="right">
          <div class="r-tit">
            或选择产品分类
          </div>
          <div class="select-type">
            <span>分类</span>
            <select id="tbody" @change="changeProduct($event)">
              <option value="0">-选择分类-</option>
              <option value="1">帝度冰箱说明书</option>
              <option value="2">帝度洗衣机说明书</option>
            </select>
          </div>
          <div class="select-body">
            <span>型号</span>
            <select id="fbody" multiple @change="setProduct($event)">
              <option
                :value="item.value"
                v-for="item in msg[typeIndex]"
                :key="item.value"
                >{{ item.title }}</option
              >
            </select>
          </div>
          <img
            class="opeation"
            src="http://www.diqua.com/img/service/instructions/btn_download.gif"
            @click="goDownload()"
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
      productType: "",
      typeIndex: 0,
      msg: [
        [],
        [
          {
            title: "8系列节能说明书",
            value: "1",
          },
          {
            title: "8系列节能说明书",
            value: "2",
          },
          {
            title: "8系列说明书",
            value: "3",
          },
          {
            title: "9系列说明书",
            value: "4",
          },
        ],
        [
          {
            title: "DB100US说明书",
            value: "20",
          },
          {
            title: "DB60355US说明书",
            value: "21",
          },
          {
            title: "DB60377BS 说明书",
            value: "22",
          },
          {
            title: "DB60599US说明书",
            value: "23",
          },
        ],
      ],
    };
  },
  methods: {
    changeProduct(event) {
      this.typeIndex = event.target.value;
    },
    setProduct(event) {
      // console.log(event)
      this.productType =
        "http://www.diqua.com/service/getinstructions.php?bid=" +
        event.target.value;
    },
    goDownload() {
      window.open(this.productType);
    },
  },
};
</script>
<style lang="scss" scoped>
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
        margin-right: 25px;
      }
      background: url(http://www.diqua.com/img/common/icon01.gif) no-repeat left
        center !important;
      padding: 4px 10px;
      font-size: 12px;
      margin-right: 270px;
      span {
        padding-right: 8px;
        margin-right: 8px;
        background: url("../assets/icon02.gif") no-repeat right center;
      }
      // opacity: 0.8;
    }
  }
}
.main {
  width: 100%;
  height: 340px;
  text-align: center;
  background: url(http://www.diqua.com/img/service/instructions/download_bg.gif)
    no-repeat center top;
  padding: 50px;
  padding-bottom: 20px;
  .m-body {
    width: 1000px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    .left {
      flex: 1;
      margin-right: 100px;
      height: 277px;
      background: url(http://www.diqua.com/img/service/instructions/search_bg.jpg)
        no-repeat -11px center;
      position: relative;
      .search {
        position: absolute;
        top: 30%;
        // transform: translateY(-60%);
        left: 81px;
        text-align: left;
        .search-body {
          text-align: left;
          margin-top: 14px;
          margin-left: 9px;
          // width:500px;
          display: flex;
          align-items: bottom;

          img {
            margin-left: 20px;
          }
          input {
            color: #6c6d6f;
            font-size: 14px;
            border: 1px solid #d0d0d0;
            display: inline-block;
            width: 300px;
            height: 27px;
            &:focus {
              outline: none;
            }
          }
        }
      }
    }
    .right {
      background: url(http://www.diqua.com/img/service/instructions/section_bg.gif)
        repeat-y left top;
      width: 360px;
      height: 260px;
      //       background-color: gray;
      padding: 10px 0 40px 65px;
      text-align: left;
      .r-tit {
        margin-bottom: 25px;
        font-size: 14px;
        color: #444;
        font-weight: 700;
      }
      span {
        padding: 3px 40px 0 0;
        color: #6c6d6f;
        line-height: 1.5;
        // text-align: left;
        font-weight: 400;
        vertical-align: top;
        font-size: 12px;
      }
      #tbody {
        width: 234px;
        height: 24px;
        option {
          line-height: 1.1;
        }
      }
      .select-body {
        margin-top: 5px;
        #fbody {
          width: 234px;
          height: 159px;
          :focus {
            outline: none;
          }
        }
      }
      .opeation {
        cursor: pointer;
        margin: 5px 0 0 65px;
      }
    }
  }
}
</style>
