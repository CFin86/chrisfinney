//gets the user's choice
function getUserChoice() {
  var userInput = prompt("Do you choose rock, paper or scissors?");
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return 'The user chooses: ' + userInput;
  } else {
    return 'The user chooses: ' + userInput + ' that\'s not an option that can be played in the simple game of rock, paper, and scissors!';

  }
}


function getComputerChoice() {
  Math.floor(Math.random() * 3);
  var computerInput;
  if (computerInput <= 1) {
    computerInput = "rock";
    return 'The computer chooses: ' + computerInput;
  } else if (computerInput <= 2) {
    computerInput = "paper";
    return 'The computer chooses: ' + computerInput;
  } else {
    computerInput = "scissors";
    return 'The computer chooses: ' + computerInput;
  }
}


function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'The game is a tie!';
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'The computer wins!';
    } else {
      return 'You won!';
    }
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'The computer wins!';
    } else {
      return 'You won!';
    }
  }

  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'The computer wins!';
    } else {
      return 'You won!';
    }
  }

}

function playGame(userChoice, computerChoice) {
  function playGame() {
    var userChoice = getUserChoice();
    var computerChoice = getComputerChoice();
    console.log('You chose: ' + userChoice);
    console.log('The computer chose: ' + computerChoice);

    console.log(determineWinner(userChoice, computerChoice));
  }
}
console.log(getUserChoice());
console.log(getComputerChoice());
console.log(determineWinner(getUserChoice, getComputerChoice));
console.log(playGame());

//console.log(determineWinner(getUserChoice(), getComputerChoice()));