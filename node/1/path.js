const path = require("path")
console.log("Название файла: ",path.basename(__filename))
console.log("Название файла: ",path.dirname(__filename))

console.log("Название файла: ",path.parse(__filename).name)

console.log(path.join(__dirname,""))