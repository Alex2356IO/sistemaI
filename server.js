const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
var cookieParser = require('cookie-parser')
require('dotenv').config({path: './.env'});

const app = express();

var corsOptions = {
  origin: process.env.HOST,
credentials: true
};

app.use(cookieParser())

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/main", (req, res) => {
  res.json({ message: "Welcome to main." });
});



// Db models and roles
const db = require("./models");
const Role = db.role;
db.sequelize.sync({force: false}).then(() => {
  
  //force: true 
  console.log('Drop and Resync Db');
  
  initial();
}
)
;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", process.env.HOST);
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  next();
});


function initial() {
  Role.create({
    id: 1,
    name: "user"
  });
 
  Role.create({
    id: 2,
    name: "moderator"
  });
 
  Role.create({
    id: 3,
    name: "admin"
  });
}

//routes

require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);
require('./routes/product.routes')(app);


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

  // set static folder renders reactapp
  app.use(express.static('../Client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname,'../' ,'client', 'build', 'index.html'));
  });