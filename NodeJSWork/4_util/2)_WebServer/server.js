const http = require('http') ;
const PORT = 3000;
const server = http.createServer((req, res) => {
    //res.writeHead(200, {'Conetent-Type' : 'text/plain'});
    //res.end('Hello, World');
});
server.listen(PORT, ()=>{console.log(`서버 실행 중 ... ${PORT}`)});

