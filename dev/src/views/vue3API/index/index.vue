<template>
  <div>{{ count }}{{ object }}</div>
</template>

<script>
import { ref, reactive } from 'vue';

export default {
  setup() {
    const count = ref(0);
    const object = reactive({ foo: 'bar' });

    // 暴露给模板
    return {
      count,
      object,
    };
  },
};
</script>
