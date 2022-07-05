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
}