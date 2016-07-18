# Redux Express Starter

There are many starter kits out there, but when I started to use one for me, many were too large to get started and many were not suited for my use. So I created a new starter kit with minimum features to get started.

This starter kit is mainly built to use redux, REST API with express.

## Features
- Supports ES6 (Client, However if you install node 6 you will have ES6 support in backend also) else use babel
- Uses webpack for building
- Client side routing with 'react-router'
- Server side routing for express (REST API)
- Mongoose support for MongoDB
- eslint for linting
- Clean organization of modules

## Running
Clone this repo
```
git clone https://github.com/mohithg/redux-express-starter.git
```

First install dependencies

```
npm install
```
- This uses webpack to listen to your front-end code changes so in one terminal run
```
npm run start
```
- To start the server in another terminal start
```
npm run server
```
- Goto your browser
To get the front end stuff, however you can configure routes in client/modules/core/routes.js
```
http://localhost:8000/some
```
For api, the entry point is /api, for now I have created a sample api at /api/test
```
http://localhost:8000/api/test
```

For now code watch runs only for client side so for client side changes you need not perform a server restart



##TODOS:
- Add nodemon to watch for server code changes and restart server
- Add tests
