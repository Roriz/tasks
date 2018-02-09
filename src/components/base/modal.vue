<template>
  <div class="modal">
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
    options: {
      type: Object,
      default: () => ({}),
    },
  },

  mounted() {
    $(this.$el).modal({ show: true });
  },

  beforeDestroy() {
    $(this.$el).modal('hide');
  },
};
</script>
