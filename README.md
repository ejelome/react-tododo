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

---

## License

`react-tododo` is licensed under [MIT](./LICENSE).
