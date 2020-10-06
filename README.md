# react-tododo

Learn [TDD](https://wikipedia.org/wiki/Test-driven_development) in [React](https://reactjs.org) with a todo list

---

<!-- markdown-toc start - Don't edit this section. Run M-x markdown-toc-refresh-toc -->

**Table of Contents**

- [react-tododo](#react-tododo)
  - [Demo](#demo)
  - [Setup](#setup)
    - [Install](#install)
  - [Usage](#usage)
    - [Serve](#serve)
    - [Test](#test)
    - [Build](#build)
  - [Lessons](#lessons)
    - [1. Project management](#1-project-management)
      - [1.1. Milestones](#11-milestones)
      - [1.2. Project boards](#12-project-boards)
      - [1.3. Issues](#13-issues)
      - [1.4. Labels](#14-labels)
      - [1.5. Pull requests](#15-pull-requests)
    - [2. Repository settings](#2-repository-settings)
      - [2.1. Automatically delete head branches](#21-automatically-delete-head-branches)
      - [2.2. Disable force pushing](#22-disable-force-pushing)
      - [2.3. Require status checks to pass before merging](#23-require-status-checks-to-pass-before-merging)
      - [2.4. Receive notifications on push events](#24-receive-notifications-on-push-events)
    - [3. System dependencies](#3-system-dependencies)
      - [3.1. Version control](#31-version-control)
      - [3.2. Version manager](#32-version-manager)
      - [3.3. Package manager](#33-package-manager)
      - [3.4. Text editor](#34-text-editor)
    - [4. Project dependencies](#4-project-dependencies)
      - [4.1. Boilerplate](#41-boilerplate)
      - [4.2. Linter](#42-linter)
        - [4.2.1. Import Sorter](#421-import-sorter)
      - [4.3. Code Formatter](#43-code-formatter)
        - [4.3.1. Autoformatter](#431-autoformatter)
    - [5. Test suite](#5-test-suite)
      - [5.1. End-to-End testing](#51-end-to-end-testing)
      - [5.2. Unit testing](#52-unit-testing)
      - [5.3. Integration testing](#53-integration-testing)
      - [5.4. Code coverage](#54-code-coverage)
    - [6. Automation](#6-automation)
      - [6.1. CI / CD](#61-ci--cd)
  - [References](#references)
  - [License](#license)

<!-- markdown-toc end -->

---

## Demo

See <https://ejelome-react-tododo.netlify.app>.

---

## Setup

### Install

```shell
$ npm [install|isntall|add|i]
```

---

## Usage

### Serve

```shell
$ npm start
```

### Test

```shell
$ npm [test|tst|t]
```

### Build

```shell
$ npm run build
```

---

## Lessons

### 1. Project management

> _Project management helps achieve goals within given constraints._

#### 1.1. Milestones

> _[Milestones](https://docs.github.com/en/github/managing-your-work-on-github/tracking-the-progress-of-your-work-with-milestones) help track progress of work._

- 1.1.1. Go to [`github.com/<username>/<repo>/milestones`](https://github.com/<username>/<repo>/milestones)
- 1.1.2. Click `New milestone` ([`github.com/<username>/<repo>/milestones/new`](https://github.com/<username>/<repo>/milestones/new))
- 1.1.3. Set fields, e.g.:

  - `Title` as `v0.1.0`
  - `Due date (optional)` as `09/27/2020`
  - `Description` as `Initial release.`

- 1.1.4. Click `Create milestone`

#### 1.2. Project boards

> _[Project boards](https://docs.github.com/en/github/managing-your-work-on-github/about-project-boards) help organize and prioritize work._

- 1.2.1. Go to [`github.com/<username>/<repo>/projects`](https://github.com/<username>/<repo>/projects)
- 1.2.2. Click `Create a project` ([`github.com/<username>/<repo>/projects/new`](https://github.com/<username>/<repo>/projects/new))
- 1.2.3. Set fields, e.g.:

  - `Project board name` as `Project setup`
  - `Description` as `Setup the project and processes.`
  - `Project template` as `Automated kanban`

- 1.2.4. Click `Create project`

> **NOTE:** <br />
> Set `Templates` as `Automated kanban with reviews` if working with other developers.

#### 1.3. Issues

> _[Issues](https://docs.github.com/en/github/managing-your-work-on-github/about-issues) help manage tasks or bug reports._

- 1.3.1. [`github.com/<username>/<repo>/issues`](https://github.com/<username>/<repo>/issues)
- 1.3.2. Click `New issue` [`github.com/<username>/<repo>/issues/new`](https://github.com/<username>/<repo>/issues/new)
- 1.3.3. Set fields, e.g.:

  - `Title` as `add-changelog`
  - `Write` as `Add`CHANGELOG.md``
  - `Assignees` as `assign yourself`
  - `Labels` as `documentation`
  - `Projects` as `Project setup`
  - `Milestone` as `v0.1.0`

- 1.3.4. Click `Submit new issue`

#### 1.4. Labels

> _[Labels](https://docs.github.com/en/github/managing-your-work-on-github/about-labels) help categorize issues and pull requests._

- 1.4.1. Go to [`github.com/<username>/<repo>/issues/<n>`](https://github.com/<username>/<repo>/issues/<n>)
- 1.4.2. Set `Labels` as e.g. `documentation`

#### 1.5. Pull requests

> _[Pull requests](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests) help discuss and review work with others._

- 1.5.1. Create a remote branch (e.g. a feature branch):

  ```shell
  $ \
  git pull -r origin master        # sync latest changes from source branch
  git checkout -b add-changelog    # create and switch to a feature branch
  touch CHANGELOG.md               # create a file
  git add CHANGELOG.md             # stage the file
  git commit -m 'Add CHANGELOG.md' # record changes
  git push -u origin add-changelog # send changes to remote repo
  ```

- 1.5.2. Go to `add-changelog` remote branch ([`github.com/<username>/<repo>/compare/<branch>`](https://github.com/<username>/<repo>/compare/<branch>))
- 1.5.3. Click `Create pull request`
- 1.5.4. Set fields, e.g.:

  - `Title` as `add-changelog`
  - `Write` as `Close #add-changelog` (then select `#<n> add-changelog`)
  - `Assignees` as `assign yourself`
  - `Labels` as `documentation`
  - `Projects` as `Project setup`
  - `Milestone` as `v0.1.0`

- 1.5.5. Click `Create pull request`
- 1.5.6. If `All checks have passed`, click `Merge pull request`
- 1.5.7. Click `Confirm merge` (leave the `Merge pull request` as is)

> **NOTE:** <br />
> You can [link an issue](https://docs.github.com/en/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue) manually or [write keywords](https://docs.github.com/en/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword) in description.

### 2. Repository settings

> _Settings to improve project repo's security and monitoring._

#### 2.1. Automatically delete head branches

> _Delete remote branch after merged pull request._

- 2.1.1. Go to [`github.com/<username>/<repo>/settings`](https://github.com/<username>/<repo>/settings)
- 2.1.2. Under `Merge button` ([`#merge-button-settings`](https://github.com/<username>/<repo>/settings#merge-button-settings)), tick `Automatically delete head branches`

#### 2.2. Disable force pushing

> _Prevent force pushing commits on protected branch._

- 2.2.1. Go to [`github.com/<username>/<repo>/settings/branches`](https://github.com/<username>/<repo>/settings/branches)
- 2.2.2. Click `Add rule` ([`github.com/<username>/<repo>/settings/branch_protection_rules/new`](https://github.com/<username>/<repo>/settings/branch_protection_rules/new))
- 2.2.3. Set fields, e.g.:

  - `Branch name pattern` as `master`

- 2.2.4. Click `Create`

> **WARNING:** <br />
> Normal commits can still be pushed directly to protected branch.

#### 2.3. Require status checks to pass before merging

> _Prevent normal commits to be pushed directly to protected branch._

- 2.3.1. Go to [`github.com/<username>/<repo>/settings/branch_protection_rules/<n>`](https://github.com/<username>/<repo>/settings/branch_protection_rules/<n>)
- 2.3.2. Set fields, e.g.:

  Under `Protect matching branches`, tick:

  - `Require status checks to pass before merging`
  - `Require branches to be up to date before merging` (automatically ticked)
  - `Include administrators`

- 2.3.3. Click `Save changes`

#### 2.4. Receive notifications on push events

> _Receive notifications on email when push events are triggered._

- 2.4.1. Go to [`github.com/<username>/<repo>/settings`](https://github.com/<username>/<repo>/settings)
- 2.4.2. On left navigation, click `Notification` ([`github.com/<username>/<repo>/settings/notifications`](https://github.com/<username>/<repo>/settings/notifications))
- 2.4.3. Set fields, e.g.:

  - `Address *` as `username@company.tld`

- 2.4.4. Click `Setup notifications`

### 3. System dependencies

> _Software packages to create and maintain the project._

#### 3.1. Version control

> _Use [Git](https://git-scm.com)&mdash;a free and open source (distributed) version control system._

_See [Install Git](https://github.com/git-guides/install-git) to install._

#### 3.2. Version manager

> _Use [nvm](https://github.com/nvm-sh/nvm)&mdash;a version manager for [Node.js](https://nodejs.org)._

_See [Installing and Updating](https://github.com/nvm-sh/nvm#installing-and-updating) to install with [install script](https://github.com/nvm-sh/nvm/blob/v0.35.3/install.sh)._

#### 3.3. Package manager

> _Use [npm/cli](https://github.com/npm/cli)&mdash;a package manager for [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)._

_See [Usage](https://github.com/nvm-sh/nvm#usage) to install via `nvm`._

#### 3.4. Text editor

> _Use **\*any\*** YOU find best (e.g. [Emacs](https://www.gnu.org/software/emacs), [Vim](https://www.vim.org) or both&mdash;[Spacemacs](https://www.spacemacs.org))._

### 4. Project dependencies

> _[npm](https://npmjs.com) packages to develop the project._

#### 4.1. Boilerplate

> _Use [create-react-app](https://github.com/facebook/create-react-app)&mdash;an integrated toolchain without build configuration._

- 4.1.1. Generate project:

  ```shell
  $ npx create-react-app <project-directory>
  ```

> **NOTES:**
>
> - [npx](https://github.com/npm/npx) command executes package locally or from [npm](https://npmjs.com) registry
> - CRA includes four [react-scripts](https://npmjs.com/package/react-scripts) (`start|build|test|eject`)

#### 4.2. Linter

> _Use [ESLint](https://eslint.org)&mdash;a static code analyzer to find and fix problems in JavaScript code._

- 4.2.1. Run:

  ```shell
  $ ./node_modules/.bin/eslint [--fix] <glob>
  ```

> **NOTES:**
>
> - `--fix` modifies the files matched from `<glob>` pattern
> - Without `--fix` only lints the files matched from `<glob>` pattern
> - ESLint is shipped with CRA and parses with [babel-eslint](https://github.com/babel/babel-eslint)

##### 4.2.1. Import Sorter

> _Use [eslint-plugin-simple-import-sort](https://github.com/lydell/eslint-plugin-simple-import-sort)&mdash;an autofixable import sorter for `eslint --fix`._

- 4.2.1.1. Install:

  ```shell
  $ npm i -D eslint-plugin-simple-import-sort
  ```

- 4.2.1.2. Script (rc):

  `.eslintrc`:

  ```json
  {
    "parser": "babel-eslint",
    "plugins": ["simple-import-sort"],
    "rules": {
      "import/order": "off",
      "sort-imports": "off",
      "simple-import-sort/sort": "error"
    }
  }
  ```

- 4.2.1.3. Install and/or run:

  ```shell
  $ ./node_modules/.bin/eslint --fix <glob>
  ```

#### 4.3. Code Formatter

> _Use [Prettier](https://prettier.io)&mdash;a source code formatter with an opinionated but consistent code conventions._

- 4.3.1. Install:

  ```shell
  $ npm i -D prettier
  ```

- 4.3.2. Run:

  ```shell
  $ ./node_modules/.bin/prettier -[w|c] <glob>
  ```

> **NOTES:**
>
> - `-w` (or `--write`) modifies the files matched from `<glob>` pattern
> - `-c` (or `--check`) checks if the files matched from `<glob>` pattern are formatted

##### 4.3.1. Autoformatter

> _Use [husky](https://github.com/typicode/husky) with [lint-staged](https://github.com/okonet/lint-staged)&mdash;to execute [npm-run-script](https://docs.npmjs.com/cli-commands/run-script.html)s from [githooks](https://git-scm.com/docs/githooks)_.

- 4.3.1.1. Install:

  ```shell
  $ npm i -D eslint-config-prettier \
             husky                  \
             lint-staged
  ```

- 4.3.1.2: Script (rc):

  `.eslintrc`:

  ```json
  {
    "…"
    "extends": ["prettier"]
  }
  ```

- 4.3.1.3. Script:

  `package.json`:

  ```json
  {
    "…"
    "husky": {
      "hooks": {
        "pre-commit": "lint-staged"
      }
    },
    "lint-staged": {
      "src/**/*.js": [
        "./node_modules/.bin/eslint --fix"
      ],
      "src/**/*.{md,css,js,json}": [
        "./node_modules/.bin/prettier -w"
      ]
    }
  }
  ```

> **NOTES:**
>
> - `lint-staged` runs `eslint` and `prettier` on `"src/"` files on a `pre-commit` event
> - [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) turns off all conflicting ESLint rules with Prettier
> - `prettier` must be put last on `extends` to override other configs
> - `eslint` should run _before_ `prettier` and not _after_

### 5. Test suite

> _Test suite helps validate specific behaviors of the application through tests._

#### 5.1. End-to-End testing

> _Use [Cypress](https://cypress.io)&mdash;an End-to-End testing framework._

- 5.1.1. Install:

  ```shell
  $ npm i -D cypress
  ```

- 5.1.2. Remove example files:

  ```shell
  $ rm -rf cypress/integration/examples/
  ```

- 5.1.3. Specify `baseUrl`:

  `cypress.json`:

  ```json
  {
    "baseUrl": "http://localhost:3000"
  }
  ```

- 5.1.4. Create a failing [smoke test](<https://wikipedia.org/wiki/Smoke_testing_(software)>) file:

  `cypress/integration/sample_spec.js`:

  ```javascript
  describe("Smoke test", () => {
    it("renders learn react link", () => {
      expect(true).to.equal(false);
    });
  });
  ```

- 5.1.5. Click `sample_spec.js` from test runner's browser:

  _This test should **fail**._

- 5.1.6. Pass the failing test:

  `cypress/integration/sample_spec.js`:

  ```javascript
  describe("Smoke test", () => {
    it("renders learn react link", () => {
      cy
        // Arrange (required setup)
        // or Given (initial state):
        .visit("/")

        // Act (actual behavior)
        // or When (action taken):
        .get("a")

        // Assert (expected behavior)
        // or Then (desired outcome):
        .contains("Learn React");
    });
  });
  ```

- 5.1.7. The test runner automatically re-runs the test:

  _This test should now **pass**._

- 5.1.8. Refactor the passing test:

  `cypress/integration/sample_spec.js`:

  ```javascript
  describe("Smoke test", () => {
    it("renders learn react link", () => {
      cy.visit("/").get("a").contains("learn react", { matchCase: false });
    });
  });
  ```

- 5.1.9. The test runner automatically re-runs the test:

  _This improved test should still **pass**, but now ignoring case sensitivity._

> **NOTES:**
>
> - End-to-End (E2E) testing tests the flow of the application from users' point of view
> - Unlike unit testing, it verifies application's behaviors and not implementation details
> - Unlike integration testing, it verifies the behavior as a whole and not only parts of it
> - Cypress requires that the app is also running to run its tests against
> - `cypress open` opens Cypress' test runner and the open default browser
> - `baseUrl` is a [global option](https://docs.cypress.io/guides/references/configuration.html#Global) to prefix URL when using [cy.visit()](https://docs.cypress.io/api/commands/visit.html) or [cy.request()](https://docs.cypress.io/api/commands/request.html)
> - `describe()` and `it()` are [Mocha](https://mochajs.org)'s [BDD](https://mochajs.org/#bdd) interface functions
> - `expect()` or `should()` are [Chai](https://www.chaijs.com)'s' [BDD](https://www.chaijs.com/api/bdd) style functions
> - [cy.visit()](https://docs.cypress.io/api/commands/visit.html), [cy.get()](https://docs.cypress.io/api/commands/get.html) and [cy.contains()](https://docs.cypress.io/api/commands/contains.html) have [default assertions](https://docs.cypress.io/guides/core-concepts/introduction-to-cypress.html#Default-Assertions)
> - [AAA](https://github.com/testdouble/contributing-tests/wiki/Arrange-Act-Assert) is a testing pattern describing natural phases of tests
> - [GWT](https://wikipedia.org/wiki/Given-When-Then) is used as an alternative when using [BDD](https://wikipedia.org/wiki/Behavior-driven_development) instead of classical [TDD](https://wikipedia.org/wiki/Test-driven_development)
> - The above example used [Red-Green-Refactor](https://www.jamesshore.com/v2/blog/2005/red-green-refactor) as [the TDD cycle](https://blog.cleancoder.com/uncle-bob/2014/12/17/TheCyclesOfTDD.html#minute-by-minute-micro-cycle-red-green-refactor)

#### 5.2. Unit testing

> _Use [Enzyme](https://enzymejs.github.io/enzyme)&mdash;a JavaScript testing utility for React._

- 5.2.1. Install:

  ```shell
  $ npm i -D enzyme \
             enzyme-adapter-react-16
  ```

- 5.2.2. Setup:

  `src/setupTests.js`:

  ```javascript
  // …
  import Enzyme from "enzyme";
  import Adapter from "enzyme-adapter-react-16";

  Enzyme.configure({ adapter: new Adapter() });
  ```

- 5.2.3. Create a failing smoke test file:

  `src/App.test.js`:

  ```javascript
  import React from "react";

  import App from "./App";

  describe("<App />", () => {
    it("renders without crashing", () => {
      expect(true).toEqual(false);
    });
  });
  ```

- 5.2.4. Run the test:

  _This test should **fail**._

  ```shell
  $ npm t
  ```

- 5.2.5. Pass the failing test:

  `src/App.test.js`:

  ```javascript
  import { shallow } from "enzyme";
  // …
  describe …
    it …
      const wrapper = shallow(<App />);
      expect(wrapper).toEqual({});
    // …
  ```

- 5.2.6. The test runner automatically re-runs the test:

  _This test should now **pass**._

- 5.2.7. Refactor the passing test:

  `src/App.test.js`:

  ```javascript
  // …
  describe …
    it …
      shallow(<App />);
    // …
  ```

- 5.2.8. The test runner automatically re-runs the test:

  _This improved test should still **pass**, having the same result from previous test._

> **NOTES:**
>
> - Unit testing tests individual units of the application's source code
> - Unlike end-to-end testing, it verifies application's implementation details and not behaviors
> - Unlike integration testing, it only verifies a very specific part (unit) and not multiple parts
> - Enzyme's [shallow](https://enzymejs.github.io/enzyme/docs/api/shallow.html) is suitable to unit testing because it can isolate a component from its children
> - Enzyme's code examples in documentation uses Mocha, Chai and [Sinon.js](https://sinonjs.org)
> - `creat-react-app` uses [Jest](https://jestjs.io)'s built-in [expect](https://jestjs.io/docs/en/expect) with [js-dom](https://github.com/testing-library/jest-dom)'s [matchers](https://jestjs.io/docs/en/using-matchers) as an alternative to Chai's assertions
> - CRA uses [jest.fn()](https://jestjs.io/docs/en/mock-functions) as an alternative to Sinon.js to create [test doubles](https://wikipedia.org/wiki/Test_double) (spies, stubs and mocks, etc.)

#### 5.3. Integration testing

> _Use [react-testing-library](https://github.com/testing-library/react-testing-library)&mdash;a set of React DOM testing utilities._

- 5.3.1. Create a failing smoke test file:

  `src/App.spec.js`:

  ```javascript
  import { render } from "@testing-library/react";
  import React from "react";

  import App from "./App";

  test("<App /> renders learn react link", () => {
    expect(true).toEqual(false);
  });
  ```

- 5.3.2. Run the test:

  _This test should **fail**._

  ```shell
  $ npm t
  ```

- 5.3.3. Pass the failing test:

  `src/App.spec.js`:

  ```javascript
  import { render } from "@testing-library/react";
  import React from "react";

  import App from "./App";

  test("<App /> renders learn react link", () => {
    const { getByText } = render(<App />);
    expect(getByText("Learn React", { exact: false })).toBeInTheDocument();
  });
  ```

- 5.3.4. The test runner automatically re-runs the test:

  _This test should now **pass**._

- 5.3.5. Refactor the passing test:

  `src/App.spec.js`:

  ```javascript
  // …
  test …
    // …
    const linkElement = getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  // …
  ```

- 5.3.6. The test runner automatically re-runs the test:

  _This improved test should still **pass**, with bit of cleaner code, e.g.:_

  - Assign found element by `getBy` to `linkElement`
  - Replace input string with regular expression
  - Replace `exact` with `i` from regular expression
  - `linkElement` to `expect` instead of putting them all of them at once

> **NOTES:**
>
> - Integration testing tests multiple units of the application's code _as a group_
> - Unlike end-to-end testing, it verifies application's implementation details and not behaviors
> - Unlike unit testing, it verifies, _together_, parts (units) and not only a very specific part
> - [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) tests React components on how users might use them
> - Unlike traditional integration testing, RTL focuses on behaviors not implementation details
> - By default, `@testing-library/react` is shipped with Create React App
> - RTL uses Jest's built-in `expect` and `jest-dom`'s to assert the DOM state
> - [user-event](https://github.com/testing-library/user-event) can be used to replace the [dom-testing-library](https://github.com/testing-library/dom-testing-library)'s built-in [fire-event](https://testing-library.com/docs/dom-testing-library/api-events#fireevent)
> - `.spec.js` suffix is one of Jest's required [filename convention](https://create-react-app.dev/docs/running-tests#filename-conventions) to locate test files
> - We use `.spec.js` here _subjectively_ to distinguish it from unit tests (e.g. `.test.js`)
> - `getByText` is a combination of [getBy](https://testing-library.com/docs/dom-testing-library/api-queries#getby) and [ByText](https://testing-library.com/docs/dom-testing-library/api-queries#bytext) of [DOM Testing Library](https://testing-library.com/docs/dom-testing-library/intro) [queries](https://testing-library.com/docs/dom-testing-library/api-queries) API

#### 5.4. Code coverage

> _Code coverage helps measure the degree to which the source code of the application are executed._

- 5.4.1. Setup:

  `package.json`:

  ```json
  {
    "jest": {
      "coveragePathIgnorePatterns": [
        "<rootDir>/src/index.js",
        "<rootDir>/src/serviceWorker.js"
      ],
      "coverageThreshold": {
        "global": {
          "branches": 100,
          "functions": 100,
          "lines": 100,
          "statements": 100
        }
      }
    }
  }
  ```

- 5.4.2. Run:

  ```shell
  $ npm test -- --coverage --watchAll
  ```

---

> **NOTES:**
>
> - High code coverage (usually in percentage) suggests a lower chance of having undetected bugs
> - Create React App uses [Jest](https://jestjs.io)'s built-in [--coverage](https://jestjs.io/docs/en/cli#--coverageboolean) parameter to collect and report covered source code
> - Ignore source code (`src/(index|serviceWorker).js`) from coverage with [coveragePathIgnorePatterns](https://jestjs.io/docs/en/configuration#coveragepathignorepatterns-arraystring)
> - By default, [coverageReporters](https://jestjs.io/docs/en/configuration#coveragereporters-arraystring--string-options) uses `["text"]` which displays a detailed summary of coverage
> - The [coverageThreshold](https://jestjs.io/docs/en/configuration#coveragethreshold-object) sets the minimum coverage threshold (in `%`) and returns `1` as [exit code](https://tldp.org/LDP/abs/html/exitcodes.html) if unmet
> - `--` tells CLI that it is an argument of `test` (not `npm`) (see **Guideline 10** from [Utility Syntax Guidelines](https://pubs.opengroup.org/onlinepubs/9699919799/basedefs/V1_chap12.html#tag_12_02))
> - There is a bug currently when running with `--coverage` normally&mdash;use `--watchAll` as a temporary fix
> - Use `--watchAll=false` (disable test watcher) when using on CI/CD platforms (e.g. [GitHub Actions](https://github.com/features/actions))

### 6. Automation

> _Automation helps test, build and deploy the application automatically from development to production._

#### 6.1. CI / CD

> _Use [GitHub Actions](https://github.com/features/actions)&mdash;a workflow automation tool._

- 6.1.2. Script:

  `package.json`:

  ```json
  {
    "…"
    "husky": {
      "hooks": {
        "…"
        "pre-push": "npm test -- --coverage --watchAll=false"
      }
    },
    "…"
  }
  ```

- 6.1.3. Workflow file:

  `.github/workflows/ci.yml`:

  ```yaml
  on: push
  jobs:
    tests:
      runs-on: ubuntu-latest
      steps:
        - uses: actions/checkout@v2
          env:
            DEFAULT_BRANCH: master
        - run: npm i
        - run: ./node_modules/.bin/eslint src/**/*.js
        - run: ./node_modules/.bin/prettier -c src/**/*.{md,css,js,json}
        - run: npm test -- --coverage --watchAll=false
        - uses: cypress-io/github-action@v2
          with:
            start: npm start
            wait-on: "http://localhost:3000"
  ```

> **NOTES:**
>
> - `pre-push` hook ensures all tests pass with minimum required coverage before pushing to remote repo
> - The workflow runs (using `ci.yml` configuration) whenever a push event is triggered on remote repo
> - `env.DEFAULT_BRANCH` with value of `master` is specified since we use the [changed branch name](https://github.com/github/renaming)
> - `name` is optional but `jobs` key name is required (`tests`)
> - `eslint` is included in GitHub Actions out of the box

---

## References

- [Learn TDD in React](https://learntdd.in/react): [Outside-In Frontend Development](https://outsidein.dev)

---

## License

`react-tododo` is licensed under [MIT](./LICENSE).
