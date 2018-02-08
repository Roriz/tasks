<template>
  <div class="modal" v-if="visible">
    <div class="modal-dialog">
      <div class="modal-content">
        <slot class="modal-header" name="header"/>
        <slot class="modal-body" name="body"/>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
import 'bootstrap';

export default {
  name: 'modal',

  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    options: {
      type: Object,
      default: () => ({}),
    },
  },

  mounted() {
    this.open();
  },

  methods: {
    open() {
      if (!this.visible) { return; }
      $(this.$el).modal({ show: true });
    },
  },

  watchs: {
    visible() {
      this.open();
    },
  },
};
</script>
