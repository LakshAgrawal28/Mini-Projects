const count = document.getElementById("count");
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");

let value = 0;

function updateCount() {
  count.textContent = value;
}

decreaseBtn.addEventListener("click", () => {
  value--;
  updateCount();
});

resetBtn.addEventListener("click", () => {
  value = 0;
  updateCount();
});

increaseBtn.addEventListener("click", () => {
  value++;
  updateCount();
});
