var argButtonName, buttonPaper, buttonRock, buttonScissors, buttonTest;
var argComputerMove,
  argMoveId,
  argPlayerMove,
  computerMove,
  playerInput,
  playerMove,
  randomNumber;

// --- Pobranie przycisków po id ---
buttonTest = document.getElementById("button-test");
buttonRock = document.getElementById("button-rock");
buttonPaper = document.getElementById("button-paper");
buttonScissors = document.getElementById("button-scissors");

// --- Funkcja uruchamiana po kliknięciu guzika ---
function buttonClicked(argButtonName) {
  clearMessages();
  console.log(argButtonName + " został kliknięty");

  playerMove = argButtonName;
  console.log("ruch gracza to: " + playerMove);

  randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log("wylosowana liczba to: " + randomNumber);

  computerMove = getMoveName(randomNumber);
  console.log("ruch komputera to: " + computerMove);

  displayResult(playerMove, computerMove);
}

// --- Powiązania przycisków z funkcją ---
buttonTest.addEventListener("click", function () {
  buttonClicked("Guzik TEST");
});
buttonRock.addEventListener("click", function () {
  buttonClicked("kamień");
});
buttonPaper.addEventListener("click", function () {
  buttonClicked("papier");
});
buttonScissors.addEventListener("click", function () {
  buttonClicked("nożyce");
});

// --- Funkcja tłumacząca numer na ruch komputera ---
function getMoveName(argMoveId) {
  if (argMoveId == 1) {
    return "kamień";
  } else if (argMoveId == 2) {
    return "papier";
  } else if (argMoveId == 3) {
    return "nożyce";
  } else {
    printMessage(
      "Nie znam ruchu o id " + argMoveId + '. Zakładam, że chodziło o "kamień".'
    );
    return "kamień";
  }
}

// --- Funkcja porównująca wynik gry ---
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

// --- Funkcje do wypisywania wiadomości ---
function printMessage(msg) {
  document.getElementById("messages").innerHTML += msg + "<br>";
}

function clearMessages() {
  document.getElementById("messages").innerHTML = "";
}
