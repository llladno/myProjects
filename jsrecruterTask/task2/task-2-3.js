const randomNumber = Math.floor(Math.random() * 6);
let user = prompt('Введите угол наклона  от 0 до 5, чтобы попасть по птице');
let count = 1
function check(){
    if(+user === randomNumber){
        alert('Вы угадали!');
    } else if(count > 1) {
        alert('Вы проиграли');
    }
    else if(+user < randomNumber){
        user = prompt("Промах, возьмите чутка выше");
        count++;
        check();
    }
    else {
        user = prompt("Промах, возьмите чутка ниже");
        count++;
        check();
    }
}
check()