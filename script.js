const number = document.querySelector("span");
const button = document.querySelector("button");

let count = 0;

button.addEventListener("click", () => {
  count++;
  number.textContent = count;
});