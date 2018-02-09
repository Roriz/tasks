<template>
  <v-app>
    <modals/>
    <router-view/>
  </v-app>
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
