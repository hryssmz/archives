# README

## 1. Setup

---

### 1.1. Initialize Project

---

```bash
mkdir sam-typescript
cd sam-typescript/
npm init -y
```

### 1.2. Development Dependencies

---

#### 1.2.1. TypeScript

---

```bash
npm install -D ts-node @types/node
# npx tsc --init
```

#### 1.2.2. Prettier

---

```bash
npm install -D prettier prettier-plugin-sh
```

#### 1.2.3. ESLint

---

```bash
npm install -D eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-prettier
# npm init @eslint/config
# npm install -D eslint-config-prettier
```

#### 1.2.4. AWS SDK

---

```bash
npm install -D @types/aws-lambda
```

#### 1.2.5. Jest

---

```bash
npm install -D jest @types/jest eslint-plugin-jest
```

#### 1.2.6. Babel

---

```bash
npm install -D babel-jest @babel/core @babel/preset-env @babel/preset-typescript
```

### 1.3. Dependencies

---

#### 1.3.1. axios

---

```bash
npm install axios
```
