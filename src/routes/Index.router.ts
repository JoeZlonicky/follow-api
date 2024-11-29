import { Router } from 'express';
import { IndexController } from './Index.controller';

const IndexRouter = Router();

IndexRouter.get('/', IndexController.get);

export { IndexRouter };
