const config = require('./config/config.js')

const socketIO = require('socket.io');
const http = require('http');
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./db");

const app = express();

//connection from db here
// db.connect(app);

const server = http.createServer(app);
const io = socketIO(server);

const environment = config[
  process.env.NODE_ENV || 
  'development'
]



app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//  adding routes
require("./routes")(app);

server.listen(environment.port, () => {
  console.log(`Server Up: ${environment.port}`);
});

module.exports = app;
