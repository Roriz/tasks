<template>
  <v-dialog :value="isOpen" persistent max-width="290">
    <v-card>
      <v-card-title class="headline">Are you sure you want to exclude this task?</v-card-title>
      <v-card-text>
        This action can not be reversed, make sure that you no longer need any of your information
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" flat="flat" @click.native="$emit('close')">Cancel</v-btn>
        <v-btn color="error" @click.native="confirm">Confirm</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'confirm-destroy',

  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
    value: {
      type: Object,
      default: null,
    },
  },

  methods: {
    async confirm() {
      this.saving = true;
      try {
        await this.$store.dispatch('tasks/destroyOne', this.value.id);
        this.$emit('close');
        this.saving = false;
      } catch (e) {
        this.requestErrors = e || true;
        this.saving = false;
      }
    },
  },
};
</script>
