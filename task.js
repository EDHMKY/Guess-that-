
const enterNumText = `Please enter a number greater than zero`;


let restartGame = true;


let rangeNum;


let randomNum;


let attempts;


let guess;


let playAgain;


alert(`Welcome to "GUESS THAT NUMBER!" Please click "OK" to start the game.`);


while (restartGame){
  
  rangeNum = prompt(`Please enter a maximum number for the range:`);

  
  rangeNum = parseInt(rangeNum);
  
  
  while (!rangeNum || rangeNum < 1){
    rangeNum = prompt(enterNumText);
    rangeNum = parseInt(rangeNum);
  }
  
  
  randomNum = Math.floor(Math.random() * rangeNum) + 1;

  
  attempts = parseInt(prompt(`Please enter a number of attempts allowed:`));

  
  while (!attempts || attempts < 1){
    attempts = parseInt(prompt(enterNumText));
  }

  
  guess = prompt(`Please enter a guess from 1 to ${rangeNum}. You have ${attempts} attempt(s) left:`);

  
  while (true){
    
    if (guess === `Valley Forge`){
      alert(`The number is ${randomNum}`);
      
      guess = prompt(`Please enter a guess from 1 to ${rangeNum}. You have ${attempts} attempt(s) left:`);
    }

    
    guess = parseInt(guess);

    
    while (!guess || guess < 1 || guess > rangeNum){
      guess = parseInt(prompt(`Please enter a number from 1 to ${rangeNum}`));
    }

    
    attempts--;

    , the game ends (NOTE: The BREAK ends the loop)
    if (guess === randomNum){
      alert(`CONGRATULATIONS YOU GUESSED THE CORRECT NUMBER: ${randomNum}`);
      break;

      
    } else if (attempts === 0){
      alert(`Sorry, but you have run out of attempts :(. The number was ${randomNum}`);
      break;

      
    } else if (guess < randomNum){
      guess = prompt(`Too low. You have ${attempts} attempt(s) left`);

      
    } else {
      guess = prompt(`Too high. You have ${attempts} attempt(s) left`);
    }
  }

  
  playAgain = prompt(`Would you like to play again? Y for yes. N for no.`);

  
  while (true){
    
    if (playAgain.toUpperCase() === "N") {
      
      alert("Thanks for playing!");
      restartGame = false;
      break;

      
    } else if (playAgain.toUpperCase() === "Y") {
      
      break;

      
    } else {
      playAgain = prompt(`Please enter Y or N`);
    }
  }
}