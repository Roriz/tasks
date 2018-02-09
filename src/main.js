import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import store from './store';
import app from './app';
import router from './router';

Vue.use(Vuetify);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<app/>',
  components: { app },
});
