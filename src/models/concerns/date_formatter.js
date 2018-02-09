import moment from '@/config/moment';

export default class DateFormatter {
  constructor(date) {
    if (!date) { throw new Error('Invalid date'); }

    this.raw = null;
    this.formatted = null;
    this.iso = null;
    this.value = date;
  }

  set value(date) {
    if (date) {
      this.raw = moment(date);
      this.dateFormatted = moment(date).format('L');
      this.dateTimeFormatted = moment(date).format('L LT');
      this.iso = moment(date).format('YYYY-MM-DDTHH:mm:ss');
    } else {
      this.raw = null;
      this.formatted = null;
      this.iso = null;
    }
  }

  get value() {
    return this.iso;
  }

  get isValid() {
    return this.raw && this.iso;
  }
}
