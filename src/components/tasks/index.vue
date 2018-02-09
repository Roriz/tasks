<template>
  <v-list two-line class="task-list">
    <div v-for="(task, i) in tasks" :key="i">
      <v-list-tile avatar ripple>
        <v-list-tile-content>
          <v-list-tile-sub-title class="grey--text text--darken-4">
            {{ task.description }}

            <v-chip
              color="primary"
              text-color="white"
              v-for="(tag, i) in task.tags"
              :key="i"
            >
              {{ tag.description }}
            </v-chip>
          </v-list-tile-sub-title>
        </v-list-tile-content>

        <v-list-tile-action>
          <v-menu bottom left>
            <v-btn icon slot="activator">
              <v-icon>more_vert</v-icon>
            </v-btn>
            <v-list>
              <v-list-tile @click="update(task)">
                <v-list-tile-title>Edit</v-list-tile-title>
              </v-list-tile>
              <v-list-tile @click="destroy(task)">
                <v-list-tile-title>Destroy</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>

          <v-list-tile-action-text>{{ task.dueDatetime }}</v-list-tile-action-text>
        </v-list-tile-action>
      </v-list-tile>

      <v-divider v-if="i + 1 < tasks.length"/>
    </div>
  </v-list>
</template>

<script>
import EventBus from '@/utils/event-bus';

export default {
  name: 'tasks',

  methods: {
    update(task) {
      EventBus.$emit('open-modal', 'taskForm', { task });
    },
    destroy(task) {
      EventBus.$emit('open-modal', 'confirmDestroy', { task });
    },
  },

  computed: {
    tasks() {
      return this.$store.getters['tasks/tasksFiltered'];
    },
  },
};
</script>

<style lang="scss" scoped>
  .task-list {
    width: 100%;
  }
</style>
