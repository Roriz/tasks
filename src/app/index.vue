<template>
  <div id="app">
    <modals/>
    <router-view/>
  </div>
</template>

<script>
import Modals from '@/components/modals';

export default {
  name: 'app',

  components: {
    Modals,
  },
};
</script>

<style lang="scss">
  $fa-font-path: "~font-awesome/fonts";

  @import "~bootstrap/scss/bootstrap";
  @import "~font-awesome/scss/font-awesome";
</style>
