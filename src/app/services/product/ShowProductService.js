import knex from '../../../database/connection';

import CreateLogsService from '../system/CreateLogsService';

class ShowProductService {
  async show({ user_id, id }) {
    const product = await knex('products').where('id', id).first();

    if (!product) {
      throw new Error('Product not found');
    }

    const category = await knex('categories')
      .where('id', product.category_id)
      .select('categories.id', 'categories.title');

    const log = `Show Product: id:${product.id} - name:${product.name} - description:${product.description} - categoryId:${product.category_id} - price:${product.price} - stock:${product.stock}`;
    await CreateLogsService.create({
      user_id,
      action: 'Show',
      log,
    });

    const productSerialized = {
      ...product,
      category,
    };

    return { product: productSerialized };
  }
}

export default new ShowProductService();
