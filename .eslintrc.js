const { rules } = require("eslint-plugin-react-native");

module.exports = {
  parser: "babel-eslint",
  plugins: ["react", "react-native"],
  rules: {
    ...rules,
    "react-native/no-inline-styles": 0,
    "no-unused-vars": "warn",
    "import/no-unresolved": "off",
  },
  env: {
    "react-native/react-native": true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-native/all",
  ],
};
