const request = require('supertest');
const app = require('../app');

describe('POST /params', () => {
  it('should fetch transaction parameters', async () => {
    const res = await request(app)
      .post('/params')
      .send({ token: 'TOKEN', chain: 'CHAIN' });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('params');
  });
});
