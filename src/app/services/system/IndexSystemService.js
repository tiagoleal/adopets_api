import knex from '../../../database/connection';

class IndexSystemService {
  async index() {
    const logs = await knex('system_logs')
      .join('users', 'users.id', '=', 'system_logs.user_id')
      .select(['system_logs.*', 'users.name', 'users.email'])
      .orderBy('id', 'desc');

    return logs;
  }
}

export default new IndexSystemService();
