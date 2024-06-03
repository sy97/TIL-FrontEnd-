const fs = require("fs");
const filepath = "./data.json" //여기에 crud

function readFile(){
    try{
        const data = fs.readFileSync(filepath, 'utf-8');
        return JSON.parse(data);
    }
    catch(err){
        console.error("파일 읽기 오류 :  " + err);

    }
}

function read(key){
    const data = readFile();
    if(data[key]){
        console.log(`${key} : ${data[key]}`);
    }
    else{
        console.log('데이터를 찾을 수 없다.')
    }

}

//node index.js read name

//node index.js create age 20 (create)
//node index.js update name Alice(update)
//node index.js delete name(delete)
const args = process.argv.slice(2);
//2부터 가져오겠다. read와 name.

//read
const commnad = args[0];

//name
const key = args[1];

read(key);
