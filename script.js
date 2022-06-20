function makeCanvas(size) {
    const canvas = document.querySelector(".canvas");
    for (let i = 0; i < size / 2; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j < size / 2; j++) {
            const square = document.createElement("div");
            square.classList.add("square");
            square.textContent = "TEXT";
            row.appendChild(square);
        }
        canvas.appendChild(row);
    }
}

DEFAULT_SIZE = 16;
makeCanvas(DEFAULT_SIZE);