const mongoService = require('../services/mongo.service.js');

function getUsers(req, res, next) {
    mongoService.getUsers(req.log)
    .then((data) => {
        res.json(data);
    })
    .catch((err) => {
        req.log.error({ err }, 'Mongo Controller: Error at getUsers');
        res.status(500).json({ err });
       });
} 

function addUser(req, res, next) {
    mongoService.addUser(req.log, req.body)
    .then((data) => {
        res.json(data);
    })
    .catch((err) => {
        req.log.error({ err }, 'Mongo Controller: Error at addUser');
        res.status(500).json({ err });
       });
} 

module.exports = { 
    getUsers: getUsers,
    addUser: addUser
}