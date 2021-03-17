module.exports = {
    "preset": "jest-puppeteer",
    "testMatch": [
        "**/src/end-to-end/*.spec.js"
    ],
    "roots": [
        "<rootDir>/src/end-to-end"
    ],
    "globalSetup": './global-setup.js',
    "globalTeardown": './global-teardown.js',
    "testEnvironment": './custom_environment.js',
};
