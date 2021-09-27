import '@testing-library/jest-dom';

module.exports = {
  setupFilesAfterEnv: ['./jest.setup.js'],
  moduleDirectories: ['node_modules', 'src', '.'],
  testEnvironment: 'jsdom',
  roots: [
    '<rootDir>/src',
  ],
  moduleNameMapper: {
    'components/(.*)': '<rootDir>/src/components',
  },
};
