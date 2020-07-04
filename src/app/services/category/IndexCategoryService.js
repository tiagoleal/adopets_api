import knex from '../../../database/connection';

import CreateLogsService from '../system/CreateLogsService';

class IndexCategoryService {
  async index({ user_id }) {
    const categories = await knex('categories').select([
      'id',
      'categories.title as description',
    ]);

    if (categories.length === 0) {
      throw new Error('No data');
    }

    await CreateLogsService.create({
      user_id,
      action: 'List',
      log: 'Listed all categories',
    });

    return categories;
  }
}

export default new IndexCategoryService();
