<template>
  <v-navigation-drawer
    fixed
    clipped
    app
    :value="visible"
  >
    <v-list dense>
      <v-list-tile v-for="(route, i) in routes" :key="i" @click="$router.push(route.path)">
        <v-list-tile-action>
          <v-icon>{{ route.meta.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>
            {{ route.name }}
          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'navigation-drawer',

  computed: {
    routes() {
      return this.$router.options.routes.filter(route => route.name);
    },

    visible() {
      return this.$store.state.layout.navigation_drawer;
    },
  },
};
</script>
