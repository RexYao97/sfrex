<template>
  <div class="home">
    <Card
      :setting="item"
      v-for="(item, i) of cardSettings"
      :key="item.zIndex"
      :ref="
        (el) => {
          cards[i] = el;
        }
      "
    >
    </Card>
  </div>
</template>

<script>
import { reactive, ref } from 'vue';
import Card from './components/card';

const windHeight = document.body.clientHeight;

const getCardSetting = function(color, zIndex, top, height) {
  return {
    color,
    zIndex,
    top,
    height,
  };
};
export default {
  components: { Card },
  setup() {
    const cards = ref([]);
    const height = 0.76 * windHeight;
    const revalHeight = (windHeight - height) / 3;
    const cardSettings = reactive([
      getCardSetting(['#283048', '#859398'], 4, 0, height),
      getCardSetting(['#000046', '#1cb5e0'], 3, revalHeight, height),
      getCardSetting(['#44a08d', '#093637'], 2, revalHeight * 2, height),
      getCardSetting(['#dd5e89', '#f7bb97'], 1, revalHeight * 3, height),
    ]);
    // 暴露给模板
    return {
      cards,
      cardSettings,
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
