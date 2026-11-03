const purple = document.getElementById("purple-row");
const blue = document.getElementById("blue-row");
const green = document.getElementById("green-row");
const yellow = document.getElementById("yellow-row");

const oneAway = document.getElementById("oneAway");
const luck = document.getElementById("betterLuck");
const grid = document.getElementById("og-layout");

let selected = [];

let dots = document.getElementById("tries");
let tries = 4;
dots.textContent = "• ".repeat(tries);

grid.addEventListener("click", event => {
    const target = event.target;

    if (selected.includes(target)) {
        target.classList.remove("select");
        selected.pop();
        return;
    }

    selected.push(target);
    target.classList.toggle("select");
    console.log(selected);

    // if (target.matches("")) {
    //    colors[it] = target.classList();
    // }

    if (selected.length === 4) {
        let p = 0, b = 0, g = 0, y = 0;
        for (var i = 0; i < 4; i++) {
            if (selected[i].classList.contains("purple")) p++;
            else if (selected[i].classList.contains("blue")) b++;
            else if (selected[i].classList.contains("green")) g++;
            else y++;
        }
        if (p === 4) {
            purple.classList.toggle("chosen");
            for (var i = 0; i < 4; i++) selected[i].classList.remove("select"), selected[i].classList.toggle("picked");
        }
        else if (b === 4) {
            blue.classList.toggle("chosen");
            for (var i = 0; i < 4; i++) selected[i].classList.remove("select"), selected[i].classList.toggle("picked");
        }
        else if (g === 4) {
            green.classList.toggle("chosen");
            for (var i = 0; i < 4; i++) selected[i].classList.remove("select"), selected[i].classList.toggle("picked");
        }
        else if (y === 4) {
            yellow.classList.toggle("chosen");
            for (var i = 0; i < 4; i++) selected[i].classList.remove("select"), selected[i].classList.toggle("picked");
        }
        else {
            tries--;
            if (p == 3 || b === 3 || g === 3 || y === 3) oneAway.classList.toggle("show");
            for (var i = 0; i < 4; i++) {
                selected[i].classList.remove("select");
            }
            dots.textContent = "• ".repeat(tries);
        }
        if (tries === 0) luck.classList.toggle("time-out");
        selected = [];
    }
});