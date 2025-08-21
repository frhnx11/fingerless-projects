const words = ['JAVASCRIPT', 'HANGMAN', 'DEVELOPER', 'PROGRAMMING', 'COMPUTER'];
let selectedWord = '';
let guessedLetters = [];
let remainingGuesses = 6;

const wordDisplayElement = document.getElementById('word-display');
const keyboardElement = document.getElementById('keyboard');
const messageElement = document.getElementById('message');
const hangmanDrawingElement = document.getElementById('hangman-drawing');

function initializeGame() {
  selectedWord = words[Math.floor(Math.random() * words.length)];
  guessedLetters = [];
  remainingGuesses = 6;
  updateWordDisplay();
  createKeyboard();
  updateHangmanDrawing();
  messageElement.textContent = '';
}

function updateWordDisplay() {
  wordDisplayElement.textContent = selectedWord
    .split('')
    .map(letter => guessedLetters.includes(letter) ? letter : '_')
    .join(' ');
}

function createKeyboard() {
  keyboardElement.innerHTML = '';
  for (let i = 65; i <= 90; i++) {
    const letter = String.fromCharCode(i);
    const button = document.createElement('button');
    button.textContent = letter;
    button.classList.add('key');
    button.addEventListener('click', () => handleGuess(letter));
    keyboardElement.appendChild(button);
  }
}

function handleGuess(letter) {
  if (guessedLetters.includes(letter)) return;

  guessedLetters.push(letter);
  document.querySelector(`button:contains('${letter}')`).disabled = true;

  if (selectedWord.includes(letter)) {
    updateWordDisplay();
    if (!wordDisplayElement.textContent.includes('_')) {
      endGame(true);
    }
  } else {
    remainingGuesses--;
    updateHangmanDrawing();
    if (remainingGuesses === 0) {
      endGame(false);
    }
  }
}

function updateHangmanDrawing() {
  hangmanDrawingElement.innerHTML = `
    <svg width="200" height="250">
      <line x1="40" y1="230" x2="160" y2="230" stroke="black" stroke-width="4"/>
      <line x1="60" y1="230" x2="60" y2="50" stroke="black" stroke-width="4"/>
      <line x1="60" y1="50" x2="140" y2="50" stroke="black" stroke-width="4"/>
      <line x1="140" y1="50" x2="140" y2="80" stroke="black" stroke-width="4"/>
      ${remainingGuesses < 6 ? '<circle cx="140" cy="100" r="20" stroke="black" stroke-width="4" fill="none"/>' : ''}
      ${remainingGuesses < 5 ? '<line x1="140" y1="120" x2="140" y2="170" stroke="black" stroke-width="4"/>' : ''}
      ${remainingGuesses < 4 ? '<line x1="140" y1="130" x2="120" y2="150" stroke="black" stroke-width="4"/>' : ''}
      ${remainingGuesses < 3 ? '<line x1="140" y1="130" x2="160" y2="150" stroke="black" stroke-width="4"/>' : ''}
      ${remainingGuesses < 2 ? '<line x1="140" y1="170" x2="120" y2="200" stroke="black" stroke-width="4"/>' : ''}
      ${remainingGuesses < 1 ? '<line x1="140" y1="170" x2="160" y2="200" stroke="black" stroke-width="4"/>' : ''}
    </svg>
  `;
}

function endGame(isWin) {
  const message = isWin ? 'Congratulations! You won!' : `Game over. The word was: ${selectedWord}`;
  messageElement.textContent = message;
  keyboardElement.querySelectorAll('button').forEach(button => button.disabled = true);
}

document.addEventListener('DOMContentLoaded', initializeGame);
