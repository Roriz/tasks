import Vue from 'vue';
import store from './store';
import app from './app';
import router from './router';
import Vuetify from 'vuetify';

Vue.use(Vuetify);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<app/>',
  components: { app },
});
