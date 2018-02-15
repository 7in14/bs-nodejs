'use strict'

module.exports = function(app){
    var notifier = require('../controllers/notifierController')

    app.route('/api/ping').get(notifier.ping)   
    app.route('/api/dataSource/:id').get(notifier.getById)
    app.route('/api/dataSource').get(notifier.getAll)
}