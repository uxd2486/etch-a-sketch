function makeCanvas(size) {
    const canvas = document.querySelector(".canvas");
    for (let i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j < size; j++) {
            const square = document.createElement("div");
            square.classList.add("square");
            square.addEventListener("mouseover", changeColour);
            row.appendChild(square);
        }
        canvas.appendChild(row);
    }
}

function darken(colour) {
    let matches = colour.match(/\d+/g);
    let r_num = parseInt(matches[0], 10);
    let g_num = parseInt(matches[1], 10);
    let b_num = parseInt(matches[2], 10);
    if (r_num <= 25 && g_num <= 25 && b_num <= 25) {
        return "rgb(0, 0, 0)";
    }
    r_num = Math.round(r_num - 25);
    g_num = Math.round(g_num - 25);
    b_num = Math.round(b_num - 25);
    return `rgb(${r_num}, ${g_num}, ${b_num})`;
}

function changeColour(){
    if (DEFAULT){
        this.style.backgroundColor = "rgb(0,0,0)";
    }
    if (RANDOM_COLOR_MODE){
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        this.style.backgroundColor = "#" + randomColor;
    } else {
        let colour = this.style.backgroundColor;
        if (colour === ""){
            colour = "rgb(255, 255, 255)";
        }
        this.style.backgroundColor = darken(colour);
    }
}

function changeCanvasSize(){
    let size = parseInt(prompt("Enter new size:", "16"));
    const canvas = document.querySelector(".canvas");
    const children = canvas.children;
    while (children.item(0) != null){
        canvas.removeChild(children.item(0));
    }
    makeCanvas(size);
}

function clearCanvas() {
    const rows = document.querySelector(".canvas").children;
    for (let i = 0; i < rows.length; i++) {
        let row = rows.item(i);
        for (let j = 0; j < row.children.length; j++) {
            let square = row.children.item(j);
            square.style.backgroundColor = "";
        }
    }
}

function randomColourMode() {
    DEFAULT = false;
    if (!RANDOM_COLOR_MODE){
        RANDOM_COLOR_MODE = true;
        clearCanvas();
    }
}

function defaultMode() {
    DEFAULT = true;
    clearCanvas();
}

function darkenMode() {
    DEFAULT = false;
    if (RANDOM_COLOR_MODE){
        RANDOM_COLOR_MODE = false;
        clearCanvas();
    }
}

DEFAULT = true;
RANDOM_COLOR_MODE = false;
DEFAULT_SIZE = 16;
makeCanvas(DEFAULT_SIZE);