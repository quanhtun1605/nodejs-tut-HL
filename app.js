var express    = require('express');
var bodyParser = require('body-parser');

var app = express();
var db  = require('./mysqldb');

var cUser  = require('./user/create_user.js');
var saUser = require('./user/show_all_users.js');
var sUser  = require('./user/show_user.js');
var uUser  = require('./user/update_user.js');
var dUser  = require('./user/delete_user.js');

var cvehicle  = require('./vehicle/create_vehicle.js');
var savehicle = require('./vehicle/show_all_vehicles.js');
var svehicle  = require('./vehicle/show_vehicle.js');
var uvehicle  = require('./vehicle/update_vehicle.js');
var dvehicle  = require('./vehicle/delete_vehicle.js');

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods',
                'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers',
                'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// ------------------------ USER ----------------------------------------------

// CREATE A USER
app.post('/create_user', function(req, res) {
  console.log("create_user");
  var userName = req.body.userName;
  var email = req.body.email;
  cUser.createUser(userName, email, function(err, result) {
    console.log(result);
    res.send(result);
  });
});

// SHOW ALL USERS
app.post('/show_all_users', function(req, res) {
  console.log("show_all_users");
  saUser.showAllUsers(function(err, result) {
    console.log(result);
    res.send(result);
  });
});

// SHOW USER
app.post('/show_user', function(req, res) {
  console.log("show_user");
  var userID = req.body.userID;
  console.log(userID);
  sUser.showUser(userID, function(err, result) {
    console.log(result);
    res.send(result);
  });
});

// UPDATE USER
app.post('/update_user', function(req, res) {
  console.log("update_user");
  var userID = req.body.userID;
  var userName = req.body.userName;
  var email = req.body.email;
  uUser.updateUser(userID, userName, email, function(err, result) {
    console.log(result);
    res.send(result);
  });
});

// DELETE USER
app.post('/delete_user', function(req, res) {
  console.log("delete_user");
  var userID = req.body.userID;
  dUser.deleteUser(userID, function(err, result) {
    console.log(result);
    res.send(result);
  });
});

// ------------------------ USER ----------------------------------------------


// ---------------------- vehicle ----------------------------------------------

// CREATE A vehicle
app.post('/create_vehicle', function(req, res) {
  console.log("create_vehicle");
  var userID = req.body.userID;
  var vehicleName = req.body.vehicleName;
  cvehicle.createvehicle(userID, vehicleName, function(err, result) {
    console.log(result);
    res.send(result);
  });
});

// SHOW ALL Vehicles
app.get('/show_all_vehicles', function(req, res) {
  console.log("show_all_vehicles");
  var vehicleID = req.body.vehicleID;
  savehicle.showAllVehicles(vehicleID, function(err, result) {
    console.log(result);
    res.send(result);
  });
});

// SHOW vehicle
app.post('/show_vehicle', function(req, res) {
  console.log("show_vehicle");
  var vehicleID = req.body.vehicleID;
  console.log(vehicleID);
  svehicle.showvehicle(vehicleID, function(err, result) {
    console.log(result);
    res.send(result);
  });
});

// UPDATE vehicle
app.post('/update_vehicle', function(req, res) {
  console.log("update_vehicle");
  var vehicleID = req.body.vehicleID;
  var vehicleName = req.body.vehicleName;
  var userID = req.body.userID;
  uvehicle.updatevehicle(vehicleID, vehicleName, userID, function(err, result) {
    console.log(result);
    res.send(result);
  });
});

// DELETE vehicle
app.post('/delete_vehicle', function(req, res) {
  console.log("delete_vehicle");
  var vehicleID = req.body.vehicleID;
  dvehicle.deletevehicle(vehicleID, function(err, result) {
    console.log(result);
    res.send(result);
  });
});

// ---------------------- vehicle ----------------------------------------------

module.exports = app;
