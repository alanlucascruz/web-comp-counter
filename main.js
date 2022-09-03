var counter = 0;

const counterUpButton = document.querySelector("#counter-up");
const counterDownButton = document.querySelector("#counter-down");

const counterUp = () => {
  counter++;
  refreshScreen();
};

const counterDown = () => {
  counter--;
  refreshScreen();
};

const refreshScreen = () => {
  document.querySelector("h1").textContent = counter;
};

counterUpButton.onclick = counterUp;
counterDownButton.onclick = counterDown;

window.onload = refreshScreen;
