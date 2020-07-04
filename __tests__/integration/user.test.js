import request from 'supertest';
import bcrypt from 'bcryptjs';
import app from '../../src/app';

const connection = require('../../src/database/connection');

describe('User', () => {
  afterAll(async () => {
    await connection.destroy();
  });

  const name = 'Tiago';
  const email = 'tiago@gmail.com';
  const password = '12345678';

  it('should be able to register', async () => {
    const response = await request(app).post('/users').send({
      name,
      email,
      password,
    });

    expect(response.body).toEqual({
      message: `User:${name} successfully registered`,
    });
  });

  it('should be user valid with account', async () => {
    const user = await connection('users')
      .where('email', email)
      .select('*')
      .first();

    const userLogged = await bcrypt.compare(password, user.password);

    expect(userLogged).toBe(true);
  });

  it('should be user put wrong password', async () => {
    const response = await request(app).post('/sessions').send({
      name,
      email,
      password: '12',
    });

    expect(response.status).toBe(400);
  });

  it('should not user valid', async () => {
    const response = await request(app).post('/sessions').send({
      name: 'Tiago',
      email: 'teste.leal12@gmail.com',
      password: '12345678',
    });

    expect(response.status).toBe(400);
  });

  it('Should not able to register with duplicated email', async () => {
    await request(app).post('/users').send({
      name: 'Tiago',
      email: 'tiago@gmail.com',
      password: '12345678',
    });

    const response = await request(app).post('/users').send({
      name,
      email,
      password,
    });

    expect(response.status).toBe(400);
  });

  it('should not valid request user without email pasword', async () => {
    const response = await request(app)
      .post('/products')
      .set(
        'Authorization',
        `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjkxYTI2NDc0IiwiaWF0IjoxNTkzMjYwOTkzLCJleHAiOjE1OTM4NjU3OTN9.gga9Fq_M3l6GfWhcCkH77q22gwCSenxoRkB-OHSZOjw`
      )
      .send({
        name: 'tiago',
      });

    expect(response.body).toEqual({
      error: `Token invalid`,
    });
  });

  it('should not valid request user without token', async () => {
    const response = await request(app).post('/products').send({
      name: 'Arroz',
      description: 'Arroz tio João',
      category_id: 1,
      price: '12,50',
      stock: 5,
    });

    expect(response.status).toBe(401);
  });
});
