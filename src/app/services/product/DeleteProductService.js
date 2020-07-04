import knex from '../../../database/connection';

import CreateLogsService from '../system/CreateLogsService';

class DeleteProductService {
  async delete({ user_id, id }) {
    const product = await knex('products').where('id', id).first();

    if (!product) {
      throw new Error('Product not deleted');
    }

    await knex('products').where('id', id).delete();

    const log = `Deleted Product: id:${product.id} - name:${product.name} - description:${product.description} - categoryId:${product.category_id} - price:${product.price} - stock:${product.stock}`;
    await CreateLogsService.create({
      user_id,
      action: 'Delete',
      log,
    });

    const productDelete = {
      message: `Product: ${product.name} was deleted.`,
    };
    return productDelete;
  }
}

export default new DeleteProductService();
