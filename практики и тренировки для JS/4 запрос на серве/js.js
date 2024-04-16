async function getResponse (){
    let response = await fetch("https://jsonplaceholder.typicode.com/users")
    let con = await response.json()
    let key;
    let td = document.querySelector(".posts")
    for (key in con){
        td.innerHTML += `
        <td class="td1">
        ${con[key].id}
        </td>
        <td class="td2">${con[key].name}
        </td>
        <td class="td2">${con[key].email}
        </td>`
        

        console.log(con[key])
    }
    console.log(con)
}
getResponse()


class Worker {
    name;
    surname;
    rate;
    days

    constructor(name,surname,rate,days){
        this.name = name
        this.surname = surname
        this.rate = rate
        this.days = days
    }
    getFullName(){
        return `${this.name} `+`${this.surname}`
    }
}


class Boss extends Worker {
    workers;
    constructor(name,surname,rate,days,workers){
        super(name,surname,rate,days);
        this.workers = workers
    }
    getSalary(){
        return this.rate*this.days*this.workers;
    }
}

const boss = new Boss('Иван', 'Иванов', 10, 31, 10);
console.log(boss.name); //выведет 'Иван'
console.log(boss.surname); //выведет 'Иванов'
console.log(boss.getFullName()); //выведет 'Иванов Иван'
console.log(boss.rate); //выведет 10
console.log(boss.days); //выведет 31
console.log(boss.workers); //выведет 10
console.log(boss.getSalary()); //выведет 3100 - то есть 10*31*10