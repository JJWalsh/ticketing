import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';
import { currentUser, errorHandler, NotFoundError } from '@jjwtickets/common';

import { indexOrderRouter } from './routes/index';
import { showOrderRouter } from './routes/show';
import { deleteOrderRouter } from './routes/delete';
import { newOrderRouter } from './routes/new';

const app = express();
app.set('trust proxy', true);
app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: false
  })
);
app.use(currentUser);

app.use(indexOrderRouter);
app.use(showOrderRouter);
app.use(deleteOrderRouter);
app.use(newOrderRouter);

app.all('*', async () => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
