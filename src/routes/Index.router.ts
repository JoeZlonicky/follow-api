import { Router } from 'express';
import { IndexController } from './Index.controller';
import { PostsRouter } from './posts/Posts.router';
import { UsersRouter } from './users/Users.router';

const IndexRouter = Router();

IndexRouter.use('/users', UsersRouter);
IndexRouter.use('/posts', PostsRouter);

IndexRouter.get('/', IndexController.get);

export { IndexRouter };
