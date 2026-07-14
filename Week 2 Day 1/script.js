const display = document.getElementById("number-display");
const button = document.getElementById("click-button");

let count = 0;

button.addEventListener("click", () => {
    count++;
    display.innerHTML = count;
});