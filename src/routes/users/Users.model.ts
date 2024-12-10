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

async function create(username: string, displayName: string) {
  const result = await prisma.user.create({
    data: {
      username,
      displayName,
    },
  });

  return result;
}

export const UsersModel = { getAll, getById, create };
