window.onload = function () {
  const game = document.getElementById("game");
  const status = document.getElementById("status");
  const board = document.getElementById("board");
  const controls = document.getElementsByClassName("controls")[0];
  const button = document.getElementsByClassName("btn")[0];

  // Get all the div elements using a query selector
  const divs = board.querySelectorAll("div");
  let plays = [null, null, null, null, null, null, null, null, null];
  let clicke = true;
  let play = "X";

  // Function to reset the game state
  function resetGame() {
    plays = [null, null, null, null, null, null, null, null, null];
    play = "X";
    status.innerHTML =
      "Move your mouse over a square and click to play an X or an O.";
    status.classList.remove("you-won");

    divs.forEach((elem) => {
      elem.innerHTML = "";
      elem.classList.remove("X", "O", "hover");
    });
  }

  // Add a button to reset the game
  button.addEventListener("click", resetGame);

  // Function to check for a winner
  function checkWinner() {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // Rows
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // Columns
      [0, 4, 8],
      [2, 4, 6], // Diagonals
    ];

    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      if (plays[a] && plays[a] === plays[b] && plays[a] === plays[c]) {
        status.innerHTML = `Congratulations! ${play} is the Winner!`;
        status.classList.add("you-won");
        return true;
      }
    }

    return false;
  }

  // Loop through the divs and set the "class" attribute to "square" for each of them
  divs.forEach((elem, index) => {
    elem.setAttribute("class", "square");

    elem.addEventListener("click", function () {
      if (plays[index] || status.classList.contains("you-won")) {
        return; // If there's already a winner or the square is already filled, do nothing
      }

      plays[index] = play;
      elem.innerHTML = play;
      elem.classList.add(play);

      if (checkWinner()) {
        return; // If a winner is found, no need to continue the game
      }

      play = play === "X" ? "O" : "X"; // Toggle between X and O
    });

    elem.addEventListener("mouseover", function () {
      if (!plays[index]) {
        elem.classList.add("hover");
      }
    });

    elem.addEventListener("mouseout", function () {
      elem.classList.remove("hover");
    });
  });

  console.log(divs);
  console.log(game);
  console.log(status);
  console.log(board);
  console.log(controls);
  console.log(button);
};
