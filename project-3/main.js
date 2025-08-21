const ROWS = 6;
const COLS = 7;
const board = Array(ROWS).fill().map(() => Array(COLS).fill(null));
let currentPlayer = 'red';

const gameBoard = document.getElementById('game-board');
const turnIndicator = document.getElementById('turn-indicator');

function createBoard() {
  for (let col = 0; col < COLS; col++) {
    const column = document.createElement('div');
    column.className = 'column';
    column.dataset.col = col;
    column.addEventListener('click', () => dropCoin(col));
    
    for (let row = 0; row < ROWS; row++) {
      const cell = document.createElement('div');
      cell.className = 'cell';
      cell.dataset.row = row;
      column.appendChild(cell);
    }
    
    gameBoard.appendChild(column);
  }
}

function dropCoin(col) {
  const column = gameBoard.children[col];
  for (let row = 0; row < ROWS; row++) {
    if (!board[row][col]) {
      board[row][col] = currentPlayer;
      updateCell(column.children[row]);
      if (checkWin(row, col)) {
        setTimeout(() => alert(`${currentPlayer.charAt(0).toUpperCase() + currentPlayer.slice(1)} wins!`), 100);
        return;
      }
      switchPlayer();
      return;
    }
  }
}

function updateCell(cell) {
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
