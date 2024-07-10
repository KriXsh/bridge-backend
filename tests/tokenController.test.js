const request = require('supertest');
const express = require('express');
const tokenRoutes = require('../routes/tokenRoutes');

const app = express();
app.use('/tokens', tokenRoutes);

describe('GET /tokens', () => {
  it('should fetch tokens', async () => {
    const res = await request(app).get('/tokens');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('data');
  });
});
