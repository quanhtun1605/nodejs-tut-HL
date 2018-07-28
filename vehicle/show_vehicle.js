var con = require('../mysqldb.js');

function serverAnswerShowVehiclesUser(VehicleName, UserID) {
  return {
    //vehicleID          : vehicleID,
    vehicleName  : VehicleName,
    userID     : UserID
  };
}

exports.showvehicle = function showvehicle(vehicleID, callback) {
  var vid = parseInt(vehicleID);
  console.log(vehicleID);
  var sql = "SELECT * FROM `node_tut`.`vehicle` " +
            "WHERE `node_tut`.`vehicle`.`vehicleID` = '" + vid + "'";
  con.query(sql, function(err, rows) {
    callback(null, JSON.stringify(serverAnswerShowVehiclesUser(
      //rows[0].vehicleID,
      rows[0].vehicleName,
      rows[0].userID
    )));
  });
}
