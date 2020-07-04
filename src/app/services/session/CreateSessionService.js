import jwt from 'jsonwebtoken';

import bcrypt from 'bcryptjs';
import authConfig from '../../../config/auth';

import knex from '../../../database/connection';

import CreateLogsService from '../system/CreateLogsService';

class CreateSessionService {
  async create({ email, password }) {
    const userExists = await knex('users')
      .where('email', email)
      .select('*')
      .first();

    if (!userExists) {
      throw new Error('User not found.');
    }

    if (!(await bcrypt.compare(password, userExists.password))) {
      throw new Error('Password does not match.');
    }

    const { id, name } = userExists;

    const token = jwt.sign({ id }, authConfig.secret, {
      expiresIn: authConfig.expiresIn,
    });

    const sessionCreated = {
      user: {
        id,
        name,
        email,
      },
      token,
    };

    const log = `Auth Token: id:${id} - name:${name} - email:${email} - token:${token}`;
    await CreateLogsService.create({
      user_id: id,
      action: 'Auth Token',
      log,
    });

    return sessionCreated;
  }
}

export default new CreateSessionService();
