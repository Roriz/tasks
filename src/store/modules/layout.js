export default {
  namespaced: true,

  state: {
    navigation_drawer: true,
  },

  mutations: {
    TOGGLE_NAVIGATION_DRAWER(state) {
      state.navigation_drawer = !state.navigation_drawer;
    },
  },
};

