import bcrypt from 'bcryptjs';
import knex from '../../../database/connection';

import CreateLogsService from '../system/CreateLogsService';

const generateUniqueId = require('../../utils/generateUniqueId');

class CreateUserService {
  async create({ name, email, password }) {
    const userExists = await knex('users')
      .where('email', email)
      .select('*')
      .first();

    if (userExists) {
      throw new Error('User already exists.');
    }

    const id = generateUniqueId();
    const password_hash = await bcrypt.hash(password, 8);
    await knex('users').insert({
      id,
      name,
      email,
      password: password_hash,
    });

    const log = `Created User:  id:${id} - name:${name} - email:${email}`;
    await CreateLogsService.create({
      user_id: id,
      action: 'Create',
      log,
    });

    const userCreated = { message: `User:${name} successfully registered` };

    return userCreated;
  }
}

export default new CreateUserService();
