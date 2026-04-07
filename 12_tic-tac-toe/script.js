const cells = document.querySelectorAll(".cell");
const statusText = document.getElementById("status");
const resetBtn = document.getElementById("resetBtn");

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

let board = Array(9).fill("");
let currentPlayer = "X";
let isGameOver = false;

function checkWinner() {
  return winPatterns.find((pattern) => {
    const [a, b, c] = pattern;
    return board[a] && board[a] === board[b] && board[a] === board[c];
  });
}

function updateStatus(message) {
  statusText.textContent = message;
}

function handleCellClick(event) {
  const index = Number(event.target.dataset.index);

  if (board[index] || isGameOver) {
    return;
  }

  board[index] = currentPlayer;
  event.target.textContent = currentPlayer;

  const winningPattern = checkWinner();

  if (winningPattern) {
    isGameOver = true;
    updateStatus(`Player ${currentPlayer} wins!`);
    cells.forEach((cell) => {
      cell.disabled = true;
    });
    return;
  }

  if (board.every((cell) => cell)) {
    isGameOver = true;
    updateStatus("It's a draw!");
    return;
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";
  updateStatus(`Player ${currentPlayer}'s turn`);
}

function resetGame() {
  board = Array(9).fill("");
  currentPlayer = "X";
  isGameOver = false;

  cells.forEach((cell) => {
    cell.textContent = "";
    cell.disabled = false;
  });

  updateStatus("Player X's turn");
}

cells.forEach((cell) => {
  cell.addEventListener("click", handleCellClick);
});

resetBtn.addEventListener("click", resetGame);
