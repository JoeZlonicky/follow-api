//@ts-check
import { createDefaultEsmPreset } from 'ts-jest';

const defaultEsmPreset = createDefaultEsmPreset();

/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  ...defaultEsmPreset,
  globalTeardown: './src/utility/testing/globalTeardown.ts',
  transform: {
    '^.+\\.ts$': [
      'ts-jest',
      {
        isolatedModules: true,
      },
    ],
  },
};
