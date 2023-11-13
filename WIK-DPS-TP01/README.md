# TP-01

## Target

Building a TypeScript API with the fewest dependencies

## Prerequisites

-   [Node.js](https://nodejs.org/en/) (v14.15.4)
-   [TypeScript](https://www.typescriptlang.org/) (v4.1.3)

## Setup

```bash
npm init -y
npm install --save-dev typescript
npx tsc --init --rootDir src --outDir dist --esModuleInterop --resolveJsonModule --lib es6 --module commonjs --allowJs true --noImplicitAny true
```

## Run

```bash
npm start # -> npx tsc && node dist/index.js
```

Call the API with [http://localhost:3000/ping](http://localhost:3000/ping). You will get a response with the request headers.

If any other route is called, you will get a 404 response.
