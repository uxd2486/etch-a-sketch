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

function changeColour(){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    this.style.backgroundColor = "#" + randomColor;
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

DEFAULT_SIZE = 16;
makeCanvas(DEFAULT_SIZE);