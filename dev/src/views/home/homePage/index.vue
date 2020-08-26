<template>
  <div class="home">
    <Card :setting="cardFirst" />
    <Card :setting="cardSecond" />
    <Card :setting="cardThird" />
    <Card :setting="cardFourth" />
  </div>
</template>

<script>
import { reactive } from 'vue';
import Card from './components/card';

const getCardSetting = function(color, zIndex, top, height) {
  return reactive({
    color,
    zIndex,
    top,
    height,
  });
};
export default {
  components: { Card },
  setup() {
    // 暴露给模板
    return {
      cardFirst: getCardSetting(['#283048', '#859398'], 4, 0, '76%'),
      cardSecond: getCardSetting(['#000046', '#1cb5e0'], 3, '8%', '76%'),
      cardThird: getCardSetting(['#44a08d', '#093637'], 2, '16%', '76%'),
      cardFourth: getCardSetting(['#dd5e89', '#f7bb97'], 1, '24%', '76%'),
    };
  },
};
</script>
<style lang="less" scoped>
.home {
  height: 100%;
  width: 100%;
}
</style>
