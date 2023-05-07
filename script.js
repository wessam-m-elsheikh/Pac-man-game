document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".grid");
  const scoreText = document.getElementById("score");
  const width = 28;
  let score = 0;

  // A copied layout
  const layout = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1,
    1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 3, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0,
    1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 3, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0,
    1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1,
    1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1,
    1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 2, 2, 1, 1,
    1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2,
    2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 0, 0, 0, 4, 1,
    2, 2, 2, 2, 2, 2, 1, 4, 0, 0, 0, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 0, 1,
    1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1,
    1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0,
    0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1,
    0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1,
    1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 3, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 3, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1,
    0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0,
    0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
    1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1,
  ];
  // 0 - pac-dots
  // 1 - wall
  // 2 - ghost-lair
  // 3 - power-pellet
  // 4 - empty
  const squares = [];

  function createGrid() {
    for (let i = 0; i < layout.length; i++) {
      const square = document.createElement("div");
      grid.appendChild(square);
      squares.push(square);

      // add layout to the grid
      if (layout[i] === 0) {
        squares[i].classList.add("pac-dot");
      } else if (layout[i] === 1) {
        squares[i].classList.add("wall");
      } else if (layout[i] === 2) {
        squares[i].classList.add("ghost-lair");
      } else if (layout[i] === 3) {
        squares[i].classList.add("power-pellet");
      }
    }
  }

  createGrid();

  // starting position of pac-man
  let pacCurrentIndex = 490;
  squares[pacCurrentIndex].classList.add("pac-man");

  // move pac-man
  function movePacman(e) {
    // remove pacman from the current position
    squares[pacCurrentIndex].classList.remove("pac-man");

    // move pacman according to it's position on the grid
    // the game logic:
    // left an right movements--> we check first the the current position of pac-man is not zero by getting the modulus of the current position over the width !== 0 (any number % 0 === 0) then we can move left , and then we check it's at any position equals or above zero at any line -note that the line contains 28 divs- must be less than (width - 1) 27 (current position % width < width - 1) so we can move right
    // sure we also check that our next move is not meeting a wall, the ghost-lair or ...

    // up and down movements --> to move up we need to make sure that we still have lines above us so we check if (the current position - width >= 0) this means we can go up, and to go down we must check that we still have lines below so we can go down and that the next line --> (current position + width) is not less that the width of the whole grid (width * width) only then we can go down.

    switch (e.key) {
      case "ArrowLeft":
        if (
          pacCurrentIndex % width !== 0 &&
          !squares[pacCurrentIndex - 1].classList.contains("wall") &&
          !squares[pacCurrentIndex - 1].classList.contains("ghost-lair")
        ) {
          pacCurrentIndex -= 1;
        }

        // if pac-ma near the left exit
        if (pacCurrentIndex - 1 === 363) {
          pacCurrentIndex = 391;
        }

        break;
      case "ArrowRight":
        if (
          pacCurrentIndex % width < width - 1 &&
          !squares[pacCurrentIndex + 1].classList.contains("wall") &&
          !squares[pacCurrentIndex + 1].classList.contains("ghost-lair")
        ) {
          pacCurrentIndex += 1;
        }

        // if pac-ma near the right exit
        if (pacCurrentIndex + 1 === 392) {
          pacCurrentIndex = 364;
        }
        break;
      case "ArrowUp":
        if (
          pacCurrentIndex - width >= 0 &&
          !squares[pacCurrentIndex - width].classList.contains("wall") &&
          !squares[pacCurrentIndex - width].classList.contains("ghost-lair")
        ) {
          pacCurrentIndex -= width;
        }
        break;
      case "ArrowDown":
        if (
          pacCurrentIndex + width < width * width &&
          !squares[pacCurrentIndex + width].classList.contains("wall") &&
          !squares[pacCurrentIndex + width].classList.contains("ghost-lair")
        ) {
          pacCurrentIndex += width;
        }
        break;
    }
    squares[pacCurrentIndex].classList.add("pac-man");

    // ----------- Game Functions -----------
    eatDot();
    eatPowerPellet();
    isGameOver();
    isWin();
  }

  document.addEventListener("keyup", movePacman);

  // eating a dot and increase the score
  function eatDot() {
    if (squares[pacCurrentIndex].classList.contains("pac-dot")) {
      score++;
      scoreText.innerHTML = score;
      squares[pacCurrentIndex].classList.remove("pac-dot");
    }
  }

  // if eats a powerpellet => score += 10, all ghosts get scared,
  function eatPowerPellet() {
    if (squares[pacCurrentIndex].classList.contains("power-pellet")) {
      score += 10;
      ghosts.forEach((ghost) => (ghost.isScared = true));
      setTimeout(ghostNotScared, 10000);
      squares[pacCurrentIndex].classList.remove("power-pellet");
    }
  }

  // make ghosts unscared again
  function ghostNotScared() {
    ghosts.forEach((ghost) => (ghost.isScared = false));
  }

  // creat the ghosts
  class Ghost {
    constructor(className, startIndex, speed) {
      this.className = className;
      this.startIndex = startIndex;
      this.speed = speed;
      this.currentIndex = startIndex;
      this.timerId = NaN;
      this.isScared = false;
    }
  }

  const ghosts = [
    new Ghost("blinky", 348, 250),
    new Ghost("inky", 351, 300),
    new Ghost("pinky", 376, 400),
    new Ghost("clyde", 379, 500),
  ];

  ghosts.forEach((ghost) => {
    squares[ghost.currentIndex].classList.add(ghost.className);
    squares[ghost.currentIndex].classList.add("ghost");
  });

  // move the ghosts
  ghosts.forEach((ghost) => moveGhost(ghost));

  // write the function moving the ghosts
  function moveGhost(ghost) {
    const directionsArray = [1, -1, width, -width];
    let direction =
      directionsArray[Math.floor(Math.random() * directionsArray.length)];

    ghost.timerId = setInterval(function () {
      // check if the next step is not a wall nor a ghost
      if (
        !squares[ghost.currentIndex + direction].classList.contains("wall") &&
        !squares[ghost.currentIndex + direction].classList.contains("ghost")
      ) {
        // go there and remove all ghost related classes
        squares[ghost.currentIndex].classList.remove(
          ghost.className,
          "ghost",
          "scared-ghost"
        );
        // update the current index to the direction
        ghost.currentIndex += direction;
        // create the ghost in the new direction
        squares[ghost.currentIndex].classList.add(ghost.className, "ghost");
        //else choose another direction
      } else {
        direction =
          directionsArray[Math.floor(Math.random() * directionsArray.length)];
      }

      // if pac man eats a power pellet
      if (ghost.isScared) {
        squares[ghost.currentIndex].classList.add("scared-ghost");
      }

      // if pac-man eats a ghost
      if (
        ghost.isScared &&
        squares[ghost.currentIndex].classList.contains("pac-man")
      ) {
        score += 100;
        squares[ghost.currentIndex].classList.remove(
          ghost.className,
          "ghost",
          "scared-ghost"
        );
        ghost.currentIndex = ghost.startIndex;
        squares[ghost.currentIndex].classList.add(ghost.currentIndex, "ghost");
      }
      isGameOver();
    }, ghost.speed);
  }

  // check for game over
  function isGameOver() {
    if (
      squares[pacCurrentIndex].classList.contains("ghost") &&
      !squares[pacCurrentIndex].classList.contains("scared-ghost")
    ) {
      ghosts.forEach((ghost) => clearInterval(ghost.timerId));
      document.removeEventListener("keyup", movePacman);
      scoreText.innerHTML = " Game Over!";
    }
  }

  // check for winning
  function isWin() {
    if (score >= 180) {
      ghosts.forEach((ghost) => clearInterval(ghost.timerId));
      document.removeEventListener("keyup", movePacman);
      scoreText.innerHTML = " You Win!";
    }
  }
});
