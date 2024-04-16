let input = document.querySelector('input')

let randomNumber = Math.random() * 9 + 1
let roundedNumber = Math.round(randomNumber)
console.log(roundedNumber);

function checkNumber (){
    let result = document.querySelector('.result')
    if (roundedNumber === +input.value){
        result.innerHTML = `
        <h2 style='color:green'>УРА ВЫ УГАДАЛИ ЧИСЛО ${roundedNumber}</h2>`
    } else {
        result.innerHTML = '<h2 style="color:red">К сожалению, вы не угадали :(</h2>'
    }
}