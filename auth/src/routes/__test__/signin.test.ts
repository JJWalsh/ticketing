import request from 'supertest';
import { app } from '../../app';

it('returns a 400 with a non-existent email', async () => {
  return request(app)
    .post('/api/users/signin')
    .send({
      email: 'test@test.com',
      password: 'foobar'
    })
    .expect(400);
});

it('return a 400 when incorrect password supplied', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',
      password: 'foobar'
    })
    .expect(201);

  await request(app)
    .post('/api/users/signin')
    .send({
      email: 'test@test.com',
      password: 'wrong'
    })
    .expect(400);
});

it('responds with cookie with valid credentials', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',
      password: 'foobar'
    })
    .expect(201);

  const response = await request(app)
    .post('/api/users/signin')
    .send({
      email: 'test@test.com',
      password: 'foobar'
    })
    .expect(200);
  expect(response.get('Set-Cookie')).toBeDefined();
});
