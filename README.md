# Node and TypeScript

- If a typescript file has just plain js inside of it and no ts, node will run it as a regular js file. However if it sees typescript specific features like types, it will throw a syntax error.
- You must first compile the file using tsc app.ts and then run node app.js in order to run the file.

* You can install ts node in order to rune typescript code, but its basically the same thing as tsc app.ts and then running node app.js.

# Setup

- run npm init and take the defaults if you can
- run tsc --init to initialize a typescript project as well
- in tsconfig.json:
  - set "target": "es2018"
  - set "module": "commonjs"
  - set "moduleResolution": "node"
  - set "outDir": "./dist"
  - set "rootDir": "./src"
- create src folder
- install dependencies:
  - Express: npm install --save express body-parser
  - Nodemon: npm install --save-dev nodemon
  - TypeScript Types:
    - Node: npm install --save-dev @types/node
    - Express: npm install --save-dev @types/express
- create app.ts file in the src folder
- in package.json file create a start script:
  - "start": "nodemon dist/app.js"

# Starting

- Run tsc -w to have typescript compile the ts file to js and to enter watch mode.

# Going forward

Look up Nest JS to go further with TS
