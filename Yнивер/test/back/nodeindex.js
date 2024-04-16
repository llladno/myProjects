import express from "express"
import path from "path"

const app = express()
const port = 3002
const __dirname = path.resolve()

console.log(path.resolve(__dirname,"public"))


app.use(express.static(path.resolve(__dirname,"../from/src")))
console.log(__dirname)

app.listen(port,()=>{
    console.log(`server has been started on port ${port}`)
})
