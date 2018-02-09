import Services from '@/services';
import Task from '@/models/task';
import Cid from '@/models/concerns/cid';

export default {
  namespaced: true,

  state: {
    list: [
      new Task({ id: Cid(), due_time: '00:00', description: 'Test 1', tags: [{ description: 'Tag1' }] }),
      new Task({ id: Cid(), due_time: '00:00', description: 'Test 2', tags: [{ description: 'Tag1' }, { description: 'Tag2' }] }),
      new Task({ id: Cid(), due_time: '00:00', description: 'Test 3' }),
      new Task({ id: Cid(), due_time: '00:00', description: 'Test 4' }),
      new Task({ id: Cid(), due_time: '00:00', description: 'Test 5', tags: [{ description: 'Tag1' }, { description: 'Tag2' }] }),
      new Task({ id: Cid(), due_time: '00:00', description: 'Test 6' }),
      new Task({ id: Cid(), due_time: '00:00', description: 'Test 7', tags: [{ description: 'Tag1' }, { description: 'Tag2' }] }),
      new Task({ id: Cid(), due_time: '00:00', description: 'Test 8' }),
    ],
  },
  mutations: {
    ADD(state, task) {
      state.list.push(new Task(task));
    },
    UPDATE(state, newTask) {
      state.list = state.list.map(task => (newTask.id === task.id ? newTask : task));
    },
    DESTROY(state, id) {
      state.list = state.list.filter(task => task.id !== id);
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
  getters: {},
};

