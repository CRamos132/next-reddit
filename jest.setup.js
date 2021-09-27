import '@testing-library/jest-dom/extend-expect';

module.exports = {
  setupFilesAfterEnv: ['./jest.setup.js'],
  moduleDirectories: ['node_modules', 'src', '.'],
  testEnvironment: 'jsdom',
};
