<!--
 * @Descripttion: ''
 * @version: ''
 * @Author: 周涛
 * @Date: 2021-09-09 00:11:58
 * @LastEditors: 周涛
 * @LastEditTime: 2021-10-19 15:45:10
-->
<template>
  <div class="test2">
    <ul class="waterfall" id="waterfallBox">
      <li class="item" v-for="item in imgList" :key="item.pic">
        <img v-lazy="item.pic" />
        <p>{{ item.text }}</p>
        <div class="mask">
          <div>{{ item.hover }}</div>
        </div>
      </li>
    </ul>
    <!-- <div class="noMore">已经到底啦~</div> -->
  </div>
</template>

<script>
export default {
  name: "Test2",
  data() {
    return {
      text: "蒸羊bai羔、蒸熊掌、蒸鹿尾儿、烧花鸭、烧雏鸡、烧子鹅du、卤zhi猪、卤鸭、酱鸡、腊肉、松花小dao肚儿、晾肉、香肠儿、什锦苏盘、熏鸡白肚儿、清蒸八宝猪、江米酿鸭子、罐儿野鸡、罐儿鹌鹑。",
      hover:
        "蒸羊bai羔、蒸熊掌、蒸鹿尾儿、烧花鸭、烧雏鸡、烧子鹅du、卤zhi猪、卤鸭、酱鸡、腊肉、松花小dao肚儿、晾肉、香肠儿、什锦苏盘、熏鸡白肚儿、清蒸八宝猪、江米酿鸭子、罐儿野鸡、罐儿鹌鹑。卤什件儿、卤子鹅、山鸡、兔脯、菜蟒、银鱼、清蒸哈什蚂、烩鸭丝、烩鸭腰、烩鸭条、清拌鸭丝、黄心管儿、焖白鳝、焖黄鳝、豆豉鲇鱼、锅烧鲤鱼、烀烂甲鱼、抓炒鲤鱼、抓炒对儿虾。软炸里脊、软炸鸡、什锦套肠儿、卤煮寒鸦儿、麻酥油卷儿、熘鲜蘑、熘鱼脯、熘鱼肚、熘鱼片儿、醋熘肉片儿、烩三鲜、烩白蘑、烩鸽子蛋、炒银丝、烩鳗鱼、炒白虾、炝青蛤、炒面鱼。炒竹笋、芙蓉燕菜、炒虾仁儿、烩虾仁儿、烩腰花儿、烩海参、炒蹄筋儿、锅烧海参、锅烧白菜、炸木耳、炒肝尖儿、桂花翅子、清蒸翅子、炸飞禽、炸汁儿、炸排骨、清蒸江瑶柱。",
      imgList: [],
      picIndex: 1,
    };
  },
  created() {
    this.initPic();
    // this.onPageScroll();
  },
  methods: {
    initPic() {
      for (let index = 0; index < 84; index++) {
        this.addPic();
      }
    },

    addPic() {
      const picData = {
        text: this.text,
        hover: this.hover,
        pic: require(`@/assets/images/waterfall/atao${this.picIndex}.png`),
      };
      this.imgList.push(picData);
      this.picIndex++;
      if (this.picIndex > 86) {
        this.picIndex = 1;
      }
    },

    // canShow() {
    //   /** 距离显示多少px开始加载图片 */
    //   const distanece = 15;
    //   const windowHeight = window.innerHeight;
    //   const parentEl = document.getElementById("waterfallBox");
    //   const lastChild = parentEl.lastElementChild;
    //   const top = lastChild.getBoundingClientRect().top;
    //   if (top - distanece < windowHeight) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // },

    // onPageScroll() {console.log(11111111)
    //   window.addEventListener("scroll", function () {
    //     const flag = that.canShow();
    //     if (flag) {
    //       this.addPic();
    //     }
    //   });
    // },

    // lozyload() {
    //   let imgList1 = [
    //     ...document.querySelector(".waterfall").querySelectorAll("li img"),
    //   ];
    //   let num = imgList1.length;
    //   let count = 0;

    //   let newArr = [];
    //   imgList1.forEach((item, index) => {
    //     let Rect = item.getBoundingClientRect();
    //     if (Rect.top < window.innerHeight) {
    //       Rect.src = Rect.dataset.src;
    //       newArr.push(index);
    //       count++;
    //       console.log("count: ", count, "num: ", num);
    //       if (count === num) {
    //         document.removeEventListener("srcoll", lozyload);
    //       }
    //     }
    //   });
    //   // 删除已加载完毕的图片
    //   imgList1 = imgList1.filter((_, index) => !newArr.includes(index));
    // },
  },
  mounted() {
    // this.lozyload();
  },
};
</script>

<style lang="scss">
.test2 {
  width: 100%;
}
.waterfall {
  width: 90%;
  column-gap: 20px;
  column-count: 4;
  margin: 0 auto;
}
.item {
  position: relative;
  background-color: #ffffff;
  padding: 10px;
  margin-bottom: 15px;
  break-inside: avoid;
  border-radius: 7px;
  background: #d8e3e7;
  box-shadow: 5px 5px 8px #c7d1d5, -5px -5px 8px #e9f5f9;
}
.item:hover {
  opacity: 0.5;
  background: rgba($color: #000000, $alpha: 0.6);
}
.mask {
  opacity: 0;
  // color: rgb(238, 13, 51);
  color: rgb(0, 0, 0);
  font-size: 16px;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  // z-index: 999;
}
.mask:hover {
  opacity: 1;
}
// .mask:last-child {
//   margin: 30px;
// }
img {
  width: 100%;
  background: #74ebd5; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #acb6e5,
    #74ebd5
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #acb6e5,
    #74ebd5
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
// img[lazy="loading"] {
//   display: block;
//   width: 50px;
//   height: 50px;
//   margin: 0 auto;
// }

p {
  line-height: 30px;
  overflow: hidden;
  white-space: pre-wrap;
  word-break: break-all;
  color: #444;
}
@media (min-width: 992px) and (max-width: 1300px) {
  .waterfall {
    column-count: 3;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  .waterfall {
    column-count: 2;
  }
}
@media (max-width: 767px) {
  .waterfall {
    column-count: 1;
  }
}
</style>