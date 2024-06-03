const fs = require("fs")

const content = "안녕하시소 soyeong!!!!";


//동기식 함수
fs.writeFileSync('./hello2.txt', content);
const data = fs.readFileSync('./hello2.txt', "utf-8")
console.log(data);