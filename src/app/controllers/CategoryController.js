import IndexCategoryService from '../services/category/IndexCategoryService';

class CategoryController {
  async index(req, res) {
    const user_id = req.userId;

    const categories = await IndexCategoryService.index({
      user_id,
    });

    return res.json(categories);
  }
}

export default new CategoryController();
