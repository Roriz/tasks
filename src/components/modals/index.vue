<template>
  <div>
    <task-form
      :value="taskForm.task"
      :is-open="taskForm.isOpen"
      @close="closeModal('taskForm')"
      @open="openModal('taskForm')"
    />
  </div>
</template>

<script>
import EventBus from '@/utils/event-bus';
import TaskForm from './task-form';

export default {
  name: 'modals',

  components: {
    TaskForm,
  },

  data() {
    return {
      taskForm: {
        isOpen: false,
        task: null,
      },
    };
  },

  mounted() {
    EventBus.$on('open-modal', this.openModal);
  },

  methods: {
    openModal(name, options = {}) {
      this[name] = { ...this[name], isOpen: true, ...options };
    },
    closeModal(name) {
      this[name] = { isOpen: false };
    },
  },
};
</script>
