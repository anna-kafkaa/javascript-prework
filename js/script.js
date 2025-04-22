// --- Pobranie przycisków z HTML ---
const buttonTest = document.getElementById("button-test");
const buttonRock = document.getElementById("button-rock");
const buttonPaper = document.getElementById("button-paper");
const buttonScissors = document.getElementById("button-scissors");

// --- Zmienne do liczenia punktów ---
let playerWins = 0;
let computerWins = 0;

// --- Funkcja po kliknięciu guzika ---
function buttonClicked(argButtonName) {
  clearMessages();
  console.log(argButtonName + " został kliknięty");

  const playerMove = argButtonName;
  console.log("ruch gracza to: " + playerMove);

  const randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log("wylosowana liczba to: " + randomNumber);

  const computerMove = getMoveName(randomNumber);
  console.log("ruch komputera to: " + computerMove);

  displayResult(playerMove, computerMove);
}

// --- Obsługa kliknięć ---
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

// --- Zamiana liczby na nazwę ruchu ---
function getMoveName(argMoveId) {
  if (argMoveId === 1) {
    return "kamień";
  } else if (argMoveId === 2) {
    return "papier";
  } else if (argMoveId === 3) {
    return "nożyce";
  } else {
    printMessage(
      "Nie znam ruchu o id " + argMoveId + '. Zakładam, że chodziło o "kamień".'
    );
    return "kamień";
  }
}

// --- Porównanie i wypisanie wyniku ---
function displayResult(argPlayerMove, argComputerMove) {
  console.log(
    "wywołano funkcję displayResults z argumentami: " +
      argPlayerMove +
      ", " +
      argComputerMove
  );

  if (
    (argPlayerMove === "papier" && argComputerMove === "kamień") ||
    (argPlayerMove === "kamień" && argComputerMove === "nożyce") ||
    (argPlayerMove === "nożyce" && argComputerMove === "papier")
  ) {
    printMessage("Wygrywasz!");
    playerWins++;
  } else if (argPlayerMove === argComputerMove) {
    printMessage("Remis!");
  } else {
    printMessage("Przegrywasz :(");
    computerWins++;
  }

  printMessage("Zagrałem " + argComputerMove + ", a Ty " + argPlayerMove);
  document.getElementById(
    "result"
  ).innerText = `${playerWins} - ${computerWins}`;
}

// --- Wiadomości ---
function printMessage(msg) {
  document.getElementById("messages").innerHTML += msg + "<br>";
}

function clearMessages() {
  document.getElementById("messages").innerHTML = "";
}
