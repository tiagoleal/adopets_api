import knex from '../../../database/connection';

import CreateLogsService from '../system/CreateLogsService';

class IndexProductService {
  async search({ user_id, searchParam, page }) {
    const products = await knex('products')
      .join('categories', 'categories.id', '=', 'products.category_id')
      .limit(10)
      .offset((page - 1) * 10)
      .where(searchParam)
      .select([
        'products.id',
        'products.name',
        'products.description',
        'products.price',
        'products.stock',
        'products.category_id',
        'categories.title as category',
      ]);

    if (products.length === 0) {
      return [];
    }

    const log =
      searchParam.length > 0
        ? `List/Search Product: name:${searchParam.name} - description:${searchParam.description} - categoryId:${searchParam.category_id} - page:${page}`
        : 'Listed all products';

    await CreateLogsService.create({
      user_id,
      action: 'List/Search',
      log,
    });

    return products;
  }
}

export default new IndexProductService();
