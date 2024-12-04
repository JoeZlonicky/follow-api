import { Router } from 'express';
import { IndexController } from './Index.controller';
import { UsersRouter } from './users/Users.router';

const IndexRouter = Router();

IndexRouter.use('/users', UsersRouter);

IndexRouter.get('/', IndexController.get);

export { IndexRouter };
