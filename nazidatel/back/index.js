const { Client } = require('pg')

const client = new Client({
    host: 'localhost',
    user:'postgres',
    port: 5432,
    password: 'qwerty12',
    database: 'nozidatel'
})

client.connect()

client.query('select * from client', (err, res)=>{
    console.log(res.rows)
})