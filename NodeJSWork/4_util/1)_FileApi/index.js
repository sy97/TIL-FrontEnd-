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


function writeFile(data){
    try{
        fs.writeFileSync(filepath, JSON.stringify(data, null, 2));
    }
    catch(err){
        console.error("파일 쓰기 오류 :  " + err);

    }
}

//같은키가 있는지 검사하고 writeFile로 넘겨주기
function create(key, value){
    const data = readFile();
    if(data[key]) {
        console.log("데이터가 이미 존재합니다.");
        return;
    }

    data[key] = value;
    writeFile(data);
    console.log("데이터가 생성되었습니다.")
}


function update(key, value){
    const data = readFile();
    if(data[key]){
        data[key] = value;
        writeFile(data);
        console.log("데이터 업데이트가 됐습니다.")
    }

    else{
        console.log("데이터를 찾을 수 없습니다.")
    }
}

function remove(key){
    const data = readFile();
    if(data[key]){
        delete data[key];
        writeFile(data);
        console.log("데이터 삭제 완료")
    }
    else{
        console.log("데이터를 삭제할수 없습니다.")
    }
    
}

//node index.js read name

//node index.js create age 20 (create)
//node index.js update name Alice(update)
//node index.js delete name(delete)
const args = process.argv.slice(2);
//2부터 가져오겠다. read와 name.

//read
const command = args[0];

//name
const key = args[1];
const value = args[2]

switch(command){
    case 'read':
        read(key);
        break;
    case 'create':
        create(key, value);
        break;
    case 'update':
        update(key, value);
        break;
    case 'delete':
        remove(key);
        break;
    
    default:
    console.log('사용 가능한 명령어 : create, read, update, delete');
    console.log("예시 : node index.js create key value");
}