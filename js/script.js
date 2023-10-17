import { calculator } from "./module/calc.js";

let xMark = document.querySelector(".x__mark");
let equals = document.querySelector(".equals");
let buttonNum = document.querySelector(".calc__number");
let input = document.querySelector(".calc__input");
let count = "";

let deleteAll = document.querySelector(".delete__all");

deleteAll.addEventListener("click", () => {
  count = "";
  input.value = "0";
});

xMark.addEventListener("click", () => {
  count = count.slice(0, count.length - 1);
  input.value = `${count}`;
});

equals.addEventListener("click", () => {
  let string = input.value;
  let number = calculator(string);
  input.value = `${number}`;
});

buttonNum.addEventListener("click", (e) => {
  if (!e.target.classList.contains("calc__button")) return;

  if (e.target.textContent == "AC") {
    return;
  }

  if (e.target.textContent == "=") {
    return;
  }
  count += e.target.textContent;
  console.log(count);

  input.value = count;
});
