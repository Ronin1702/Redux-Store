# Redux-Store [![MIT](https://img.shields.io/static/v1.svg?label=📃%20License&message=MIT&color=important)](./LICENSE)

An e-commerce platform using `Redux Store`. Not to confuse with an actual store website that sells goods, `Redux Store` brings together the state, actions, and reducers that make up an app. Since Redux apps always have a single store, hence the singular `Store`. For more info, please visit [Redux Store](https://redux.js.org/tutorials/fundamentals/part-4-store).

## Table of Contents

- [Description](#description)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Links](#links)
- [License](#license)

## Description

```md
AS a senior engineer working on an e-commerce platform
I WANT my platform to use Redux to manage global state instead of the Context API
SO THAT my website's state management is taken out of the React ecosystem
```

`Redux Store` has several responsibilities:

- Holds the current application state inside
- Allows access to the current state via `store.getState()`;
- Allows state to be updated via `store.dispatch(action)`;
- Registers listener callbacks via `store.subscribe(listener)`;
- Handles unregistering of listeners via the unsubscribe function returned by `store.subscribe(listener)`.

[_back to top_](#table-of-contents)

## Tech Stack

- [![CSS3](https://img.shields.io/badge/CSS3-gray?logo=css3)](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [![HTML5](https://img.shields.io/badge/HTML5-gray?logo=html5)](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
- [![Javascript](https://img.shields.io/badge/JavaScript-ES6+-yellow?logo=javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [![Node.js](https://img.shields.io/badge/Node.js®-latest-blue?logo=node.js)](https://nodejs.org/en/)
  - [![Concurrently](https://img.shields.io/badge/Concurrently-5.1.0-blue?logo=npm)](https://www.npmjs.com/package/concurrently)
  - [![Nodemon](https://img.shields.io/badge/Nodemon-3.0.1-blue?logo=nodemon)](https://www.npmjs.com/package/nodemon)
- [![Express.js](https://img.shields.io/badge/Express.js-4.18.2-green?logo=express)](https://expressjs.com/)
- [![MongoDB](https://img.shields.io/badge/MongoDB-latest-green?logo=mongodb)](https://www.mongodb.com/)
  - [![Mongoose](https://img.shields.io/badge/Mongoose-7.5.3-green?logo=mongoose)](https://mongoosejs.com/)
- [![GraphQL](https://img.shields.io/badge/GraphQL-gray?logo=graphql)](https://graphql.org/)
  - [![Apollo Server](https://img.shields.io/badge/Apollo%20Server-4.9.3-blue?logo=apollo-graphql)](https://www.apollographql.com/docs/apollo-server/)
- [![Bcrypt](https://img.shields.io/badge/Bcrypt-5.1.1-orange?logo=npm)](https://www.npmjs.com/package/bcrypt)
- [![jsonwebtoken](https://img.shields.io/badge/jsonwebtoken-9.0.2-green?logo=npm)](https://www.npmjs.com/package/jsonwebtoken)
  - [![JWT Decode](https://img.shields.io/badge/JWT%20Decode-3.1.2-green?logo=npm)](https://www.npmjs.com/package/jwt-decode)
- [![React](https://img.shields.io/badge/React-18.2.0-blue?logo=react)](https://reactjs.org/)
  - [![React-DOM](https://img.shields.io/badge/React--DOM-18.2.0-lightblue?logo=react)](https://reactjs.org/)
  - [![React Router DOM](https://img.shields.io/badge/React%20Router%20DOM-6.16.0-purple?logo=react-router)](https://reactrouter.com/)
  - [![Apollo Client](https://img.shields.io/badge/Apollo%20Client-3.8.4-blue?logo=apollo-graphql)](https://www.apollographql.com/docs/react/)
- [![Vite](https://img.shields.io/badge/Vite-4.4.9-blue?logo=vite)](https://vitejs.dev/)
  - [![Vite React Plugin](https://img.shields.io/badge/Vite%20React%20Plugin-4.1.0-lightblue?logo=vite)](https://vitejs.dev/)
- [![Stripe](https://img.shields.io/badge/Stripe-13.8.0-blue?logo=stripe)](https://stripe.com/)
  - [![Stripe.js](https://img.shields.io/badge/Stripe.js-2.1.7-blue?logo=stripe)](https://stripe.com/docs/js)
- [![Redux](https://img.shields.io/badge/Redux-4.2.1-purple?logo=redux)](https://redux.js.org/)
  - [![Redux Toolkit](https://img.shields.io/badge/Redux%20Toolkit-1.9.6-purple?logo=redux)](https://redux-toolkit.js.org/)
  - [![React Redux](https://img.shields.io/badge/React%20Redux-8.1.3-purple?logo=redux)](https://react-redux.js.org/)

[_back to top_](#table-of-contents)

## Installation

1. Packages to support this application can be installed by using [_npm install_](https://docs.npmjs.com/cli/v9/commands/npm-install) commands.

   > **Note**: If you do not have a `package.json` in your directory already, enter command below to [_initiate_](https://docs.npmjs.com/cli/v9/commands/npm-init).
   >
   > ```powershell
   > npm init -y
   > ```

2. **Important**: Please @ the **EXACT** versions as shown above to ensure the functionality of this application.

   - Main Project:

     ```powershell
     npm i concurrently@5.1.0 --save-dev
     ```

   - Server:

     ```powershell
     npm i @apollo/server@4.9.3 bcrypt@5.1.1 express@4.18.2 graphql@16.8.1 jsonwebtoken@9.0.2 mongoose@7.5.3 stripe@13.8.0
     &&
     npm i nodemon@3.0.1 --save-dev
     ```

   - Client:

     ```powershell
     npm i @apollo/client@3.8.4 @stripe/stripe-js@2.1.7 @testing-library/react@14.0.0 graphql@16.8.1 happy-dom@12.6.0 jwt-decode@3.1.2 react@18.2.0 react-dom@18.2.0 react-router-dom@6.16.0 vitest@0.34.6 @reduxjs/toolkit@1.9.6 react-redux@8.1.3
     &&
     npm i @types/react@18.2.24 @types/react-dom@18.2.8 @vitejs/plugin-react@4.1.0 eslint@8.50.0 eslint-plugin-react@7.33.2 eslint-plugin-react-hooks@4.6.0 eslint-plugin-react-refresh@0.4.3 vite@4.4.9 --save-dev
     ```

3. **Config**: Please add the correct environmental variables in the `.env` file in the `server` directory like the example below:

   ```javascript
   MONGODB_URI=mongodb+srv://<username>:<password>@<cluster-name>.mongodb.net/<collection-name>
   SECRET=<SECRET-TO-JWT>
   ```

[_back to top_](#table-of-contents)

## Usage

- This application can be invoked by using the following command:

    ```powershell
    npm start
    ```

- Workflow:

  ```md
    GIVEN an e-commerce platform that uses Redux to manage global state
    WHEN I review the app’s store
    THEN I find that the app uses a Redux store instead of the Context API
    WHEN I review the way the React front end accesses the store
    THEN I find that the app uses a Redux provider
    WHEN I review the way the app determines changes to its global state
    THEN I find that the app passes reducers to a Redux store instead of using the Context API
    WHEN I review the way the app extracts state data from the store
    THEN I find that the app uses Redux instead of the Context API
    WHEN I review the way the app dispatches actions
    THEN I find that the app uses Redux instead of the Context API
  ```

[_back to top_](#table-of-contents)

## Screenshots

<!-- ![Screenshot](./Screenshot.png) -->

## Links

[![Tweet about this](https://img.shields.io/static/v1.svg?label=Tweet%20about%20this&message=🎵&color=blue&logo=twitter&style=social)](https://twitter.com/intent/tweet?text=Check%20out%20this%20Redux%20Store%20App%20on%20GitHub:%20https://github.com/Ronin1702/Redux-Store)

- GitHub Repo : [Redux-Store](https://github.com/Ronin1702/Book-Search-Engine)
<!-- - HeroKu Deployed Link : [Redux-Store](https://redux-store.herokuapp.com/) -->

[_back to top_](#table-of-contents)

## License

- This application is licensed by [![MIT](https://img.shields.io/static/v1.svg?label=📃%20License&message=MIT&color=important)](./LICENSE).

[_back to top_](#table-of-contents)

---

[![Copyright](https://img.shields.io/static/v1.svg?label=Redux%20Store%20©️%20&message=%202023%20Kai%20Chen&labelColor=informational&color=033450)](https://kaichen.biz)
