let tries = 0
while (tries < 2){
const TrueNum1 = 3
console.log(TrueNum1)
    let uAnswer = prompt("введите угол наклона от 0 до 5")
if (uAnswer == TrueNum1) {
    alert("вы угадали");
    break;
} else if (uAnswer > TrueNum1) {
    alert("промах, возьмите чутка ниже")
    tries++
} else if (uAnswer < TrueNum1) {
    alert("промах, возьмите чутка выше")
    tries++
}
}