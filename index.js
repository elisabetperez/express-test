const jsonFile = require('./data.json');
const http = require('http');

const app = http.createServer(function(req,res){
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(jsonFile));
});

app.listen(3000);