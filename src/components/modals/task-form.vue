<template>
  <modal :visible="visible">
    <div slot="body">
      Modal text
    </div>
  </modal>
</template>

<script>
import Modal from '@/components/base/modal';

export default {
  name: 'task-form',

  components: {
    Modal,
  },

  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
