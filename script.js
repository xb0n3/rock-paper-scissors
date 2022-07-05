const rock = 'rock'
    , paper = 'paper'
    , scissors = 'scissors';
let computerSelection = ''
  , playerSelection = '';

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

function playerPlay() {
  playerSelection = prompt('Pick one: rock, paper or scissors.');
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
  computerPlay();
};