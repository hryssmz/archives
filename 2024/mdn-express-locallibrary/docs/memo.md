# memo

## 1. From Scratch

---

### 1.1. Project Initialization

---

Clone the empty repository and `cd` to the repository root (i.e., `mdn-express-locallibrary`).

Execute the following commands to create `package.json`.

```bash
npm init
```

### 1.2. Install Development Tools

---

#### 1.2.1. TypeScript

---

```bash
npm install -D ts-node @types/node
npx tsc --init
```

#### 1.2.2. Prettier

---

```bash
npm install -D prettier @prettier/plugin-pug prettier-plugin-sh
```

#### 1.2.3. ESLint

---

```bash
npm install -D eslint eslint-config-prettier eslint-plugin-import
npm init @eslint/config
```

#### 1.2.4. Husky

---

```bash
npm install -D husky
npx husky install
npm set-script prepare "husky install"
```

Add some empty Husky scripts.

```bash
npx husky add .husky/pre-commit "exit 0"
npx husky add .husky/pre-push "exit 0"
```

#### 1.2.5. lint-staged

---

```bash
npm install -D lint-staged
```

#### 1.2.6. Jest

---

```bash
npm install -D jest @types/jest eslint-plugin-jest
npx jest --init
```

#### 1.2.7. Babel

---

```bash
npm install -D babel-jest @babel/core @babel/preset-env @babel/preset-typescript
```

#### 1.2.8. supertest

---

```bash
npm install -D supertest @types/supertest
```

#### 1.2.9. nodemon

---

```bash
npm install -D nodemon
```

### 1.3. Initialize Express Project

---

#### 1.3.1. Express

---

```bash
npm install express
npm install -D @types/express
```

#### 1.3.2. Mongoose

---

```bash
npm install mongoose
```

#### 1.3.3. Pug

---

```bash
npm install pug
```

#### 1.3.4. HTTP errors

---

```bash
npm install http-errors
npm install -D @types/http-errors
```

#### 1.3.5. morgan

---

```bash
npm install morgan
npm install -D @types/morgan
```

#### 1.3.6. Other Dependencies

---

```bash
# Express validator.
npm install express-validator

# luxon.
npm install luxon
npm install -D @types/luxon

# helmet.
npm install helmet

# compression.
npm install compression
npm install -D @types/compression
```

## 2. ChangeLog

---

- [`dev/v0`](https://github.com/hryssmz/mdn-express-locallibrary/commit/966326c4740830915d88285d35a073ba85927d9c): Setup for the project
- [`dev/v1`](https://github.com/hryssmz/mdn-express-locallibrary/commit/9b1ad5d760514b8b36c5dba14dd2264e5818eb7e): Add APIs
- [`dev/v2`](https://github.com/hryssmz/mdn-express-locallibrary/commit/fd6af18ae7126623dce15722297af5e2ca365bd6): Add views
- [`dev/v2.1`](https://github.com/hryssmz/mdn-express-locallibrary/commit/114feaa2de1817bcc9413e4932a4cf16bdf8c6f6): Isolate validators from request handlers
