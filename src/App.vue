<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script></script>
<style lang="scss" scoped>
#app {
  overflow: hidden;
  padding: 0;
}
</style>
<style lang="scss">
body::-webkit-scrollbar {
  display: none;
}
body {
  scrollbar-width: none !important;
  overflow:-moz-scrollbars-none;
}
</style>
