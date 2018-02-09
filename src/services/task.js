import API from './clients/api';

export default class Task extends API {
  createOne(params) {
    this.post('/task', params);
  }
}
