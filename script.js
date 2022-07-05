const rock = 'Rock'
    , paper = 'Paper'
    , scissors = 'Scissors';
let playerSelection = ''
  , computerSelection = ''
  , playerScore = 0
  , computerScore = 0
  , roundCount = 1;

console.log(game());

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

function playRound(playerSelection, computerSelection) {
  const winMessage = `You win! ${playerSelection} beats ${computerSelection}`
    , lossMessage = `You lost! ${computerSelection} beats ${playerSelection}`
    , drawMessage = `It's a draw! Try again`
  switch(true) {
    case (playerSelection == rock &&
          computerSelection == paper):
      ++computerScore;
      ++roundCount;
      return lossMessage;
      break;
    case (playerSelection == rock &&
          computerSelection == scissors):
      ++playerScore;
      ++roundCount;
      return winMessage;
      break;
    case (playerSelection == paper &&
          computerSelection == scissors):
      ++computerScore;
      ++roundCount;
      return lossMessage;
      break;
    case (playerSelection == paper &&
          computerSelection == rock):
      ++playerScore;
      ++roundCount;
      return winMessage;
      break;
    case (playerSelection == scissors &&
          computerSelection == rock):
      ++computerScore;
      ++roundCount;
      return lossMessage;
      break;
    case (playerSelection == scissors &&
          computerSelection == paper):
      ++playerScore;
      ++roundCount;
      return winMessage;
      break;
    case (playerSelection == computerSelection):
      return drawMessage;
  }
};

function game() {
  console.log(playRound(playerPlay(), computerPlay()));
  console.info(`The score is: ${playerScore} : ${computerScore} (player : computer)`);
  while (playerScore != 3 && computerScore != 3 && roundCount < 6) {
    game();
  }
  console.info(`Game over!`);
};