# mdn-express-locallibrary

A simple Express local library app provided by MDN.

## 1. Try on Heroku

---

You and try this app deployed on [Heroku](https://gentle-ocean-61871.herokuapp.com).

## 2. Installation

---

### 2.1. Requirements

---

To download and run this app on your local machine, you need to install the following tools.

- [Git](https://git-scm.com/)
- [VS Code](https://code.visualstudio.com/)
- [Docker](https://www.docker.com/)
- [Latest Docker Compose (currently version 1.29.2)](https://docs.docker.com/compose/install/#install-compose)

You also need to install [Remote - Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) VS Code extension.

### 2.2. Clone Repository

---

Execute the following command to clone the repository.

```bash
git clone https://github.com/hryssmz/mdn-express-locallibrary.git
```

### 2.3. Start App in Development Mode

---

Open `mdn-express-locallibrary` project root with VS Code.

```bash
code mdn-express-locallibrary
```

Press `F1` in VS Code and execute `Remote-Containers: Reopen in Container` command.

VS Code will create a development container which may take for a while.

> **Note**: You need to have Docker running before this step.

Press `` Ctrl+Shift+` `` to launch a new integrated terminal, and install node package with the following command.

```bash
npm install
```

Then press `F5` to launch the debugger.

You can access the app on `http://localhost:33000`.

If you would like to push some data into database, run the following command.

```bash
npm run initDB
```

After you refresh the page, you will see some books.

### 2.4. Start App in Production Mode

---

I assume you have created development container as described in the previous section.

In the development container, execute the following command to build the app.

```bash
npm run build
```

Open (`cd` to) the project root `mdn-express-locallibrary` on your **host machine** and execute the following command.

```bash
docker-compose up -d
```

You should access the app on `http://localhost:3000`.

If you would like to push some data into database, run the following command on your **host machine**.

```bash
docker container exec -i mdn-express-locallibrary-app node dist/scripts/initCatalog.js
```

After you refresh the page, you will see some books.

### 2.5. Start App on Host Machine

---

You can also launch the app directly on your host machine.

In this case, you need to prepare the following tools.

- [Node.js 16](https://nodejs.org/en/)
- [MongoDB](https://www.mongodb.com/) or [MongoDB Atlas](https://www.mongodb.com/atlas)

You also need to edit `.env` properly to configure environment variables on Node process.

## 3. Technology Stacks

---

### 3.1. Development Tools

---

- [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/install/)
- [Git](https://git-scm.com/)
- [MongoDB](https://www.mongodb.com/)
- [VS Code](https://code.visualstudio.com/)

### 3.2. Programming Languages

---

- [Node.js](https://nodejs.org/en/)
- [Pug](https://pugjs.org/api/getting-started.html)
- [TypeScript](https://www.typescriptlang.org/)

### 3.3. Frameworks and Libraries

---

- [Express](https://expressjs.com/)
- [Express Validator](https://express-validator.github.io/docs/)
- [Mongoose](https://mongoosejs.com/)

### 3.4. Node Development Tools

---

- [ESLint](https://eslint.org/)
- [Husky](https://github.com/typicode/husky)
- [Jest](https://jestjs.io/)
- [Prettier](https://prettier.io/)
