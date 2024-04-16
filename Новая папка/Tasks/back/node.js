const express = require("express");
const data = require("./data.json")
const cors = require("cors");

const app = express()

const PORT = 3005

app.use(cors())

app.listen(PORT, ()=>{
    console.log(`Server has been started on port: ${PORT}`)
})


console.log(data)

app.get("/mainPage", (req,res)=>{
    console.log(req)
    res.send(data)
})