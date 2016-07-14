var express = require("express");
var bodyParser = require("body-parser");
var sequelize = new Sequelizer('path/to/database.sqlite');

sequelize
    .authenticate()
    .then(success =>
        console.log("connection successful"))
    .catch(err =>
        console.log("connection failed"));

var app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var routes = require("./routes/routes.js")(app);

var server = app.listen(8080, function() {
    console.log("listening on port %s...", server.address().port);
});
