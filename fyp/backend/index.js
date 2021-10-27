
const express = require('express');
const bodyParser = require("body-parser");
const userController = require("./controllers/userController");
const db = require("./config/keys").dbUrl;
const passport = require("passport");
const mongo = require("mongoose");

const app = express(); // getting express object to get all the functionality

// this middleware is used to collect forms data from frontend
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(bodyParser.json());

app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// this will solve all cors issues (cors does not cross orgin mean different orgin resources among websites.)
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000/"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
// Routers or Controllers
app.use("/User", userController);

const port = 6563
// Db connection
mongo.connect(db, { useUnifiedTopology: true, }).then((res) => {
    app.listen(port, () => console.log("server is live on port"));

}).catch(err => {
    console.log(err);
})