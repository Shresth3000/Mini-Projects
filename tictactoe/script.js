const boxes = document.querySelectorAll(".boxes");
let currentPlayer = "X";
let gameOver = false;

const winPatterns = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
  [0, 4, 8], [2, 4, 6]             // Diagonals
];
const rTxt=document.querySelector("#rTxt");
function checkWinner() {
  for (let pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (
      boxes[a].innerText &&
      boxes[a].innerText === boxes[b].innerText &&
      boxes[a].innerText === boxes[c].innerText
    ) {
      gameOver = true;
      rTxt.innerText=`${boxes[a].innerText} Wins!!`;
      return;
    }
  }

  // Check for draw
  if ([...boxes].every(box => box.innerText) && !gameOver) {
      rTxt.innerText="Its a Draw!";
    gameOver = true;
  }
}

boxes.forEach(box => {
  box.addEventListener("click", () => {
    if (!box.innerText && !gameOver) {
      box.innerText = currentPlayer;
      checkWinner();
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  });
});
const reset = document.getElementById("reset");

reset.addEventListener("click", () => {
  [...boxes].forEach((box) => {
    box.innerText = "";
  });
  gameOver = false;
  currentPlayer = "X";
  rTxt.innerText = "New Game Started!";
});
