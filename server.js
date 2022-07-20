const bodyParser = require('body-parser');
const express = require('express');
const app = express();

//parse application/json

app.unsubscribe(app.use(bodyParser.json()));
app.use(bodyParser.urlencoded({extended: true}));





app.listen(3000, () => {
    console.log('SERVER RUNNING ON PORT 3000');
});