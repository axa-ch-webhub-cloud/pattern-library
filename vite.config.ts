import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['**/unit.test.{js,jsx}'],
  },
});
