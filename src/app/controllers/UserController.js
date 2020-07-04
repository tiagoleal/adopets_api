import CreateUserService from '../services/user/CreateUserService';

class UserController {
  async create(req, res) {
    try {
      const { name, email, password } = req.body;

      const userCreated = await CreateUserService.create({
        name,
        email,
        password,
      });

      return res.json(userCreated);
    } catch (error) {
      return res
        .status(400)
        .json({ error: 'User Fails', messages: error.message });
    }
  }
}

export default new UserController();
