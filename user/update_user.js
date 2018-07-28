var con = require('../mysqldb.js');

exports.updateUser = function updateUser(userID, userName, email, callback) {
  var userID = parseInt(userID);
  var sql = "UPDATE `node_tut`.`users` " +
            "SET `userName`='" + userName + "', `email`='" + email + "' " +
            "WHERE `userID`='" + userID + "'";
  con.query(sql, function(err, rows) {
    var result = {};
    if (rows.affectedRows = 1) result = {'status' : 'done'};
    else result = {'status' : 'fail'};
    callback(null, result);
  });
}