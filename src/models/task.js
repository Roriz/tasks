import DateFormatter from './concerns/date_formatter';
import Cid from './concerns/cid';
import Tag from './tag';

export default class Task {
  constructor(param = {}) {
    this.id = param.id || Cid();
    this.description = param.description || '';
    this.due_date = new DateFormatter(param.due_date || new Date());
    this.remember_timer = param.remember_timer || 5; // INFO: In minutes
    this.tags = param.tags ? param.tags.map(tag => new Tag(tag)) : [];
    this.created_at = new DateFormatter(new Date());
    this.updated_at = new DateFormatter(new Date());
    this.deleted_at = new DateFormatter(new Date());
  }

  get isValid() {
    return this.errors.length === 0;
  }

  get errors() {
    const errors = [];
    if (!this.description) {
      errors.push({ field: 'description', message: 'Description is required.' });
    }

    if (!(this.due_date && this.due_date.value)) {
      errors.push({ field: 'due_date', message: 'Due date is required.' });
    }
    return errors;
  }
}
