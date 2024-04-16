


// Ввод: процент * 100, начальный взнос, сумма кредита, срок в месяцах
let P = prompt('Процент')
let F = prompt('Начальный взнос')
let S = prompt('Сумма кредита')
let date = prompt('Дата окончания кредита, формат: гггг-мм-дд')
function culculate(P, F ,S, date) {
    P = +P
    F = +F
    S = +S
    if (isNaN(P) || isNaN(F) || isNaN(S) || (P < 0) || (F < 0) || (S < 0)) {
        if (isNaN(P) || (P < 0)) {
            alert(`Параметр процент содержит неправильное значение ${P}`)
        }
        if (isNaN(F) || (F < 0)) {
            alert(`Параметр первоночальный взнос содержит неправильное значение ${F}`)
        }
        if (isNaN(S) || (S < 0)) {
            alert(`Параметр сумма кредита содержит неправильное значение ${P}`)
        }

    } else {
        let now = new Date()
        date = new Date(date)
        if (now > date) {
            alert('Дата окончания кредита не может быть меньше текущей даты')
        } else if (date == 'Invalid Date') {
            alert('Дата окончания кредита содержит неправильное значение')
        } else {
            const yearDiff = now.getFullYear() - date.getFullYear();
            const monthDiff = now.getMonth() - date.getMonth();
            let diff = -1*(yearDiff * 12 + monthDiff);

            P = P / 100 / 12
            S = S - F
            let n = diff
            let pay = S * (P + (P / (((1 + P)**n) - 1)))
            let total = pay * n
            alert(total.toFixed(2))
        }
    }
}
culculate(P, F, S, date)