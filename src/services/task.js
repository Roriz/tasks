import API from './clients/api';

export default class Task extends API {
  createOne(params) {
    return this.post('/task', params);
  }
  updateOne(params) {
    return this.patch('/task', params);
  }
}
