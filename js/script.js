var argComputerMove,
  argMoveId,
  argPlayerMove,
  computerMove,
  playerInput,
  playerMove,
  randomNumber;

/**
 * Describe this function...
 */
function displayResult(argPlayerMove, argComputerMove) {
  console.log(
    "wywołano funkcję displayResults z argumentami: " +
      argPlayerMove +
      ", " +
      argComputerMove
  );
  if (argPlayerMove == "papier" && argComputerMove == "kamień") {
    printMessage("Wygrywasz!");
  } else if (argPlayerMove == "kamień" && argComputerMove == "nożyce") {
    printMessage("Wygrywasz!");
  } else if (argPlayerMove == "nożyce" && argComputerMove == "papier") {
    printMessage("Wygrywasz!");
  } else if (argPlayerMove == argComputerMove) {
    printMessage("Remis!");
  } else {
    printMessage("Przegrywasz :(");
  }
  printMessage("Zagrałem " + argComputerMove + ", a Ty " + argPlayerMove);
}
playerInput = prompt("Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.");
console.log("wybór ruchu gracza to: " + playerInput);
playerMove = 0;
console.log("ruch gracza to: " + playerMove);
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log("wylosowana liczba to: " + randomNumber);
computerMove = 0;
console.log("ruch komputera to: " + computerMove);
displayResult(playerMove, computerMove);
