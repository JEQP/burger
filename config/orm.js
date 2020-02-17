var connection = require('connection.js');


var orm = {
    // not sure what this is for
    selectAll: function(tableInput, colToSearch, valOfCol) {
      var queryString = "SELECT * FROM ?? WHERE ?? = ?";
      connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
        if (err) throw err;
        console.log(result);
      });
    },

    insertOne: function (burger_name){
        var queryString = "INSERT INTO burgers ? ?";
        connection.query(queryString, [burger_name, 0], function(err, result){
            if (err) throw err;
            console.log(result);
        })
    },

    updateOne: function(burger_eaten){
        var queryString = "UPDATE burgers SET ? WHERE ?";
        connection.query(queryString, [{
            devoured: 1
        },
        {
            burger_name: burger_eaten
        }
        ], function(err, result){
            if (err) throw err;
            console.log(result);
        })
    }
  };
  
  module.exports = orm;