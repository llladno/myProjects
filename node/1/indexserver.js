const http = require("http")
const fs = require("fs")
const path = require("path")
const mysql = require("mysql2")
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'sql_website',
    password:"qwerty12"
  });

const server = http.createServer((req, res) => {
    
    // res.writeHead(200,{
    //     "Content-Type":"text/html"
    // })
    // if(req.url === "/")
    // {
    //     fs.readFile(path.join(__dirname,"public","index.html"),(err,data)=>{
    //         if(err)throw err
    //         res.writeHead(200,{
    //             "Content-Type":"text/html"
    //         })
    //         res.end(data)
    //     })
    // }
    // else if(req.url === "/contact")
    // {
    //     fs.readFile(path.join(__dirname,"public","contact.html"),(err,data)=>{
    //         if(err)throw err
    //         res.writeHead(200,{
    //             "Content-Type":"text/html"
    //         })
    //         res.end(data)
    //     })
    // }
    // else if(req.url === "/script.js")
    // {
    //     fs.readFile(path.join(__dirname,"public","script.js"),(err,data)=>{
    //         if(err)throw err
    //         res.writeHead(200,{
    //             "Content-Type":"text/html"
    //         })
    //         res.end(data)
    //     })
    // }
    // console.log(req.url)
    let filePath = path.join(__dirname, "public", req.url === "/" ? "index.html" : req.url)
    const ext = path.extname(filePath)

    if (!ext) {
        filePath += ".html"
    }
    console.log(filePath)

    fs.readFile(filePath, (err, content) => {
        if (err) {
            fs.readFile(path.join(__dirname, "public", "ErrorPage.html"), (err, data) => {
                if (err) {
                    res.writeHead(500)
                    res.end("Error")
                }
                else {
                    res.writeHead(200, {
                        "Content-Type": "text/html"
                    })
                    res.end(data)
                }
            })
        }
        else {
            res.writeHead(200, {
                "Content-Type": "text/html"
            })
            res.end(content)
        }
    })
    

})
    
server.listen(3000, () => {

    console.log("Server started")
})
