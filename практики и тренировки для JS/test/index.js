let inp = document.getElementById("pab");
console.log(inp.value)
let btn = document.getElementById("btn")

let parrent = btn.parentElement
let count2 = 0
inp.addEventListener("input",()=>{
    let count = 0;
    console.log(inp.value)
    for (let b in inp.value) {
    if (inp.value[b] === " ") {
        count += 1;
        console.log("viv: ", inp.value[b])
    }
    }


    console.log(count2 + 1)
    console.log(count + 1);
})
function ele() {
    for(let c = 0; c < 4;c ++){
    parrent.innerHTML += `<p>${count+1}</p>`}
    count2+=1;
}



