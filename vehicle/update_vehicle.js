var con = require('../mysqldb.js');

exports.updatevehicle = function updatevehicle(vehicleID, vehicleName, userID, callback) {
  var vehicleID = parseInt(vehicleID);
  var sql = "UPDATE `node_tut`.`vehicle` " +
            "SET `vehicleName`='" + vehicleName + "', `userID`='" + userID + "' " +
            "WHERE `vehicleID`='" + vehicleID + "'";
  con.query(sql, function(err, rows) {
    var result = {};
    if (rows.affectedRows = 1) result = {'status' : 'done'};
    else result = {'status' : 'fail'};
    callback(null, result);
  });
}