let input = document.querySelector('input') // число 

let random = Math.random()*10 // Случаное число

let round = Math.round(random) 

function check(){
    if (input.value == round) {
        console.log('Отлично, ты угадал');
    } else {
        console.log('Не получилось :(, попробуй ещё раз!');
    }
}