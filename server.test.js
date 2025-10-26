const request = require('supertest');
const app = require('./server');

describe('Express App', () => {
  test('GET / should return CI/CD pipeline message', async () => {
    const response = await request(app)
      .get('/')
      .expect(200);
    
    expect(response.body).toEqual({ message: "CI/CD pipeline is working 🚀" });
  });

  test('GET /health should return healthy status', async () => {
    const response = await request(app)
      .get('/health')
      .expect(200);
    
    expect(response.body).toHaveProperty('status', 'healthy');
    expect(response.body).toHaveProperty('timestamp');
  });

  test('GET /nonexistent should return 404', async () => {
    await request(app)
      .get('/nonexistent')
      .expect(404);
  });
});
