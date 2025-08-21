import { generateSudoku, isValidSudoku } from './sudoku.js';

const board = document.getElementById('board');
const checkBtn = document.getElementById('check-btn');
const message = document.getElementById('message');

let solution;

function initializeBoard() {
  solution = generateSudoku();
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const cell = document.createElement('div');
      cell.className = 'cell';
      if (Math.random() > 0.5) {
        cell.textContent = solution[i][j];
      } else {
        const input = document.createElement('input');
        input.type = 'number';
        input.min = 1;
        input.max = 9;
        input.addEventListener('input', function() {
          if (this.value.length > 1) {
            this.value = this.value.slice(0, 1);
          }
        });
        cell.appendChild(input);
      }
      board.appendChild(cell);
    }
  }
}

function getCurrentBoard() {
  const currentBoard = [];
  const cells = board.children;
  for (let i = 0; i < 9; i++) {
    currentBoard[i] = [];
    for (let j = 0; j < 9; j++) {
      const cell = cells[i * 9 + j];
      const value = cell.textContent || cell.firstChild?.value || '0';
      currentBoard[i][j] = parseInt(value);
    }
  }
  return currentBoard;
}

checkBtn.addEventListener('click', () => {
  const currentBoard = getCurrentBoard();
  if (isValidSudoku(currentBoard)) {
    message.textContent = 'Congratulations! Your solution is correct!';
    message.className = 'success';
  } else {
    message.textContent = 'Sorry, your solution is incorrect. Keep trying!';
    message.className = 'error';
  }
});

initializeBoard();
