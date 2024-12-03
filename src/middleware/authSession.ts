import { RedisStore } from 'connect-redis';
import session from 'express-session';
import { createClient } from 'redis';

function redisStore() {
  const redisClient = createClient({
    url: process.env.REDIS_URI,
  });

  redisClient.connect().catch(console.error);

  return new RedisStore({
    client: redisClient,
    prefix: process.env.REDIS_PREFIX
      ? `${process.env.REDIS_PREFIX}:`
      : undefined,
  });
}

function authSession() {
  let store: RedisStore | undefined = undefined;

  // Use in-memory store when testing
  if (process.env.NODE_ENV !== 'test') {
    store = redisStore();
  }

  return session({
    store,
    resave: false,
    saveUninitialized: false,
    secret: process.env.AUTH_SECRET,
    cookie: {
      maxAge: /* 30 days = */ 30 * 24 * 60 * 60 * 1000,
      httpOnly: true,
      sameSite: 'strict',
    },
  });
}

export { authSession };
