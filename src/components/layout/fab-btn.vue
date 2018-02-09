<template>
  <div>
    <v-btn
      fab
      bottom
      right
      color="pink"
      dark
      fixed
      @click.stop="visible = !visible"
    >
      <v-icon>add</v-icon>
    </v-btn>
    <task-form :visible="visible" @close="visible = false" @open="visible = true"/>
  </div>
</template>

<script>
import TaskForm from '@/components/modals/task-form';

export default {
  name: 'fab-btn',
  components: {
    TaskForm,
  },

  data() {
    return {
      visible: false,
    };
  },
};
</script>
