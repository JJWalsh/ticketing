import request from 'supertest';
import { app } from '../../app';

const createTicket = () => {
  const title = 'The Blah';
  const price = 1.25;

  return request(app).post('/api/tickets').set('Cookie', global.signin()).send({
    title,
    price
  });
};

it('can fetch a list of tickets', async () => {
  await createTicket();
  await createTicket();
  await createTicket();

  const response = await request(app).get('/api/tickets').send().expect(200);

  expect(response.body.length).toEqual(3);
});
