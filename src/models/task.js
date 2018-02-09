import DateFormatter from './concerns/date_formatter';
import Tag from './tag';

export default class Task {
  constructor(param = {}) {
    this.id = param.id;
    this.description = param.description || '';
    this.due_date = new DateFormatter(param.due_date || new Date());
    this.due_time = param.due_time || null;
    this.remember_timer = param.remember_timer || 5; // INFO: In minutes
    this.tags = param.tags ? param.tags.map(tag => new Tag(tag)) : [];
    this.created_at = new DateFormatter(param.created_at || new Date());
    this.updated_at = new DateFormatter(param.updated_at || new Date());
    this.deleted_at = param.deleted_at ? new DateFormatter(param.deleted_at) : null;
  }

  destroy() {
    this.deleted_at = new DateFormatter(new Date());
  }

  get isPersisted() {
    return Boolean(this.id);
  }

  get deadLine() {
    const date = this.due_date.raw.format('YYYY-MM-DD');
    const time = this.due_time;
    return new DateFormatter(`${date} ${time}`);
  }

  get isValid() {
    return this.remember_timer &&
      !this.descriptionErrors.length &&
      !this.dueTimeErrors.length &&
      !this.dueDateErrors.length;
  }

  get descriptionErrors() {
    if (!this.description) {
      return ['Description is required.'];
    }
    return [];
  }

  get dueTimeErrors() {
    if (!this.due_time) {
      return ['Due time is required.'];
    }
    return [];
  }

  get dueDateErrors() {
    if (this.due_date && this.due_date.isValid) {
      return [];
    }
    return ['Due date is required.'];
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

  // eslint-disable-next-line
  get due_date() {
    // eslint-disable-next-line
    return this._due_date;
  }

  // eslint-disable-next-line
  set due_date(val) {
    // eslint-disable-next-line
    this._due_date = val;
    this.updated_at = new DateFormatter(new Date());
  }

  // eslint-disable-next-line
  get due_time() {
    // eslint-disable-next-line
    return this._due_time;
  }

  // eslint-disable-next-line
  set due_time(val) {
    // eslint-disable-next-line
    this._due_time = val;
    this.updated_at = new DateFormatter(new Date());
  }

  // eslint-disable-next-line
  get remember_timer() {
    // eslint-disable-next-line
    return this._remember_timer;
  }

  // eslint-disable-next-line
  set remember_timer(val) {
    // eslint-disable-next-line
    this._remember_timer = val;
    this.updated_at = new DateFormatter(new Date());
  }

  get tags() {
    // eslint-disable-next-line
    return this._tags;
  }

  set tags(val) {
    // eslint-disable-next-line
    this._tags = val;
    this.updated_at = new DateFormatter(new Date());
  }
}
