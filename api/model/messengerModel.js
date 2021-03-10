var  db = require('../database');

module.exports = {

    sender: function (message,sender,receiver,created, callback) {
        var sql = "INSERT INTO `messenger` (message,sender,receiver,created) VALUES('" + message + "', '" + sender + "', '" + receiver + "','" + created + "')";
        db.query(sql, function (err, data) {
          if (err) throw err;
          return callback(data);
    
        })
      },

      
      findById:function(callback) {
        var sql = 'SELECT * FROM messenger';
        db.query(sql, function (err, data) {
          if (err) throw err;
          return callback(data);
        });
      },
    
}