let nextButton = document.querySelector('#next_dialog_button');
let previousButton = document.querySelector('#previous_dialog_button');
let currentLevel = 0;
let currentExperience = 0;
let plotMessageText = document.querySelector('.plot_message_text');
let i = 0;
let goToTheGuildButton;

function appearanceButton() {
  goToTheGuildButton = document.createElement('input');
  goToTheGuildButton.type = 'button';
  goToTheGuildButton.value = 'Go to the guild';
  goToTheGuildButton.id = 'go_to_the_guild';
  const actionsMenu = document.getElementById("actions_menu");
  actionsMenu.appendChild(goToTheGuildButton);

  goToTheGuildButton.addEventListener('click', () => {
    goToTheGuildButton.parentNode.removeChild(goToTheGuildButton);
    plotMessageText.innerText = plotMessages[3];
  });
}


const plotMessageList = {
  "welcome_message": "You woke up and found yourself in an unfamiliar place. You look around and see a town in the distance, you quietly go there to look for answers.",
  "plot_moving_message": "As you approached the town you saw a gate with a large sign that said Questgrad.",
  "go_to_the_adventurers_guild": "As you should do when you enter another world. You're going to the adventurers' guild.",
  "guild":"Welcome to the adventurer's guild!"
};

const plotMessages = [plotMessageList.welcome_message, plotMessageList.plot_moving_message, plotMessageList.go_to_the_adventurers_guild,plotMessageList.guild];

nextButton.addEventListener('click', () => {
  if (i < plotMessages.length - 1) {
    i++;
    plotMessageText.innerHTML = plotMessages[i];
  }
});

previousButton.addEventListener('click', () => {
  if (i > 0) {
    i--;
    plotMessageText.innerHTML = plotMessages[i];
  }
});
