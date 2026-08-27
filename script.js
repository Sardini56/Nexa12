let player = {
  name: "Player",
  money: 500,
  energy: 100,
  happiness: 75
};

function updatePlayer() {
  document.getElementById("playerName").textContent = player.name;
  document.getElementById("money").textContent = "€" + player.money;
  document.getElementById("energy").textContent = player.energy + "%";
  document.getElementById("happiness").textContent =
    player.happiness + "%";
}

function startGame() {
  const name = prompt("What is your name?");

  if (name && name.trim()) {
    player.name = name.trim();
    updatePlayer();
  }
}

function useBuilding(type) {
  if (type === "home") {
    player.energy = Math.min(100, player.energy + 20);
    showMessage("🏠 You rested at home. Energy restored.");
  }

  if (type === "work") {
    if (player.energy < 20) {
      showMessage("⚡ You are too tired to work.");
      return;
    }

    player.energy -= 20;
    player.money += 100;

    showMessage("💼 You worked and earned €100.");
  }

  if (type === "shop") {
    if (player.money < 50) {
      showMessage("💰 You need at least €50.");
      return;
    }

    player.money -= 50;
    player.happiness = Math.min(100, player.happiness + 10);

    showMessage("🛍️ You bought something nice. Happiness +10.");
  }

  if (type === "gym") {
    if (player.energy < 15) {
      showMessage("⚡ You don't have enough energy.");
      return;
    }

    player.energy -= 15;
    player.happiness = Math.min(100, player.happiness + 5);

    showMessage("🏋️ Great workout! Happiness +5.");
  }

  if (type === "restaurant") {
    if (player.money < 25) {
      showMessage("💰 You need €25.");
      return;
    }

    player.money -= 25;
    player.energy = Math.min(100, player.energy + 10);
    player.happiness = Math.min(100, player.happiness + 10);

    showMessage("🍔 Delicious! Energy and happiness increased.");
  }

  if (type === "car") {
    if (player.money < 300) {
      showMessage("🚗 You need €300 to buy a car.");
      return;
    }

    player.money -= 300;

    showMessage("🚗 You bought your first car!");
  }

  updatePlayer();
}

function showMessage(message) {
  let oldMessage = document.getElementById("gameMessage");

  if (oldMessage) {
    oldMessage.remove();
  }

  const messageBox = document.createElement("div");

  messageBox.id = "gameMessage";
  messageBox.textContent = message;

  messageBox.style.position = "fixed";
  messageBox.style.bottom = "30px";
  messageBox.style.left = "50%";
  messageBox.style.transform = "translateX(-50%)";
  messageBox.style.padding = "16px 22px";
  messageBox.style.background = "#171b23";
  messageBox.style.border = "1px solid #343b48";
  messageBox.style.borderRadius = "14px";
  messageBox.style.color = "white";
  messageBox.style.zIndex = "9999";

  document.body.appendChild(messageBox);

  setTimeout(() => {
    messageBox.remove();
  }, 2500);
}

document.addEventListener("DOMContentLoaded", () => {
  updatePlayer();

  const buildings = document.querySelectorAll(".building");

  buildings.forEach((building) => {
    building.addEventListener("click", () => {
      if (building.classList.contains("home-building")) {
        useBuilding("home");
      }

      if (building.classList.contains("work-building")) {
        useBuilding("work");
      }

      if (building.classList.contains("shop-building")) {
        useBuilding("shop");
      }

      if (building.classList.contains("gym-building")) {
        useBuilding("gym");
      }

      if (building.classList.contains("restaurant-building")) {
        useBuilding("restaurant");
      }

      if (building.classList.contains("car-building")) {
        useBuilding("car");
      }
    });
  });
});
