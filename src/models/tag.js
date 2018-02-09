import Cid from './concerns/cid';

export default class Tag {
  constructor(param = {}) {
    this.id = param.id || Cid();
    this.description = param.description || '';
  }
}
