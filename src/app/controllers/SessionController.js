import CreateSessionService from '../services/session/CreateSessionService';

class SessionController {
  async create(req, res) {
    try {
      const { email, password } = req.body;

      const sessionCreated = await CreateSessionService.create({
        email,
        password,
      });

      return res.json(sessionCreated);
    } catch (error) {
      return res
        .status(400)
        .json({ error: 'Generate Token Fails', messages: error.message });
    }
  }
}

export default new SessionController();
