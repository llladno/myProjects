let a = prompt('Введите переменную a')
let b = prompt('Введите переменную b')
let c = prompt('Введите переменную c')
let D = b**2-4*a*c
if (D < 0){
    console.log('Корней нет')
} else if (D == 0){
    console.log(-b/2*a)
} else {
    console.log((-b+Math.sqrt(D))/(2*a))
    console.log((-b-Math.sqrt(D))/(2*a))
}