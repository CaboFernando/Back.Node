//console.log('vai a merda');
const http = require('http');

var host = '127.0.0.1';
let port = 80;


const server = http.createServer(
    (req, res) => {
        res.writeHead(200, {'Content-type': 'text/html; charset=utf-8'});
        res.end("<h1>Hello World</h1>");
    }
);

server.listen(port, host, () => {
    console.log("Servidor rodando em http://" + host + ":" + port);
});