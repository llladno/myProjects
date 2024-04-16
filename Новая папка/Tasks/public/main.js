const conteinerInsrt = document.getElementsByClassName("conteinerInsrt")[0]
const table = document.getElementsByClassName("bodytable")[0]
const input = document.getElementsByTagName("input")[0]
const unselected = document.getElementsByClassName("unselected")[0]

unselected.onclick = ()=> alert("Выберете прибор")

let data

function notifications(data){
    let icon
    if(data == "yes") return icon = "on"
    else if (data == "no") return icon = "empty"
    else if (data == "disable") return icon = "off"
}

async function getData() { //Получение данных с сервера
    console.log(input.value)
    await axios.get("http://localhost:3005/mainPage")
        .then(response => data = response.data.data)
        .catch(err => window.location = "error.html")
        data.map((el) => {
        tablegen(el)
    })
}
getData()

function tablegen(el){ //вывод таблицы
    let status
    if (el.status == "work") status = 'selected="selected"'
    table.innerHTML += `
    <tr>
        <td class="tableimg"><img src="./styles/img/${el.img}.png"></td>
        <td onclick="clicktitle(event)" class="title">${el.title}</td>
        <td class="status">
            <select>
            <option>
                Свободен
            </option>
            <option ${status}>
                В работе
            </option>
            </select>
        </td>
        <td class="notifications">
            <img src="./styles/img/notifications/${notifications(el.notification)}.png">
    </tr>
    `
}

input.addEventListener("change",(event)=>{//Поиск по названию
    const value = event.target.value
    table.innerHTML = ""
    data.map((el) => {
        if(el.title.includes(value)){
            tablegen(el)
        }
        }
    )
})

function clicktitle(event){//Функция для сохранения названия в локальное хранилище для 
    localStorage.setItem("title",event.target.textContent)
    window.location = "analytics.html"
}