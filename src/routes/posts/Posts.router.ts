import { Router } from 'express';
import { PostsController } from './Posts.controller';

const PostsRouter = Router();

PostsRouter.get('/:id(\\d+)', PostsController.getById);

PostsRouter.get('/', PostsController.getAll);

export { PostsRouter };
