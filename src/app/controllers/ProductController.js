import IndexProductService from '../services/product/IndexProductService';
import CreateProductService from '../services/product/CreateProductService';
import ShowProductService from '../services/product/ShowProductService';
import DeleteProductService from '../services/product/DeleteProductService';
import UpdateProductService from '../services/product/UpdateProductService';

import knex from '../../database/connection';

class ProductController {
  async index(req, res) {
    const {
      name = '',
      description = '',
      category_id = 0,
      page = 1,
    } = req.query;

    const user_id = req.userId;

    const searchParam = {};

    if (name.length > 0) {
      searchParam.name = name;
    }

    if (description.length > 0) {
      searchParam.description = description;
    }

    if (category_id > 0) {
      searchParam.category_id = category_id;
    }

    const products = await IndexProductService.search({
      user_id,
      searchParam,
      page,
    });

    let totalProduct;
    if (name.length > 0 || description.length > 0 || category_id > 0) {
      const getProducts = () => knex('products').where(searchParam);
      [totalProduct] = await getProducts().count();
    } else {
      [totalProduct] = await knex('products').count();
    }

    res.header('x-Total-Count', totalProduct['count(*)']);
    res.header('Access-Control-Expose-Headers', 'X-Total-Count');

    return res.json(products);
  }

  async create(req, res) {
    const { name, description, category_id, price, stock } = req.body;
    const user_id = req.userId;

    const productCreated = await CreateProductService.create({
      user_id,
      name,
      description,
      category_id,
      price,
      stock,
    });

    return res.json(productCreated);
  }

  async show(req, res) {
    const { id } = req.params;
    const user_id = req.userId;

    const product = await ShowProductService.show({ user_id, id });

    return res.json(product);
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const user_id = req.userId;
      const { name, description, category_id, price, stock } = req.body;

      const productUpdate = await UpdateProductService.update({
        user_id,
        id,
        name,
        description,
        category_id,
        price,
        stock,
      });
      return res.json(productUpdate);
    } catch (error) {
      return res
        .status(400)
        .json({ error: 'Product Fails', messages: error.message });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const user_id = req.userId;
      const productDelete = await DeleteProductService.delete({ user_id, id });
      return res.json(productDelete);
    } catch (error) {
      return res
        .status(400)
        .json({ error: 'Product Fails', messages: error.message });
    }
  }
}

export default new ProductController();
