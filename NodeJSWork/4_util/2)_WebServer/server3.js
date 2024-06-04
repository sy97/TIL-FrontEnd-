const http = require('http') ;
const PORT = 3000;
const server = http.createServer((req, res) => {
    if(req.url === '/home'){
    res.writeHead(200, {'Conetent-Type' : 'application/json'});
    data = {name : "Tom", age : 20}
    res.end(JSON.stringify(data));
}
else if(req.method==='POST' && req.url === '/home'){
    req.on('data', (data)=>{
        const postData = data.toString();
        console.log(postData);
    })
}
else{
    res.statusCode = 404;
    res.end();
}

});
server.listen(PORT, ()=>{console.log(`서버 실행 중 ... ${PORT}`)});

