export default {
  extensionsToTreatAsEsm: ['.jsx'],
  moduleFileExtensions: ['js', 'json', 'jsx', 'mjs'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  testMatch: ['<rootDir>/src/**/*.test.{js,jsx}'],
  transform: {
    '^.+\\.(js|jsx|mjs)$': 'babel-jest',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/', 'build', 'dist/'],
  verbose: true,
};
