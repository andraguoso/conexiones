const play = document.getElementById("play");
const article = document.querySelector("article");
const popUp = document.querySelector("main");
const today = document.getElementById("today-date");
const todayDate = new Date();

today.textContent = todayDate.toLocaleDateString("es-PE", {
    month: "long",
    day: "numeric",
    year: "numeric"
});

document.body.classList.add("main");

play.addEventListener("click", function () {
    article.classList.add("go");
    popUp.classList.add("down");
    document.body.classList.remove("main");
});

const purple = document.getElementById("purple-row");
const blue = document.getElementById("blue-row");
const green = document.getElementById("green-row");
const yellow = document.getElementById("yellow-row");

const oneAway = document.getElementById("oneAway");
const luck = document.getElementById("betterLuck");
const up = document.getElementById("arriba");

const grid = document.getElementById("og-layout");

const help = document.getElementById("help-button");
const okHelp = document.getElementById("hack-club-help");

let selected = [];

let dots = document.getElementById("tries");
let tries = 4;
dots.textContent = "• ".repeat(tries);

up.textContent = "¡Crea cuatro grupos de cuatro!";

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
            purple.classList.add("chosen");
            for (var i = 0; i < 4; i++) selected[i].classList.remove("select"), selected[i].classList.toggle("picked");
        }
        else if (b === 4) {
            blue.classList.add("chosen");
            for (var i = 0; i < 4; i++) selected[i].classList.remove("select"), selected[i].classList.toggle("picked");
        }
        else if (g === 4) {
            green.classList.add("chosen");
            for (var i = 0; i < 4; i++) selected[i].classList.remove("select"), selected[i].classList.toggle("picked");
        }
        else if (y === 4) {
            yellow.classList.add("chosen");
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
        if (tries === 0) {
            grid.classList.toggle("end");
            dots.textContent = "¡Ya no hay más intentos!";
            up.textContent = "Puedes reiniciar la página y jugar otra vez.";
            luck.classList.toggle("time-out");
        }
        if (purple.classList.contains("chosen") && green.classList.contains("chosen") && yellow.classList.contains("chosen") && blue.classList.contains("chosen")) {
            okHelp.classList.remove("needed");
            up.textContent = "¡Lo resolviste! c:";
        }
        selected = [];
    }
});

help.addEventListener("click", function () {
    okHelp.classList.toggle("needed");
});

oneAway.addEventListener("click", function () {
    oneAway.classList.remove("show");
});