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
      class="search"
      :value="search"
      @input="handleSearch"
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

    handleSearch(value) {
      this.$store.commit('tasks/UPDATE_SEARCH', value);
    },
  },

  computed: {
    search() {
      return this.$store.state.tasks.filters.description;
    },
  },
};
</script>

<style lang="scss" scoped>
  .search {
    min-width: 128px;
    max-width: 500px;
  }
</style>
