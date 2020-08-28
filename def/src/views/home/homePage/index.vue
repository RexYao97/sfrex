<template>
  <div class="home">
    <Card :setting="cardSettings[0]" class="snow">
      <div></div>
    </Card>
    <Card class="beach" :setting="cardSettings[1]"><div>webgl</div></Card>
    <Card class="fall" :setting="cardSettings[2]"> 213</Card>
    <Card class="fire" :setting="cardSettings[3]">123 </Card>
  </div>
</template>

<script>
import { reactive, ref } from 'vue';
import Card from './components/card';

const windHeight = document.body.clientHeight;

const getCardSetting = function(color, zIndex, top, height, url) {
  return {
    color,
    zIndex,
    top,
    height,
    url,
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
      getCardSetting(['#000046', '#1CB5E0'], 3, revalHeight, height),
      getCardSetting(['#44a08d', '#093637'], 2, revalHeight * 2, height),
      getCardSetting(['#dd5e89', '#f7bb97'], 1, revalHeight * 3, height),
    ]);

    // 暴露给模板
    return {
      // turb,
      cards,
      cardSettings,
    };
  },
};
</script>
<style lang="less" scoped>
.backgroundImge(@url) {
  width: 100%;
  height: 100%;
  background-image: url(@url);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
  filter: url('#filter-glitch-3');
}
.home {
  height: 100%;
  width: 100%;
  .snow {
    .backgroundImge('../../../assets/snow.jpg');
  }
  .beach {
    .backgroundImge('../../../assets/beach.jpg');
  }
  .fall {
    .backgroundImge('../../../assets/fall.jpg');
  }
  .fire {
    .backgroundImge('../../../assets/fire.jpg');
  }
}
</style>
