import Services from '@/services';
import Task from '@/models/task';
import TASKS from '@/seeds/tasks';
import SEARCH_FIELDS from '@/consts/search-fields';

export default {
  namespaced: true,

  state: {
    list: TASKS,
    filters: {
      search: '',
      searchField: SEARCH_FIELDS.description,
    },
  },
  mutations: {
    ADD(state, task) {
      state.list.push(new Task(task));
    },
    UPDATE(state, newTask) {
      state.list = state.list.map(task => (newTask.id === task.id ? new Task(newTask) : task));
    },
    DESTROY(state, id) {
      const task = state.list.find(elem => elem.id === id);
      task.destroy();
    },
    UPDATE_SEARCH(state, search) {
      state.filters.search = search;
    },
    UPDATE_SEARCH_FIELD(state, searchField) {
      state.filters.searchField = searchField;
    },
  },
  actions: {
    async createOne(context, task) {
      const params = {
        description: task.description,
        due_date: task.due_date.iso,
        due_time: task.due_time,
        remember_timer: task.remember_timer,
        tags: task.tags,
        created_at: task.created_at.iso,
        updated_at: task.updated_at.iso,
      };

      const savedTask = await Services.task.createOne(params);
      context.commit('ADD', savedTask);

      return savedTask;
    },

    async updateOne(context, task) {
      const params = {
        id: task.id,
        description: task.description,
        due_date: task.due_date.iso,
        due_time: task.due_time,
        remember_timer: task.remember_timer,
        tags: task.tags,
        created_at: task.created_at.iso,
        updated_at: task.updated_at.iso,
      };

      const savedTask = await Services.task.updateOne(params);
      context.commit('UPDATE', savedTask);

      return savedTask;
    },

    async destroyOne(context, id) {
      const savedTask = await Services.task.destroyOne({ id });
      context.commit('DESTROY', id);

      return savedTask;
    },
  },
  getters: {
    tasksFiltered(state) {
      const search = new RegExp(state.filters.search, 'i');
      let tasks = state.list;

      tasks = tasks.filter(task => !task.deleted_at);

      if (state.filters.search) {
        if (state.filters.searchField === SEARCH_FIELDS.description) {
          tasks = tasks.filter(task => task.description.search(search) !== -1);
        } else if (state.filters.searchField === SEARCH_FIELDS.tags) {
          // eslint-disable-next-line
          tasks = tasks.filter(task => task.tags.find(tag => tag.description.search(search) !== -1));
        }
      }

      return tasks;
    },
    tasksDoneChart(state) {
      const tasksDone = state.list.filter(task => task.deadLine.raw.toDate() < new Date());
      const donePercentage = tasksDone.length ? (tasksDone.length / state.list.length) * 100 : 0;

      return [{
        name: 'Done',
        y: donePercentage,
      }, {
        name: 'On going',
        y: 100 - donePercentage,
      }];
    },
  },
};

