import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

const eslintConfig = [
    ...compat.config({
        extends: ['next/core-web-vitals', 'prettier'],
    }),
    {
        rules: {
            "prettier/prettier": [
                "error",
                {
                    "bracketSpacing": true,
                    "tabWidth": 2,
                    "printWidth": 80,
                    "useTabs": false,
                    "trailingComma": "es5",
                    "endOfLine": "auto",
                    "semi": true
                }
            ],
            "no-unused-vars": [
                "error",
                { 
                  "vars": "all", 
                  "varsIgnorePattern": "^_*$",
                  "argsIgnorePattern": "^_*$",
                  "destructuredArrayIgnorePattern": "^_*$"
                }
            ],
            "eqeqeq": [
                "error",
                "always"
            ],
        }
    }
];

export default eslintConfig;
