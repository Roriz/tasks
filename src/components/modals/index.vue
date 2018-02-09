<template>
  <div>
    <task-form v-if="taskForm" @close="taskForm = false"/>
  </div>
</template>

<script>
import TaskForm from './task-form';

export default {
  name: 'modals',

  components: {
    TaskForm,
  },

  data() {
    return {
      taskForm: true,
    };
  },
};
</script>
