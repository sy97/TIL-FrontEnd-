const http = require('http') ;
const PORT = 3000;
const server = http.createServer((req, res) => {
    if(req.url === '/home'){
    res.writeHead(200, {'Conetent-Type' : 'application/json'});
    data = {name : "Tom", age : 20}
    res.end(JSON.stringify(data));
}
else if(req.url === '/about'){
    res.setHeader('Content-Type', 'text/html');
    res.write('<html><body>')
    res.write('<h1>About Page</h1>')
    res.write('</body></html>');
    res.end();
}
else{
    res.statusCode = 404;
    res.end();
}

});
server.listen(PORT, ()=>{console.log(`서버 실행 중 ... ${PORT}`)});

