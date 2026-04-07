const themeCards = document.querySelectorAll(".theme-card");
const themeLabel = document.getElementById("themeLabel");

function formatThemeName(theme) {
  return theme.charAt(0).toUpperCase() + theme.slice(1);
}

function applyTheme(theme) {
  document.body.dataset.theme = theme;
  themeLabel.textContent = `Current theme: ${formatThemeName(theme)}`;

  themeCards.forEach((card) => {
    card.classList.toggle("active", card.dataset.theme === theme);
  });
}

themeCards.forEach((card) => {
  card.addEventListener("click", () => {
    applyTheme(card.dataset.theme);
  });
});

applyTheme("dark");
