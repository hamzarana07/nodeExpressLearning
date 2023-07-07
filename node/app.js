
// MORE HTTP ===================================================



// STREAMS ===================================================
// Break file into chunks. It shows in Network tab transfer encoding as chunked
// const http = require("http")
// const fs = require("fs")

// http.createServer((req, res)=>{
//     const fileStream = fs.createReadStream("./content/big-file.txt", 'utf8');
//     fileStream.on("open", ()=>{
//         fileStream.pipe(res)
//     })
//     fileStream.on("error", (err)=>{
//         res.end(err)
//     });
//     // const text = fs.readFileSync("./content/big-file.txt", 'utf8')
//     // res.end(text)
// })
// .listen(5000)
// =========================
// const stream = fs.createReadStream("./content/big-file.txt", {highWaterMark: 90000, encoding: 'utf8'});
// stream.on('data', (result)=>{
//     console.log(result)
// })
// stream.on('error', (err)=>{
//     console.log(err)
// })

// const fs = require("fs").promises;

// let data = "karachi";

// for (let i=0;i<=10000;i++){
//     result = data + i + "\n"
//     fs.writeFile("./content/big-file.txt", `${result}`, {flag: 'a'}, 'utf8')
// }




// EVENTS WITH HTTP ===========================================

// const http = require("http");


// const server = http.createServer()

// server.on("request", (req, res)=>{
//     res.end("Welcome")
// })

// server.listen(5000)

// EVENTS ======================================================

// const EventEmitter = require("events")
// const customEmitter = new EventEmitter()

// customEmitter.on("response", (name, id)=>{
//     console.log(`data recieved ${name} with id:${id}`, );
// })

// customEmitter.emit('response', "Hamza", 30)



// ASYNC ========================================================

// const fs = require("fs").promises;

// const start = async()=>{
//     try {
//         const first = await fs.readFile("./content/first.txt", 'utf8')
//         const second = await fs.readFile("./content/second.txt", 'utf8')
//         await fs.writeFile("./content/result-mind-grenade.txt", `This is awesome: ${first} ${second}`)
//         console.log(first, second)

//         const result_file = await fs.readFile("./content/result-mind-grenade.txt", 'utf8')
//         console.log(result_file)
//     } catch (error) {
//         console.log(error)
//     }
    
// }
// start()

// const getText = (path)=>{
//     return new Promise((resolve, reject)=>{
//         fs.readFile(path, 'utf8', (err, result)=>{
//             if (err){
//                 reject(err)
//             } else{
//                 resolve(result)
//             }
//         })
//     })
// }

// 


// getText("./content/first.txt")
// .then((result)=>{
//     console.log(result)
// })
// .catch((err)=>{
//     console.error(err)
// })
// HTTP ================================================================

// const { log } = require("console");
// const http = require("http");


// const server = http.createServer((req, res)=>{
//     if (req.url === "/"){
//         res.write("Hello World! NODE")
//         res.end()
//     } else if (req.url === "/about"){
//         res.write("ABOUT PAGE!")
//         res.end()
//     } else{
//         res.end(`
//             <h1 style="text-align:center">404! Page not found</h1>
//             <button class="btn btn-primary">Close</button>
//         `)
//     }
    
// })

// server.listen(5000)


// FILESYSTEM ==========================================================

// const { log } = require("console")
// const {readFile, writeFile} = require("fs")
// const path = require("path")


// log("START")

// readFile(path.join(__dirname, 'content', 'first.txt'), 'utf8', (err, result)=>{
//     if (err){
//         console.error(`Error: ${err}`)
//     } else{
//         console.log(result)
//     }
// })

// writeFile(path.join(__dirname, 'content', 'fileWritten.txt'), "HEY THERE, I WROTE THIS!!!", 'utf8', (err, result)=>{
//     if (!err){
//         console.log(result)
//     }else{
//         console.log(`ERROR: ${err}`)
//     }
// })
// log("DONEE!!")

// ==================================
// readFileSync
// const {readFileSync, writeFileSync} = require("fs");
// const path = require("path")

// const first = readFileSync(path.join(__dirname, 'content', 'first.txt'), 'utf8');
// console.log(first)
// //Use flag: 'a' to append to file
// writeFileSync(path.join(__dirname, 'content', 'result.txt'), `\nResultx: ${first}`, {flag: 'a'}, 'utf8')


// PATH ==========================================================

// const path = require("path");

// console.log(path.sep)

// const filePath = path.join(__dirname, 'content', 'subfolder', 'test.txt')

// console.log(filePath)

// const base = path.basename(filePath)
// console.log(base)

// const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
// console.log(absolute)

// OS =============================================================
// const os = require("os")

// const user = os.userInfo()
// console.log(user)

// console.log(`The system uptime is ${os.uptime()} seconds`)

// const currentOS = {
//     name: os.type(),
//     release: os.release(),
//     totalMem: os.totalmem(),
//     freeMem: os.freemem()
// }

// console.log(currentOS)