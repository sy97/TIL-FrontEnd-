const fs = require("fs/promises")

const content = "안녕하세요~ soyeong";

async function helloworld() {
    try{
    await fs.writeFile("./hello.txt", content);
    const data = await fs.readFile("./hello.txt", "utf-8");

    console.log(data);
    }
    catch(err){
        console.log(err);
    }
}

helloworld();