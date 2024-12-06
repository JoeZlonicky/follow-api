import { prisma } from '../../prisma/prisma';

// Used by jest.config.ms
// Requires a default export
async function testTeardown() {
  await prisma.user.deleteMany();
  await prisma.post.deleteMany();
}

export default testTeardown;
