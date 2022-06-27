function makeCanvas(size) {
    const canvas = document.querySelector(".canvas");
    for (let i = 0; i < size / 2; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j < size / 2; j++) {
            const square = document.createElement("div");
            square.classList.add("square");
            square.style.padding = "10px";
            square.addEventListener("mouseover", changeColour);
            row.appendChild(square);
        }
        canvas.appendChild(row);
    }
}

function changeColour(){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    this.style.backgroundColor = "#" + randomColor;
}

DEFAULT_SIZE = 16;
makeCanvas(DEFAULT_SIZE);