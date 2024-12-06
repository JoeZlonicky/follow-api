import { beforeAll, describe, expect, test } from '@jest/globals';
import { User } from '@prisma/client';
import request from 'supertest';
import { app } from '../../app';
import { useTestUser } from '../../utility/testing/useTestUser';

describe('get requests', () => {
  let alice: User;
  let bob: User;

  beforeAll(async () => {
    [alice] = await useTestUser(0);
    [bob] = await useTestUser(1);
  });

  test('get users', (done) => {
    request(app)
      .get('/users')
      .expect((res) => {
        expect(res.body).toHaveLength([alice, bob].length);
      })
      .expect(200, done);
  });

  test('get user by id', (done) => {
    request(app).get(`/users/${alice.id}`).expect(200, done);
  });
});
