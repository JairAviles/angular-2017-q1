var router = require('express').Router(),
    jwt = require('jwt-simple'),
    createToken = require('./createToken'),
    moment = require('moment'),
    cors = require('cors'),
    secret = require('../config/tokenSecret').secret;

var collection;

var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/platzi-angular-mean',
function(err, db) {
    if(!err) {
        console.log("MongoDB connected");
        collection = db.collection('tickets');
    } else {
        console.log(err);
    }
});

function ensureAuthorized(req, res, next) {
    console.log(req.headers);
    if(req.headers.authorization) {
        console.log("->", + req.headers.authorization);
        try {
            var payload = jwt.decode(req.headers.authorization, secret);
        } catch(err) {
            res.set('Content-Type', 'application/json').send(JSON.stringify({
               status: 403,
               message: 'error 1'
            }));
        }
        // check expiration
        if(payload.exp > moment().unix()){
            console.log(loggedUsers);
            next();
        }
    }
}

router.get('/tickets', cors(), function(req, res){
    "use strict";
    collection.find().toArray(function (err, items){
        var resultado;
        if(!err) {
            resultado = {
                status: 200,
                result: items
            }
        } else {
            resultado = {
                status: 500,
                result: err
            }
        }
        res.set('Content-Type', 'application/json').send(JSON.stringify(resultado));
    });
});

module.exports = router;