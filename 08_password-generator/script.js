const lengthInput = document.getElementById("lengthInput");
const generateBtn = document.getElementById("generateBtn");
const passwordOutput = document.getElementById("passwordOutput");

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%";

generateBtn.addEventListener("click", () => {
  const length = Number(lengthInput.value);
  let password = "";

  for (let index = 0; index < length; index++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }

  passwordOutput.textContent = password;
});
