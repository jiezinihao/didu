<template>
  <div>
    <headers></headers>
    <div class="container">
      <img class="thumb" src="../assets/mwavefood.jpg" alt="" />
      <div class="food-list">
        <div class="food-item" v-for="item in foodList" :key="item">
          <img :src="item.imgPath" alt="" />
          <span
            >{{ item.name }}
            <img
              src="http://www.diqua.com/img/interactive/wallpaper/btn01.gif"
              alt=""
          /></span>
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
      foodList: [
        {
          name: "炖鸡",
          imgPath:
            "http://www.diqua.com/admin/resource/upload/wallpaper/1388400767.jpg",
        },
        {
          name: "宫保鸡丁",
          imgPath:
            "http://www.diqua.com/admin/resource/upload/wallpaper/1388400777.jpg",
        },
        {
          name: "鸡茸青瓜卷",
          imgPath:
            "http://www.diqua.com/admin/resource/upload/wallpaper/1388400947.jpg",
        },
        {
          name: "孔雀开屏鱼",
          imgPath:
            "http://www.diqua.com/admin/resource/upload/wallpaper/1388401068.jpg",
        },
        {
          name: "腊味合蒸",
          imgPath:
            "http://www.diqua.com/admin/resource/upload/wallpaper/1388401551.jpg",
        },
        {
          name: "面包披萨",
          imgPath:
            "http://www.diqua.com/admin/resource/upload/wallpaper/1388401696.jpg",
        },
        {
          name: "清蒸螃蟹",
          imgPath:
            "http://www.diqua.com/admin/resource/upload/wallpaper/1388401798.jpg",
        },
        {
          name: "鲜蒸河虾",
          imgPath:
            "http://www.diqua.com/admin/resource/upload/wallpaper/1388402509.jpg",
        },
        {
          name: "香辣豆豉蒸排骨",
          imgPath:
            "http://www.diqua.com/admin/resource/upload/wallpaper/1388402692.jpg",
        },
        {
          name: "香蒸馒头",
          imgPath:
            "http://www.diqua.com/admin/resource/upload/wallpaper/1388402901.jpg",
        },
        {
          name: "蟹肉卷",
          imgPath:
            "http://www.diqua.com/admin/resource/upload/wallpaper/1388403175.jpg",
        },
        {
          name: "蒸南瓜",
          imgPath:
            "http://www.diqua.com/admin/resource/upload/wallpaper/1388403263.jpg",
        },
        {
          name: "孜然肉串",
          imgPath:
            "http://www.diqua.com/admin/resource/upload/wallpaper/1388403438.jpg",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.container {
  text-align: center;
  .thumb {
    padding: 0;
    margin: 0 auto;
    vertical-align: top;
  }
  .food-list {
    width: 1017px;
    margin: 30px auto;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    overflow: hidden;
    .food-item {
      margin: 0 10px;
      padding-top: 7px;
      margin-bottom: 50px;
      padding-bottom: 45px;
      border-top: 2px solid #ef8009;
      //   width: 24%;
      position: relative;
      display: flex;
      flex-direction: column;
      &::after {
        content: "";
        width: 110%;
        height: 1px;
        background-color: rgba(189, 195, 199, 0.6);
        position: absolute;
        bottom: 0;
        background: url("../assets/line01.gif") repeat-x left bottom;
      }
      &:last-child {
        &::after {
          height: 0;
        }
      }
      span {
        color: #595959;
        font-size: 14px;
        margin-left: 6px;
        margin-top: 15px;
        display: flex;
        justify-content: space-between;
      }
    }
  }
}
</style>
