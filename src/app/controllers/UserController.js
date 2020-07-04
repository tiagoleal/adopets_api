import CreateUserService from '../services/user/CreateUserService';
import UpdateUserService from '../services/user/UpdateUserService';

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

  async update(req, res) {
    try {
      const { id, name, email, password, newPassword } = req.body;

      const userUpdated = await UpdateUserService.update({
        id,
        name,
        email,
        password,
        newPassword,
      });

      return res.json(userUpdated);
    } catch (error) {
      return res
        .status(400)
        .json({ error: 'User Fails Update Profile', messages: error.message });
    }
  }
}

export default new UserController();
