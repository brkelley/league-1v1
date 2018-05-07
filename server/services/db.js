var mongo = require('mongodb').MongoClient

var dbService = {
    db: Object,

    checkName: function(db, name) {
        return db.collection("User").find({'name': name}).then(result => (result.length > 0) ? true : false);
    },

    addUser: function(db, user) {
        db.collection("User").insert(user, function(err, result) {
            if(err){
                console.log(err);
            }
        });
    },

    getUsers: function(db){
        return db.collection("User").find();
    }
}
    

module.exports = dbService;