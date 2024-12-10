import type { NextFunction, Request, Response } from 'express';
import expressAsyncHandler from 'express-async-handler';
import { sessionGeneration } from '../../middleware/sessionGeneration';
import { UsersModel } from './Users.model';

const getAll = expressAsyncHandler(async (_req: Request, res: Response) => {
  const result = await UsersModel.getAll();
  res.json(result);
});

const getById = expressAsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = parseInt(req.params.id!);
    const result = await UsersModel.getById(id);

    if (!result) {
      return next();
    }
    res.json(result);
  },
);

const create = [
  expressAsyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
      const { username, displayName } = req.body as {
        username: string;
        displayName: string;
      };

      req.user = await UsersModel.create(username, displayName);
      next();
    },
  ),
  sessionGeneration,
  (req: Request, res: Response) => {
    const user = req.user!;
    res.json({ id: user.id, displayName: user.displayName });
  },
];

export const UsersController = { getAll, getById, create };
