<template>
  <v-dialog v-if="isOpen" :value="isOpen" @input="$emit('open')" persistent max-width="500px">
    <v-card>
      <v-card-title>
        <span v-if="task.isPersisted" class="headline">Update task</span>
        <span v-else class="headline">Create new task</span>
      </v-card-title>
      <v-card-text>
        <v-container grid-list-md>
          <v-layout wrap>
            <v-flex md12>
              <v-alert v-if="requestErrors" color="error" icon="warning" value="true">
                Algo de errado não está certo. {{ requestErrors }}
              </v-alert>
            </v-flex>
            <v-flex md12>
              <v-text-field
                v-model="task.description"
                label="Task description"
                required
                :rules="task.descriptionErrors"
              />
            </v-flex>

            <v-flex xs12>
              <datepicker
                label="Due date"
                v-model="task.due_date.value"
                :rules="task.dueDateErrors"
              />
            </v-flex>

            <v-flex xs12>
              <timepicker
                label="Due time"
                v-model="task.due_time"
                :rules="task.dueTimeErrors"
              />
            </v-flex>

            <v-flex xs12>
              <v-text-field
                required
                label="Notification Time"
                suffix="minutes"
                hint="Time to trigger notification before of due date"
                v-model="task.remember_timer"
              />
            </v-flex>

            <v-flex xs12>
              <v-select
                label="Tags"
                chips
                tags
                solo
                clearable
                :value="task.tags"
                @input="handleTag"
              >
                <template slot="selection" slot-scope="data">
                  <v-chip
                    close
                    @input="destroyTag(data)"
                  >
                    <span>{{ data.item.description }}</span>
                  </v-chip>
                </template>
              </v-select>
            </v-flex>
          </v-layout>
        </v-container>

        <small>*indicates required field</small>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" flat @click.native="$emit('close')">Close</v-btn>
        <v-btn
          color="primary"
          :disabled="!task.isValid || saving"
          @click.native="save"
        >
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import Datepicker from '@/components/base/datepicker';
import Timepicker from '@/components/base/timepicker';
import Task from '@/models/task';
import Tag from '@/models/tag';

export default {
  name: 'task-form',

  components: {
    Datepicker,
    Timepicker,
  },

  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
    value: {
      type: Object,
      default: () => ({}),
    },
  },

  data() {
    return {
      task: new Task(this.value || {}),
      saving: false,
      requestErrors: null,
    };
  },

  methods: {
    async save() {
      this.saving = true;
      try {
        if (this.task.isPersisted) {
          await this.$store.dispatch('tasks/updateOne', this.task);
        } else {
          await this.$store.dispatch('tasks/createOne', this.task);
        }
        this.$emit('close');
        this.saving = false;
      } catch (e) {
        this.requestErrors = e || true;
        this.saving = false;
      }
    },

    handleTag(tags) {
      if (tags.length) {
        this.addTag(tags[tags.length - 1]);
      } else {
        this.clearTags();
      }
    },

    addTag(tag) {
      this.task.tags.push(new Tag({ description: tag }));
    },

    clearTags() {
      this.task.tags = [];
    },

    destroyTag(params) {
      this.task.tags = this.task.tags.filter((tag, i) => i !== params.index);
    },
  },

  watch: {
    value() {
      this.task = new Task(this.value || {});
    },
  },
};
</script>
