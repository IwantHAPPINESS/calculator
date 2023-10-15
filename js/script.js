let buttonNum = document.querySelector(".calc__number");
let input = document.querySelector(".calc__input");

let count = "";

let deleteAll = document.querySelector(".delete__all");

deleteAll.addEventListener("click", () => {
  count = "";
  input.value = "0";
});

console.log(input);
buttonNum.addEventListener("click", (e) => {
  if (!e.target.classList.contains("calc__button")) return;

  if (e.target.textContent == "AC") {
    return;
  }
  count += e.target.textContent;
  console.log(count);

  input.value = count;
});
