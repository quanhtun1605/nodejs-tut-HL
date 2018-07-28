var con = require('../mysqldb.js');

function serverAnswerShowAllDevice(Rows) {
  var result = [];
  for (var i=0; i < Rows.length; i++) {
    result.push({
      vehicleID          : Rows[i].vehicleID,
      vehicleName  : Rows[i].vehicleName
    })
  }
  return result;
}

exports.showAllVehicles = function showAllVehicles(userID,callback) {
  var userID = parseInt(userID);
  //var sql = "SELECT `node_tut`.`vehicle`.`vehicleID`, `node_tut`.`vehicle`.`vehicleName` " +
   //         "FROM `node_tut`.`users` " +
     //       "INNER JOIN `node_tut`.`vehicle` " +
       //     "ON `node_tut`.`users`.`userId` = `node_tut`.`vehicle`.`userID`" +
         //   "WHERE `node_tut`.`users`.`userID` = '" + userID + "'";
  var sql = "SELECT * FROM `node_tut`.`vehicle`";
  con.query(sql, function(err, rows) {
    callback(null, JSON.stringify(serverAnswerShowAllDevice(rows)));
  });
}
