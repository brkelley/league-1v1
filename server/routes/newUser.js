var express = require('express');
var router = express.Router();
var riot = require('../services/riot.js');


router.post('/newUser', (req, res) => {
    var dbService = req.dbService;
    dbService.checkName(dbService.db, req.body.name).then(result =>  {
        if(result){
            res.sendStatus(200);
        }else {
            let user = riot.stubName(req.body.name);
            if(user){
                dbService.addUser(dbService.db, user)
                res.sendStatus(201);
            }else{
                res.sendStatus(500);
            }
        }
    });
})

module.exports = router;