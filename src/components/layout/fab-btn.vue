<template>
  <div>
    <v-btn
      fab
      bottom
      right
      color="pink"
      dark
      fixed
      @click.stop="openTaskForm"
    >
      <v-icon>add</v-icon>
    </v-btn>
  </div>
</template>

<script>
import EventBus from '@/utils/event-bus';

export default {
  name: 'fab-btn',

  methods: {
    openTaskForm() {
      EventBus.$emit('open-modal', 'taskForm');
    },
  },
};
</script>
