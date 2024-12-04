import { prisma } from '../../prisma/prisma';

async function getAll() {
  const result = await prisma.user.findMany();
  return result;
}

async function getById(id: number) {
  const result = await prisma.user.findUnique({
    where: { id },
  });

  return result;
}

export const UsersModel = { getAll, getById };
