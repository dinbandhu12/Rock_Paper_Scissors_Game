let score = JSON.parse(localStorage.getItem("score")) || {
    wins: 0,
    losses: 0,
    ties: 0,
  };

  updateScoreElement();

  function playGame(PlayerMove) {
    const computerMove = pickComputerMove();

    let result = "";

    if (PlayerMove === "Scissors") {
      if (computerMove === "Rock") {
        result = "You win 👍🏻";
      } else if (computerMove === "Paper") {
        result = "You lose 👎🏻";
      } else if (computerMove === "Scissors") {
        result = "Tie!!";
      }
    } else if (PlayerMove === "Paper") {
      if (computerMove === "Rock") {
        result = "You win 👍🏻";
      } else if (computerMove === "Paper") {
        result = "Tie!!";
      } else if (computerMove === "Scissors") {
        result = "You lose 👎🏻";
      }
    } else if (PlayerMove === "Rock") {
      if (computerMove === "Rock") {
        result = "Tie!!";
      } else if (computerMove === "Paper") {
        result = "You win 👍🏻";
      } else if (computerMove === "Scissors") {
        result = "You lose 👎🏻";
      }
    }

    if (result === "You win 👍🏻") {
      score.wins++;
    } else if (result === "You lose 👎🏻") {
      score.losses++;
    } else if (result === "Tie!!") {
      score.ties++;
    }

    localStorage.setItem("score", JSON.stringify(score));

    updateScoreElement();

    document.querySelector(
      ".js-moves"
    ).innerHTML = `You
    <img src="/images/${PlayerMove}-emoji.png" alt="Rock" class="move-icon">
    <img src="/images/${computerMove}-emoji.png" alt="Scissors" class="move-icon">
    Computer`;

    document.querySelector(".js-result").innerHTML = result;
  }

  function updateScoreElement() {
    document.querySelector(
      ".js-score"
    ).innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
  }

  function pickComputerMove() {
    const randomNumber = Math.random();

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
      computerMove = "Rock";
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
      computerMove = "Paper";
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
      computerMove = "Scissors";
    }

    return computerMove;
  }