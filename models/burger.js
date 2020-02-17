var orm = require('./config/orm.js');

var burger = {
    selectAll: function(){
        // not sure what this is meant to do.
    },
    insertOne: function(paramas){
orm.insertOne(burger_name, function(res){
    something something
});
    },
    updateOne: function(params){
        orm.updateOne(burger_eaten, function(res){
something something
        });
    }
}

module.exports = burger;