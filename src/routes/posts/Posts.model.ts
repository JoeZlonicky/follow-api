import { prisma } from '../../prisma/prisma';

async function getAll() {
  const result = await prisma.post.findMany();
  return result;
}

async function getById(id: number) {
  const result = await prisma.post.findUnique({
    where: { id },
  });

  return result;
}

export const PostsModel = { getAll, getById };
