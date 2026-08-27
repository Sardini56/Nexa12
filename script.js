let player = {
  name: "Player",
  money: 500,
  energy: 100,
  happiness: 75
};

function startGame() {
  const name = prompt("What is your name?");

  if (name && name.trim() !== "") {
    player.name = name.trim();
  }

  updateGame();
}

function updateGame() {
  const playerName = document.getElementById("playerName");
  const money = document.getElementById("money");
  const energy = document.getElementById("energy");
  const happiness = document.getElementById("happiness");

  if (playerName) {
    playerName.textContent = player.name;
  }

  if (money) {
    money.textContent = "€" + player.money;
  }

  if (energy) {
    energy.textContent = player.energy + "%";
  }

  if (happiness) {
    happiness.textContent = player.happiness + "%";
  }
}
