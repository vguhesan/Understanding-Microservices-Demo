var app = require('express')(),
    bodyParser = require('body-parser'),
    server = require('http').Server(app),
    io = require('socket.io')(server),
    cote = require('cote');

app.use(bodyParser.json());

app.all('*', function(req, res, next) {
    console.log(req.method, req.url);
    next();
});

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/welcome', function(req, res) {
    welcomeRequester.send({type: 'msg'}, (data) => {
        res.send(data);
    });
});


var welcomeRequester = new cote.Requester({
    name: 'Welcome Message requester',
    namespace: 'welcome',
    timeout: 1000
});


server.listen(5000);

new cote.Sockend(io, {
    name: 'web server sockend server'
});

