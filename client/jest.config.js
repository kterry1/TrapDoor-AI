module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.css$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: ['./src/test/setup.ts'],
  transform: {
    '^.+\\.(j|t)sx?$': 'vite-plugin-testing-library',
  },
};
