module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleNameMapper: {
    "@/(.*)$": "<rootDir>/src/$1"
  },
  testMatch: ["<rootDir>/src/__tests__/**/*.test.(ts|tsx)"]
};
