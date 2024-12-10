import { Router } from 'express';
import { SessionsController } from './Sessions.controller';

const SessionsRouter = Router();

SessionsRouter.get('/', SessionsController.get);
SessionsRouter.post('/', SessionsController.create);
SessionsRouter.delete('/', SessionsController.remove);

export { SessionsRouter };
