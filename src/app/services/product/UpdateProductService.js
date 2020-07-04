import knex from '../../../database/connection';

import CreateLogsService from '../system/CreateLogsService';

class UpdateProductService {
  async update({ user_id, id, name, description, category_id, price, stock }) {
    const productUpdate = await knex('products').where({ id }).update({
      name,
      description,
      category_id,
      price,
      stock,
    });

    if (!productUpdate) {
      throw new Error('Product not found');
    }

    const log = `Updated Product: id:${id} - name:${name} - description:${description} - categoryId:${category_id} - price:${price} - stock:${stock}`;
    await CreateLogsService.create({
      user_id,
      action: 'Update',
      log,
    });

    const productUpdateMessage = {
      message: `id:${id} Product:${name} successfully changed!`,
    };

    return productUpdateMessage;
  }
}

export default new UpdateProductService();
