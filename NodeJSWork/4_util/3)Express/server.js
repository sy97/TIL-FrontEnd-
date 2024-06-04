const express = require("express");

const PORT = 4000;
const HOST = "localhost";

const Users = [
    {id : 0, name : 'Jack'},
    {id : 1, name : 'Jennifer'}
]

const app = express();
app.use((req, res, next)=>{
    console.log(`${req.method} ${req.rul}`);
    next();
});

app.use((req, res, next)=>{
    const start = Date.now();
    console.log(`start : ${req.method} ${req.rul}`);
    next();

    const diffTime = Date.now() - start;
    console.log(`end : ${req.method} ${req.rul} ${diffTime}ms`);
});

app.get("/", (req,res)=>{ res.end("Hello World"); });
app.get("/users", (req,res)=>{ res.send(Users); });
app.get("/users/:userId", (req, res)=>{
    const userId = Number(req.params.userId)
    const user = Users[userId];
    console.log(user);

    if(user){
        res.json(user);
        
    }

    else{
        res.sendStatus(404);
    }
})



app.listen(PORT, HOST);

console.log(`Runiing on http://${HOST}:${PORT}`);
