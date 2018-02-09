<template>
  <v-menu :close-on-content-click="false">
    <v-text-field
      required
      slot="activator"
      prepend-icon="event"
      :label="label"
      :value="value"
      :rules="rules"
      @input="handleInput"
    />
    <v-date-picker
      no-title
      scrollable
      actions
      :value="value"
      @input="handleInput"
    />
  </v-menu>
</template>

<script>
export default {
  name: 'datepicker',

  props: {
    value: {
      type: String,
      required: true,
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
