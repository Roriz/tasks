<template>
  <div>
    <task-form :visible="taskForm"/>
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
