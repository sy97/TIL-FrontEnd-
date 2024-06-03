const fs = require("fs")

//import를 하고싶으면 확장자를 mjs로 만들어야함.

const content = "Hello World, soyeong"

//content를 파일에 저장하는 함수
//이렇게 하고, 터미널에 node fs1.js
fs.writeFile("./hello.txt", content, (err)=>{
    if(err){
        console.log(err);
    }
    //여기에 넣어서강제로 순서를 정해주기.
    fs.readFile("./hello.txt", "utf-8", (err, data) => {
        if(err){
            console.error(err);
            return;
        }
        console.log(data);
    
    });
});

//읽어오기


//하지만, 노드는 비동기이기때문에 저장->읽어오기 순서대로 안될수도있음. 
//그럼 저장하기도 전에 읽는거니까 오류남.
//그래서 강제로 fs.writefile안에 넣어서 순서를 지정해주기.