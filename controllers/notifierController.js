'use strict'

exports.ping = function(req, res){
    res.send('pong')
}

exports.getById = function(req, res){
    //todo: validation
    let id = req.params.id*1
    var db = require('../dal/dbClient')()
    var result = db.getDataById(id, result => res.send(result))
}

exports.getAll = function(req, res){
    var db = require('../dal/dbClient')()
    var result = db.getAllData(result => res.send(result))
}

