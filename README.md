# Follow API

A REST API for a messaging application. Built using TypeScript, Express, and Prisma. Uses Socket.IO for real-time message updates, Redis for session storage, and Jest w/ SuperTest for testing.

## Requirements

1. pnpm or another Node.js package manager.
2. Postgres database.
3. Redis database.

## Running

1. Install packages with `pnpm install`
2. Create a `.env.local` file that follows `.env.example`.
3. Set up database with `pnpm run migrate-db`.
4. Run with `pnpm run start` or `pnpm run dev`.

## Testing

1. Install packages with `pnpm install`
2. Create a `.env.test` file that follows `.env.example`.
3. Set up database with `pnpm run test:migrate-db`.
4. Run with `pnpm run test`.
