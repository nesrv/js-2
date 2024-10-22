const fs = require('fs')

const parseFile = async (fn) => {
    const stream = fs.createReadStream(fn)
    for await (let chunk of stream) {
        console.log(chunk);
    }
}

parseFile('history.js')

Symbol.asyncIterator()

const f1 = async () => {
    for (let i = 1; i < 1000; i++) {
        yield i
    }
}

for (let n of f1()){
    
}