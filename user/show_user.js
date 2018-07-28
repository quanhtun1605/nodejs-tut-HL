var con = require('../mysqldb.js');

function serverAnswerShowUser(UserName, Email) {
  return {
    //userID    : UserID,
    userName  : UserName,
    email     : Email
  };
}

exports.showUser = function showUser(userID, callback) {
  var uid = parseInt(userID);
  console.log(userID);
  var sql = "SELECT * FROM `node_tut`.`users` " +
            "WHERE `node_tut`.`users`.`userID` = '" + uid + "'";
  con.query(sql, function(err, rows) {
    callback(null, JSON.stringify(serverAnswerShowUser(
      //rows[0].userID,
      rows[0].userName,
      rows[0].email
    )));
  });
}
