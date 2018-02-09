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

    <v-select
      class="search-field"
      :items="searchableFields"
      :value="searchField"
      @input="handleSearchField"
      label="Search in"
      autocomplete
      dark
    />
  </v-toolbar>
</template>

<script>
import SEARCH_FIELDS from '@/consts/search-fields';

export default {
  name: 'toolbar',

  methods: {
    toggleNavigationDrawer() {
      this.$store.commit('layout/TOGGLE_NAVIGATION_DRAWER');
    },

    handleSearch(value) {
      this.$store.commit('tasks/UPDATE_SEARCH', value);
    },

    handleSearchField(value) {
      this.$store.commit('tasks/UPDATE_SEARCH_FIELD', value);
    },
  },

  computed: {
    search() {
      return this.$store.state.tasks.filters.search;
    },
    searchField() {
      return this.$store.state.tasks.filters.searchField;
    },
    searchableFields() {
      return Object.values(SEARCH_FIELDS);
    },
  },
};
</script>

<style lang="scss" scoped>
  .search{
    min-width: 128px;
    max-width: 500px;
  }

  .search-field {
    min-width: 128px;
    max-width: 200px;
    margin-left: 20px;
    margin-top: 20px;
  }
</style>
