import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Add Prettier plugin and config
  {
    plugins: ["prettier"],
    rules: {
      "prettier/prettier": "error", // Show Prettier issues as ESLint errors
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
    // Add Prettier config to disable conflicting rules
    prettierConfig,
]);

export default eslintConfig;
