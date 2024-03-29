# Users View with Search by name

This project displays users table with data populated from [jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users). End-user can search for users by name and the table data is updated with matching search results.

This project was bootstrapped with [Express Js](https://expressjs.com/) and [Create React App](https://github.com/facebook/create-react-app) using [TypeScript](https://www.typescriptlang.org/).
Server and api layer is located in `/server` folder and client-side code is in `/client` folder. 

## Getting started
Enter the `/client` folder and run `yarn` to bootstrap client-side code. Then do the same inside `/server` folder.
After client and server dependencies have been installed, rename the `.env.example` files to `.env` in both client and server folders.

Now you are ready to run any of the following scripts.

## Available Scripts

In the project `/server` directory, you can run:

### `yarn dev`

Runs the app in the development mode. Server and client code is built and started concurrently. In this mode nodemon is used to watch and restart app when file changes are detected.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser. API endpoints are available on port `3080` in development mode - for example [http://localhost:3080/api/users](http://localhost:3080/api/users).

The client page will reload if you make edits.
You will also see any lint errors in the console.

### `yarn dev:client`

Runs only the client-side app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The client page will reload if you make edits.
You will see any lint errors in the console.

### `yarn dev:server`

Runs only the server-side app in the development mode.

API endpoints are available on port `3080` in development mode - for example [http://localhost:3080/api/users](http://localhost:3080/api/users).\
You will see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.

### `yarn build`

Builds the app for production to the `/server/build` and `/client/build` folders.
It correctly bundles React in production mode and optimizes the build for the best performance.

### `yarn start`

Builds the app for production to the `/server/build` and `/client/build` folders and also starts the server on port `3080`.
Open [http://localhost:3080](http://localhost:3080) to view it in the browser. API endpoints are available on the same port - for example [http://localhost:3080/api/users](http://localhost:3080/api/users).
