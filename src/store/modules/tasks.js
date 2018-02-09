import Services from '@/services';
import Task from '@/models/task';

export default {
  namespaced: true,

  state: {
    list: [],
  },
  mutations: {
    ADD(state, task) {
      state.list.push(new Task(task));
    },
  },
  actions: {
    async createOne(context, task) {
      const params = {
        id: task.id,
        description: task.description,
        due_date: task.due_date.iso,
        remember_timer: task.remember_timer,
        tags: task.tags,
      };

      const savedTask = await Services.task.createOne(params);
      context.commit('ADD', savedTask);

      return savedTask;
    },
  },
  getters: {},
};

