// Add a button that resizes the grid
const resize = document.getElementById("resize");
let size;


resize.addEventListener("click", () => {
    let ans = window.prompt("Enter number of squares per side (max 100): ");
    while (isNaN(ans) || +ans > 100 || ans <= 0) {
        ans = window.prompt("Invalid answer, please choose another size!");
    }
    size = parseInt(ans);
    createGrid(size);
})


// Create and resize a new grid by using flexbox
const container = document.getElementById("container");

function createGrid(size) {
    container.innerHTML = "";

    let containerSize = container.getBoundingClientRect().width;

    for (let i = 0; i < size * size;i++) {
        let square = document.createElement("div");
        square.classList.add("square");
        square.style.flexBasis = `${100 / size}%`;
        square.style.height = `${100 / size}%`;
        square.style.width = `${100 / size}%`;
        container.appendChild(square);

        let max = 255;
        let min = 0; 

        square.addEventListener("mouseenter", () => {
            let random1 = Math.floor(Math.random() * (max - min + 1)) + min;
            let random2 = Math.floor(Math.random() * (max - min + 1)) + min;
            let random3 = Math.floor(Math.random() * (max - min + 1)) + min;
            square.style.backgroundColor = `rgb(${random1}, ${random2}, ${random3})`;
        })
    }
}

// Reset the grid
const reset = document.getElementById("reset");
reset.addEventListener("click", () => {
    container.innerHTML = "";
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => 
        square.setAttribute("style", "background: peachpuff"));
    createGrid(size);
})

// Eraser
const erase = document.getElementById("eraser");
erase.addEventListener("click", () => {
    const allsquares = document.querySelectorAll(".square");
    allsquares.forEach((square) => {
        square.addEventListener("mouseenter", () => { 
            square.style.backgroundColor = "peachpuff";
        })
    })
})

