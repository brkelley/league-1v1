const mongo = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/';
const dbName = 'league-1v1';
const userCollection = 'users';

function getUsers(logger) {
    return new Promise((resolve, reject) => {
        mongo.connect(url, (err, db) => {
            if (err) {
                logger.error({err}, 'Mongo Service: Error at addUsers');
                db.close();
                reject(err);
            }
            var dbo = db.db(dbName);
            logger.info(dbName + ' Database created!');
            var collection = dbo.collection(userCollection);
            logger.info(userCollection + ' Collection created!');
            collection.find({}).toArray((err, docs) => {
                if (err) {
                    logger.error({err}, 'Mongo Service: Error at addUsers');
                    db.close();
                    reject(err);
                }
                logger.info("Found the following records : " + JSON.stringify(docs));
                db.close();
                resolve(docs);
            });
        });
    });
};

function addUser(logger, body) {
    return new Promise((resolve, reject) => {
        mongo.connect(url, (err, db) => {
            if (err) {
                logger.error({err}, 'Mongo Service: Error at addUsers');
                reject(err);
            }
            var dbo = db.db(dbName);
            logger.info(dbName + ' Database created!');
            var collection = dbo.collection(userCollection);
            logger.info(userCollection + ' Collection created!');
            collection.find({}).toArray((err, docs) => {
                if (err) {
                    logger.error({err}, 'Mongo Service: Error at addUsers');
                    reject(err);
                }
                logger.info("Found the following records : " + docs.toString());
                db.close();
                resolve(docs);
            });
        });
    });
};
    
module.exports = {
    getUsers: getUsers,
    addUser: addUser
}