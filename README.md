

** USE


** STEPS

- npm init -y
- change `"main": "index.js"` to `"main": "server.js"` in `package.json`
- npm i express ejs express-ejs-layouts
- npm i --save-dev nodemon
- set `"start": "node server.js"` `"scripts"` in `package.json`
- set `"startDev": "nodemon server.js"` `"scripts"` in `package.json`
- create `server.js` file and config it
- npm run devStart