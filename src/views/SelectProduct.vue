<template>
  <div>
    <headers></headers>
    <div class="nav">
      <div class="left">产品 > {{ local }}</div>
      <div class="right">当前位置： {{ local }}</div>
    </div>
    <div class="block">
      <el-carousel height="600px">
        <el-carousel-item v-for="item in carouselImg[sortId - 1]" :key="item">
          <div class="itemImg">
            <img :src="item" alt="" />
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="select-box">
      <div class="select-title">
        <div class="left">{{ local }}-商品筛选</div>
        <div class="right">重置筛选条件</div>
      </div>
      <div class="select" style="margin-bottom:10px">
        <span class="btn" v-for="item in topNav[sortId - 1][0]" :key="item">
          {{ item }}
        </span>
      </div>
      <div
        class="select"
        v-if="sortId != '1' && sortId != '4'"
        style="margin-top:0px"
      >
        <span class="btn" v-for="item in topNav[sortId - 1][1]" :key="item">
          {{ item }}</span
        >
      </div>
      <div class="select-body">
        <div
          class="select-item"
          v-for="item in this.msg[this.currentPage - 1]"
          :key="item.name"
          @click="goProDea()"
        >
          <img :src="item.imgPath" alt="" class="left" />
          <div class="right">
            <h3>{{ item.name }}</h3>
            <div class="opeartion"></div>
          </div>
        </div>
      </div>

      <div class="pagination">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="index * 10"
          :current-page.sync="currentPage"
        >
        </el-pagination>
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
        [
          "http://api.diqua.com/uploads/ad/20200523/7b47a4cc8e9e193ad85d10a938dd8c19.jpg",
          "http://api.diqua.com/uploads/ad/20200523/3110f485737fab5f2e7ef50db34f984d.jpg",
          "http://api.diqua.com/uploads/ad/20200523/000c015b62f5c4e53de871d227707a7b.jpg",
          "http://api.diqua.com/uploads/ad/20200523/caef0d5d7de488bab73e18c1341899a2.jpg",
        ],
        [
          "http://api.diqua.com/uploads/ad/20200523/7663bd3fd463b54f542b7260e4e5205f.jpg",
          "http://api.diqua.com/uploads/ad/20200523/f85ab9cf88dae1fcd1bd39e51de3d4a3.jpg",
          "http://api.diqua.com/uploads/ad/20200523/495ced9f5f8e327d25c7cca9fe9960b1.jpg",
        ],
        [
          "http://www.diqua.com/img/product/microwave/list_slidephoto01.jpg",
          "http://www.diqua.com/img/product/microwave/list_slidephoto02.jpg",
          "http://www.diqua.com/img/product/microwave/list_slidephoto03.jpg",
        ],
        [
          "http://www.diqua.com/img/product/kitchen/list_slidephoto01.jpg",
          "http://www.diqua.com/img/product/kitchen/list_slidephoto02.jpg",
          "http://www.diqua.com/img/product/kitchen/list_slidephoto03.jpg",
        ],
      ],
      msg: [],

      sortId: localStorage.getItem("sortId"),
      currentPage: 1,
      local: "",
      topNav: [
        [["开门方式:", "不限"]],
        [
          ["容量(kg)：", "不限", "10", "9", "8.5", "8"],
          [
            "系　　列：",
            "不限",
            "鲤想Pro系列",
            "鲤想系列",
            "焕净系列",
            "纯真系列",
          ],
        ],
        [
          ["开门方式:", "不限", "下拉们", "侧拉们"],
          ["容　　量：", "不限", "18L-20L", "20L-24L", "25L以上"],
        ],
        [["上市年份：", "不限", "2013", "2014"]],
      ],
    };
  },
  computed: {
    index: function() {
      return this.msg.length;
    },
  },
  mounted() {
    switch (this.sortId) {
      case "1":
        this.local = "冰箱";
        this.msg = [
          [
            {
              name: "BCD-575WDGBDS铂雅银灰",
              imgPath:
                "http://api.diqua.com/uploads/shops/20200523/d7ce59ac8bbea5b91a3d66fa18d0f407.jpg",
            },
            {
              name: "BCD-592WDGBI郁香紫",
              imgPath:
                "http://api.diqua.com/uploads/shops/20200523/29e40f0fa874287846364a74ec6b773e.jpg",
            },
            {
              name: "BCD-592WDGF郁香金",
              imgPath:
                "http://api.diqua.com/uploads/shops/20200523/c4ee51c9e1d519cc7ba7b1d787f6605f.jpg",
            },
            {
              name: "BCD-591WDA玫瑰金",
              imgPath:
                "http://api.diqua.com/uploads/shops/20200523/7872ae49c2c0ae8de88333a6d92e97e4.jpg",
            },
          ],
        ];

        break;
      case "2":
        this.local = "洗衣机";
        this.msg = [
          [
            {
              name: "DVD101521AIT",
              imgPath:
                "http://api.diqua.com/uploads/shops/20200523/ee1a87e46a02b3b3cc7371d28cede015.jpg",
            },
            {
              name: "DVD101421AIS",
              imgPath:
                "http://api.diqua.com/uploads/shops/20200523/eb0196fddc849dc4ce50fa6442a8669f.jpg",
            },
            {
              name: "DVD101421S",
              imgPath:
                "http://api.diqua.com/uploads/shops/20200523/30c8da8eba05c3feec5979be18d63a78.jpg",
            },
            {
              name: "DVP101421S",
              imgPath:
                "http://api.diqua.com/uploads/shops/20200523/cfc687ad42e675ca80ece24d0613928a.jpg",
            },
          ],
          [
            {
              name: "DB100377BYE",
              imgPath:
                "http://api.diqua.com/uploads/shops/20200523/ad41d7588375d2dad3cfc0ad16b28d22.jpg",
            },
            {
              name: "DVD901301VS",
              imgPath:
                "http://api.diqua.com/uploads/shops/20200523/3cd1a0c954a8b8c7c5523dbf2ac19538.jpg",
            },
            {
              name: "DVP901301VS",
              imgPath:
                "http://api.diqua.com/uploads/shops/20200523/b82ed76f88071d0f244de0c0075d3498.jpg",
            },
            {
              name: "DVD801301VW",
              imgPath:
                "http://api.diqua.com/uploads/shops/20200523/d248c8a8124061b1eb6788b9df286385.jpg",
            },
          ],
        ];
        break;
      case "3":
        this.local = "微波炉";
        this.msg = [
          [
            {
              name: "EM-310BX",
              imgPath:
                "http://www.diqua.com/admin/resource/upload/adproduct/list/1388480633.jpg",
            },
            {
              name: "EM-L530BX",
              imgPath:
                "http://www.diqua.com/admin/resource/upload/adproduct/list/1388480675.jpg",
            },
            {
              name: "EM-l530R",
              imgPath:
                "http://www.diqua.com/admin/resource/upload/adproduct/list/1388480851.jpg",
            },
          ],
        ];
        break;
      case "4":
        this.local = "空气净化器";
        this.msg = [
          [
            {
              name: "智能监测 负离子健康",
              imgPath:
                "http://www.diqua.com/admin/resource/upload/adproduct/list/1395654404.jpg",
            },
            {
              name: "家庭使用好帮手",
              imgPath:
                "http://www.diqua.com/admin/resource/upload/adproduct/list/1395654608.jpg",
            },
            {
              name: "DK-L2510",
              imgPath:
                "http://www.diqua.com/admin/resource/upload/adproduct/list/1395654666.jpg",
            },
            {
              name: "帝度“天净”空气净化器",
              imgPath:
                "http://www.diqua.com/admin/resource/upload/adproduct/list/1395654760.jpg",
            },
          ],
        ];
        break;
    }
  },
  methods: {
    goProDea() {
      this.$router.push({ name: "ProductDeatil" + this.sortId });
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
  background: #d50080 url(http://www.diqua.com/img/common/pagepath_bg.gif)
    repeat-x left top;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;

  .left {
    // @media screen and (max-width: 1250px) {
    //   margin-left: 20px;
    // }
    margin-left: 250px;
    // margin-right: 230px;
    font-size: 18px;
  }
  .right {
    // @media screen and (max-width: 1250px) {
    //   margin-right: 50px;
    // }
    background: url(http://www.diqua.com/img/common/icon01.gif) no-repeat left
      center !important;
    padding: 4px 10px;
    font-size: 12px;
    // opacity: 0.8;
    margin-right: 270px;
  }
}
.select-box {
  box-sizing: border-box;
  text-align: center;
  width: 921px;
  margin: 70px auto;
  // margin-left: ;
  // @media screen and (max-width: 665px) {
  //   width: 500px;
  // }
  .select-title {
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
    padding: 2px 20px;
    width: 100%;
    background-color: #afafaf;
    color: white;
    font-weight: bold;
    font-size: 14px;
    line-height: 1.5;
    .right {
    }
  }
  .select {
    box-sizing: border-box;
    width: 100%;
    margin: 20px 0;
    padding: 0px 20px 10px 10px;
    border-bottom: 1px dashed #ccc;
    text-align: left;
    font-family: SimSun, 宋体, sans-serif;

    .active {
      background-color: #ef8009;
      color: white;
    }
    .btn {
      display: inline-block;
      height: 24px;
      font-size: 12px;
      text-align: center;
      line-height: 2;
      // min-width: 36px !important;
      // padding: 4px 5px;
      // padding: 6px;
      padding: 0 6px;
      margin: 0 6px;
      color: #666;
    }
    span {
      &:active {
        background-color: #ef8009;
        color: white;
      }
      &:nth-child(2) {
        background-color: #ef8009;
        color: white;
      }
      &:nth-child(1) {
        display: inline-block;
        width: 65px;
        &:hover {
          background: #fff;
          color: #666;
        }
      }
    }

    .btn:hover {
      background-color: #ef8009;
      cursor: pointer;
      color: white;
      // width: 10px;
    }
  }
  .select-body {
    width: 1028px;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    // padding: 0 350px;
    margin: 40px 10px;
    .select-item {
      // @media screen and (max-width: 665px) {
      //   width: 500px;
      // }
      margin: 10px 0;
      display: flex;
      width: 49%;
      img {
        height: 216px;
        width: 188px;
      }
      .right {
        margin-left: 20px;
        font-size: 0.8rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-bottom: 20px;
        text-align: left;
        h3 {
          margin: 10px 0;
          // width: 50px;
          font-weight: 400;
          font-size: 14px;
          color: #737373;
          font-family: Helvetica Neue, Helvetica, STHeiTi, sans-serif;
        }
        .opeartion {
          width: 124px;
          height: 28px;
          transition: all 0.2s ease;
          cursor: pointer;
          opacity: 0.9;
          background: url(data:image/gif;base64,R0lGODlhfAAcAKIAAP///8zMzIiIiLu7u+rq6ufn5/Dw8AAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS4wLWMwNjAgNjEuMTM0Nzc3LCAyMDEwLzAyLzEyLTE3OjMyOjAwICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjc4RkUzMDNBRDQxMkUzMTFBMUExRDYzOUEzNDY4Rjg1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjRENTlERDRENjk2NjExRTNBMTRBRUNGQzI3MkExNEY0IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjRENTlERDRDNjk2NjExRTNBMTRBRUNGQzI3MkExNEY0IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzUgV2luZG93cyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjJDNjkzRkY1MjI2OUUzMTE5NUYxODMyRDUxNTY0MUFGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjc4RkUzMDNBRDQxMkUzMTFBMUExRDYzOUEzNDY4Rjg1Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Af/+/fz7+vn49/b19PPy8fDv7u3s6+rp6Ofm5eTj4uHg397d3Nva2djX1tXU09LR0M/OzczLysnIx8bFxMPCwcC/vr28u7q5uLe2tbSzsrGwr66trKuqqainpqWko6KhoJ+enZybmpmYl5aVlJOSkZCPjo2Mi4qJiIeGhYSDgoGAf359fHt6eXh3dnV0c3JxcG9ubWxramloZ2ZlZGNiYWBfXl1cW1pZWFdWVVRTUlFQT05NTEtKSUhHRkVEQ0JBQD8+PTw7Ojk4NzY1NDMyMTAvLi0sKyopKCcmJSQjIiEgHx4dHBsaGRgXFhUUExIREA8ODQwLCgkIBwYFBAMCAQAAIfkEAAAAAAAsAAAAAHwAHAAAA/8Yutz+MMpJq70N6M27/2AojmS5BWappGzrviEKe+ts3/iZa/Xu/yNZrgcsGgFCHPHIHPqWzSgseYOWBCHsBqv1dKWxJ9X07Xy1XIGa6127y7/xzAp62zVlN6CbXovgTyQEAwQkdH91eHtqHGyMW42KUXIcBQOXBUGUiJJ4j517oWigolKbAAaXqgYih4mQZo1+jpJ8sE2nqrqtp22Rv4tnpbawgEC9LK6xaHrBtqO0jnbNRbm6l7wtwn/PooxwxsciqbqsMcixt1vExJB5nrgjlpia2sCLkWyl6fj34iODCtVj0YcaPHjtHn3i928IOjAQaYiJSDHFQxUXK0LMOFAdo8cPHLN9HMkh5DmSKJFMTDnSJAgMMGPKnEnTQgIAOw==);
          &:hover {
            background: url(data:image/gif;base64,R0lGODlhfAAcAJEAAMABD/Xc3ttwdwAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS4wLWMwNjAgNjEuMTM0Nzc3LCAyMDEwLzAyLzEyLTE3OjMyOjAwICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjc4RkUzMDNBRDQxMkUzMTFBMUExRDYzOUEzNDY4Rjg1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjExMzgyQ0JFNjk2ODExRTNBMTMzQzc2MzI5OEVBOTMzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjExMzgyQ0JENjk2ODExRTNBMTMzQzc2MzI5OEVBOTMzIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzUgV2luZG93cyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkE3NzUxRjUxNjY2OUUzMTE5MjhFQUVDQjg4NDhEMDMwIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjc4RkUzMDNBRDQxMkUzMTFBMUExRDYzOUEzNDY4Rjg1Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Af/+/fz7+vn49/b19PPy8fDv7u3s6+rp6Ofm5eTj4uHg397d3Nva2djX1tXU09LR0M/OzczLysnIx8bFxMPCwcC/vr28u7q5uLe2tbSzsrGwr66trKuqqainpqWko6KhoJ+enZybmpmYl5aVlJOSkZCPjo2Mi4qJiIeGhYSDgoGAf359fHt6eXh3dnV0c3JxcG9ubWxramloZ2ZlZGNiYWBfXl1cW1pZWFdWVVRTUlFQT05NTEtKSUhHRkVEQ0JBQD8+PTw7Ojk4NzY1NDMyMTAvLi0sKyopKCcmJSQjIiEgHx4dHBsaGRgXFhUUExIREA8ODQwLCgkIBwYFBAMCAQAAIfkEAAAAAAAsAAAAAHwAHAAAAtKEj6nL7Q8jErLai7Oeu/sPMlRIliY0nupapuwLY25M16KN58esA0HzO/yCCmLPwNMZE8bgMAAdFqPUZetYzRqWVJ/Q1wWykkWWdYuOIqTQtdsLI6/bKmKTjv5K4Vz4S74VVtJUJqTGlmf3FeeQdbaB55cHRog4yRcD+LJXFYjH6YX45Bh5BaQ1+HaqF9pm9Wii2WlCyKTo19cH9gehdlIb6Ab6asg0FgHrMSoYHHy7C114onlU7UFtnS2jzR2C3Q3e8B1OzlF+HjGOHq6+3t3+UAAAOw==);
          }
        }
      }
    }
  }
  .pagination {
    margin: 50px 0;
    text-align: center;
  }
  .block {
    width: 100vw;
    // margin: 20px 0;
    overflow: hidden;
    text-align: center;
    position: relative;
    .itemImg {
      position: absolute;
      left: -100px;
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
}
</style>
