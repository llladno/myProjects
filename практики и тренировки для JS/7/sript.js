const recuestURL = "https://jsonplaceholder.typicode.com/users"

const photoURL = "https://jsonplaceholder.typicode.com/photos"

function sendRequest (method,url, body){
    const headers={
        'Content-Type': 'application/json',
    }
    return fetch(url,{
        method: method,
        body: JSON.stringify(body),
        headers:headers
    }).then(response=> {
        return response.json()
    })
}
let arr = ["Shalom","Salam"]
arr.push("Elo")
arr.splice(2,1)
console.log(arr)
arr.pop()
console.log(arr)

let placePhoto = document.getElementsByClassName("photoPlace")


let body = document.getElementsByClassName("out_information")
console.log(body[0])
sendRequest("GET",recuestURL).then(date =>{
    for (b in date){
        body[0].innerHTML += `
        <p>Name ${date[b].id}: ${date[b].name}<br> Email: ${date[b].email}</p>
        `}
    })

let input = document.getElementsByTagName("input")
function onclickFn(){
    const body = {
        name: `${input[0].value}`,
        email: `${input[1].value}`,
    }
    sendRequest("POST",recuestURL,body).then(date =>{
        return new Promise((resolve, reject)=>{
            setTimeout(()=> {
                resolve(date)
            },1000)
        }).then(sus => {
            console.log(sus)
            return sus
        })})
    sendRequest("GET",recuestURL).then(date =>{
        for (b in date){
        console.log(date[b].name)}
        console.log(date)})
    console.log(body.name)
    console.log(body.email)
}
let b = 0;
sendRequest("GET", photoURL).then(datePhoto =>{
    for (let c = 0; c < 60;c++){
        
        if(c % 3 == 0 || c == 0 ){
        placePhoto[0].innerHTML +=`<div class = "photoPlace3"></div>`
        console.log(0%3)
            if(c % 3 == 0 && c !=0){
                b+=1
            }
        }
        
        let photoPlace3 = document.getElementsByClassName("photoPlace3")
        console.log("Длинна",photoPlace3.length)
        console.log(b)
            photoPlace3[b].innerHTML += `
            <div class = "elem">
                    <img src="${datePhoto[c].url}">
                    <p>${datePhoto[c].title}
            </div>`
        }
})

function ele(b){
    let a = 0;
    console.log("Функция 1 со значением:", b)
    return a,b;
    
}

function ele2(a){
    console.log("Функция 2",a)
}

new Promise((resolve,reject) => setTimeout(()=> resolve(ele(2)),2000)).then(sus=>{console.log("Это сус",sus); return sus}).then(sas => {
    console.log(sas)
})
ele2(ele())