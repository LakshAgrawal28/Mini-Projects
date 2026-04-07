const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const weatherResult = document.getElementById("weatherResult");

searchBtn.addEventListener("click", () => {
  const city = cityInput.value.trim();

  if (!city) {
    weatherResult.innerHTML = "<p>Please enter a city name.</p>";
    return;
  }

  const temperature = Math.floor(Math.random() * 15) + 20;
  const conditions = ["Sunny", "Cloudy", "Rainy", "Windy"];
  const randomCondition = conditions[Math.floor(Math.random() * conditions.length)];

  weatherResult.innerHTML = `
    <h2>${city}</h2>
    <p>${temperature}&deg;C</p>
    <p>${randomCondition}</p>
  `;
});
