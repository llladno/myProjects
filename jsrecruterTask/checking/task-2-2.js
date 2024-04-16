let tries = 0
while (tries < 3) {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    console.log(randomNumber);
    let gNumber = prompt("угадайте число от 1 до 10");
    if (gNumber == randomNumber) {
        alert("вы угадали");
        break;
    } else if (tries == 2) {
        alert("вы проиграли");
        break;
    } else if (gNumber !== randomNumber) {
        alert("неверно");
        tries++
    }
}