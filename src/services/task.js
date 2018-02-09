import API from './clients/api';

export default class Task extends API {
  createOne(params) {
    return this.post('/tasks', params);
  }
  updateOne(params) {
    return this.patch(`/tasks/${params.id}`, params);
  }
  destroyOne(params) {
    return this.delete(`/tasks/${params.id}`, params);
  }
}
