import DateFormatter from './concerns/date_formatter';
import Cid from './concerns/cid';

export default class Tag {
  constructor(param = {}) {
    this.id = param.id || Cid();
    this.description = param.description || '';
    this.created_at = new DateFormatter(param.created_at || new Date());
    this.updated_at = new DateFormatter(param.updated_at || new Date());
    this.deleted_at = param.deleted_at ? new DateFormatter(param.deleted_at) : null;
  }

  get description() {
    // eslint-disable-next-line
    return this._description;
  }

  set description(val) {
    // eslint-disable-next-line
    this._description = val;
    this.updated_at = new DateFormatter(new Date());
  }
}
