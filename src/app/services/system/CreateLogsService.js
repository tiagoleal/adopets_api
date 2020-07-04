import knex from '../../../database/connection';

class CreateLogsService {
  async create({ user_id = 'f1b20e7c', action, log }) {
    await knex('system_logs').insert({
      user_id,
      action,
      log: JSON.stringify(log),
    });
  }
}

export default new CreateLogsService();
