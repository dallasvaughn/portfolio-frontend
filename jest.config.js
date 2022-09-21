const esModules = [
  'unified',
  'remark',
  'bail',
  'is-plain-obj',
  'trough',
  'vfile',
  'unist-util-stringify-position',
  'mdast-util-from-markdown',
  'mdast-util-to-string',
  'micromark',
  'decode-named-character-reference',
  'mdast-util-to-markdown',
  'zwitch',
  'longest-streak',
  'unist-util-visit',
  'unist-util-is',
  'hast-util-to-html',
  'property-information',
  'html-void-elements',
  'hast-util-is-element',
  'hast-util-whitespace',
  'space-separated-tokens',
  'comma-separated-tokens',
  'stringify-entities',
  'character-entities-legacy',
  'character-entities-html4',
  'ccount',
  'hast-util-sanitize',
  'mdast-util-to-hast',
  'unist-builder',
  'unist-util-position',
  'unist-util-generated',
  'mdast-util-definitions',
  'trim-lines',
].join('|');

const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const customJestConfig = {
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.ts?$': 'ts-jest',
    '^.+\\.(js", jsx)$': 'babel-jest',
  },
};

const asyncConfig = createJestConfig(customJestConfig);

module.exports = async () => {
  const config = await asyncConfig();
  config.transformIgnorePatterns = [
    `/node_modules/(?!${esModules}).+\\.(js|jsx|mjs|cjs|ts|tsx)$`,
  ];
  return config;
};
