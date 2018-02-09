<template>
  <v-menu :close-on-content-click="false">
    <v-text-field
      required
      slot="activator"
      :label="label"
      :value="value"
      :rules="rules"
      prepend-icon="access_time"
      readonly
    />
    <v-time-picker
      :value="value"
      @input="handleInput"
      format="24hr"
    />
  </v-menu>
</template>

<script>
export default {
  name: 'timepicker',

  props: {
    value: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      required: true,
    },
    rules: {
      type: Array,
      default: () => [],
    },
  },

  methods: {
    handleInput(value) {
      this.$emit('input', value);
    },
  },
};
</script>
