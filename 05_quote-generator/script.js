const quotes = [
  "Start where you are. Use what you have. Do what you can.",
  "Small steps every day still move you forward.",
  "Learning by building is the fastest way to grow.",
  "Done is better than perfect.",
  "Consistency beats intensity."
];

const quote = document.getElementById("quote");
const newQuoteBtn = document.getElementById("newQuoteBtn");

newQuoteBtn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quote.textContent = quotes[randomIndex];
});
