module.exports = {
  root: true,
  env: { browser: true, es2021: true, node: true },
  extends: [
    "airbnb",
    "airbnb/hooks",
    "airbnb-typescript",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    "ecmaFeatures": {
      "jsx": true,
      "modules": true
    },
    "ecmaVersion": "latest",
    "sourceType": "module",
    "project": "./tsconfig.json"
  },
  plugins: [
    "react", "react-hooks", "@typescript-eslint", "prettier"
  ],
  rules: {
    "quotes": ["error", "double"],
    "object-curly-spacing": ["error", "always"],
    "semi": ["error", "always"],
    "no-nested-ternary": "off",
    "no-param-reassign": ["error", { "props": false }],
    "react/jsx-props-no-spreading": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
    "@typescript-eslint/consistent-type-imports": [
      "error",
      {
        "prefer": "type-imports"
      }
    ],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "no-use-before-define": "off",
    "react/prop-types": "off",
    "react/require-default-props": "off",
    "react/no-unknown-property": [
      "error",
      {
        "ignore": ["css"]
      }
    ],
    "react/react-in-jsx-scope": "off",
    "import/prefer-default-export": "off",
    "react/function-component-definition": [
      "error",
      {
        "namedComponents": "arrow-function",
        "unnamedComponents": "arrow-function"
      }
    ],
    "react/jsx-filename-extension": [
      "error",
      {
        "extensions": [".jsx", ".tsx"]
      }
    ],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
    ],
    "import/order": [
      "error",
      {
        "groups": ["builtin", "external", "parent", "sibling", "index", "object", "type"],
        "pathGroups": [
          {
            "pattern": "{react,react-dom/**,react-router,react-router-dom,react-redux}",
            "group": "builtin",
            "position": "before"
          },
          {
            "pattern": "@redux/**",
            "group": "parent",
            "position": "before"
          },
          {
            "pattern": "@mui/**",
            "group": "parent",
            "position": "before"
          },
          {
            "pattern": "@Components/**",
            "group": "parent",
            "position": "before"
          },
          {
            "pattern": "@Layout/**",
            "group": "parent",
            "position": "before"
          },
          {
            "pattern": "@Pages/**",
            "group": "parent",
            "position": "before"
          },
          {
            "pattern": "@Views/**",
            "group": "parent",
            "position": "before"
          },
          {
            "pattern": "@api/**",
            "group": "parent",
            "position": "before"
          },
          {
            "pattern": "@Hooks/**",
            "group": "parent",
            "position": "before"
          },
          {
            "pattern": "@services/**",
            "group": "parent",
            "position": "before"
          },
          {
            "pattern": "@slices/**",
            "group": "parent",
            "position": "before"
          },
          {
            "pattern": "@utils/**",
            "group": "parent",
            "position": "before"
          },
          {
            "pattern": "@constants/**",
            "group": "parent",
            "position": "before"
          },
          {
            "pattern": "@data/**",
            "group": "parent",
            "position": "before"
          },
          {
            "pattern": "@shared/**",
            "group": "parent",
            "position": "before"
          },
          {
            "pattern": "@config",
            "group": "parent",
            "position": "before"
          },
          {
            "pattern": "@theme/**",
            "group": "parent",
            "position": "before"
          }
        ],
        "pathGroupsExcludedImportTypes": ["builtin"],
        "alphabetize": {
          "order": "asc"
        },
        "newlines-between": "always"
      }
    ]
  },
  settings: {
    "import/extensions": [".js", ".jsx", ".ts", ".tsx"],
    "import/resolver": {
      "typescript": {
        "directory": "./tsconfig.json"
      },
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  }
}
