const bodyParser = require("body-parser");
const path = require("path")
const express = require("express");
const ejs = require("ejs");
const app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public')); // memberi tahu kepada node folder css dan js

//parse application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//panggil routes
let routes = require("./src/routes/index");
routes(app);

app.listen(3000, () => {
  console.log("SERVER RUNNING ON PORT 3000");
});