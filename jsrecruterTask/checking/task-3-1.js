
let p = prompt("процентная ставка")
let p1 = p / 12 / 100
let s = prompt("сумма первоначального взноса")
let k = prompt("сумма кредита")
let t = k - s

let d = new Date()
let d1 = prompt("срок кредита")
let d2 = Number.parseInt(d1)
let d3 = d.setMonth(d.getMonth() + d2)

let MPay = t * (p1 + (p1 / (((1 + p1)**d2) - 1)))
let TPay = d2 * MPay
alert(TPay.toFixed(2))