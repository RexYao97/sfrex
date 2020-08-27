<template>
  <div class="background-image" ref="root" @mouseout="cardMouseout" @mouseover="cardMousehover" isCard="true" :style="outerStyle">
    <div class="home-content" :style="colorBackground">
      <div class=" content">
        <div class="left">
          <div class="title">TITLE</div>
          <div class="sketch">内容介绍</div>
        </div>
        <div class="right">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { computed, onMounted, ref } from 'vue';
import { getStyle, setStyle } from 'common/style';

// 获取外部card的style
function getOuterStyleSetup(props, renderTop) {
  return computed(() => ({
    // background: `url(${props.setting.url})`,
    top: `${renderTop.value}px`,
    'z-index': props.setting.zIndex,
    height: `${props.setting.height}px`,
  }));
}
function getBackgroundColor(props) {
  const opacity = parseInt(30, 16);
  return {
    background: `linear-gradient(45deg, ${props.setting.color[0]}${opacity}, ${props.setting.color[1]}${opacity})`,
  };
}
// 回去卡片的最外部的div
const getCardOuter = function(e) {
  let { target } = e;
  while (!target.getAttribute('isCard')) {
    target = target.parentNode;
  }
  return target;
};
// 保存每一个卡片的原始top
const cacheTop = [];
// 是否在card里面
let ishover = false;

const cardMousehover = function(e) {
  const target = getCardOuter(e);
  setStyle(target, 'top', `${cacheTop[cacheTop.length - getStyle(target, 'z-index')]}px`);
  let preElem = target.previousElementSibling;
  ishover = true;
  // 所有的上一节点进行偏移
  while (preElem) {
    const id = Number(getStyle(preElem, 'z-index'));
    const top = cacheTop[cacheTop.length - id + 1];
    const domTop = Number(getStyle(preElem, 'top'));
    const height = Number(getStyle(preElem, 'height'));
    console.log(top, domTop);
    if (domTop !== top) {
      setStyle(preElem, 'top', `${-height + top}px`);
    }

    preElem = preElem.previousElementSibling;
  }
};
const cardMouseout = function(e) {
  const target = getCardOuter(e);
  let preElem = target.previousElementSibling;
  // 还原
  ishover = false;
  // 异步还原
  setTimeout(() => {
    while (preElem && !ishover) {
      const id = getStyle(preElem, 'z-index');
      const top = cacheTop[cacheTop.length - id];
      setStyle(preElem, 'top', `${top}px`);
      preElem = preElem.previousElementSibling;
    }
  });
};
export default {
  props: {
    setting: {
      type: Object,
    },
  },

  setup(props) {
    const root = ref(null);
    const renderTop = ref(props.setting.top - 100);
    cacheTop.push(props.setting.top);
    onMounted(() => {
      // 触发动画
      setTimeout(() => {
        renderTop.value = props.setting.top;
      });
    });
    return {
      cardMousehover,
      cardMouseout,
      root,
      colorBackground: getBackgroundColor(props),
      outerStyle: getOuterStyleSetup(props, renderTop),
    };
  },
};
</script>
<style lang="less" scoped>
.transition (@type,@delay,@timing) {
  transition: @type @delay;
  -moz-transition: @type @delay; /* Firefox 4 */
  -webkit-transition: @type @delay; /* Safari 和 Chrome */
  -o-transition: @type @delay; /* Opera */
  transition-timing-function: @timing;
}
.background-image {
  position: fixed;
  width: 100%;
  min-width: 1200px;
  cursor: pointer;
  .transition(top, 0.5s, 'ease-out');
}
.home-content {
  width: 100%;
  height: 100%;

  .content {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    color: white;
    .transition(background-color, 0.5s, 'ease-out');
    &:hover {
      background-color: rgba(185, 185, 185, 0.274);
    }
    .left {
      min-width: 300px;
      width: 30%;
      padding: 50px;
      box-sizing: border-box;
      .title {
        font-size: 48px;
        line-height: 60px;
        text-align: left;
        padding: 10px 0;
      }
      .sketch {
        font-size: 18px;
        line-height: 42px;
        font-weight: 400;
        text-align: left;
      }
    }
    .right {
      flex: 1;
      // background: wheat;
      height: 100%;
    }
  }
}
</style>
