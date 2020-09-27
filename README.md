# react-tododo

Learn [TDD](https://en.wikipedia.org/wiki/Test-driven_development) in [React](https://reactjs.org) with a todo list

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
> - `create-react-app` includes four [react-scripts](https://npmjs.com/package/react-scripts) (`start|build|test|eject`)

#### 4.2. Linter

> _Use [ESLint](https://eslint.org)&mdash;a static code analyzer to find and fix problems in JavaScript code._

- 4.2.1. Install and/or run:

  ```shell
  $ npx eslint --fix src/
  ```

> **NOTES:**
>
> - `--fix` modifies the files in the specified directory
> - ESLint is shipped with `create-react-app` and parses with [babel-eslint](https://github.com/babel/babel-eslint)

##### 4.2.1. Import Sorter

> Use [eslint-plugin-simple-import-sort](https://github.com/lydell/eslint-plugin-simple-import-sort)&mdash;an autofixable import sorter for `eslint --fix`.

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
  $ npx eslint --fix src/
  ```

#### 4.3. Code Formatter

> _Use [Prettier](https://prettier.io)&mdash;a source code formatter with an opinionated but consistent code conventions._

- 4.3.1. Install and/or run:

  ```shell
  $ npx prettier --write src/
  ```

> **NOTE:** <br />
> The `--write` parameter modifies the files in the specified directory.

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
      "src/**/*.{md,css,js}": [
        "npx eslint --fix",
        "npx prettier --write"
      ]
    }
  }
  ```

> **NOTES:**
>
> - `lint-staged` runs `eslint --fix` and `prettier --write` on `"src/**/*.{md,css,js}"` on `pre-commit`
> - [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) turns off all conflicting ESLint rules with Prettier
> - `prettier` must be put last on `extends` to override other configs
> - `eslint --fix` should run _before_ `prettier --write` (not _after_)

---

## License

`react-tododo` is licensed under [MIT](./LICENSE).
