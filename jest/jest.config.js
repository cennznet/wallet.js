const config = require('@plugnet/dev/config/jest');

module.exports = Object.assign({}, config, {
    rootDir: process.cwd(),
    testMatch: ['/**/?(*.)+(spec|e2e).[jt]s?(x)'],
    testEnvironment: 'node',
    collectCoverageFrom: [
        'packages/wallet/src/**/*.[jt]s?(x)',
        '!**/node_modules/**'
    ],
    coverageReporters: ['json', 'html'],
    coverageThreshold: {
        global: {
            branches: 60,
            functions: 80,
            lines: 80,
            statements: -10,
        },
    },
    testEnvironment: './jest/env.js',
    moduleNameMapper: {
        '@cennznet/wallet(.*)$': '<rootDir>/packages/wallet/src/$1'
    },
    modulePathIgnorePatterns: [
        '<rootDir>/packages/wallet/build',
    ],
    setupFilesAfterEnv: ['./jest/jest.setup.js']
});


