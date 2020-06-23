<template>
  <div class="container">
    <headers></headers>
    <div class="nav">
      <div>在线购买</div>
      <div>当前位置：在线购买</div>
    </div>
    <div class="center">
      <a 
      href="https://diqua.tmall.com/search.htm"
      target="_blank"
        ><img src="http://www.diqua.com/img/common/sale_pic1.png" alt=""
      /></a>
      <a
      href="https://mall.jd.com/index-917170.html"
      target="_blank"
        ><img src="http://www.diqua.com/img/common/sale_pic2.png" alt=""
      /></a>

      <a
      href="http://hzx.whirlpool-china.com/mobile/index.jhtml?pageStat=6"
      target="_blank">
        <img src="http://www.diqua.com/img/common/logo_mall.png" alt=""
      /></a>
    </div>
    <bottom></bottom>
  </div>
</template>
<style lang="scss" scoped>
  .nav {
    width: 100%;
    height: 37px;
    padding: 0 20px;
    background: #fff url(http://www.diqua.com/img/common/pagepath_bg.gif) repeat-x left top;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: white;
    div {
      &:first-child {
              @media screen and (max-width: 1250px) {
        margin-left: 20px;
      }
        margin-right: 230px;
        font-size: 18px;
      }
      &:nth-child(2) {
              @media screen and (max-width: 1250px) {
        margin-right: 50px;
      }
     background: url(http://www.diqua.com/img/common/icon01.gif) no-repeat left center !important;
      padding: 4px 10px;
      font-size: 12px;
        // opacity: 0.8;
      }
    }
  }
.container{
    text-align: center;
.center {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #fff;

  width: 1000px;
  margin: 82px auto;
  a{
    text-decoration: none;
    color: black;
    margin: 0 18px 22px 0;
    // padding: 10px 16px 26px 17px;
    width: 315px;
    height: 133px;
    border: 1px solid #ddd;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
      margin-bottom: 15px;
        width: 280px;
    }
  }
}
}

</style>
