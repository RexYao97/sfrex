<template>
  <div class="home-content" ref="root" @mouseout="cardMouseout" @mouseover="cardMousehover" :style="outerStyle" isCard="true">
    <div class=" content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import { computed, onMounted, ref } from 'vue';
import { getStyle, setStyle } from 'common/style';

// 获取外部card的style
function getOuterStyleSetup(props, renderTop) {
  return computed(() => ({
    background: `linear-gradient(45deg, ${props.setting.color[0]}, ${props.setting.color[1]})`,
    top: `${renderTop.value}px`,
    'z-index': props.setting.zIndex,
    height: `${props.setting.height}px`,
  }));
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
  setStyle(target, 'top', `${cacheTop[getStyle(target, 'z-index')]}px`);
  let preElem = target.previousElementSibling;
  ishover = true;
  // 所有的上一节点进行偏移
  while (preElem) {
    let top = Number(getStyle(preElem, 'top'));
    const id = getStyle(preElem, 'z-index');
    const height = Number(getStyle(preElem, 'height'));
    // const revalHeight = (windHeight * 0.24) / 3;
    // 保存最大的值
    cacheTop[id] = typeof cacheTop[id] !== 'undefined' ? Math.max(cacheTop[id], top) : top;
    top = Number(cacheTop[id]);
    setStyle(preElem, 'top', `${-height + top + 100}px`);

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
      const top = cacheTop[id];
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
      outerStyle: getOuterStyleSetup(props, renderTop),
    };
  },
};
</script>
<style lang="less" scoped>
.transition (@type,@delay) {
  transition: @type @delay;
  -moz-transition: @type @delay; /* Firefox 4 */
  -webkit-transition: @type @delay; /* Safari 和 Chrome */
  -o-transition: @type @delay; /* Opera */
}
.home-content {
  position: fixed;
  width: 100%;
  cursor: pointer;
  .transition(top, 1s);
  .content {
    width: 100%;
    height: 100%;
    .transition(background-color, 1s);
    &:hover {
      background-color: rgba(255, 255, 255, 0.274);
    }
  }
}
</style>
