var orm = require('../config/orm.js');
//cb is the callback function. It is what gets the restul from orm
var burger = {
    selectAll: function (cb) {
        console.log("selectAll called");
        orm.selectAll("burgers", function (res) {
            console.log("res returned");
            cb(res);
        });

    },

    insertOne: function (burger_name, cb) {
        console.log("insertOne called");
        orm.insertOne("burgers", burger_name, 0, function (res) {
            console.log("result returned to insertOne");
            cb(res);
        })
    },


    updateOne: function (devoured, condition, cb) {
        orm.updateOne("burgers", devoured, condition, function (res) {
            cb(res);
        });
    }

};

module.exports = burger;