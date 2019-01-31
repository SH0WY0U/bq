<template>
  <div class="wrap" ref="scroll">
    <div class="content" :style="contentStyle">
      <div class="pull-down" v-if="flagForword"></div>
      <slot/>
      <div class="pull-up" v-if="flagNext"></div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
// 设置配置项
// settings: {
//         bounce: true,
//         click: true,
//         tap: true,
//         scrollbars: true,
//         fadeScrollbars: true,
//         scrollX: true,
//         scrollY: true,
//         freeScroll: true,
//         startX: -20,
//         startY: -30,
//         probeType: 3
//       }
//contentStyle传入该属性为滚动视图添加属性（宽度）
//
// 在父级调用数据刷新（给本插件设置ref="scroll"）
// this.$refs.scroll.refresh()
// 给本插件设置宽高或定位基本属性
// .scroller-wrap {
//   position: absolute;
//   left: 0;
//   right: 0;
//   top: 63px;
//   bottom: 0;
// }
export default {
  name: "scroller",
  props: {
    settings: Object,
    contentStyle: Object,
    forword: Function,
    next: Function
  },
  computed: {
    flagForword() {
      if (this.forword) {
        return true;
      } else {
        return false;
      }
    },
    flagNext() {
      if (this.next) {
        return true;
      } else {
        return false;
      }
    }
  },
  methods: {
    refresh() {
      this.$scroll.refresh();
    },
    scrollTo(x, y, time) {
      this.$scroll.scrollTo(x, y, time);
    },
    scrollToTop() {
      this.$scroll.scrollTo(0, this.forword ? -50 : 0, 0);
      console.log(this.$scroll.y);
    },
    scrollToLeft() {
      this.$scroll.scrollTo(0, 0, time);
    }
  },
  mounted() {
    this.$scroll = new BScroll(this.$refs.scroll, {
      click: true,
      tap: true,
      startY: this.forword ? -50 : 0,
      probeType: 3,
      ...this.settings
    });
    点击前自动刷新视图
    this.$scroll.on("beforeScrollStart", () => {
      this.$scroll.refresh();
    });
    

    //监听滚动跳转到上一页
    if (this.forword) {
      this.$scroll.on("scrollEnd", () => {
        let y = this.$scroll.y;
        if (y >= -10) {
          //触发跳转上一页
          this.forword();
        }

        if (y > -50) {
          this.$scroll.scrollTo(0, -50, 200);
        }
      });
    }
    //监听滚动跳转到下一页面
    if (this.next) {
      this.$scroll.on("scrollEnd", () => {
        let y = this.$scroll.y;
        let maxY = this.$scroll.maxScrollY;
        if (y < maxY + 50) {
          this.$scroll.scrollTo(0, maxY + 50, 200);
        }
        if (y <= maxY) {
          //滚动到下一页
          this.next();
        }
      });
    }
  }
};
</script>

<style scoped>
.wrap {
  overflow: hidden;
  /* display: flex; */
  /* 让content自适应宽度以能够横向滑动 */
}
/* .content {
} */
.pull-down {
  width: 100%;
  height: 50px;
}
.pull-up {
  width: 100%;
  height: 50px;
}
</style>
