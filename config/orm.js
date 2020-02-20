var connection = require('./connection');


var orm = {
    // This populates the webpage with data from DB
    selectAll: function(tableInput, cb) {
        console.log("orm select all called");
      var queryString = "SELECT * FROM " + tableInput +";";
      connection.query(queryString, function(err, result) {
        if (err) throw err;
        // console.log(result);
        cb(result);
      });
    },

    insertOne: function (tableInput, burger_name, devoured, cb){
        var queryString = "INSERT INTO " + tableInput+" SET ?";
        // console.log("querystring: " + queryString);
        // console.log("burger: " + burger_name + " devoured: "+ devoured);
        connection.query(queryString, {
            burger_name: burger_name,
            devoured: devoured
        }, 
        function(err, result){
            if (err) throw err;
            console.log("affected rows: " + result.affectedRows);
            cb(result);
        }
        );
    },

    updateOne: function(tableInput, devoured, condition, cb){
        var queryString = "UPDATE " + tableInput + " SET ? WHERE ?";
        connection.query(queryString, [{
            devoured: devoured
        },
        {
            id: condition
        }
        ], function(err, result){
            if (err) throw err;
            console.log("queryString: " + queryString);
            cb(result);
        })
    }
  };
  
  module.exports = orm;