const title = localStorage.getItem("title")
const mainPage = document.getElementsByClassName("unselected")[0]
const placeTitle = document.getElementsByClassName("placeTitle")[0]
const choose = document.getElementsByClassName("choose")[0]
const workprib = document.getElementsByClassName("workprib")[0]
const end = document.getElementById("datestart")
const start = document.getElementById("dateend")
const dateclass = document.getElementsByClassName("date")
const firstday = document.getElementsByClassName("firstday")[0]

mainPage.addEventListener("click", () => {
    window.location = "main.html"
})

placeTitle.innerHTML = `${title}`

function DataFn(days){
    let d = new Date()
    let datetoday = d.toLocaleString("ru-RU")
        const someago = d.setDate(d.getDate() - days)
        const someagoCorrect = new Date(someago).toLocaleString("ru-RU")
        start.innerHTML = `${datetoday.slice(0,-3)}`
        end.innerHTML = `${someagoCorrect.slice(0,-3)}`
}

function setcolor(stylebtn){
    for(let n = 0; n < dateclass.length; n++){
        dateclass[n].style = "background: #21212114"
    }
}

//Работа со временем(Вывод количества дней от до)
let d = new Date()
let datetoday = d.toLocaleString("ru-RU")
start.innerHTML = `${datetoday.slice(0,-3)}`
end.innerHTML = `${datetoday.slice(0,-3)}`
setcolor()
firstday.style = "background: #C2E7C8"

function clickdate(event){
    const date = event.target.textContent
    const stylebtn = event.target
    if(date == "День"){
        let d = new Date()
        let datetoday = d.toLocaleString("ru-RU")
        start.innerHTML = `${datetoday.slice(0,-3)}`
        end.innerHTML = `${datetoday.slice(0,-3)}`
        setcolor()
        stylebtn.style = "background: #C2E7C8"
    }
    else if(date == "Неделя"){
        setcolor()
        DataFn(7)
        stylebtn.style = "background: #C2E7C8"
    }
    else if(date == "2 недели"){
        setcolor()
        DataFn(14)
        stylebtn.style = "background: #C2E7C8"
    }
    else if(date == "Месяц"){
        DataFn(30)
        setcolor(stylebtn)
        stylebtn.style = "background: #C2E7C8"
    }
    else if(date == "3 месяца"){
        setcolor()
        DataFn(90)
        stylebtn.style = "background: #C2E7C8"
    }
    else if(date == "Полгода"){
        setcolor()
        DataFn(180)
        stylebtn.style = "background: #C2E7C8"
    }
}

//Показывает информацию о истории использования прибора
//Необходимо нажать на стрелочку
function show(){
    const workhide = document.getElementsByClassName("workhide")[0]
    if(workhide.style.display == "none"){
    workprib.style.transform = "rotate(0deg)"
    workhide.style.display = "block"
    }
    else{
        workprib.style.transform = "rotate(-90deg)"
        workhide.style.display = "none"
    }
}
