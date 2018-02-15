var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000

var routes = require('./routes/routes')
routes(app)

app.listen(port)

console.log('api server started on: ' + port)


