const ROWS = 6;
const COLS = 7;
const board = Array(ROWS).fill().map(() => Array(COLS).fill(null));
let currentPlayer = 'red';

const gameBoard = document.getElementById('game-board');
const turnIndicator = document.getElementById('turn-indicator');

function createBoard() {
  for (let col = 0; col < COLS; col++) {
    for (let row = 0; row < ROWS; row++) {
      const cell = document.createElement('div');
      cell.className = 'cell';
      cell.dataset.col = col;
      cell.addEventListener('click', () => dropCoin(col));
      gameBoard.appendChild(cell);
    }
  }
}

function dropCoin(col) {
  for (let row = ROWS - 1; row >= 0; row--) {
    if (!board[row][col]) {
      board[row][col] = currentPlayer;
      updateCell(row, col);
      if (checkWin(row, col)) {
        setTimeout(() => alert(`${currentPlayer.charAt(0).toUpperCase() + currentPlayer.slice(1)} wins!`), 100);
        return;
      }
      switchPlayer();
      return;
    }
  }
}

function updateCell(row, col) {
  const index = row * COLS + col;
  const cell = gameBoard.children[index];
  cell.classList.add(currentPlayer);
}

function switchPlayer() {
  currentPlayer = currentPlayer === 'red' ? 'blue' : 'red';
  turnIndicator.textContent = `${currentPlayer.charAt(0).toUpperCase() + currentPlayer.slice(1)}'s turn`;
}

function checkWin(row, col) {
  const directions = [
    [0, 1], [1, 0], [1, 1], [1, -1]
  ];

  for (const [dx, dy] of directions) {
    let count = 1;
    count += countDirection(row, col, dx, dy);
    count += countDirection(row, col, -dx, -dy);
    if (count >= 4) return true;
  }

  return false;
}

function countDirection(row, col, dx, dy) {
  let count = 0;
  let r = row + dx;
  let c = col + dy;

  while (r >= 0 && r < ROWS && c >= 0 && c < COLS && board[r][c] === currentPlayer) {
    count++;
    r += dx;
    c += dy;
  }

  return count;
}

createBoard();
