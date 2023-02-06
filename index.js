const levelZeroUp = document.getElementById("levelZeroUp");
const levelOneUp = document.getElementById("levelOneUp");
const levelOneDown = document.getElementById("levelOneDown");
const levelTwoDown = document.getElementById("levelTwoDown");

const levelZero = document.getElementById("level0");
const levelOne = document.getElementById("level1");
const levelTwo = document.getElementById("level2");

let defaultPosition = 0;

function hanldeLevelZero() {
  levelZeroUp.classList.add("opacity");

  if (defaultPosition === 0) {
    levelZero.classList.add("slide-top");

    setTimeout(() => {
      levelZero.classList.add("hidden");
      levelTwo.classList.remove("hidden");
    }, 1000);

    defaultPosition = 2;
  } else if (defaultPosition === 2) {
    levelTwo.classList.add("hidden");
    levelZero.classList.remove("hidden");
    defaultPosition = 0;
  } else if (defaultPosition === 1) {
    levelOne.classList.add("hidden");
    levelZero.classList.remove("hidden");
    defaultPosition = 0;
  }

  setTimeout(() => {
    levelZeroUp.classList.remove("opacity");
  }, 1000);
}

function handleLevelOneUp() {
  levelOneUp.classList.add("opacity");
  if (defaultPosition === 0) {
    levelZero.classList.add("hidden");
    levelOne.classList.remove("hidden");
    defaultPosition = 1;
  } else if (defaultPosition === 1) {
    levelOne.classList.add("hidden");
    levelTwo.classList.remove("hidden");
    defaultPosition = 2;
  }

  setTimeout(() => {
    levelOneUp.classList.remove("opacity");
  }, 1000);
}

function handleLevelOneDown() {
  levelOneDown.classList.add("opacity");

  if (defaultPosition === 2) {
    levelTwo.classList.add("hidden");
    levelOne.classList.remove("hidden");
    defaultPosition = 1;
  } else if (defaultPosition === 1) {
    levelOne.classList.add("hidden");
    levelZero.classList.remove("hidden");
    defaultPosition = 0;
  }

  setTimeout(() => {
    levelOneDown.classList.remove("opacity");
  }, 1000);
}

function handleLevelTwoDown() {
  levelTwoDown.classList.add("opacity");

  if (defaultPosition === 2) {
    levelTwo.classList.add("hidden");
    levelZero.classList.remove("hidden");
    defaultPosition = 0;
  }

  setTimeout(() => {
    levelTwoDown.classList.remove("opacity");
  }, 1000);
}

levelZeroUp.addEventListener("click", hanldeLevelZero);

levelOneUp.addEventListener("click", handleLevelOneUp);

levelOneDown.addEventListener("click", handleLevelOneDown);

levelTwoDown.addEventListener("click", handleLevelTwoDown);
