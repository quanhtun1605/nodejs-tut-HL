var con = require('../mysqldb.js');

exports.deletevehicle = function deletevehicle(vehicleID, callback) {
  var vehicleID = parseInt(vehicleID);
  var sql = "DELETE FROM `node_tut`.`vehicle` " +
            "WHERE `node_tut`.`vehicle`.`vehicleID`='" + vehicleID + "'";
  con.query(sql, function(err, rows) {
    var result = {};
    if (rows.affectedRows = 1) result = {'status' : 'done'};
    else result = {'status' : 'fail'};
    callback(null, result);
  });
}
