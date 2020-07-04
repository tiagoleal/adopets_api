import request from 'supertest';
import bcrypt from 'bcryptjs';
import app from '../../src/app';

const connection = require('../../src/database/connection');

describe('Product', () => {
  afterAll(async () => {
    await connection.destroy();
  });

  const Product = {
    name: 'Arroz',
    description: 'Arroz tio João',
    category_id: 1,
    price: '12,50',
    stock: 5,
  };

  it('should be not Auth to register product', async () => {
    const response = await request(app)
      .post('/products')
      .set(
        'Authorization',
        `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjkxYTI2NDc0IiwiaWF0IjoxNTkzMjYwOTkzLCJleHAiOjE1OTM4NjU3OTN9.gga9Fq_M3l6GfWhcCkH77q22gwCSenxoRkB-OHSZOjw`
      )
      .send({
        name: Product.name,
        description: Product.description,
        category_id: Product.category_id,
        price: Product.price,
        stock: Product.stock,
      });

    expect(response.status).toBe(401);
  });
});
