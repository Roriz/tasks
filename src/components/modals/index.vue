<template>
  <div>
    <task-form
      :value="taskForm.task"
      :is-open="taskForm.isOpen"
      @close="closeModal('taskForm')"
      @open="openModal('taskForm')"
    />
    <confirm-destroy
      :value="confirmDestroy.task"
      :is-open="confirmDestroy.isOpen"
      @close="closeModal('confirmDestroy')"
      @open="openModal('confirmDestroy')"
    />
  </div>
</template>

<script>
import EventBus from '@/utils/event-bus';
import TaskForm from './task-form';
import ConfirmDestroy from './confirm-destroy';

export default {
  name: 'modals',

  components: {
    TaskForm,
    ConfirmDestroy,
  },

  data() {
    return {
      taskForm: {
        isOpen: false,
        task: null,
      },
      confirmDestroy: {
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
