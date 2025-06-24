let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");
let currentPlayer = "X";
let gameActive = true;

// Winning combinations
const winPatterns = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
  [0, 4, 8], [2, 4, 6]             // diagonals
];

// Box click event
boxes.forEach((box, index) => {
  box.addEventListener("click", () => {
    if (box.textContent === "" && gameActive) {
      box.textContent = currentPlayer;
      if (checkWin()) {
        alert(`${currentPlayer} wins!`);
        gameActive = false;
      } else if (isDraw()) {
        alert("It's a Draw!");
        gameActive = false;
      } else {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
      }
    }
  });
});

// Check for win
function checkWin() {
  return winPatterns.some(pattern => {
    return pattern.every(index => {
      return boxes[index].textContent === currentPlayer;
    });
  });
}

// Check for draw
function isDraw() {
  return [...boxes].every(box => box.textContent !== "");
}

// Reset button
resetBtn.addEventListener("click", () => {
  boxes.forEach(box => (box.textContent = ""));
  currentPlayer = "X";
  gameActive = true;
});
