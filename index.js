const express = require("express");
//npm install morgan
const morgan = require("morgan");
//npm install cors
const cors = require("cors");
//npm install helmet
const helmet = require("helmet");

//import middleware
const auth = require("./middleware/auth");
//import controller
const catsController = require("./controllers/cats")
//import router
const catsRouter = require('./routes/cat');


const app = express();

//middleware that serves static content
app.use(express.static("public"));

//middleware that helps with logging
//use "tiny" for condensed info
app.use(morgan("tiny"));
//OR use "common" for more details
app.use(morgan("common"));

//CORS - allow requests from other srevers/domains
app.use(cors());

//middleware that helps with security
app.use(helmet());

//middleware that helps with interpreting json
app.use(express.json());

//custom middleware defined in ./middleware/auth - applied to the whole app
app.use(auth);

//get request handler
app.get("/users", (req, res) => {
    res.send("Get says OK");
})

//get request handler with imported controller from ./controllers/cats
app.get("/cats", catsController);

//applying router imported from ./routes/cat
app.use("/cats", catsRouter);

//post request handler with auth middleware applied as 2nd parameter
app.post("/user", auth, (req, res) => {
    res.send("Post says OK");
})


app.listen(4000);
