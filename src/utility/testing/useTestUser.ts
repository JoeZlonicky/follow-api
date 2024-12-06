import type { Prisma, User } from '@prisma/client';
import { prisma } from '../../prisma/prisma';

const testUserData: Prisma.UserCreateInput[] = [
  {
    username: 'AliceA',
    displayName: 'Alice',
  },
  {
    username: 'BobB',
    displayName: 'Bob',
  },
  {
    username: 'Caitlin',
    displayName: 'CaitlinC',
  },
];

async function useTestUser(
  index: 0 | 1 | 2,
): Promise<[User, Prisma.UserCreateInput]> {
  const userData = testUserData[index]!;

  const user = await prisma.user.upsert({
    where: {
      username: userData.username,
    },
    update: {
      displayName: userData.displayName,
    },
    create: {
      username: userData.username,
      displayName: userData.displayName,
    },
  });

  return [user, userData];
}

export { useTestUser };
