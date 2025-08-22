import confetti from 'canvas-confetti';

const CIRCLE_CLASS = 'circle';
const SQUARE_CLASS = 'square';
const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

const cellElements = document.querySelectorAll('[data-cell]');
const board = document.getElementById('board');
const messageElement = document.getElementById('message');
const restartButton = document.getElementById('restartButton');

let isSquareTurn = false;

startGame();

restartButton.addEventListener('click', startGame);

function startGame() {
  isSquareTurn = false;
  cellElements.forEach(cell => {
    cell.classList.remove(CIRCLE_CLASS);
    cell.classList.remove(SQUARE_CLASS);
    cell.removeEventListener('click', handleClick);
    cell.addEventListener('click', handleClick, { once: true });
  });
  setBoardHoverClass();
  messageElement.textContent = '';
}

function handleClick(e) {
  const cell = e.target;
  const currentClass = isSquareTurn ? SQUARE_CLASS : CIRCLE_CLASS;
  placeMark(cell, currentClass);
  if (checkWin(currentClass)) {
    endGame(false);
  } else if (isDraw()) {
    endGame(true);
  } else {
    swapTurns();
    setBoardHoverClass();
  }
}

function placeMark(cell, currentClass) {
  cell.classList.add(currentClass);
}

function swapTurns() {
  isSquareTurn = !isSquareTurn;
}

function setBoardHoverClass() {
  board.classList.remove(CIRCLE_CLASS);
  board.classList.remove(SQUARE_CLASS);
  if (isSquareTurn) {
    board.classList.add(SQUARE_CLASS);
  } else {
    board.classList.add(CIRCLE_CLASS);
  }
}

function checkWin(currentClass) {
  return WINNING_COMBINATIONS.some(combination => {
    return combination.every(index => {
      return cellElements[index].classList.contains(currentClass);
    });
  });
}

function isDraw() {
  return [...cellElements].every(cell => {
    return cell.classList.contains(CIRCLE_CLASS) || cell.classList.contains(SQUARE_CLASS);
  });
}

function endGame(draw) {
  if (draw) {
    messageElement.textContent = 'Draw!';
  } else {
    messageElement.textContent = `${isSquareTurn ? "Squares" : "Circles"} Win!`;
  }
  cellElements.forEach(cell => {
    cell.removeEventListener('click', handleClick);
  });
  
  triggerConfetti();
}

function triggerConfetti() {
  const duration = 3 * 1000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  const interval = setInterval(function() {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);
    confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
    confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
  }, 250);
}
