import { Router } from 'express';
import { UsersController } from './Users.controller';

const UsersRouter = Router();

UsersRouter.get('/:id(\\d+)', UsersController.getById);

UsersRouter.get('/', UsersController.getAll);

export { UsersRouter };
