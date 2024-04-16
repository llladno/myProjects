const fs = require("fs")
const path = require("path")
// fs.mkdir(path.join(__dirname,"test"),(err)=>{
//     if (err){
//         throw err
//     }
//     console.log("Dir make")
// })
const filePath = path.join(__dirname,"test","text.txt")

// fs.appendFile(filePath,"\n Hello again",(err)=>{
//     if(err) throw err
//     console.log("File makes")
// })

fs.readFile(filePath,"utf-8",(err,content) =>{
    if (err)throw err

    // const data = Buffer.from(content)
    // console.log(data.toString())
    console.log(content)

})