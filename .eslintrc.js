module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  ignorePatterns: ["node_modules/"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "airbnb-base",
    "prettier",
    "plugin:prettier/recommended"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: "module"
  },
  plugins: ["react", "@typescript-eslint", "prettier"],
  settings: {
    "import/resolver": {
      typescript: "./tsconfig.json",
      node: {
        paths: ["src"],
        extensions: [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  },
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto"
      }
    ],
    "no-use-before-define": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never"
      }
    ],
    "import/prefer-default-export": "off"
  }
};
