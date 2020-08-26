<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
};
</script>

<style>
body {
  width: 100%;
  height: 100%;
  position: absolute;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position: absolute;
  background: black;
  /* width: 100%; */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  min-width: 1200px;
  min-height: 800px;
  margin: 0;
  padding: 0;
}
</style>
