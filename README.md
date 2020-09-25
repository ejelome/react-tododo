# react-tododo

Learn [TDD](https://en.wikipedia.org/wiki/Test-driven_development) in [React](https://reactjs.org) with a todo list

---

<!-- markdown-toc start - Don't edit this section. Run M-x markdown-toc-refresh-toc -->

**Table of Contents**

- [react-tododo](#react-tododo)
  - [Demo](#demo)
  - [Prerequisites](#prerequisites)
    - [Optional](#optional)
      - [simple-import-sort](#simple-import-sort)
  - [Setup](#setup)
    - [Install](#install)
  - [Usage](#usage)
    - [Serve](#serve)
    - [Test](#test)
    - [Build](#build)
  - [Lessons](#lessons)
    - [1. Project Management](#1-project-management)
      - [1.1. Milestones](#11-milestones)
      - [1.2. Project boards](#12-project-boards)
      - [1.3. Issues](#13-issues)
      - [1.4. Labels](#14-labels)
      - [1.5. Pull requests](#15-pull-requests)
    - [2. Project Repository](#2-project-repository)
      - [2.1. Automatically delete head branches](#21-automatically-delete-head-branches)
      - [2.2. Disable force pushing](#22-disable-force-pushing)
      - [2.3. Require status checks to pass before merging](#23-require-status-checks-to-pass-before-merging)
      - [2.4. Receive notifications on push events](#24-receive-notifications-on-push-events)
    - [3. System dependencies](#3-system-dependencies)
      - [3.1. git](#31-git)
      - [3.2. nvm](#32-nvm)
      - [3.3. npm (CLI)](#33-npm-cli)
      - [3.4. Text editor](#34-text-editor)
    - [4. Project dependencies](#4-project-dependencies)
      - [4.1. create-react-app](#41-create-react-app)
      - [4.2. Prettier](#42-prettier)
      - [4.3. ESLint](#43-eslint)
  - [License](#license)

<!-- markdown-toc end -->

---

## Demo

See <https://ejelome-react-tododo.netlify.app>.

---

## Prerequisites

### Optional

#### simple-import-sort

1. Install `eslint-plugin-simple-import-sort`:

   ```shell
   $ npm i -D eslint-plugin-simple-import-sort
   ```

2. Update `./.eslintrc` (create one if non-existent):

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

3. Sort `./src/*.js` files:

   ```shell
   $ eslint --fix src/
   ```

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

### 1. Project Management

Project setup for working on the project.

#### 1.1. Milestones

- 1.1.1. Go to [`github.com/<username>/<repo>/milestones`](https://github.com/<username>/<repo>/milestones)
- 1.1.2. Click `New milestone` ([`github.com/<username>/<repo>/milestones/new`](https://github.com/<username>/<repo>/milestones/new))
- 1.1.3. Set fields, e.g.:

  - `Title` as `v0.1.0`
  - `Due date (optional)` as `09/27/2020`
  - `Description` as `Initial release.`

- 1.1.4. Click `Create milestone`

> **Note:** <br />
> The [milestones](https://docs.github.com/en/github/managing-your-work-on-github/tracking-the-progress-of-your-work-with-milestones) help track progress of your work.

#### 1.2. Project boards

- 1.2.1. Go to [`github.com/<username>/<repo>/projects`](https://github.com/<username>/<repo>/projects)
- 1.2.2. Click `Create a project` ([`github.com/<username>/<repo>/projects/new`](https://github.com/<username>/<repo>/projects/new))
- 1.2.3. Set fields, e.g.:

  - `Project board name` as `Project setup`
  - `Description` as `Setup the project and processes.`
  - `Project template` as `Automated kanban`

- 1.2.4. Click `Create project`

> **Notes:**
>
> - The [project boards](https://docs.github.com/en/github/managing-your-work-on-github/about-project-boards) help organize and prioritize your work
> - Use `Templates` as `Automated kanban with reviews` if developing with other developers

#### 1.3. Issues

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

> **Note:** <br/>
> The [issues](https://docs.github.com/en/github/managing-your-work-on-github/about-issues) help manage tasks or report bugs.

#### 1.4. Labels

- 1.4.1. Go to [`github.com/<username>/<repo>/issues/<n>`](https://github.com/<username>/<repo>/issues/<n>)
- 1.4.2. Set `Labels` as e.g. `documentation`

> **Note:** <br />
> The [labels](https://docs.github.com/en/github/managing-your-work-on-github/about-labels) help categorize issues and pull requests.

#### 1.5. Pull requests

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

> **Notes:** <br />
>
> - The [pull requests](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests) help discuss and review your work with others
> - You can [link an issue](https://docs.github.com/en/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue) manually or [write keywords](https://docs.github.com/en/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword) in description

### 2. Project Repository

Project repository for improving security and monitoring.

#### 2.1. Automatically delete head branches

- 2.1.1. Go to [`github.com/<username>/<repo>/settings`](https://github.com/<username>/<repo>/settings)
- 2.1.2. Under `Merge button` ([`#merge-button-settings`](https://github.com/<username>/<repo>/settings#merge-button-settings)), tick `Automatically delete head branches`

#### 2.2. Disable force pushing

- 2.2.1. Go to [`github.com/<username>/<repo>/settings/branches`](https://github.com/<username>/<repo>/settings/branches)
- 2.2.2. Click `Add rule` ([`github.com/<username>/<repo>/settings/branch_protection_rules/new`](https://github.com/<username>/<repo>/settings/branch_protection_rules/new))
- 2.2.3. Set fields, e.g.:

  - `Branch name pattern` as `master`

- 2.2.4. Click `Create`

> **Warning:** <br/>
> Commits can still be pushed directly to protected branch.

#### 2.3. Require status checks to pass before merging

- 2.3.1. Go to [`github.com/<username>/<repo>/settings/branch_protection_rules/<n>`](https://github.com/<username>/<repo>/settings/branch_protection_rules/<n>)
- 2.3.2. Set fields, e.g.:

  Under `Protect matching branches`, tick:

  - `Require status checks to pass before merging`
  - `Require branches to be up to date before merging` (automatically ticked)
  - `Include administrators`

- 2.3.3. Click `Save changes`

> **Note:** <br/>
> Status checks prevent pushing commits directly to protected branch.

#### 2.4. Receive notifications on push events

- 2.4.1. Go to [`github.com/<username>/<repo>/settings`](https://github.com/<username>/<repo>/settings)
- 2.4.2. On left navigation, click `Notification` ([`github.com/<username>/<repo>/settings/notifications`](https://github.com/<username>/<repo>/settings/notifications))
- 2.4.3. Set fields, e.g.:

  - `Address *` as `username@company.tld`

- 2.4.4. Click `Setup notifications`

> **Note:** <br />
> Specified email addresses will receive notifications when push events are triggered.

### 3. System dependencies

System dependencies required to manage all the projects.

#### 3.1. git

_See [Install Git](https://github.com/git-guides/install-git) to install [git](https://git-scm.com)._

#### 3.2. nvm

_See [Installing and Updating](https://github.com/nvm-sh/nvm#installing-and-updating) to install [nvm](https://github.com/nvm-sh/nvm) with the [install script](https://github.com/nvm-sh/nvm/blob/v0.35.3/install.sh)._

#### 3.3. npm (CLI)

_See [Usage](https://github.com/nvm-sh/nvm#usage) to install [npm](https://github.com/npm/cli) CLI via `nvm`._

#### 3.4. Text editor

_e.g. [Emacs](https://www.gnu.org/software/emacs), [Vim](https://www.vim.org) or both ([Spacemacs](https://www.spacemacs.org))._

> **Note:** <br />
> What [text editor](https://en.wikipedia.org/wiki/Text_editor) to use is pretty subjective; _**use what you think is best**_.

### 4. Project dependencies

Project dependencies required to develop a specific project.

#### 4.1. create-react-app

```shell
$ npx create-react-app <project-directory>
```

> **Notes:**
>
> - [npx](https://github.com/npm/npx) command executes package locally or from [npm](https://npmjs.com) registry
> - [create-react-app](https://github.com/facebook/create-react-app) includes four [run-scripts](https://npmjs.com/package/react-scripts) (`start|build|test|eject`)

#### 4.2. Prettier

- 4.2.1. Install:

  ```shell
  $ npm i -D prettier
  ```

- 4.2.2. Script:

  `package.json`:

  ```json
  {
    "…"
    "scripts": {
      "…"
      "format": "prettier --write src/"
    }
    "…"
  }
  ```

- 4.2.3. Run:

  ```shell
  $ npm run format
  ```

> **Notes:**
>
> - [Prettier](https://prettier.io) package formats source code with an opinionated but consistent code conventions
> - `--write` overwrites the files in the specified directory (e.g. `src/`)

#### 4.3. ESLint

> **Note:** <br />
> The `create-react-app` is shipped with [ESLint](https://eslint.org) and parses with [babel-eslint](https://github.com/babel/babel-eslint).

---

## License

`react-tododo` is licensed under [MIT](./LICENSE).
