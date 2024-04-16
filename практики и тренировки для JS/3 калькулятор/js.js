let result = document.querySelector(".inp")
const calc = document.querySelector(".calc");
calc.onclick = function (event){
    if(!event.target.classList.contains("calc_btn")) return;

    const value = event.target.innerText;
    console.log(value)
    switch(value){
        case "C":
            result.innerText = "";
            break;
        case "=":
            result.innerText = eval(result.innerText).toFixed(0);
            break;
        default:
            result.innerText += value
    }


}


let url = "site.ph";
let regexp = /php|http|html|https/;
if (regexp.test(url)==true){
    console.log('true')
}
else{
    console.log("Don`t ture = false")
}
function ele(){
    setTimeout(function(){
        for (let n = 0; n < 10; n++){
                console.log(n)
            }
    },1000)
}
function printNumbers(from, to) {
    let current = from;
  
    setTimeout(function go() {
      console.log(current);
      current++;
    }, 1000);
  }
  
  // использование:
  printNumbers(1, 10);
async function getResponse (){
    let response = await fetch("https://jsonplaceholder.typicode.com/users")
    let con = await response.json
    let key;
    for (key in con){
        console.log(con[key])
    }
    console.log(con)
}
getResponse()


let table = document.createElement("table")
let thead = document.createElement("thead")
let tbody = document.createElement("tbody")

table.appendChild(thead)
table.appendChild(tbody)
document.getElementById("body").appendChild(table)
let row_1= document.createElement("tr")
let heading_1= document.createElement("th")
heading_1.innerHTML = "ELE";
let heading_2= document.createElement("th")
heading_2.innerHTML = "ELE";
let heading_3= document.createElement("th")
heading_3.innerHTML = "ELE";
row_1.appendChild(heading_1);
row_1.appendChild(heading_2);
row_1.appendChild(heading_3);
thead.appendChild(row_1)

let row_2 = document.createElement('tr');
let row_2_data_1 = document.createElement('td');
row_2_data_1.innerHTML = "1.";
let row_2_data_2 = document.createElement('td');
row_2_data_2.innerHTML = "James Clerk";
let row_2_data_3 = document.createElement('td');
row_2_data_3.innerHTML = "Netflix";
row_2.appendChild(row_2_data_1);
row_2.appendChild(row_2_data_2);
row_2.appendChild(row_2_data_3);
tbody.appendChild(row_2);
