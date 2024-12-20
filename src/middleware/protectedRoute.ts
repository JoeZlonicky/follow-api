import type { NextFunction, Request, Response } from 'express';
import expressAsyncHandler from 'express-async-handler';
import { prisma } from '../prisma/prisma';

const protectedRoute = expressAsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    if (!req.session.userId) {
      res.type('text').status(401).send('401 Requires Authentication');
      return;
    }

    const user = await prisma.user.findUnique({
      where: { id: req.session.userId },
    });

    if (!user) {
      res.type('text').status(401).send('401 Authentication Failed');
      return;
    }

    req.user = user;
    next();
  },
);

export { protectedRoute };
