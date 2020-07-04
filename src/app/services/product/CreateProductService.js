import knex from '../../../database/connection';

import CreateLogsService from '../system/CreateLogsService';

const generateUniqueId = require('../../utils/generateUniqueId');

class CreateProductService {
  async create({ user_id, name, description, category_id, price, stock }) {
    const id = generateUniqueId();
    const productID = await knex('products').insert({
      id,
      name,
      description,
      category_id,
      price,
      stock,
    });

    const log = `Created Product: id:${id} - name:${name} - description:${description} - categoryId:${category_id} - price:${price} - stock:${stock}`;
    await CreateLogsService.create({
      user_id,
      action: 'Create',
      log,
    });

    const productCreated = {
      message:
        productID.length > 0
          ? `Product:${description} registered successfully!`
          : 'Fail to register the product',
    };

    return productCreated;
  }
}

export default new CreateProductService();
