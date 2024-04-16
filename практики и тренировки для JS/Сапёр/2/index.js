const place = document.getElementById("place")
let btnStart = document.getElementById("start")


const wight = 16;
const height = 16;

const mine = 40;
const cell2 = []
let game = false

let timer1 = document.getElementsByClassName("timer")

function startTimer(minutes) {
    let seconds = minutes * 60;
    const timer = setInterval(() => {
        seconds--;
        if (seconds < 0) {
            clearInterval(timer);
            console.log('Time is up!');
            place.style.pointerEvents = "none";
        } else {
            const minutesLeft = Math.floor(seconds / 60);
            const secondsLeft = seconds % 60;
            timer1[0].innerHTML = `${minutesLeft}:${secondsLeft < 10 ? '0' : ''}${secondsLeft}`;
        }
    }, 1000);
}
startTimer(40)


gamePlace()
function gamePlace() {
    for (let b = 0; b < wight; b++) {
        const row = []
        for (let b2 = 0; b2 < height; b2++) {
            const cel = document.createElement("div")

            cel.classList.add(`y[${b}]`)
            cel.classList.add(`x[${b2}]`)
            cel.classList.add(`cel`)
            place.appendChild(cel)
            row.push(cel)
        }
        cell2.push(row)
    }
}
function start(sh, sw) {
    mineSpawn()
    for (let h = 0; h < height; h++) {
        for (let w = 0; w < wight; w++) {
            if (h == sh && w == sw) {
                cell2[h][w].classList.add("show")
                cell2[h][w].classList.remove("mine")
                console.log("Здесь", cell2[h][w])
            }
            if (cell2[h][w].classList.contains("mine")) {
                getMineCount(h, w - 1);
                getMineCount(h, w + 1)
                getMineCount(h - 1, w)
                getMineCount(h + 1, w)
                getMineCount(h - 1, w - 1)
                getMineCount(h - 1, w + 1)
                getMineCount(h + 1, w - 1)
                getMineCount(h + 1, w + 1)
            }
        }
    }
}
const cell = document.getElementsByTagName("button")
console.log(Math.floor(Math.random() * wight))

let countmine = []
function mineSpawn() {
    for (let c = 0; c < height; c++) {
    }
    var count = 0;
    for (let c = 0; c != mine; c++) {
        const x = Math.floor(Math.random() * wight)
        const y = Math.floor(Math.random() * height)
        console.log(x, y)
        cell2[y][x].classList.remove("cel")
        cell2[y][x].classList.add("mine")
        console.log(cell2[y][x])
        countmine[c] = (y) * (x)
        count += 1;
        if (cell2[y][x].classList.contains("mine")) {
            console.log("ele")

        }
    }

    //console.log(cell)
    //console.log(cell[x*y])
}


let chiclo = 0

function getMineCount(h, w) {
    if (h >= 0 && h <= height - 1 && w >= 0 && w <= wight - 1) {
        let chiclo = 0
        if (!cell2[h][w].classList.contains("mine")) {
            cell2[h][w].innerHTML += `${chiclo}`
            if (cell2[h][w].textContent == "0") {
                cell2[h][w].innerHTML = `${1}`
            }
            else if (cell2[h][w].textContent == "10") {
                cell2[h][w].innerHTML = `${2}`
            }
            else if (cell2[h][w].textContent == "20") {
                cell2[h][w].innerHTML = `${3}`
            }
            else if (cell2[h][w].textContent == "30") {
                cell2[h][w].innerHTML = `${4}`
            }
            else if (cell2[h][w].textContent == "40") {
                cell2[h][w].innerHTML = `${5}`
            }
        }
    }
}
//setInterval(getMineCount(), 25)
let restart = 0
place.addEventListener("mousedown", (e) => {
    if (e.button == 0) {
        document.getElementsByTagName("img")[0].src = "img/pngwing.com.png"
    }
})
place.addEventListener("mouseup", () => {
    document.getElementsByTagName("img")[0].src = "img/pngwing.com (1).png"
})
place.addEventListener("click", (event) => {
    var pos = event.target

    let h1 = pos.classList[0]
    let w1 = pos.classList[1]
    console.log(pos.classList)
    console.log(pos)
    var re = /\d{1,2}/;
    console.log(h1)
    let h = +re.exec(h1)[0]
    let w = +re.exec(w1)[0]
    if (!game) {
        restart++;
        start(h, w)

        game = true
    }
    cell2[h][w].classList.remove("cel")

    if (pos.classList.contains("mine")) {
        pos.classList.remove("show")
        console.log("loose")
        document.getElementsByTagName("img")[0].src = "img/pngwing.com (2).png"
        console.log('Time is up!');
        document.getElementsByClassName("time")[0].innerHTML = "loose"
        place.style.pointerEvents = "none";
        for (let h1 = 0; h1 < height; h1++) {
            for (let w1 = 0; w1 < wight; w1++) {
                if (cell2[h1][w1].classList.contains("mine")) {
                    cell2[h1][w1].classList.add("boom")
                }
            }
        }
    }

    else {
        showblock(h, w);
    }
    allGame()


})

function showblock(h, w) {
    cell2[h][w].classList.remove("cel")
    cell2[h][w].classList.add("show")
    if (!cell2[h][w].textContent == "") {
        console.log("ele")
        return;
    }

    checkZero(h, w - 1);
    checkZero(h, w + 1)
    checkZero(h + 1, w)
    checkZero(h - 1, w - 1)
    checkZero(h - 1, w + 1)
    checkZero(h + 1, w - 1)
    checkZero(h + 1, w + 1)

}

function checkZero(h, w) {
    if (h >= 0 && h <= height - 1 && w >= 0 && w <= wight - 1) {
        console.log("Еле")
        console.log(cell2[h][w].textContent)
        if (cell2[h][w].classList.contains("cel")) {
            showblock(h, w)
        }
    }

}

let count2 = 0
function allGame() {
    for (let h = 0; h < height; h++) {
        for (let w = 0; w < wight; w++) {
            if (cell2[h][w].classList.contains("show")) {
                console.log(cell2[h][w])
                count2++;
                console.log(count2)
                console.log(mine)
                if (count2 == wight * height - mine + restart) {
                    console.log("res", restart)
                    document.getElementsByClassName("time")[0].innerHTML = "win"
                    btnStart.innerHTML = "Старт"
                }

            }
        }
    }
    count2 = 0

}

place.addEventListener("contextmenu", (event) => {
    var pos = event.target
    if (pos.classList.contains("cel") && !pos.classList.contains("flag") || pos.classList.contains("mine") && !pos.classList.contains("flag") && !pos.classList.contains("que")) {
        pos.classList.add("flag")
    }
    else if (pos.classList.contains("flag")) {
        pos.classList.remove("flag")
        pos.classList.remove("cel")
        pos.classList.add("que")
        pos.innerHTML = "?"
    }
    else if (pos.classList.contains("que")) {
        pos.classList.remove("flag")
        pos.classList.remove("que")
        if (pos.classList.contains("mine")) {

        }
        else {
            pos.classList.add("cel")
        }

        pos.innerHTML = ""
    }
    console.log("ele")
})
document.getElementsByTagName("img")[0].src = "img/pngwing.com (1).png"


