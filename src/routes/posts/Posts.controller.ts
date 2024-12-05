import type { NextFunction, Request, Response } from 'express';
import expressAsyncHandler from 'express-async-handler';
import { PostsModel } from './Posts.model';

const getAll = expressAsyncHandler(async (_req: Request, res: Response) => {
  const result = await PostsModel.getAll();
  res.json(result);
});

const getById = expressAsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = parseInt(req.params.id!);
    const result = await PostsModel.getById(id);

    if (!result) {
      return next();
    }
    res.json(result);
  },
);

export const PostsController = { getAll, getById };
