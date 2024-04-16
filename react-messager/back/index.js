const express = require('express')
const cors = require('cors')
const {MongoClient, Collection, ObjectId} = require('mongodb')
const app = express()
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');
const cookie = require('cookie')



const urlDB = 'mongodb://admin:123@localhost:27017/?authMechanism=DEFAULT'

app.use(cors({credentials: true, origin: 'http://localhost:3000'}));

app.use(bodyParser())
app.use(cookieParser());

let client, collection, cookies

app.listen(PORT = 3005, () => {
    console.log(`server Started on Port ${PORT}`)
})


async function connect() {
    client = await MongoClient.connect(
        urlDB,
        {useNewUrlParser: true, useUnifiedTopology: true}
    ).catch(err => console.log('error', err));
    collection = client.db('messager').collection('messager')
}

connect().then(console.log('DataBase Connected Successful')).catch(err => {
    err ? console.log('ERROR', err)
        : null
});

app.get('/set-cookie', (req, res) => {
    res.cookie('user', 'John', { maxAge: 1000, httpOnly: true });
    res.send({body: 'Cookie has been set'});
});


app.get('/', (req,res)=>{
    cookies = cookie.parse(req.headers.cookie || '');
    const userName = cookies.user || 'Guest';
    console.log(cookies)
    console.log(userName)
    res.send(userName)
})

app.post('/registration', async (req,res)=>{
    const data = req.body.data
    let objectId = new ObjectId()
    let find = await collection.find({'user':data.login}).toArray()
    console.log(!find[0]?.user)
    if (!find[0]?.user) {
        collection.insertOne({_id: objectId,
            user:data.login,
            email: data.email,
            password: data.password,
        })
        res.send('ok')
    } else {
        res.send('not unique')
    }
})


app.post('/getUsers',async (req,res)=>{
    console.log(req.body)
    let result = await collection.find({user:{$regex:req.body.search}}).toArray()
    console.log(result)
    res.send(result[0]?.user ? result : 'Error')
})

app.post('/setMessage',async (req, res)=>{
    console.log(req.body)
    let cook = cookie.parse(req.headers.cookie)
    const findQuery = {$and:[{user1:cook.user}, {user2:req.body.chat}]}
    const findQuery2 = {$and:[{user1:req.body.chat}, {user2:cook.user}]}
    let find = await collection.find(findQuery).toArray()
    let find3 = await collection.find(findQuery2).toArray()


    if(find.length) {
        collection.updateOne(findQuery, {$push:
                {messages: {
                user: cook.user,
                    text:req.body.message
                }}})

    } else if (find3.length) {
        collection.updateOne(findQuery2, {$push:
                {messages: {
                        user: cook.user,
                        text:req.body.message
                    }}})
    }
    else {
        collection.insertOne({
            _id: new ObjectId(),
            user1: cook.user,
            user2: req.body.chat,
            messages: [
                {
                    user: cook.user,
                    text: req.body.message
                }
            ]
        })
    }

    console.log(cook.user)
    res.send('ok')
})


app.post('/getMessages', async (req,res)=>{
    // console.log(req.body)
    let cook = cookie.parse(req.headers.cookie)
// console.log(cook)
    const findQuery = {$and:[{user1:cook.user || req.body.chat}, {user2:req.body.chat || cook.user}]}
    const findQuery2 = {$and:[{user1:req.body.chat}, {user2: cook.user}]}
    const find = await collection.find(findQuery).toArray()
    const find3 = await collection.find(findQuery2).toArray()

    console.log(find)

    console.log(find3)

    if (find.length === 0) res.send({status: 'ok', chat: find3})
    else res.send({status: 'ok', chat: find})
})


app.post('/login', async (req, res) => {
    console.log(req.body.data)
    let find2= await collection.find({user: req.body.data.login,  password: req.body.data.password}).toArray()
    console.log(find2)
    if (!find2[0]?.user) {
        res.send('error')
    } else {
        res.send('ok')
    }
})


// setTimeout(async ()=>{
//     let find = await collection.find({'user':'llladno'})
//     console.log(await find.toArray())
// },100)