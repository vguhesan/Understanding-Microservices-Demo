var cote = require('cote')
    
var welcomeResponder = new cote.Responder({
    name: 'welcome responder',
    namespace: 'welcome',
    respondsTo: ['msg']
});

welcomeResponder.on('*', console.log);

welcomeResponder.on('msg', (req, cb) => {
	var msg = 'Welcome to the world of Microservices. The current time is:' + new Date();
	var welcomemsg = {message: msg};
    cb(welcomemsg);
});

