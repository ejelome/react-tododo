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
    - [1. Processes](#1-processes)
      - [1.1. Milestones](#11-milestones)
      - [1.2. Project boards](#12-project-boards)
      - [1.3. Issues](#13-issues)
      - [1.4. Labels](#14-labels)
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

### 1. Processes

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

---

## License

`react-tododo` is licensed under [MIT](./LICENSE).
