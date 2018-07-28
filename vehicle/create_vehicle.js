var con = require('../mysqldb.js');

function randomInt(low, high) {
  return Math.floor(Math.random() * (high - low) + low);
}

exports.createvehicle = function createvehicle(userID, vehicleName, callback) {
  var vehicleID = randomInt(100000, 999999);
  var sql = "INSERT INTO `node_tut`.`vehicle` (`vehicleID`, `vehicleName`, `userID`) " +
            "VALUES ('" + vehicleID + "', '" + vehicleName + "', '" + userID + "')";
 con.query(sql, function(err, rows) {
    var result = {};
    if (rows.affectedRows = 1) result = {'status' : 'done'};
    else result = {'status' : 'fail'};
    callback(null, result);
  });
}
