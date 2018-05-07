var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  req.dbService.getUsers(req.dbService.db).then(result => {
    res.render('index', { title: 'Express', subtitle: 'Users', users: result});
  })
});

module.exports = router;
