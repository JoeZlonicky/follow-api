import type { NextFunction, Request, Response } from 'express';
import expressAsyncHandler from 'express-async-handler';
import { protectedRoute } from '../../middleware/protectedRoute';
import { sessionGeneration } from '../../middleware/sessionGeneration';
import { prisma } from '../../prisma/prisma';

const get = [
  protectedRoute,
  expressAsyncHandler((req: Request, res: Response) => {
    res.json({ id: req.user!.id, displayName: req.user!.displayName });
  }),
];

const create = [
  expressAsyncHandler(async (req: Request, res: Response) => {
    const { username } = req.body as { username: string };
    if (!username) {
      res.status(400).send();
      return;
    }
    const user = await prisma.user.findUnique({ where: { username } });
    if (!user) {
      res.status(400).send();
      return;
    }
    req.user = user;
  }),
  sessionGeneration,
  expressAsyncHandler((req: Request, res: Response) => {
    const user = req.user!;
    res.json({ id: user.id, displayName: user.displayName });
  }),
];

const remove = [
  protectedRoute,
  expressAsyncHandler((req: Request, res: Response, next: NextFunction) => {
    req.session.userId = undefined;
    req.session.save((err) => {
      if (err) {
        return next(err);
      }

      req.session.regenerate((err) => {
        if (err) {
          return next(err);
        }
        res.send('200');
      });
    });
  }),
];

export const SessionsController = { get, create, remove };
