<template>
  <div>
    <headers></headers>
    <div class="nav">
      <div class="left">帮助问题</div>
      <div class="right">当前位置： 帮助问题</div>
    </div>
    <div class="center">
      <div class="manu">
        <span ref="manu1"></span>
        <span
          @mouseenter="changeHover(1)"
          @mouseleave="changeHover(0)"
          @click="changeIndex(1)"
        ></span>
        <span ref="manu2"></span>
        <span
          @mouseenter="changeHover(2)"
          @mouseleave="changeHover(0)"
          @click="changeIndex(2)"
        ></span>
        <span ref="manu3"></span>
        <span
          @mouseenter="changeHover(3)"
          @mouseleave="changeHover(0)"
          @click="changeIndex(3)"
        ></span>
        <span ref="manu4"></span>
        <span
          @mouseenter="changeHover(4)"
          @mouseleave="changeHover(0)"
          @click="changeIndex(4)"
        ></span>
      </div>
      <div class="answer-list">
        <div
          class=""
          v-for="(item, index) in answerList[index - 1][pageIndex - 1]"
          :key="item.msg"
          @click="changeActive(index)"
          :class="['answer-item', { active: activeIndex == index }]"
        >
          <div class="left">0{{ index + 1 }}.</div>
          <div class="answer-main">
            <div class="answer-tit">{{ item.msg }}</div>
            <div class="answer-body" v-html="item.detail"></div>
          </div>
        </div>
      </div>
      <div class="slip-page">
        <span :class="{ activePage: pageIndex == 1 }" @click="pageIndex = 1"
          >1</span
        >
        <span :class="{ activePage: pageIndex == 2 }" @click="pageIndex = 2"
          >2</span
        >
      </div>
    </div>
    <bottom></bottom>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: 0,
      index: 1,
      pageIndex: 1,
      answerList: [
        [
          [
            {
              msg: "怎么看出有超音波功能？",
              detail:
                "一般具有超音波功能洗衣机在出厂时超音波功能是默认打开的，工作时会产生大量气泡！仔细观察就会发现。如需取消此功能 可参照说明书设置。",
            },
            {
              msg: "来电咨询桶自洁怎么设定，还有洗毛毯有绒毛怎么处理?",
              detail:
                "（1）首先确认用户的洗衣机是否具有桶自洁功能。如有此功能，指导用户按说明书操作即可。注意:此程序水位自动设定为 高水位;程序运行时间约4小时“水位”和“过程”键均不能设定。<br /><br />（2）参考不过滤解释。",
            },
            {
              msg: "洗衣机怎么转转停停？",
              detail:
                "经询问用户是自己倒水使用的。此情况要把水位设定到最低档，一直加水直到洗衣开始工作，途中当洗衣机停下时要继续加水。（全自动洗衣机）",
            },
            {
              msg: "用户咨询洗涤上盖是否可以随时打开？",
              detail:
                "洗涤和漂洗时可以打开。脱水必须要关上，否则会出现U4报警，不脱水。",
            },
          ],
          [
            {
              msg: "用户来电询问是否可以自己安装，保修时间从哪天算起？",
              detail:
                "洗衣机属于非专业安装，用户自己可以安装，具体可以参照说明书。保修时间是从发票购机日期开始计算。",
            },
            {
              msg: "柔软剂进不到桶内？",
              detail:
                "三洋洗衣机在内桶上有一个柔软剂注入口，请参考柔软剂说明投放量投放。浓缩型的柔软剂请加水稀释后投放（稀释比为1： 2）。洗衣机将会在最后一次漂洗时自动投放。",
            },
            {
              msg: "屏蔽板有什么作用？",
              detail:
                "屏蔽板又称防鼠板，主要作用是防老鼠钻进洗衣机咬坏部件用的，如需要可直接从底座下面的插槽中插入。",
            },
            {
              msg:
                "用户来电咨询50-M805Z是否可以人为设置脱水时间，脱水时间多长？",
              detail:
                "这款洗衣机程序全部是出厂时就设置好的，不能进行人工设置。脱水时间一般在5-10分钟。",
            },
          ],
        ],
        [
          [
            {
              msg: "微波炉内照明灯不亮是什么原因？",
              detail: "门未关紧；灯泡烧坏了。",
            },
            {
              msg: "为什么通风口会冒蒸汽？",
              detail:
                "食物烹调时，水份从食物中出来的速度比水份从箱内排出的速度快本微波炉经特别设计，让蒸汽能够释放出来，所以出现这种现象是正常的。",
            },
            {
              msg: "如果让微波炉空烧，会不会造成损坏？",
              detail: "会造成损坏。微波炉内没有食物，请千万不要启动。",
            },
            {
              msg: "为什么烹调结束后，最好还要放置一段时间？",
              detail:
                "放置时间十分重要。用微波烹调时，食物内部积聚了很多热量，即使食物从炉内取出后，烹调过程还在进行。将大块肉，大块或大片的蔬菜以及蛋糕放置一段时间，就可以让食物里面熟透，而表面不至于烧得过分。",
            },
          ],
          [
            {
              msg: "微波炉内为什么有时会出现火花、发出噼啪声？",
              detail:
                "炉腔内出现火花、发出噼啪声有几种可能的原因：<br /><br />1.使用的菜盘带有金属部件或金属装饰<br /><br />2.金属用具被遗留在炉腔内<br /><br />3.铝箔用得太多<br /><br />4.炉腔内有捆扎用的金属丝",
            },
            {
              msg: "微波炉内为什么会出现水汽？",
              detail: "这很正常，原因是食物加热速度超过水份从炉内排出的速度。",
            },
            {
              msg: "鸡蛋有时为什么会炸开？",
              detail:
                "蛋白和蛋黄膜内的蒸汽积聚到一定程度就有可能炸开。为了避免这个问题，烧煮前应先刺穿蛋白。<br /><br />（注意：切勿将鸡蛋连壳放在微波炉内烹调否则会爆开。）",
            },
            {
              msg: "烘烤苹果时，有时为什么会炸裂？",
              detail:
                "跟普通烹调方式一样，用微波炉烘苹果时，苹果内部会膨胀。应削掉每只苹果上半截的皮，使苹果内部有膨胀余地，否则会发生炸裂。",
            },
          ],
        ],
        [
          [
            {
              msg: "压缩机不转？",
              detail:
                "（1）检查线路（打开冰箱冷藏室门，检查灯是否亮）<br />①灯不亮 <br />②灯亮：检查档位是否打在“0”档，如不在则可在冷藏室内放一杯热水，过一会冰箱应能正常启动；如在冬季，补偿加热开关打到“冬季”位置（机控）<br /><br />（2）检查电源电压是否过低注：无补偿加热开关的机控冰箱，加热器的工作受位于冷冻室内的磁控开关自动控制。冬季时每次工作的间隔时间较长。要注意与不启动的区别。",
            },
            {
              msg: "制冷不佳（或不停机）？",
              detail:
                "（1）靠近热源或通风不佳，环境温度过高<br /><br />（2）冰箱门（柜）开启频繁<br /><br />（3）食物放入过多<br /><br />（4）温度调整不正确<br /><br />（5）高环温下温度补偿开关未关闭",
            },
            {
              msg: "夏季开机时间长？",
              detail:
                "（1）环境温度过高引起。夏季因为环境温度高，冰箱散热慢，冰箱运行时间相对较长。任何冰箱都有一个温度使用范围，随着环境温度的升高，运行时间会加长，可指导用户<br /><br />（2）调整档位的设置、指导食品的正确放置、并将冰箱放置通风的位置<br /><br />（3）速冻开关被打开：带有速冻开关的冰箱（机控冰箱打在最高档位置），若将速冻打开，则电冰箱是连续不停工作的。<br /><br />（4）手动低温补偿开关未打到“平常”位置",
            },
            {
              msg: "带软冻功能的机控冰箱软冻温度过低？",
              detail:
                "（1）原因：<br />①冷藏、软冻、冷冻三个室的温度都是通过冷藏室的温控器间接控制<br /><br />同样温控档位的情况下，环温高低、冷藏室放食物的多少、开门次数也影响软冻室的温度<br /><br />（2）解决措施：调高冷藏室的温度",
            },
          ],
          [
            {
              msg: "冷藏室后背异常结冰或冷藏室内食品冻结？",
              detail:
                "（1）冷藏室温度调的太低<br /><br />（2）环温回升，转换开关未拨回“平常”<br /><br />（3）存放的食物离后壁冷源过近<br /><br />（4）水分大的食品是放在了底部搁架",
            },
            {
              msg: "冷藏室内有积水？",
              detail: "疏通冷藏室内积水槽的漏水孔（可能被食物碎渣堵塞）",
            },
            {
              msg: "门封条吸合不严的处理？",
              detail:
                "（1）打开此门<br /><br />（2）用电吹风吹热风加热变形处门封<br /><br />（3）吸合定型",
            },
            {
              msg: "异味？",
              detail:
                "（1）异味的产生<br />①味道较重的食物未包装<br />②长时间使用的冰箱需清理<br /><br />（2）异味的消除<br /><br />①清洁冰箱，敞门几天<br /><br />②清除异味（去味物品放入后关上门）<br /><br />几块新鲜的桔子皮洗净揩干，散放入冰箱内<br /><br />放入半杯白酒（最好是碘酒）<br /><br />用纱布包50克茶叶放入冰箱",
            },
          ],
        ],
          
      ],
    };
  },
  methods: {
    changeHover(res) {
      if (res) {
        this.$refs["manu" + this.index].style.display = "none";
      } else {
        this.$refs["manu" + this.index].style.display = "inline-block";
      }
    },
    changeIndex(res) {
      this.index = res;
      this.pageIndex = 1;
      this.activeIndex = 0;
    },
    changeActive(res) {
      this.activeIndex = res;
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
     background: url(http://www.diqua.com/img/common/icon01.gif) no-repeat left center !important;
      padding: 4px 10px;
      font-size: 12px;
        // opacity: 0.8;
        margin-right: 270px;
      }
    }
  }
.center {
  margin-top: 60px;
  width: 100%;
  display: flex;
  // justify-content:;
  flex-direction: column;
  align-items: center;
  .manu {
    width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    span {
      display: inline-block;
      width: 200px;
      height: 174px;
      //   background-color: gray;

      &:nth-child(1) {
        background: url("../assets/menu01_pic.png") no-repeat;
        &:hover {
          background: url("../assets/menu01_on.jpg");
          width: 400px;
        }
        &:hover + span {
          display: none;
        }
      }
      &:nth-child(2) {
        position: relative;
        //   box-shadow: 30px 5px 10px 1px gray;
        background: url("../assets/menu01_off.jpg") no-repeat;
        &:hover {
          background: url("../assets/menu01_on.jpg");
          width: 400px;
          &::after {
            content: "";
            width: 0;
          }
        }

        &::after {
          z-index: 99999;
          content: "";
          position: absolute;
          top: 0;
          left: 104%;
          width: 10px;
          height: 100%;
          background: url(http://www.diqua.com/img/service/help/bg_li.png)
            no-repeat;
          // z-index: 99;
        }
      }
      &:nth-child(3) {
        display: none;
        background: url("../assets/menu02_pic.png") no-repeat;
        &:hover {
          background: url("../assets/menu02_on.jpg");
          width: 400px;
        }
        &:hover + span {
          display: none;
        }
      }
      &:nth-child(4) {
        position: relative;
        //   box-shadow: 30px 5px 10px 1px gray;
        background: url("../assets/menu02_off.jpg") no-repeat;
        &:hover {
          background: url("../assets/menu02_on.jpg");
          width: 400px;
          &::after {
            content: "";
            width: 0;
          }
        }
        &::after {
          z-index: 99999;
          content: "";
          position: absolute;
          top: 0;
          left: 104%;
          width: 10px;
          height: 100%;
          background: url(http://www.diqua.com/img/service/help/bg_li.png)
            no-repeat;
          // z-index: 99;
        }
      }
      &:nth-child(5) {
        display: none;
        background: url("../assets/menu03_pic.png") no-repeat;
        &:hover {
          background: url("../assets/menu03_on.jpg");
          width: 400px;
        }
        &:hover + span {
          display: none;
        }
      }
      &:nth-child(6) {
        position: relative;
        //   box-shadow: 30px 5px 10px 1px gray;
        &:hover {
          background: url("../assets/menu03_on.jpg");
          width: 400px;
          &::after {
            content: "";
            width: 0;
          }
        }
        &::after {
          content: "";
          z-index: 99999;
          position: absolute;
          top: 0;
          left: 104%;
          width: 10px;
          height: 100%;
          background: url(http://www.diqua.com/img/service/help/bg_li.png)
            no-repeat;
          // z-index: 99;
        }
        background: url("../assets/menu03_off.jpg") no-repeat;
      }
      &:nth-child(7) {
        display: none;
        background: url("../assets/menu04_pic.png") no-repeat;
        &:hover {
          background: url("../assets/menu04_on.jpg");
          width: 400px;
        }
        &:hover + span {
          display: none;
        }
      }
      &:nth-child(8) {
        position: relative;
        background: url("../assets/menu04_off.jpg") no-repeat;
        &:hover {
          background: url("../assets/menu04_on.jpg");
          width: 400px;
          &::after {
            content: "";
            width: 0;
          }
        }
      }
    }
  }
  .answer-list {
    margin: 0 auto;
    margin-top: 50px;
    width: 1000px;
    // height: 600px;
    // background-color: gray;
    display: flex;
    flex-direction: column;

    .answer-item {
      padding: 18px 31px 17px 25px;
      width: 945px;
      color: #636363;
      border-bottom: 1px solid #fff;
      overflow: hidden;
      background-color: #f5f5f5;
      font-family: microsoft yahei;
      cursor: pointer;
      display: flex;

      // align-items: center;

      .left {
        padding-left: 14px;
        // padding-right: 10px;
        width: 84px;
        height: 100%;
        font-size: 30px;
        font-style: italic;
        font-family: Arial, sans-serif;
      }
      .answer-main {
        flex: 1;
        background: url(http://www.diqua.com/img/service/help/open.gif)
          no-repeat right;
        .answer-tit {
          font-size: 16px;
        }
        .answer-body {
          //   display: none;
          height: 0px;
          width: 80%;
          overflow: hidden;
          color: #636363;
          font-size: 12px;
          padding-top: 7px;
          font-family: 宋体, SimSun, sans-serif;
          line-height: 1.4;
          // transition: 0.2s;
        }
      }
    }
  }
  .active {
    // min-height: 120px;
    // height: 200px;
    padding: 32px 31px 25px 25px !important;
    background-color: #e1e1e1 !important;
    .left {
      // padding-top: 10px;
      font-size: 48px !important;
      color: #ef8009;
      // font-weight: 600;
    }
    .answer-tit {
      color: #ef8009;
      font-weight: 600;
    }
    .answer-body {
      height: 100% !important;
      display: block !important;
    }
    .answer-main {
      background: url(http://www.diqua.com/img/service/help/close.gif) no-repeat
        right 20px !important;
    }
  }
  .slip-page {
    width: 1000px;
    height: 50px;
    text-align: right;
    margin-top: 10px;
    margin-bottom: 30px;
    span {
      font-size: 12px;
      color: white;
      display: inline-block;
      width: 35px;
      //   height: 35px;
      text-align: center;
      padding: 9px 0 8px;
      background-color: #e29ac6;
      cursor: pointer;
      &:nth-child(1) {
        margin: 0 5px;
      }
      &:hover {
        background-color: #ef8009;
      }
    }
    .activePage {
      background-color: #ef8009;
    }
  }
}
</style>
