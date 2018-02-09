<template>
  <modal>
    <div slot="body">
      <div v-if="requestErrors" class="alert alert-danger" role="alert">
        This is a generic error. {{ e }}
      </div>

      <div
        v-show="!task.isValid"
        v-for="(error, key) in task.errors"
        :key="key"
        class="alert alert-warning"
        role="alert"
      >
        {{ error.message }}
      </div>

      <form @submit.prevent="save">
        <div class="form-group col-12">
          <label for="description">Description</label>
          <input id="description" type="text" class="form-control" v-model="task.description"/>
        </div>

        <div class="form-group col-12">
          <label for="due_date">Deadline of the task</label>
          <flat-pickr
            v-model="task.due_date.value"
            :config="FlatpickrConfig"
            class="form-control"
            placeholder="Select date"
          />
        </div>

        <div class="form-group col-12">
          <label for="due_date">Notification Time</label>
          <input id="due_date" type="number" class="form-control" v-model="task.remember_timer"/>
          <small id="emailHelp" class="form-text text-muted">Minutes before of notification.</small>
        </div>

        <button
          type="submit"
          class="btn btn-primary"
          :disabled="saving || !task.isValid"
        >
          Submit
        </button>
      </form>
    </div>
  </modal>
</template>

<script>
import Modal from '@/components/base/modal';
import Task from '@/models/task';
import FlatpickrConfig from '@/config/flatpickr';
import flatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';

export default {
  name: 'task-form',

  components: {
    Modal,
    flatPickr,
  },

  data() {
    return {
      FlatpickrConfig,
      task: new Task(),
      saving: false,
      requestErrors: null,
    };
  },

  methods: {
    async save() {
      this.saving = true;
      try {
        await this.$store.dispatch('tasks/createOne', this.task);
        this.$emit('close');
      } catch (e) {
        this.requestErrors = e;
        this.saving = false;
      }
    },
  },
};
</script>
