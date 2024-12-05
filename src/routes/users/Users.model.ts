import { prisma } from '../../prisma/prisma';

async function getAll() {
  const result = await prisma.user.findMany({
    include: {
      posts: true,
    },
  });
  return result;
}

async function getById(id: number) {
  const result = await prisma.user.findUnique({
    where: { id },
    include: {
      posts: true,
    },
  });

  return result;
}

export const UsersModel = { getAll, getById };
