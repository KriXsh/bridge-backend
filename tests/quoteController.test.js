const request = require('supertest');
const app = require('../app');

describe('POST /quotes', () => {
  it('should fetch a quote', async () => {
    const res = await request(app)
      .post('/quotes')
      .send({ token: 'TOKEN', chain: 'CHAIN' });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('quote');
  });
});
