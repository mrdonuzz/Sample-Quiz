const button = document.querySelectorAll("button");
const result = document.querySelector("#result");

button.forEach((btn) => {
  btn.addEventListener("click", () => {
    button.forEach((b) => {
      b.classList.remove("correct", "wrong");
    });
    let value = btn.dataset.answer;
    if (value === "true") {
      result.textContent = "ถูกต้อง!";
      btn.classList.add("correct");
    } else {
      result.textContent = "ผิดนะ!";
      btn.classList.add("wrong");
    }
  });
});
