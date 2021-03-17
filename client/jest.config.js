module.exports = {
    "roots": [
        "<rootDir>/src/components"
    ],
    "transform": {
        "^.+\\.tsx?$": "ts-jest"
    },
    "testRegex": "(/__tests__/.*|(\\.|/)(test))\\.(tsx|js)?$",
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
    "testTimeout": 60000
};
