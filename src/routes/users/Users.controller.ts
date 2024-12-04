import type { NextFunction, Request, Response } from 'express';
import expressAsyncHandler from 'express-async-handler';
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

export const UsersController = { getAll, getById };
