# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json", "./tsconfig.app.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

npm run test fileName(for run specific file)
describe.only to run specific testCase from group
describe.skip to skip specific testCase from group
we can also make nested describe
fireEvent for onChange
if we create a folder with **test** name then we don't need to write name like "button.test.tsx"
before(before test case running) and after(after test case ran) hooks
beforeAll and beforeEach same for after
snapshot testing before going for PROD (basically we run through the root od the app to match with existing snapshot)
we have to do snapshot shot testing when it's ready to deploy on PROD
press u to update existing snapshot
we don't need to write test case for all of the code
must things to test below:-
Testing component
UI elements
function
API Testing
Event testing
props & state
UI condition

Avoid testing for below things
External UI library
no need to test default function of JS

code coverage must be 80%
RTL Query
find ui element
find element with id,name,type,testid
find single element
getBy
queryBy
find Multiple elements
getAllBy
queryAllBy
we can also use for loop in tsx file
DEBUG_PRINT_LIMIT = 10000 npm test
Testing playground extension
MSW for mockup the api testing suggested from react testing
