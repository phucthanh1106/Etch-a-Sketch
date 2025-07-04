// Add a button that creates a x*x grid
const body = document.querySelector("body");
const btn = document.createElement("button");
btn.textContent = "Choose size";
const container = document.getElementById("container");
body.insertBefore(btn, container);


btn.addEventListener("click", () => {
    container.innerHTML = "";
    let ans = window.prompt("Enter number of squares per side (max 100): ");
    while (isNaN(ans) || +ans > 100 || ans <= 0) {
        ans = window.prompt("Invalid answer, please choose another size!");
    }
    createGrid(parseInt(ans));
})


// Create a grid by using flexbox
let containerSize = container.getBoundingClientRect().width;
let containerP = parseInt(getComputedStyle(container).padding);


function createGrid(size) {
    for (let i = 0; i < size * size;i++) {
        let div = document.createElement("div");
        div.style.width = `${parseInt((containerSize - containerP * 2) / size)}px`;
        div.style.height = div.style.width;
        container.appendChild(div);
        div.addEventListener("mouseenter", () => {
            div.style.backgroundColor = "red";
        })
    }
}
