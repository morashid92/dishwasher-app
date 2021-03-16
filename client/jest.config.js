module.exports = {
    "preset": "jest-puppeteer",
    "roots": [
        "<rootDir>/src"
    ],
    "transform": {
        "^.+\\.tsx?$": "ts-jest"
    },
    "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.(tsx|js)?$",
    "moduleFileExtensions": [
        "ts",
        "tsx",
        "js",
        "jsx",
        "json",
        "node"
    ],
    "snapshotSerializers": ["enzyme-to-json/serializer"],
    "setupFilesAfterEnv": ["<rootDir>/setupTests.tsx"],
    "moduleNameMapper":{
        "\\.(css|less|scss|sass)$": "identity-obj-proxy"
    },
    "testEnvironment": './custom_environment.js',
    "testTimeout": 60000,
    "globalSetup": './global-setup.js',
    "globalTeardown": './global-teardown.js'
};
