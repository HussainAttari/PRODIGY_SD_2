let numberInput = document.querySelector("#number > input");
let resultInput = document.querySelector("#result > input");

let btn = document.querySelector(".button button");

let x = Math.floor(Math.random() * 100);
numberInput.addEventListener("input", function () {
  let n = parseInt(numberInput.value);

  if (n > x) {
    resultInput.value = "High";
  } else if (n < x) {
    resultInput.value = "Low";
  } else if (n == x) {
    resultInput.value = "Your Guess is correct";
  }
});

btn.addEventListener("click", () => {
  numberInput.value = "";
  resultInput.value = "";
  x = Math.floor(Math.random() * 100);
});
