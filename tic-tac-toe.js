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

  // Loop through the divs and set the "class" attribute to "square" for each of them
  divs.forEach((elem, index) => {
    elem.setAttribute("class", "square");
    console.log(elem, index);

    elem.addEventListener("click", function () {
      if (clicke) {
        clicke = false;
      } else {
        clicke = true;
      }

      plays[index] = play;
      elem.innerHTML = play;
      elem.classList.add(play);

      if (play == "O") {
        play = "X";
        plays[index] = play;
        elem.innerHTML = play;
        elem.classList.add(play);
      } else {
        play = "O";
        plays[index] = play;
        elem.innerHTML = play;
        elem.classList.add(play);
      }

      console.log(clicke);
      console.log(plays);

      elem.addEventListener("mouseover", function () {
        elem.classList.add("hover");
      });
      elem.addEventListener("mouseout", function () {
        elem.classList.remove("hover");
      });
    });
  });

  console.log(divs);
  console.log(game);
  console.log(status);
  console.log(board);
  console.log(controls);
  console.log(button);
};
