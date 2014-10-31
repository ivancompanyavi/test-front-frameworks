var express = require('../node_modules/express');
var app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/api/todos', function (req, res) {
    var data = [
        {
            "author": "Jordi",
            "message": "This is a message"
        },
        {
            "author": "Mike",
            "message": "Why are we using this?"
        },
        {
            "author": "Joan",
            "message": "Cause is cool"
        }
    ];
    res.send(data);
});

var server = app.listen(3000, function () {

    var host = server.address().address
    var port = server.address().port

    console.log('Example app listening at http://%s:%s', host, port)

});