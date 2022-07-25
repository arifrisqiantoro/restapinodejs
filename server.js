const bodyParser = require("body-parser");
const express = require("express");
let ejs = require('ejs');
const app = express();

app.set('view engine', 'ejs');

//parse application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//panggil routes
let routes = require("./src/routes/index");
routes(app);

app.listen(3000, () => {
  console.log("SERVER RUNNING ON PORT 3000");
});