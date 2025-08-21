const ROWS = 6;
const COLS = 7;
let currentPlayer = 'red';
let gameBoard = Array(ROWS).fill().map(() => Array(COLS).fill(null));
let gameOver = false;

const board = document.getElementById('board');
const message = document.getElementById('message');
const resetButton = document.getElementById('reset');

function createBoard() {
  board.innerHTML = '';
  for (let row = ROWS - 1; row >= 0; row--) {
    for (let col = 0; col < COLS; col++) {
      const cell = document.createElement('div');
      cell.className = 'cell';
      cell.dataset.row = row;
      cell.dataset.col = col;
      cell.addEventListener('click', () => handleClick(col));
      board.appendChild(cell);
    }
  }
}

function handleClick(col) {
  if (gameOver) return;
  
  const row = findEmptyRow(col);
  
  if (row !== -1) {
    gameBoard[row][col] = currentPlayer;
    updateCell(row, col);
    
    if (checkWin(row, col)) {
      gameOver = true;
      message.textContent = `${currentPlayer.toUpperCase()} wins!`;
    } else if (checkDraw()) {
      gameOver = true;
      message.textContent = "It's a draw!";
    } else {
      currentPlayer = currentPlayer === 'red' ? 'yellow' : 'red';
    }
  }
}

function findEmptyRow(col) {
  for (let row = 0; row < ROWS; row++) {
    if (!gameBoard[row][col]) return row;
  }
  return -1;
}

function updateCell(row, col) {
  const cell = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);
  cell.classList.add(currentPlayer);
}

function checkWin(row, col) {
  return (
    checkDirection(row, col, 0, 1) || // Horizontal
    checkDirection(row, col, 1, 0) || // Vertical
    checkDirection(row, col, 1, 1) || // Diagonal /
    checkDirection(row, col, 1, -1)   // Diagonal \
  );
}

function checkDirection(row, col, rowDir, colDir) {
  let count = 1;
  const player = gameBoard[row][col];

  for (let i = 1; i <= 3; i++) {
    const newRow = row + rowDir * i;
    const newCol = col + colDir * i;
    if (newRow < 0 || newRow >= ROWS || newCol < 0 || newCol >= COLS) break;
    if (gameBoard[newRow][newCol] === player) count++;
    else break;
  }

  for (let i = 1; i <= 3; i++) {
    const newRow = row - rowDir * i;
    const newCol = col - colDir * i;
    if (newRow < 0 || newRow >= ROWS || newCol < 0 || newCol >= COLS) break;
    if (gameBoard[newRow][newCol] === player) count++;
    else break;
  }

  return count >= 4;
}

function checkDraw() {
  return gameBoard.every(row => row.every(cell => cell !== null));
}

function resetGame() {
  gameBoard = Array(ROWS).fill().map(() => Array(COLS).fill(null));
  currentPlayer = 'red';
  gameOver = false;
  message.textContent = '';
  createBoard();
}

resetButton.addEventListener('click', resetGame);

createBoard();
