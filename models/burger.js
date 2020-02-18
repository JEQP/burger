var orm = require('../config/orm.js');
//cb is the callback function. It is what gets the restul from orm
var burger = {
    selectAll: function(cb){
        console.log("selectAll called");
        orm.selectAll("burgers", function(res) {
            console.log("res returned to burger.js");
            cb(res);
          });

    },

    insertOne: function(burger_name, cb){
        console.log("insertOne called");
        orm.insertOne("burgers", burger_name, 0, function(res){
console.log("result returned to insertOne");
cb(res);
        })
    }
//     insertOne: function(paramas){
// orm.insertOne(burger_name, function(res){
//     something something
// });
//     },
//     updateOne: function(params){
//         orm.updateOne(burger_eaten, function(res){
// something something
//         });
//     }
};

module.exports = burger;