<template>
  <div class="home-content" :style="outerStyle">
    <div class=" content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import { computed } from 'vue';
// 获取外部card的style
function getOuterStyleSetup(props) {
  return computed(() => ({
    background: `linear-gradient(45deg, ${props.setting.color[0]}, ${props.setting.color[1]})`,
    top: props.setting.top,
    'z-index': props.setting.zIndex,
    height: props.setting.height,
  }));
}

export default {
  props: {
    setting: {
      type: Object,
    },
  },
  setup(props) {
    return {
      outerStyle: getOuterStyleSetup(props),
    };
  },
};
</script>
<style lang="less" scoped>
.home-content {
  position: fixed;
  width: 100%;
  // height: 75%;
  .content {
    width: 100%;
    height: 100%;
    &:hover {
      background-color: rgba(255, 255, 255, 0.274);
    }
  }
}
</style>
