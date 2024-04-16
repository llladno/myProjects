const express = require("express");
const path = require("path");
const mysql2 = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());
const connection = mysql2.createConnection({
    host: "0.0.0.0",
    // host: "192.168.0.2",
    user: "root",
    port: "3306",
    database: "sql_website",
    // password: "Qwerty12!",
    password: "root",
})


app.listen(3005, () => {
    console.log("Server started");
});

app.get("/api/data/users", (req, res) => {
    connection.connection.query("SELECT * FROM user", (err, res) => {
      if (err) console.log("err");
      data = { res };
    });
    res.json(data);
});

