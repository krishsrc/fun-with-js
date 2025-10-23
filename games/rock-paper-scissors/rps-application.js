const container = document.querySelector(".rps-container");
const header_text = document.querySelector(".rps-header-text");
const theme_mode = document.querySelector(".rps-theme-mode");

const score_count = document.querySelector(".rps-score-count");

const visuals = document.querySelector(".rps-visuals");
const player_visuals = document.querySelector(".rps-player-visuals");
const computer_visuals = document.querySelector(".rps-computer-visuals");
const result_message = document.querySelector("#result-message");

const player_choices = document.querySelector(".rps-player-choices");
const player_choices_text = document.querySelector(".rps-player-choices-text");
const player_choice = document.querySelectorAll(".rps-player-choice");

const reset_button = document.querySelector(".rps-score-reset button");

/* =================== Dark Mode =================== */
let isDarkMode = false;

theme_mode.addEventListener("click", () => {
  isDarkMode = !isDarkMode;
  if (isDarkMode) {
    container.style.backgroundColor = "#353535";
    container.style.color = "#FFFFFF";
    header_text.style.color = "#BEBFD1";
    theme_mode.querySelector("img").src =
      "../../assets/images/rock-paper-scissors/light-mode-icon.png";
    result_message.style.color = "#6881D8";
    visuals
      .querySelectorAll("path")
      .forEach((path) => (path.style.fill = "#fff"));
    player_choices_text.style.color = "rgb(234 230 226)";
    player_choice.forEach((button) => button.classList.add("dark-mode-btn"));
  } else {
    container.style.backgroundColor = "";
    container.style.color = "";
    header_text.style.color = "";
    theme_mode.querySelector("img").src =
      "../../assets/images/rock-paper-scissors/dark-mode-icon.png";
    result_message.style.color = "";
    visuals.querySelectorAll("path").forEach((path) => (path.style.fill = ""));
    player_choices_text.style.color = "";
    player_choice.forEach((button) => button.classList.remove("dark-mode-btn"));
  }
});

/* =================== Default =================== */
let gameState = "default";

const updateGameState = function () {
  switch (gameState) {
    case "default":
      score_count.style.display = "none";
      visuals.style.display = "none";
      result_message.textContent = "Ready to play?";
      result_message.style.color = "green";
      player_choices_text.style.display = "none";
      player_choices.style.display = "none";
      reset_button.style.backgroundColor = "green";
      reset_button.textContent = "Start Game";
      reset_button.addEventListener("click", () => {
        gameState = "playing";
        updateGameState();
      });
      break;

    case "playing":
      score_count.style.display = "";
      visuals.style.display = "";

      result_message.textContent = "No moves yet!";
      result_message.style.color = "bg-gray-500";

      result_message.style.color = "";
      player_choices_text.style.display = "";
      player_choices.style.display = "";
      reset_button.style.backgroundColor = "";
      reset_button.textContent = "Reset Score";
      break;
    default:
      break;
  }
};

updateGameState();
