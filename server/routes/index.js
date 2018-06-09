var express = require('express');
var router = express.Router();
var controllers = require('../controllers');

router.get('/data/users', controllers.mongo.getUsers);
router.post('/data/users/add', controllers.mongo.addUser);
//router.post('/Riot', controllers.riot);

module.exports = router;
