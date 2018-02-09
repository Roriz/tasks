<template>
  <div>
    <task-form :visible="taskForm" @close="taskForm = false" @open="taskForm = true"/>
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
      taskForm: false,
    };
  },
};
</script>
