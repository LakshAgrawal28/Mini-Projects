const colorInput = document.getElementById("colorInput");
const colorCode = document.getElementById("colorCode");

function updateColor() {
  const color = colorInput.value;
  document.body.style.background = color;
  colorCode.textContent = color;
}

colorInput.addEventListener("input", updateColor);
updateColor();
