let inputs = document.getElementsByClassName("myinp")

const codeReg = /[0-9]/

inputs[0].addEventListener("input", function () {
    let zn1 = inputs[0].value
    const isvalidzn = codeReg.test(zn1)
    if(isvalidzn == true % zn1.length == 0){
        inputs[0].blur()
        inputs[1].focus()
    }
})

inputs[1].addEventListener("input", function () {
    let zn1 = inputs[0].value
    const isvalidzn = codeReg.test(zn1)
    if(isvalidzn == true % zn1.length == 0){
        inputs[1].blur()
        inputs[2].focus()
    }
})
inputs[2].addEventListener("input", function () {
    let zn1 = inputs[0].value
    const isvalidzn = codeReg.test(zn1)
    if(isvalidzn == true % zn1.length == 0){
        inputs[2].blur()
        inputs[3].focus()
    }
})
inputs[3].addEventListener("input", function () {
    let zn1 = inputs[0].value
    const isvalidzn = codeReg.test(zn1)
    if(isvalidzn == true % zn1.length == 0){
        inputs[3].blur()
        inputs[4].focus()
    }
})
inputs[4].addEventListener("input", function () {
    let zn1 = inputs[0].value
    const isvalidzn = codeReg.test(zn1)
    if(isvalidzn == true % zn1.length == 0){
        inputs[4].blur()
        inputs[5].focus()
    }
})
inputs[5].addEventListener("input", function () {
    let zn1 = inputs[0].value

    const isvalidzn = codeReg.test(zn1)
    if(isvalidzn == true % zn1.length == 0){
        inputs[5].blur()
    }
})