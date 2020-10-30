![.github/workflows/ci.yml](https://github.com/ejelome/react-tododo/workflows/.github/workflows/ci.yml/badge.svg)
[![Netlify Status](https://api.netlify.com/api/v1/badges/3c4ebbf7-e9f5-4415-bd4e-f75a20a1a8f4/deploy-status)](https://app.netlify.com/sites/ejelome-react-tododo/deploys)

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
    - [Quality](#quality)
      - [Format](#format)
      - [Lint](#lint)
    - [Test](#test)
      - [Unit and Integration](#unit-and-integration)
      - [End-to-End](#end-to-end)
      - [Coverage](#coverage)
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
      - [6.1. CI](#61-ci)
      - [6.2. CD](#62-cd)
    - [7. Outside-In TDD](#7-outside-in-tdd)
      - [7.1. E2E](#71-e2e)
      - [7.2. Integration](#72-integration)
      - [7.3. Unit](#73-unit)
    - [8. Inside-Out TDD](#8-inside-out-tdd)
      - [8.1. Unit](#81-unit)
      - [8.2. Integration](#82-integration)
      - [8.3. E2E](#83-e2e)
    - [9. Repeat](#9-repeat)
    - [10. Regression testing](#10-regression-testing)
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

### Quality

#### Format

```shell
$ npm run format -- -[w|c] <glob>
```

#### Lint

```shell
$ npm run lint -- --[fix|fix-dry-run] <glob>
```

### Test

#### Unit and Integration

```shell
$ npm [test|tst|t]
```

#### End-to-End

```shell
$ npm run e2e -- [run -s <glob>|open]
```

> **NOTE:** <br />
> Server must be running (see [serve](#serve)).

#### Coverage

```shell
$ npm run coverage
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

<details>
  <summary>Steps</summary>

- 1.1.1. Go to [`github.com/<username>/<repo>/milestones`](https://github.com/<username>/<repo>/milestones)
- 1.1.2. Click `New milestone` ([`github.com/<username>/<repo>/milestones/new`](https://github.com/<username>/<repo>/milestones/new))
- 1.1.3. Set fields, e.g.:

  - `Title` as `v0.1.0`
  - `Due date (optional)` as `09/27/2020`
  - `Description` as `Initial release.`

- 1.1.4. Click `Create milestone`

</details>

#### 1.2. Project boards

> _[Project boards](https://docs.github.com/en/github/managing-your-work-on-github/about-project-boards) help organize and prioritize work._

<details>
  <summary>Steps</summary>

- 1.2.1. Go to [`github.com/<username>/<repo>/projects`](https://github.com/<username>/<repo>/projects)
- 1.2.2. Click `Create a project` ([`github.com/<username>/<repo>/projects/new`](https://github.com/<username>/<repo>/projects/new))
- 1.2.3. Set fields, e.g.:

  - `Project board name` as `Project setup`
  - `Description` as `Setup the project and processes.`
  - `Project template` as `Automated kanban`

- 1.2.4. Click `Create project`

</details>

> **NOTE:** <br />
> Set `Templates` as `Automated kanban with reviews` if working with other developers.

#### 1.3. Issues

> _[Issues](https://docs.github.com/en/github/managing-your-work-on-github/about-issues) help manage tasks or bug reports._

<details>
  <summary>Steps</summary>

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

</details>

#### 1.4. Labels

> _[Labels](https://docs.github.com/en/github/managing-your-work-on-github/about-labels) help categorize issues and pull requests._

<details>
  <summary>Steps</summary>

- 1.4.1. Go to [`github.com/<username>/<repo>/issues/<n>`](https://github.com/<username>/<repo>/issues/<n>)
- 1.4.2. Set `Labels` as e.g. `documentation`

</details>

#### 1.5. Pull requests

> _[Pull requests](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests) help discuss and review work with others._

<details>
  <summary>Steps</summary>

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

</details>

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

- 4.2.1. Script:

  ```json
  // file: package.json
  {
    "…"
    "scripts": {
      "…"
      "lint": "eslint",
      "…"
    }
  }
  ```

- 4.2.2. Run:

  ```shell
  $ npm run lint -- --[fix|fix-dry-run] <glob>
  ```

> **NOTES:**
>
> - `--fix` modifies the files matched from `<glob>` pattern
> - `--fix-dry-run` does `--fix` without modifying the files
> - ESLint is shipped with CRA and parses with [babel-eslint](https://github.com/babel/babel-eslint)

##### 4.2.1. Import Sorter

> _Use [eslint-plugin-simple-import-sort](https://github.com/lydell/eslint-plugin-simple-import-sort)&mdash;an autofixable import sorter for `eslint --fix`._

- 4.2.1.1. Install:

  ```shell
  $ npm i -D eslint-plugin-simple-import-sort
  ```

- 4.2.1.2. Script (rc):

  ```json
  // file: .eslintrc
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

- 4.2.1.3. Run:

  ```shell
  $ npm run lint -- --fix <glob>
  ```

#### 4.3. Code Formatter

> _Use [Prettier](https://prettier.io)&mdash;a source code formatter with an opinionated but consistent code conventions._

- 4.3.1. Install:

  ```shell
  $ npm i -D prettier
  ```

- 4.3.2. Script:

  ```json
  // file: package.json
  {
    "…"
    "scripts": {
      "…"
      "format": "prettier",
      "…"
    }
  }
  ```

- 4.3.3. Run:

  ```shell
  $ npm run format -- -[w|c] <glob>
  ```

> **NOTES:**
>
> - `-w` (or `--write`) modifies the files matched from `<glob>` pattern
> - `-c` (or `--check`) does `-w` (or `--write`) without modifying the files

##### 4.3.1. Autoformatter

> _Use [husky](https://github.com/typicode/husky) with [lint-staged](https://github.com/okonet/lint-staged)&mdash;to execute [npm-run-script](https://docs.npmjs.com/cli-commands/run-script.html)s from [githooks](https://git-scm.com/docs/githooks)_.

- 4.3.1.1. Install:

  ```shell
  $ npm i -D eslint-config-prettier \
             husky                  \
             lint-staged
  ```

- 4.3.1.2: Script (rc):

  ```json
  // file: .eslintrc
  {
    "…"
    "extends": ["prettier"]
  }
  ```

- 4.3.1.3. Script:

  ```json
  // file: package.json
  {
    "…"
    "husky": {
      "hooks": {
        "pre-commit": "lint-staged"
      }
    },
    "lint-staged": {
      "src/**/*.js": [
        "npm run lint -- --fix"
      ],
      "src/**/*.{md,css,js,json}": [
        "npm run format -- -w"
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

- 5.1.2. Script:

  ```json
  // file: package.json
  {
    "…"
    "scripts": {
      "…"
      "e2e": "cypress",
      "…"
    }
  }
  ```

- 5.1.3. Remove example files:

  ```shell
  $ rm -rf cypress/integration/examples/
  ```

- 5.1.4. Specify `baseUrl`:

  ```json
  // file: cypress.json
  {
    "baseUrl": "http://localhost:3000"
  }
  ```

- 5.1.5. Start server:

  ```shell
  $ npm start
  ```

- 5.1.6. Start test runner:

  Open a new terminal tab, then do:

  ```shell
  $ npm run e2e -- open
  ```

  _This will open Cypress' test runner window._

- 5.1.7. Create a failing [smoke test](<https://wikipedia.org/wiki/Smoke_testing_(software)>) file:

  ```javascript
  // file: cypress/integration/sample_spec.js
  describe("Smoke test", () => {
    it("renders learn react link", () => {
      expect(true).to.equal(false);
    });
  });
  ```

- 5.1.8. Click `sample_spec.js` from test runner's window:

  _This test should **fail**._

- 5.1.9. Pass the failing test:

  ```javascript
  // file: cypress/integration/sample_spec.js
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
        .contains("learn react", { matchCase: false });
    });
  });
  ```

- 5.1.10. The test runner automatically re-runs the test:

  _This test should now **pass**._

- 5.1.11. Refactor the passing test:

  ```javascript
  // file: cypress/integration/sample_spec.js
  describe("Smoke test", () => {
    it("renders learn react link", () => {
      cy.visit("/")
        .get("a")
        .contains(/learn react/i);
    });
  });
  ```

- 5.1.12. The test runner automatically re-runs the test:

  _This improved test should still **pass**, but with a more succinct case insensitivity check with RegExp._

> **NOTES:**
>
> - End-to-End (E2E) testing tests the flow of the application from users' point of view
> - Unlike unit testing, it verifies application's behaviors and not implementation details
> - Unlike integration testing, it verifies the behavior as a whole and not only parts of it
> - Cypress requires that the app is also running to run its tests against
> - `open` opens Cypress' test runner GUI then runs the default browser
> - Use `run` with `-s` (or `--spec`) to run specific test with CLI test runner once
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

  ```javascript
  // file: src/setupTests.js
  // …
  import Enzyme from "enzyme";
  import Adapter from "enzyme-adapter-react-16";

  Enzyme.configure({ adapter: new Adapter() });
  ```

- 5.2.3. Create a failing smoke test file:

  ```javascript
  // file: src/App.test.js
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

  ```javascript
  // file: src/App.test.js
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

  ```javascript
  // file: src/App.test.js
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

  ```javascript
  // file: src/__tests__/integration/app.spec.js
  import { render } from "@testing-library/react";
  import React from "react";

  import App from "../../App";

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

  ```javascript
  // file: src/__tests__/integration/app.spec.js
  import { render } from "@testing-library/react";
  import React from "react";

  import App from "../../App";

  test("<App /> renders learn react link", () => {
    const { getByText } = render(<App />);
    expect(getByText("Learn React", { exact: false })).toBeInTheDocument();
  });
  ```

- 5.3.4. The test runner automatically re-runs the test:

  _This test should now **pass**._

- 5.3.5. Refactor the passing test:

  ```javascript
  // file: src/__tests__/integration/app.spec.js
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

  ```json
  // file: package.json
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
  $ npm run coverage
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

#### 6.1. CI

> _Use [GitHub Actions](https://github.com/features/actions)&mdash;a workflow automation tool._

- 6.1.1. Script:

  ```json
  // file: package.json
  {
    "…"
    "husky": {
      "hooks": {
        "…"
        "pre-push": "npm run e2e -- run && npm run coverage"
      }
    },
    "…"
  }
  ```

- 6.1.2. Workflow file:

  ```yaml
  // file: .github/workflows/ci.yml
  on: pull_request
  jobs:
    tests:
      runs-on: ubuntu-latest
      steps:
        - uses: actions/checkout@v2
          env:
            DEFAULT_BRANCH: master
        - run: npm i
        - run: npm run lint -- --fix src/
        - run: npm run format -- -c src/
        - run: npm run coverage
        - uses: cypress-io/github-action@v2
          with:
            start: npm start
            wait-on: "http://localhost:3000"
  ```

- 6.1.3. Update `Require status checks to pass before merging`:

  - 6.1.3.1. Go to [`github.com/<username>/<repo>/settings/branch_protection_rules/<n>`](https://github.com/<username>/<repo>/settings/branch_protection_rules/<n>)
  - 6.1.3.2 Set fields, e.g.:

    Under `Protect matching branches`, tick:

    - `tests`

  - 6.1.3.3. Click `Save changes`

> **NOTES:**
>
> - CI (or Continuous Integration) automates the processes of quality control, tests and build of application
> - `pre-push` hook ensures all tests pass with minimum required coverage before pushing to remote repo
> - The workflow runs (using `ci.yml` configuration) whenever a pull request event is triggered on remote repo
> - `env.DEFAULT_BRANCH` with value of `master` is specified since we use the [changed branch name](https://github.com/github/renaming)
> - `name` is optional but `jobs` key name is required (`tests`)
> - `eslint` is included in GitHub Actions out of the box

#### 6.2. CD

> _Use [Netlify](https://netlify.com)&mdash;a platform for automating modern web projects._

- 6.2.1. Setup Netlify

  - 6.2.1.1. Log in to [Netlify](https://app.netlify.com) (or sign up if not registered)
  - 6.2.1.2. Select sites from the list (or click `New site from Git` and connect to a repo)
  - 6.2.1.3. Go to `Site Settings` > `Build & deploy` then click `Edit settings`
  - 6.2.1.4. Under `Build settings`, set fields, e.g.:

    - `Build command` as `npm run build`
    - `Publish directory` as `build/`

  - 6.2.1.5. Click `Save`

- 6.2.2. Update `Require status checks to pass before merging`:

  - 6.2.2.1. Go to [`github.com/<username>/<repo>/settings/branch_protection_rules/<n>`](https://github.com/<username>/<repo>/settings/branch_protection_rules/<n>)
  - 6.2.2.2 Set fields, e.g.:

    Under `Protect matching branches`, tick:

    - `netlify/<Site name>/deploy-preview`

  - 6.2.2.3. Click `Save changes`

> **NOTES:**
>
> - CD (or Continuous Delivery) speeds up the process of releasing the application, though manually
> - CD (or Continuous Deployment) fully automates Continuous Delivery without needing manual intervention
> - The application is only built then deployed if all the CI pipeline requirements were fully met
> - On Netlify, `Activate builds` is Continuous Deployment while `Stop builds` is Continuous Delivery

### 7. Outside-In TDD

> _Outside-In TDD helps focus on primary stakeholders by providing complete but only necessary parts of a feature._

**Example: List todos**

#### 7.1. E2E

- 7.1.1. Start server (if it's not running):

  ```shell
  $ npm start
  ```

- 7.1.2. Start test runner:

  Open a new terminal tab, then do:

  ```shell
  $ npm run e2e -- open
  ```

  _This will open Cypress' test runner window._

- 7.1.3. Create a failing e2e test:

  `cypress/integration/todos/list_spec.js`;

  ```javascript
  describe("Todo list", () => {
    it("display todo list", () => {
      cy.visit("/");

      cy.get("h1").contains("my todos", { matchCase: false });

      cy.get("li").contains("learn react", { matchCase: false });
    });
  });
  ```

- 7.1.4. Click `list_spec.js` under `todos` from test runner's window:

  _This test will **fail** since it's checking a page not yet implemented._

#### 7.2. Integration

- 7.2.1. Start test runner (if it's not running):

  ```shell
  $ npm t
  ```

- 7.2.2. Create a failing integration test:

  ```javascript
  // file: src/__tests__/integration/todos/list.spec.js
  import { render } from "@testing-library/react";
  import React from "react";

  import App from "../../../App";

  test("<App /> displays todo list", () => {
    const { getByText } = render(<App />);
    expect(getByText("my todos", { exact: false })).toBeInTheDocument();
  });
  ```

- 7.2.3. The test runner automatically re-runs the test:

  _This test will **fail** since it's checking a content not yet implemented._

#### 7.3. Unit

- 7.3.1. Start test runner (if it's not running):

  ```shell
  $ npm t
  ```

- 7.3.2. Create a failing unit test:

  ```javascript
  // file: src/components/TodoList.test.js
  import { shallow } from "enzyme";
  import React from "react";

  import TodoList from "./TodoList";

  describe("<TodoList />", () => {
    it("renders without crashing", () => {
      const wrapper = shallow(<TodoList />);
      expect(wrapper).toEqual({});
    });
  });
  ```

### 8. Inside-Out TDD

> _Inside-Out aims to satisfy each of the requirements of E2E tests from the ground up._

#### 8.1. Unit

- 8.1.1. Pass the failing unit test:

  ```javascript
  // file: src/components/TodoList.js
  import React from "react";

  const TodoList = () => <div></div>;

  export default TodoList;
  ```

- 8.1.2. Refactor the passing unit test:

  ```javascript
  // file: src/components/TodoList.test.js
  // …
  describe …
    it …
      shallow(<TodoList />);
    // …
  ```

- 8.1.3. Refactor the tested unit:

  ```javascript
  // file: src/components/TodoList.js
  // …
  … TodoList … => <div />;
  // …
  ```

#### 8.2. Integration

- 8.2.1. Pass the failing integration test:

  ```javascript
  // file: src/components/TodoList.test.js
  // …
  describe …
    it("displays the title", () => {
      const wrapper = shallow(<TodoList />);
      expect(wrapper.find("h1").text().toLowerCase()).toBe("my todos");
    });
  // …
  ```

  ```javascript
  // file: src/components/TodoList.js
  // …
  … TodoList … => <h1>My todos</h1>;
  // …
  ```

  ```javascript
  // file: src/App.js
  import React from "react";

  import TodoList from "./components/TodoList";

  function App() {
    return <TodoList />;
  }

  export default App;
  ```

- 8.2.2. Refactor the passing unit test:

  ```javascript
  // file: src/components/TodoList.test.js
  // …
  describe …
    it("displays the title", () => {
      const [tag, title] = ["h1", "My todos"];
      const wrapper = shallow(<TodoList title={title} />);
      const text = wrapper.find(tag).text();
      expect(text).toBe(title);
    });
  // …
  ```

- 8.2.3. Refactor the tested unit:

  ```javascript
  // file: src/components/TodoList.js
  // …
  const TodoList = ({ title }) => <h1>{title}</h1>;

  TodoList.defaultProps = {
    title: "My todos",
  };
  // …
  ```

- 8.2.4. Refactor the passing integration test:

  ```javascript
  // file: src/__tests__/integration/todos/list.spec.js
  // …
  test …
    // …
    const title = getByText(/my todos/i);
    expect(title).toBeInTheDocument();
  });
  ```

- 8.2.5. Refactor the tested integration units:

  ```javascript
  // file: src/App.js
  // …
  const App = () => <TodoList />;
  // …
  ```

#### 8.3. E2E

- 8.3.1. Go back to Cypress' test runner window

- 8.3.2. The first assertion should now pass

- 8.3.3. Refactor the e2e test file:

  ```javascript
  // file: cypress/integration/todos/list_spec.js
  describe …
    it …
      // …
      cy.get("h1").contains(/my todos/i);
      // …
  ```

- 8.3.4. The test runner automatically re-runs the test:

  _This improved test should still **pass**, but with a more succinct case insensitivity check with RegExp._

### 9. Repeat

- 9.1. Use Outside-In TDD when starting a new feature
- 9.2. Use Inside-Out TDD to complete that feature

### 10. Regression testing

> _Regression testing ensures that the application still works as expected after a newly implemented change._

- 10.1. Re-run all unit and integration tests:

  - 10.1.1. Go to the test runner terminal
  - 10.1.2. Press `a` to re-run all test suites

- 10.2. Re-run all e2e tests:

  - 10.2.1. Go to the test runner window
  - 10.2.2. Click `Run all specs`

- 10.3. Fix any possible failing test(s):

  _`sample_spec.js` will fail since the text isn't wrapped anymore to an `a` tag but `li`._

  ```javascript
  // file: cypress/integration/sample_spec.js
  describe …
    it …
      // …
      cy.visit …
        .get("li")
        // …
  ```

- 10.4. Re-run all tests:

  _There should be no more failing tests._

> **NOTE:** <br />
> Regression test is done after the newly implemented feature has been fully tested.

---

## References

- [Learn TDD in React](https://learntdd.in/react): [Outside-In Frontend Development](https://outsidein.dev)

---

## License

`react-tododo` is licensed under [MIT](./LICENSE).
