let holdNum;
let diceOneHeld = false;
let diceTwoHeld = false;
let diceThreeHeld = false;
let diceFourHeld = false;
let diceFiveHeld = false;
let numRoll = 0;
let remainingRolls = 3;


function newGame() {
  numRoll = 0;
  remainingRolls = 3;
  diceOneHeld = false;
  diceTwoHeld = false;
  diceThreeHeld = false;
  diceFourHeld = false;
  diceFiveHeld = false;
  let dieList = ["dieOne", "dieTwo", "dieThree", "dieFour", "dieFive"];
  for (let i = 0; i < 5; i++) {
    let dieToChange = dieList[i];
    let dieFace = document.getElementById(dieToChange);
    dieFace.classList.remove("first-face", "second-face", "third-face", "fourth-face", "fifth-face", "column");
    dieFace.style.backgroundColor = "tomato";
    dieFace.innerHTML = null;
  }
  let resetRolls = document.getElementById("remainingRolls");
  resetRolls.innerHTML = remainingRolls;
}



function rollDice() {
  numRoll++;
  remainingRolls--;
  if (numRoll > 3) {
    return;
  }
  let rollCounter = document.getElementById("remainingRolls");
  rollCounter.innerHTML = remainingRolls;
  if (diceOneHeld === false) {
      var num1 = (Math.floor(Math.random() * 6) + 1);
      displayDie(num1, "dieOne");
  }
  if (diceTwoHeld === false) {
    var num2 = (Math.floor(Math.random() * 6) + 1);
    displayDie(num2, "dieTwo");
  }
  if (diceThreeHeld === false) {
    var num3 = (Math.floor(Math.random() * 6) + 1);
    displayDie(num3, "dieThree");
  }
  if (diceFourHeld === false) {
  let num4 = (Math.floor(Math.random() * 6) + 1);
  displayDie(num4, "dieFour");
  }
  if (diceFiveHeld === false) {
    let num5 = (Math.floor(Math.random() * 6) + 1);
    displayDie(num5, "dieFive");
  }
}

function diceHold(diceName) {
  if (numRoll === 0 || numRoll >= 3) {
    return;
  }
  document.getElementById(diceName).style.backgroundColor = "blue";
  holdNum = true;
  if (diceName === "dieOne") {
    if (diceOneHeld === false) {
      diceOneHeld = true;
    } else {
      diceOneHeld = false;
      document.getElementById(diceName).style.backgroundColor = "tomato";
    }
  }
  if (diceName === "dieTwo") {
    if (diceTwoHeld === false) {
      diceTwoHeld = true;
    } else {
      diceTwoHeld = false;
      document.getElementById(diceName).style.backgroundColor = "tomato";
    }
  }
  if (diceName === "dieThree") {
    if (diceThreeHeld === false) {
      diceThreeHeld = true;
    } else {
      diceThreeHeld = false;
      document.getElementById(diceName).style.backgroundColor = "tomato";
    }
  }
  if (diceName === "dieFour") {
    if (diceFourHeld === false) {
      diceFourHeld = true;
    } else {
      diceFourHeld = false;
      document.getElementById(diceName).style.backgroundColor = "tomato";
    }
  }
  if (diceName === "dieFive") {
    if (diceFiveHeld === false) {
      diceFiveHeld = true;
    } else {
      diceFiveHeld = false;
      document.getElementById(diceName).style.backgroundColor = "tomato";
    }
  }
}
  
function displayDie(value, id) {
  let dieFace = document.getElementById(id);
  if (value === 1) {
    dieFace.innerHTML = "<span class='dot'></span>";
    dieFace.classList.add("first-face");
    dieFace.classList.remove("second-face", "third-face", "fourth-face", "fifth-face", "column");
  } 
  else if (value === 2) {
    dieFace.innerHTML = "<span class='dot'></span><span class='dot'></span>";
    dieFace.classList.add("second-face");
    dieFace.classList.remove("first-face", "third-face", "fourth-face", "fifth-face", "column");
  }
  else if (value === 3) {
    dieFace.innerHTML = "<span class='dot'></span><span class='dot'></span><span class='dot'></span";
    dieFace.classList.add("third-face");
    dieFace.classList.remove("first-face", "second-face", "fourth-face", "fifth-face", "column");
  }
  else if (value === 4) {
    dieFace.innerHTML = "<div class='column'><span class='dot'></span><span class='dot'></span></div><div class='column'><span class='dot'></span><span class='dot'></span></div>";
    dieFace.classList.add("fourth-face", "column");
    dieFace.classList.remove("first-face", "second-face", "third-face", "fifth-face");
  }
  else if (value === 5) {
    dieFace.innerHTML = "<div class='column'><span class='dot'></span><span class='dot'></span></div><div class='column'><span class='dot'></span></div><div class='column'><span class='dot'></span><span class='dot'></span></div>";
    dieFace.classList.add("fifth-face", "column");
    dieFace.classList.remove("first-face", "second-face", "third-face", "fourth-face");
  }
  else if (value === 6) {
    dieFace.innerHTML = "<div class='column'><span class='dot'></span><span class='dot'></span><span class='dot'></span></div><div class='column'><span class='dot'></span><span class='dot'></span><span class='dot'></span></div>";
    dieFace.classList.add("fourth-face", "column");
    dieFace.classList.remove("first-face", "second-face", "third-face", "fifth-face");
  }
}




/* Homework
1. total score after 3 rolls
*/