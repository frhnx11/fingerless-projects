const choices = ['rock', 'paper', 'scissors'];
const resultDiv = document.getElementById('result');
const userScoreSpan = document.getElementById('user-score');
const computerScoreSpan = document.getElementById('computer-score');

let userScore = 0;
let computerScore = 0;

function computerPlay() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "It's a tie!";
  }

  if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    userScore++;
    userScoreSpan.textContent = userScore;
    return `You win! ${userChoice} beats ${computerChoice}`;
  } else {
    computerScore++;
    computerScoreSpan.textContent = computerScore;
    return `You lose! ${computerChoice} beats ${userChoice}`;
  }
}

function handleClick(e) {
  const userChoice = e.target.id;
  const computerChoice = computerPlay();
  const result = playRound(userChoice, computerChoice);
  resultDiv.textContent = result;
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('rock').addEventListener('click', handleClick);
  document.getElementById('paper').addEventListener('click', handleClick);
  document.getElementById('scissors').addEventListener('click', handleClick);
});
