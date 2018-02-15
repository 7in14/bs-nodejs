module.exports = function() {

    var sendDbCommand = function(command){
        const mongoClient = require('mongodb').MongoClient

        //todo move connection string to configuration
        mongoClient.connect('', {
            auth: {
            user: '7in14-db',
            password: '',
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