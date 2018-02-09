import DateFormatter from './concerns/date_formatter';
import Cid from './concerns/cid';
import Tag from './tag';

export default class Task {
  constructor(param = {}) {
    this.id = param.id || Cid();
    this.description = param.description || '';
    this.due_date = new DateFormatter(param.due_date || new Date());
    this.due_time = null;
    this.remember_timer = param.remember_timer || 5; // INFO: In minutes
    this.tags = param.tags ? param.tags.map(tag => new Tag(tag)) : [];
    this.created_at = new DateFormatter(new Date());
    this.updated_at = new DateFormatter(new Date());
    this.deleted_at = new DateFormatter(new Date());
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
}
