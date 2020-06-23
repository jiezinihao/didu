<template>
  <div class="headers" ref="top">
    <div class="go-to-other" >
      <a
        class="chat"
        href="http://wpa.qq.com/msgrd?v=3&uin=4008899360&site=qq&menu=yes"
      ></a>
      <a class="go-top" @click="goTop()"></a>
    </div>
    <div class="top-nav">
      <div class="shadow" ref="shadow"></div>
      <div class="left" >
        <img src="../assets/img_whirlpool.gif" @click="goNewPage('http://www.whirlpool.com.cn/')" alt="" />
        <img src="../assets/img_sanyo.gif" @click="goNewPage('http://www.hf-sanyo.cn/')" alt="" />
        <img src="../assets/img_diqua.gif" @click="goNewPage('http://www.diqua.com')" alt="" />
        <img src="../assets/img_royalstar.gif" @click="goNewPage('http://royalstar.whirlpool.com.cn/#/home')" alt="" />
      </div>
      <div class="right">
        <span><router-link to="/about">关于帝度</router-link></span>
        <span class="child2"
          ><a href="">产品中心</a>
          <div class="slide-down1">
            <a @click="goOther('Home')">冰箱</a>
            <a @click="goOther('Wash')">洗衣机</a>
            <a @click="goOther('KitchenElectrical')">厨房电器</a>
            <a @click="goOther('LifeElectrical')">生活电器</a>
          </div></span
        >
        <span
          ><router-link to="/mwavefood" target="_blank"
            >微博美食</router-link
          ></span
        >
        <span class="child4"
          ><a @click="goOther('AfterSales')">服务中心</a>
          <div class="slide-down2">
            <a @click="goOther('AfterSales')">售后服务</a>
            <a @click="goOther('Help')">帮助问题</a>
            <a @click="goOther('Comments')">商品留言</a>
            <a @click="goOther('Download')">说明书下载</a>
          </div></span
        >
      </div>
    </div>
    <div class="container">
      <div class="left">
        <img
          src="http://products.diqua.com/static2/img/logo1.2a2287d.jpg"
          alt=""
        />
      </div>
      <div class="right">
        <img
          @click="goDetail(1)"
          src="data:image/gif;base64,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"
          alt=""
        />
        <img
          @click="goDetail(2)"
          src="data:image/gif;base64,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"
          alt=""
        />
        <img
          @click="goDetail(3)"
          src="data:image/gif;base64,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"
          alt=""
        />
        <img
          @click="goDetail(4)"
          src="data:image/gif;base64,R0lGODlhYABdAOYAAP7+/PHIquzs7Ou0ieKPVvvu5NxyK/rx7Tc3N915Ntx0N+SRWeB8O21tbd57OePj4955Ofvp2P/68f308f76+ZaWlvzz7e64leGITeB5NN12NP//+/717911McTExF1dXdliEOCERbm5ueGGSKOjo+GLVUtLS+CAQPLJr+aWZv3x6vv/+//9/fTLst58PuCARttsIfLLtOOLU9dcC4mJiTg4ONZWAP/+/v7+/9nZ2Xx8fK6urv3//bS0tK+vr9ra2v3//nt7e/3+/9jY2K2trfz8///+/319ffb29v7///z//vf39/3//OGKUeOLUP39/eTk5N54NM7OzpWVlfz+/+B8Nt57PPz+/Nt2NeGJUfLMtvfr5d58QvXSteONVdpgEOSLUfzw5uWIR+quhtlmHt55L/79//XMsuaYY96DQ/z////39vvy7/v18OWMUuigcPn7+fLNst1zM+SHRtdkFu7Bn9ZXCO/DqvC7mf/6/e/GseifbvX19fDGqf7+/v///yH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS4wLWMwNjAgNjEuMTM0Nzc3LCAyMDEwLzAyLzEyLTE3OjMyOjAwICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QUE1QkNENzY5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"
          alt=""
        />
        <img
          @click="goDetail(5)"
          src="data:image/gif;base64,R0lGODlhYABdAOYAAOPj4+aZZfLKsuKEQ+2zjMTExLm5ud10Lc7OzqOjo/Xcyvrr5l1dXZaWluOJTOzs7OOMUomJieWWZO68mfDEq9VaB//++t1+OemicdprIu25mW1tbeqmev7z6t96NPru6uaebf/7+uy2kd+CRddeENliEdVXAu3Aofji0vTRu+utheWTXNljGtdbCvfk1v729fjezf79//XVvvbTvjc3N/LOueecZvPIru6+nPvx7tZgFfr/+9t1NPv/+998Qv/+/v7+//3//a6urrS0tHx8fNnZ2f/+//3//vb29q+vr/7///3+/62trUtLS3t7e/z8//z+/Nra2v///bW1tf7//X19ffz//v/9/f/+/ff399jY2P3//Ovr6+OOWvz+//TTvPX19fzx6/rl2fLEpe/Ksf/79Pv7/+KGTfz//dhgDvC7mdtoGtZmHuGBP+7An/rr3/nm4Oehdfz//+y6nuiYY/HGquWhbvTYxu26ltdaA/PWvPzv5txwJ35+fv7+/v///yH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS4wLWMwNjAgNjEuMTM0Nzc3LCAyMDEwLzAyLzEyLTE3OjMyOjAwICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OUNFQTE3QTY5QjJDMTFFQTg2RjdCQzNEMkZGOEQ0MjEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OUNFQTE3QTc5QjJDMTFFQTg2RjdCQzNEMkZGOEQ0MjEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5Q0VBMTdBNDlCMkMxMUVBODZGN0JDM0QyRkY4RDQyMSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5Q0VBMTdBNTlCMkMxMUVBODZGN0JDM0QyRkY4RDQyMSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgH//v38+/r5+Pf29fTz8vHw7+7t7Ovq6ejn5uXk4+Lh4N/e3dzb2tnY19bV1NPS0dDPzs3My8rJyMfGxcTDwsHAv769vLu6ubi3trW0s7KxsK+urayrqqmop6alpKOioaCfnp2cm5qZmJeWlZSTkpGQj46NjIuKiYiHhoWEg4KBgH9+fXx7enl4d3Z1dHNycXBvbm1sa2ppaGdmZWRjYmFgX15dXFtaWVhXVlVUU1JRUE9OTUxLSklIR0ZFRENCQUA/Pj08Ozo5ODc2NTQzMjEwLy4tLCsqKSgnJiUkIyIhIB8eHRwbGhkYFxYVFBMSERAPDg0MCwoJCAcGBQQDAgEAACH5BAAAAAAALAAAAABgAF0AAAf/gH+Cg4SFhoeIiYqLjIxAjZCRkpOUhX6Cl5Wam5yIl36fnaKjnEOkp6iJoaapra6vsLGCrLK1m6aZtrqMoX+5u8CqmLTBxYhTxsmEv77KzoPEz8a40sa5zNW2mdHZu9Td4OGov9zisVPY5q2ZvequveXurfGUUn8Wf0H5R0E/Rz8//ix59CPToz8FCwWMlY6TEipGgPT7YeYHkCNAHmEBEtBPQCADMzZMxe4PvUlK/ihZ2MNjwCBBruiTCMXLjxgIk52cdCQGGiBGnlz5w9FIkIsDscCkggXhkSMIF8pLZMTPTActMlw4wwHLjyB+nvwQ+wdKP0NSZe2EJOUIFYRb//6kSQHjjgATLyQCPCjIiC+JRHPWWgvpihEqVMJaETHAwwEQDgQg/NCBI8wtaTEx1ExKiRR7CPkGYUEAwx8BeXRUWMPDgQQOIsbMcBHGItTNJmFdAkJnjoc/FCD8CbEHRg03KjCsaMOnRAsWPER4zPjqWysgTet0MREmjAmAXwVBeakvxAIYFb7ClOJ5VK+Ron4sCeIdwo0jB1CggTrWIvWoC7Cww0R/GCEHKewQpklYHnkgAgg/gCACEOPpdZZ8jyjgwUx9tYIMLD8YccUPHKhwwA83QGDEVz9YkRNHgwT3SBBWHOaXKMzA18kSTwQhgw9rLPBBHjFcERdHHH0kiP8IGBz1wxVHpDQPLFs8YoUFLawwRhD5YRSQRUblcxQGBCzxUZVSnmJdKy3K5wAOEgBBZhAxfGVVPgT9AAEFQMT1hxRGNIXgIDpuQpYXfzyYwQ8COCDIV2R5KZEHCvRXIBWguTcLLHoVJAYfGbyRQx4TaDDBBGpoYCqqpppQGRREGZGmms28cqEfbNDhxh91BGCDDRJIAKwNAQQgQQAnEKWPIErcONUgX1nxEh0arODVI1BApZdEgInJbLOaQgPifH5wVAcEJpSgLgnqrkvCuxnAYdlts56CTixIjpeDCV/U8IUMKXzxRQo1yCCwHl2ccBRBQCiBRb2blFSoJgt/NVD/AAOMMMIAGWe8scYD0BGCHwMp6QfElcADiz7hlaUPDAKEgFEPUeVAxgdBLPGPII84i4qCqIjggQNtRNTDV3vo4EAJYgimWzJ8uPAHDzBAS0AcQajAARRPPN0M0KT4MAEKeewBBRBvnbDCC3aI4HQsYJMCwwEk4MHwDxZ0UQEEZRz1rCZHKLVEPlYdxSFAusQtytl8ffmHFTTzbIviohgeIlE9OJlPYF5P3IpRIdoExFA9XCHRP5mts+mCinheK2euvz7JmpO0Q+gyluBea465yy47fO9RUtLtvhN/CO+c4aS78ZAkGC5nhlwDvS+241599JB8KMnE2Iz0i+3gFy9+/+/M1/6HEEUkUoQBgxSRPgK9X6JFFOZrQjkhSDQBQCIRCDGIEERAAhEiAAZBEOGARCjAHyKgQEIAAIFEqIITnNAHJyDQfuNTRBRowMEOerCDf+BCE5DQDAAKIgEPEAQN3NcAIeQvAUKIoRC4kAUtFAEB7itCAQwQhSJEgAjkE8b0IpEJBjTwEBFgQhb8V4QEMEAIEahCE+BHAy4UIIYFIEISYsgEBqTvD1lgAPzO1wBBeDF2tVJcLgrAgBL6r31tZEIEGLCBDTwRhyn8wwqJIAQnAiCPf3DCF/3wgA0k4A9M8J8BNjDERtCOF4LI3xj9sEXNzNEJDHiA/IC4DBpEwf8JSWhAAgDQRgMWgZIJKKALYxjJZqAxYgtkZA4b0IAo2DALD/Ah+wSBAAYYQAhV2EAV9FgEIiTyDwZIQBFSWIUvdnF/52MC68RVCQPQgAh+QCADGOCEKhBhfwbg5AZo0AQatBAB8PPDHpmQBD9sAAAJYJ8Xm1FMA+7SE424FyUQQAMDDBMTrBwEP0WZgChcggH7a0AEVFgEUDIBAIxEABBXWIAtJiGRSWBAC7coBPp5TmKUeEABGlorIUizfQ1IAgIA8IkGGKABGyDhH4jwywIUYAMDJAINkEADMFxRCBzFpEUT+cVGqEx4f6jn//yHDUAW4JpIaKIgItAEBcLQAMX6BAANDAGAJjShAZosBeuyOssG5LAISECAExnJhQSQk30FiIAfooDQqi6Dp4UwQFWX2AQXpkwUn0wAAiUIQYUWIJcNMOcDtCqEDRiAlCylqyA2ekBBwJMB32zGA+Z4RKNq5n5/gOfujhdaFA4CABFoABIKAM0/yPSKTDAACbWgUfpZQqJZaKQiQBs8833Pd4V6pSyuVzzp5e56wjUEaPG5jIZ0768gdSRSh+g97AWRua6EXXaZm1x88s65xOvu8CCZm79VJ4PmRep40xsuPyyXvceA76CWJ99RvLe+hHgkfuuH3v1C0r3+FYV+A9w8AuPovvJlh/YMXL9AAAA7"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      intt: "",
    };
  },
  mounted() {
    // let that = this;
    // this.intt = setInterval(function() {
    //   if (document.documentElement.scrollTop > 0) {
    //     that.$refs.shadow.style.display = "block";
    //     clearInterval(that.intt);
    //   } else {
    //     that.$refs.shadow.style.display = "none";
    //   }
    // }, 100);
  },
  methods: {
    goNewPage(res){
      window.open(res)
    },
    goOther(res) {
      this.$router.push({ name: res });
    },
    goTop() {
      this.$refs.top.scrollIntoView({ behavior: "smooth", inline: "start" });
    },
    goDetail(id) {
      let msg = "";
      switch (id) {
        case 1:
          msg = "Home";
          break;
        case 2:
          msg = "Wash";
          break;
        case 3:
          msg = "KitchenElectrical";
          break;
        case 4:
          msg = "LifeElectrical";
          break;
        case 5:
          msg = "Onlion";
          break;
      }
      this.$router.push({ name: msg });
    },
  },
};
</script>
<style lang="scss" scoped>
.headers {
  box-sizing: border-box;
  position: relative;
  width: 100%;
  background-color: #fff;
  color: #333;

  .go-to-other {
    z-index: 99;
    position: fixed;
    right: 0;
    bottom: 0;
    a {
      display: block;
      height: 65px;
      width: 65px;
      margin: 8px;
      text-decoration: none;
    }
    .chat {
      &:hover {
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAABBCAIAAAABlV4SAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkYxNDdFMjhGOUIyQTExRUFCRTA4QzgzRDE1MDBENzlBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkYxNDdFMjkwOUIyQTExRUFCRTA4QzgzRDE1MDBENzlBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RjE0N0UyOEQ5QjJBMTFFQUJFMDhDODNEMTUwMEQ3OUEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RjE0N0UyOEU5QjJBMTFFQUJFMDhDODNEMTUwMEQ3OUEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5iGoYtAAAFV0lEQVR42uyaP1AUVxzHObm/xJjbUqpAKRW5Eps4dmpzM+nUQmes1MxAkUYncZKWKlTOkCJJ5wyNpnOwCSWxghKpSHk3o3JwB1w+u198PHb3Hpc9uKxm3+zcLG/fvt/v+/v/e0uu8UNl5CMf50Y+/pFhyDBkGDIMGYb/FMPoxemTt/MmuFKEIVeulmbmxBO/n99bOX/rRXSZPf/ZN79feLhWuFTvi7Y3Uf1+u1i7Y2Yg98V3WwiLKz95xb4c++Rdgh//qnx5juv9s5uVqz/6qCqeYXf/79etl4+52V1dHLu+ACsHjU1oMw9zcMOj7k6jvfoLNzZ43mINNweNN8HvpnnEegQnWiG+m0/GkmDY21h+9+s1MBQv1WEO2qXanW6r0V5fgunOxistg8tc2eusLaEE2GqvLWm+MPm1noohsQ6YUm1zP+Beg83PeV+yDCmwDzedjeXO+tIRi5NXYvXfFwYJG7Yguft0sbvTlIS6rSY0REaER72JwlQdYsA2LxoYZkZPR8enYdrS9jTiFxh+3/12PcB5aGDIy1ZUEgwykt2VecR8/vYfwMCcIIB1cW/kjfHkA3YD53nFgt1A/PaQMrnZ+XM+MJsmkPAH9GOQG8FLaYgMAY2MDIABZ4Wq5H3h23V+t5/f94HdWMDzmAeJDKkw6csPHyhO1aFt4PUUzY0FhBJi/ZgrBoEE3xg0LuGsaAD7RjC4QevlI5jjQpA+o61mbKgpz8zGhlesgt2kAQCg3tOKwi49yB1Rt7yi+CFiAgmph6ToR+FKdX/rLxm0O72AB8c9sDw7Cpj9bXdK7g8mGtocgyq8SxDC4UkhnxkTtY78Yare/cCTw4o0jBSi+yTEgG91W7O9nsKcb3gr8wetJpJDD0QCDDpXqUYFYfCjll62ZKcCx7J/hwGXUKw8FNLx7IP4YQ4WISYB4zk4vfg2AGQ5hj/0pkjtsCgG2Yms7w4SuRPPBCCGldu7RGdird+GHVvIUAfY+8hhQm9FlyXBkNXewxj5Ew0pJYw6Qll+kJeHJ2mnKAeyJd/hIo2Rqn+Hr0criAG1nU/8JsVC5epP1CAER3KCIFFi+XVhuWombcBUjapHqLtUhgGJSRbnyj+z3h1nT1kP8EEio+Z7+3SG2KeOh1gOAGa4EK3doAWJ0gfMI8otaj7T9/Enk3CvdDE8DMo7uIoKuMJR4R2zUqYFJBUOaACdqDwxaZECqc8O9tQw5MenyTuHzU1QJqkxUBeKyElVnaChQ+Tox85fMhjaoOOTm72kcFb+EPJL0VanVgqKaooLZVZM3zf3ihfZwYs10QQukRCDHNf+U6UhosW4dQiiAwHju31t22oMz5b2tl7jyiG7Ktbu0oKCRwopWvYtgxESY0Kxk0PEsLEsv9RvOxA2ZgAeYxXyYNxDzopC5PrqNNhBIUHJgUftSAt+trakwyUiI9pHCSKP6RPssSLlh/bqogLuXnDWwno6G54qP2gfbnB6OhBe2X7xIKFzuutW+7gl1gWhHTIAidm4JmvAaSrnaN2u6tpd0bjZSJ6ne7UvIWKhNVFWlGfOttZIT+maEEMaitasf/g/9A8JRrr6BwiXZ2btMz/Cv82Nf/RvtRCp6x9UHYUyA0w0n4zp8nOc9Q0hjf0DA8K9DhL9jxIVT7V3evsH9yjV7iJdJeP09g9uP/G/Wjy7aSqilPYPjoGjUwIaVtLbPziqQFOKh+rc1PUPvZUwZ74dHvrG2fcPp4mBaON/gAzahiNUl+f0gUKH+/QPzJgzfbyFP9VU7ARfuobdP/RpXanuHxL0GFn/8On2D9n/YGUYMgwZhgxDhuFTxfCPAAMArjjKMHQD0HQAAAAASUVORK5CYII=)
          no-repeat;
      }

      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAABBCAYAAACO98lFAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpGNzREQjY5NDI5MjA2ODExODIyQUZGQjk1OEE2NTY2MCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2Rjc5NUQ3QTZFQTkxMUUzODYzMUUwNjkwNjE1Njk4MiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2Rjc5NUQ3OTZFQTkxMUUzODYzMUUwNjkwNjE1Njk4MiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Rjc0REI2OTQyOTIwNjgxMTgyMkFGRkI5NThBNjU2NjAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Rjc0REI2OTQyOTIwNjgxMTgyMkFGRkI5NThBNjU2NjAiLz4gPC9yZGY6RGVzY3Jp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)
        no-repeat;
      background-color: #666;
    }
    .go-top {
      &:hover {
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAABBCAIAAAABlV4SAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjg5NzNFRkM0OUIyQTExRUE5M0QwODMyQUEwRkVDMkQ2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjg5NzNFRkM1OUIyQTExRUE5M0QwODMyQUEwRkVDMkQ2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ODk3M0VGQzI5QjJBMTFFQTkzRDA4MzJBQTBGRUMyRDYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6ODk3M0VGQzM5QjJBMTFFQTkzRDA4MzJBQTBGRUMyRDYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7HEGGIAAABuElEQVR42uzZMUzCQBQGYApIqBBTRt1wxEkdcTJuMpG4oYOzk8xGE+duTiY6qBsJE27GSUZkklE2HGsiQgEr/ubpxZTEobHaxv9CyPGube67vutrgmYd6JGQt2gk/I0GGmiggQYaaKCBBhpooIEGGmiggQYa/rsh7uvVY7OLmp4Z9y3noRlEg7Hfmwy+3F93zwsy+9TGRTSTlfir1X6ulJQkvVmLz6+qszBq181h4/S3DTJXNH3t0Ok0h60q+lhyAaS3Lkd3VbtewPwgSebLiHTP1hUDM5ZT5PjpwhEu4u12eTdgyaUz7u86Vlv9FBUAvdqOWmb0U7qBuJJ/PQWdxEIRd8ab4ef3tJY0MJtB48QVt29MxDEagj0dm1t6X+aJFZUIRmX5Y5ms2hKJXBHpNKqUgvhc+qYllrfxUTzseKRcUAxO51a2qetWIKJG0fpXe4O6GdAaN7YfkS3JlbIrjgjiGA1HncYaI9fxuJT6gG/0p3JFxENTp5FFKAWocTOfGY9cfzrO+1StNV//F5V3DQA879e/fy75+prEd28aaKCBBhpooIEGGmiggQYaaKCBBhpo+GhvAgwARgi7+OK54dMAAAAASUVORK5CYII=)
          no-repeat;
      }
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAABBCAYAAACO98lFAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowQTMzNDU4NTY2MDYxMUUzQTBDREIwMkE5NjBBNkM5MyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowQTMzNDU4NjY2MDYxMUUzQTBDREIwMkE5NjBBNkM5MyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjBBMzM0NTgzNjYwNjExRTNBMENEQjAyQTk2MEE2QzkzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjBBMzM0NTg0NjYwNjExRTNBMENEQjAyQTk2MEE2QzkzIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+s5h0mQAAAL5JREFUeNrs2rERwzAMBEHyG7dduTwK3IEogNZehHjDH8wxxns8vAxBgAABAgQIECBAgAABAgQIECBAgAABAgQI/4BwHMfr0QgnwJzzUw2RaoDzroZINcCvSoh0AKiGSBeASoh0AqiCSDeACoh0BLgbIl0B7oRIZ4C7INId4A6I7ACwGiK7AKyEyE4AqyCyG8AKiOwIcDVEdgW4EmIOH602RggQIECAAAECBAgQIECAAAECBAgQIECAcEFfAQYAql6MeWzPps8AAAAASUVORK5CYII=)
        no-repeat;
    }
  }

  .top-nav {
    // overflow: hidden;
    z-index: 99;
    height: 33px;
    position: relative;
    background: #dfe1e5
      url(data:image/gif;base64,R0lGODlhDwAhAMQAAOzu8t/h5Ors8Ozt8ePl6enr7+bn6+jq7ujp7eLk6ODh5eHj5t/h5evs8err7+Lj5+Tl6ePk6Onq7uDi5efp7eHj5+vt8efo7OXn6+Di5ubo7OTm6uXm6gAAAAAAAAAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS4zLWMwMTEgNjYuMTQ1NjYxLCAyMDEyLzAyLzA2LTE0OjU2OjI3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjc4RkUzMDNBRDQxMkUzMTFBMUExRDYzOUEzNDY4Rjg1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjRGMUU1RUY3Njk0RTExRTM5QThEODdDQTU1NTM4MEE4IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjRGMUU1RUY2Njk0RTExRTM5QThEODdDQTU1NTM4MEE4IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NUY3NTdEQjFDODY3RTMxMTkyOTlENDZERTBCREQzMDQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NzhGRTMwM0FENDEyRTMxMUExQTFENjM5QTM0NjhGODUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PDs6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQAAAAAACwAAAAADwAhAAAFjyAgjmRpnuKgrmzrvqolz3Td3HiuC3zv/8Agz0EsGo+FpHLJlDif0OhhSq1aEdisdkvper/gi3hMLmvO6LTawG6735i4fE7n2O/4/GbP7/shgIGCgwSFhoeIEYqLjI0Jj5CRkg+UlZaXFZmam5wLnp+goRmjpKWmE6ipqqsKra6vsAyys7S1Abe4ubq7vLchADs=)
      repeat-x 0 0;
    position: fixed;
    font-family: Helvetica Neue, Helvetica, STHeiTi, sans-serif;
    user-select: none;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .shadow {
      content: "";
      display: none;
      position: absolute;
      left: 0;
      bottom: -6px;
      height: 6px;
      width: 100%;
      background: url("../assets/headfix_bg.png") repeat-x left bottom;
    }
    a {
      text-decoration: none;
      color: gray;
      // padding: 0 20px;
      // opacity: 0.8;
    }
    .left {
      box-sizing: border-box;
      display: block;
      // margin: 0 auto;
      font-weight: bold;
      width: 457px;
      // width: 1004px;
      cursor:pointer;
      display: flex;
      font-size: 14px;
      color: gray;
      text-align: center;
      margin-right:120px ;
      // margin-right: 160px;
      img {
        height: 33px;
      }
    }
    .right {
      margin-right: 90px;
      // display: inline-block;
      height: 33px;
      // margin-left: 120px;
      font-size: 12px;
      // display: flex;
      // overflow: hidden;
      // flex-wrap: nowrap;
      display: flex;
      align-items: center;
      span:hover {
        background-color: #f2f2f2;
      }
      span {
        width: 85px;
        height: 100%;
        // padding-left: 1s0px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        a {
          display: inline-block;
          padding-top: 1px;
          width: 100%;
          // display: block;
          // text-align: center;
          // line-height: 32px;
          // padding-left: 6px;

          // width: 85px;
          // height: 14px;
          padding: 0 15px;
          border-left: 1px solid rgba(149, 165, 166, 0.3);
        }
        &:first-child {
          a {
            border: none;
          }
        }
        &:nth-child(2):hover {
          .slide-down1 {
            visibility: visible;
            // top:33px;
            // opacity: 1;
          }
        }
      }

      .child4:hover {
        .slide-down2 {
          visibility: visible;
        }
      }
      .slide-down1 {
        // transition: .2s;
        visibility: hidden;
        // opacity: 0;
        position: absolute;
        background-color: #f2f2f2;
        top: 33px;
        left: 0;
        width: 100%;
        padding-left: 340px;
        text-align: center;
        height: 30px;

        // justify-content: c;
        // display: flex;
        // flex-direction: row-reverse;
        a {
          width: 70px;
          display: inline-block;
          cursor: pointer;
          margin-top: 7px;
          border-left: 1px solid rgba(189, 195, 199, 0.9);
        }
      }
      .slide-down2 {
        visibility: hidden;
        position: absolute;
        background-color: #f2f2f2;
        top: 33px;
        left: 0;
        width: 100%;
        padding-left: 340px;
        text-align: center;
        height: 30px;
        a {
          width: 60px;
          display: inline-block;
          cursor: pointer;
          margin-top: 7px;
          border-left: 1px solid rgba(189, 195, 199, 0.9);
          &:first-child {
            border: none;
          }
        }
      }
    }
  }
  .container {
    padding-top: 35px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    flex-wrap: nowrap;
    background-color: #fff;
    height: 92px;
    .left {
      @media screen and (max-width: 1250px) {
        margin-left: 20px;
      }
      padding-top: 12px;
      margin-left: 280px;
    }
    .right {
      @media screen and (max-width: 1250px) {
        margin-right: 20px;
      }
      cursor: pointer;
      margin-right: 260px;
    }
  }

  @media screen and (max-width: 850px) {
    .container {
      flex-direction: column;
      justify-content: center;
      height: 70px;
      padding: 0;
      margin: 0;
      padding-top: 130px;
      padding-bottom: 50px;
      overflow: hidden;
      flex-wrap: nowrap;
      width: 100vw;
      .left {
        margin: 0;
      }
      .right {
        margin: 0;
      }
    }
    .top-nav {
      flex-direction: column;
      height: 10vh;

      .left {
        justify-content: center;
        margin: 0;
      }
      .right {
        cursor: pointer;
        margin: 0;
      }
      .slide-down1 {
        left: 0;
        top: 66px !important;
        padding-left: 0 !important;
        margin: 0;
      }
      .slide-down2 {
        left: 0;
        top: 66px !important;
        padding-left: 0 !important;
      }
    }
  }
  @media screen and (max-width: 550px) {
    .right {
      padding-left: 0;
      overflow: hidden;
    }
  }
}
</style>
