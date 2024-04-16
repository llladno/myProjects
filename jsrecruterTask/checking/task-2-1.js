let count =  0
let n = 4;
while (true) {
    let x = prompt("введите число от 0 до 5");
    if (isNaN(x)) {
        alert("Ошибка ввода");
        break;
    } else if (x < n) {
        alert("мало");
    } else if (x > n) {
        alert("много");
    } else {
        count++
        alert("правильно", count);
        break;
    }
}