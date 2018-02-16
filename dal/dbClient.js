module.exports = function() {

    var sendDbCommand = function(command){
        const mongoClient = require('mongodb').MongoClient


        mongoClient.connect(process.env.MONGO_URL, {
            auth: {
            user: process.env.MONGO_USR,
            password: process.env.MONGO_PASS,
            }
        }, function (err, connection) {
            command(connection)                
        });
    }

    var getAllData = function(callback){
        var command = connection => {
            let db = connection.db('bs-node')
            db.collection('dataSource').find().toArray(function(err, result){
                callback(result)
                connection.close()
            })
        }        
        sendDbCommand(command)
    }

    var getDataById = function(id, callback){
        var command = connection => {
            let db = connection.db('bs-node')
            db.collection('dataSource').findOne({"id": id}, function(err, result){
                callback(result)
                connection.close()
            })
        }        
        sendDbCommand(command)
    }

    var insertData = function(data, callback){
        var command = connection => {
            let db = connection.db('bs-node')
            db.collection('dataSource').insert(data, function(err, result){
                callback(result.insertedCount)
                connection.close()
            })
        }        
        sendDbCommand(command)
    }

    return {
        getAllData : getAllData,
        getDataById : getDataById,
        insertData: insertData
    }
}