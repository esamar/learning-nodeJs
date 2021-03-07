const express = require('express');

const response = require('../../../network/response');
const controller = require('./index');

const router = express.Router();

router.get ( '/', function(req, res){

    const list = controller.list();    
    response.success(req , res, list, 200);
    
});

router.get ( '/:id', function(req, res){

    const user = controller.get(req.params.id);    
    response.success(req , res, user, 200);
    
});

module.exports = router;