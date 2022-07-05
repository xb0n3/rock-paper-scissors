const rock = 'Rock'
    , paper = 'Paper'
    , scissors = 'Scissors';
let computerSelection = ''
  , playerSelection = '';

console.log(rockPaperScissors(playerPlay(), computerPlay()));

function playerPlay() {
  playerSelection = prompt('Pick one: rock, paper or scissors').toLowerCase();
  switch(true) {
    case (playerSelection == 'rock'):
      return playerSelection = rock;
      break;
    case (playerSelection == 'paper'):
      return playerSelection = paper;
      break;
    case (playerSelection == 'scissors'):
      return playerSelection = scissors;
      break;
    default:
      return playerPlay();
  }
};

function computerPlay() {
  computerSelection = Math.floor(Math.random() * 10);
  switch(true) {
    case (computerSelection < 4):
      return computerSelection = rock;
      break;
    case (computerSelection < 7):
      return computerSelection = paper;
      break;
    default:
      return computerSelection = scissors;
  }
};

function rockPaperScissors(playerSelection, computerSelection) {
  const winMessage = `You win! ${playerSelection} beats ${computerSelection}`
    , lossMessage = `You lost! ${computerSelection} beats ${playerSelection}`;
  switch(true) {
    case (playerSelection == rock &&
          computerSelection == paper):
      return lossMessage;
      break;
    case (playerSelection == rock &&
          computerSelection == scissors):
      return winMessage;
      break;
    case (playerSelection == paper &&
          computerSelection == scissors):
      return lossMessage;
      break;
    case (playerSelection == paper &&
          computerSelection == rock):
      return winMessage;
      break;
    case (playerSelection == scissors &&
          computerSelection == rock):
      return lossMessage;
      break;
  case (playerSelection == scissors &&
        computerSelection == paper):
      return winMessage;
      break;
  }
};