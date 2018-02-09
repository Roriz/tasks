<template>
  <v-toolbar
    color="blue darken-3"
    dark
    app
    clipped-left
    fixed
  >
    <v-toolbar-title
      :style="$vuetify.breakpoint.smAndUp ? 'width: 300px; min-width: 250px' : 'min-width: 72px'"
      class="ml-0 pl-3"
    >
      <v-toolbar-side-icon @click.stop="toggleNavigationDrawer"/>
      <span class="hidden-xs-only">Tasks</span>
    </v-toolbar-title>
    <v-text-field
      light
      solo
      prepend-icon="search"
      placeholder="Search"
      style="max-width: 500px; min-width: 128px"
    />
  </v-toolbar>
</template>

<script>
export default {
  name: 'toolbar',

  methods: {
    toggleNavigationDrawer() {
      this.$store.commit('layout/TOGGLE_NAVIGATION_DRAWER');
    },
  },
};
</script>
