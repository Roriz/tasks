import moment from 'moment';
import Task from '@/models/task';
import Cid from '@/models/concerns/cid';

export default [
  new Task({ id: Cid(), due_date: moment().add('days', 5).toDate(), due_time: '10:00', description: 'CRUD de Tarefas', tags: [{ description: 'Tasks' }, { description: 'CRUD' }] }),
  new Task({ id: Cid(), due_date: moment().add('days', 4).toDate(), due_time: '12:00', description: 'Listagem de Tarefas', tags: [{ description: 'Tasks' }] }),
  new Task({ id: Cid(), due_date: moment().add('days', 3).toDate(), due_time: '08:00', description: 'Notificações', tags: [{ description: 'Chrome' }] }),
  new Task({ id: Cid(), due_date: moment().add('days', 2).toDate(), due_time: '10:30', description: 'Busca de Tarefas', tags: [{ description: 'Tasks' }, { description: 'Tag2' }] }),
  new Task({ id: Cid(), due_date: moment().add('days', 1).toDate(), due_time: '00:00', description: 'Busca por tags', tags: [{ description: 'Tags' }, { description: 'Search' }] }),
  new Task({ id: Cid(), due_date: moment().toDate(), due_time: '00:00', description: 'Dashboard', tags: [{ description: 'Charts' }, { description: 'Highcharts' }] }),
  new Task({ id: Cid(), due_date: moment().subtract('days', 3).toDate(), due_time: '00:00', description: 'CRUD de tags', tags: [{ description: 'CRUD' }, { description: 'Tags' }] }),
];
