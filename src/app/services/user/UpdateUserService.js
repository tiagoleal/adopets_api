import bcrypt from 'bcryptjs';
import knex from '../../../database/connection';

import CreateLogsService from '../system/CreateLogsService';

class UpdateUserService {
  async update({ id, name, email, password, newPassword }) {
    const user = await knex('users').where('id', id).select('*').first();

    if (email != user.email) {
      const userExists = await knex('users')
        .where('email', email)
        .select('*')
        .first();

      if (userExists) {
        throw new Error('User already exists.');
      }
    }

    if (!(await bcrypt.compare(password, user.password))) {
      throw new Error('Password does not match.');
    }

    const password_hash = await bcrypt.hash(newPassword, 8);

    await knex('users').where({ id }).update({
      name,
      password: password_hash,
    });

    const userUpdated = await knex('users').where('id', id).first();

    const log = `Updated Profile User: id:${id} - name:${name}`;
    await CreateLogsService.create({
      id,
      action: 'Update/Profile',
      log,
    });

    const userSerialized = {
      ...userUpdated,
      message: `Password successfully updated!`,
    };

    return userSerialized;
  }
}

export default new UpdateUserService();
