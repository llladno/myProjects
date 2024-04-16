let a, b;
let inputIn1 = document.querySelector(".in1");
let inputIn2 = document.querySelector(".in2");
let button1 = document.querySelector(".button1");
let button2 = document.querySelector(".button2");
let button3 = document.querySelector(".button3");
let button4 = document.querySelector(".button4");
let text22 = document.querySelector(".text22")

button1.onclick = function(){
    let pol = inputIn1.value;
    console.log(inputIn1.value)
    if (pol === "M"){
        console.log("Твой пол мужской")
    }
    else if(pol === "F")
    {
        console.log("Твой пол женский")
    }
    else {
        console.log("Ты кто вообще?")
    }
    /*let val = +inputIn1.value;
    console.log ("Число 1:",val);
    let val2 = +inputIn2.value;
    console.log("Число 2:",val2);
    let proiz1;
    proiz1 = val * val2;
    console.log("Результат:", proiz1) */
    
}
button2.onclick = function(){
    let sus = inputIn1.value;
    if (sus === "1"){
        console.log("Понедельник")
    }
    else if(sus === "2")
    {
        console.log("Вторник")
    }
    else if(sus === "3")
    {
        console.log("Среда")
    }
    else if(sus === "4")
    {
        console.log("Четверг")
    }
    else if(sus === "5")
    {
        console.log("Пятница")
    }
    else if(sus === "6")
    {
        console.log("Суббота")
    }
    else if(sus === "7")
    {
        console.log("Воскресенье")
    }
    /*let val = +inputIn1.value;
    console.log ("Число 1:",val);
    let val2 = +inputIn2.value;
    console.log("Число 2:",val2);
    let sum1;
    sum1 = val + val2;
    console.log("Результат:", sum1)
    */
}
button3.onclick = function(){
    let val = +inputIn1.value;
    console.log ("Число 1:",val);
    let val2 = +inputIn2.value;
    console.log("Число 2:",val2);
    let sum1;
    sum1 = val - val2;
    console.log("Результат:", sum1)
}
button4.onclick = function(){
    let val = +inputIn1.value;
    console.log ("Число 1:",val);
    let val2 = +inputIn2.value;
    console.log("Число 2:",val2);
    let sum1;
    sum1 = val / val2;
    console.log("Результат:", sum1)
}
/*let arr = [
    "Ваня",
    "Катя",
    "Лет",
    50,
    40,
    true,
    {
        age:20,
        imia:"Antonio",
    }];
console.log(arr.length);
console.log(arr[6].age,arr[6].imia);
console.log(arr);
arr.splice(6,1,"Антону 20 лет");
console.log(arr[6])
arr.splice(0,0,"Kola","Mama")
let arr2 = arr.concat("петя","Антон")
console.log(arr2[10])
console.log(arr.includes("петя"));
console.log(arr2.includes("петя"));
let result1= arr.find(abob => abob.age === 20)
console.log(result1)
*/

let str = "Оператор switch используется для выполнения различных действий, основанных на различных условиях."
let word = str.search("ос")

text22.onclick = function(){
    let pol = inputIn1.value;
    console.log("Твой текст:",inputIn1.value)
    let poisk = inputIn1.value.search(inputIn2.value);
    if (poisk != -1){
        alert("Слово найдено!");
        console.log(poisk)
        console.log("Начинается на букву:","\"",inputIn1.value[poisk],"\"")
    }
    else{
        alert("Такого слова нет!")
    }
}
