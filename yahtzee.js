let holdNum;
let diceOneHeld = false;
let diceTwoHeld = false;
let diceThreeHeld = false;
let diceFourHeld = false;
let diceFiveHeld = false;
let numRoll = 0;
let remainingRolls = 3;
const fullHouse = 25;
const smallStraight = 30;
const largeStraight = 40;
const yahtzee = 50;

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
  document.getElementById("onesScore").innerHTML = null;
  document.getElementById("twosScore").innerHTML = null;
  document.getElementById("threesScore").innerHTML = null;
  document.getElementById("foursScore").innerHTML = null;
  document.getElementById("fivesScore").innerHTML = null;
  document.getElementById("sixesScore").innerHTML = null;
  document.getElementById("subtotalScore").innerHTML = null;
  document.getElementById("bonusScore").innerHTML = null;
  document.getElementById("uppertotalScore").innerHTML = null;
  document.getElementById("3ofakindScore").innerHTML = null;
  document.getElementById("4ofakindScore").innerHTML = null;
  document.getElementById("fullhouseScore").innerHTML = null;
  document.getElementById("smallstraightScore").innerHTML = null;
  document.getElementById("largestraightScore").innerHTML = null;
  document.getElementById("chanceScore").innerHTML = null;
  document.getElementById("yahtzeeScore").innerHTML = null;
  document.getElementById("lowertotalScore").innerHTML = null;
  document.getElementById("totalScore").innerHTML = null;
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
    var num4 = (Math.floor(Math.random() * 6) + 1);
    displayDie(num4, "dieFour");
  }
  if (diceFiveHeld === false) {
    var num5 = (Math.floor(Math.random() * 6) + 1);
    displayDie(num5, "dieFive");
  }

  //^^^^^^^^^Start of Scoring Section^^^^^^^^^^^^^^
  if (remainingRolls === 0) {

    let finalRoll = [];
    finalRoll.push(num1, num2, num3, num4, num5);
    let diceTotal = (num1 + num2 + num3 + num4 + num5);
    let numOfOnes = 0;
    let numOfTwos = 0;
    let numOfThrees = 0;
    let numOfFours = 0;
    let numOfFives = 0;
    let numOfSixes = 0;
    for (let i = 0; i < 5; i++) {
      if (finalRoll[i] === 1) {
        numOfOnes++;
      }
      else if (finalRoll[i] === 2) {
        numOfTwos++;
      }
      else if (finalRoll[i] === 3) {
        numOfThrees++;
      }
      else if (finalRoll[i] === 4) {
        numOfFours++;
      }
      else if (finalRoll[i] === 5) {
        numOfFives++;
      }
      else {
        numOfSixes++;
      }
    }
    
    //upper section scoring
    document.getElementById("onesScore").innerHTML = (numOfOnes * 1);
    document.getElementById("twosScore").innerHTML = (numOfTwos * 2);
    document.getElementById("threesScore").innerHTML = (numOfThrees * 3);
    document.getElementById("foursScore").innerHTML = (numOfFours * 4);
    document.getElementById("fivesScore").innerHTML = (numOfFives * 5);
    document.getElementById("sixesScore").innerHTML = (numOfSixes * 6);


    //three of a kind
    if (numOfOnes > 2 || numOfTwos > 2 || numOfThrees > 2 || numOfFours > 2 || numOfFives > 2 || numOfSixes > 2) {
      document.getElementById("3ofakindScore").innerHTML = diceTotal;
    }
    else {
      document.getElementById("3ofakindScore").innerHTML = "0";
    }

    //four of a kind
    if (numOfOnes > 3 || numOfTwos > 3 || numOfThrees > 3 || numOfFours > 3 || numOfFives > 3 || numOfSixes > 3) {
      document.getElementById("4ofakindScore").innerHTML = diceTotal;
    }
    else {
      document.getElementById("4ofakindScore").innerHTML = "0";
    }

    //Full House
    let check2 = false;
    let check3 = false;
    if (numOfOnes === 2 || numOfTwos === 2 || numOfThrees === 2 || numOfFours === 2 || numOfFives === 2 || numOfSixes === 2) {
      check2 = true;
    }

    if (numOfOnes === 3 || numOfTwos === 3 || numOfThrees === 3 || numOfFours === 3 || numOfFives === 3 || numOfSixes === 3) {
      check3 = true;
    }

    if (check2 === true && check3 === true) {
      document.getElementById("fullhouseScore").innerHTML = fullHouse;
    }
    else {
      document.getElementById("fullhouseScore").innerHTML = "0";
    }

    //Small Straight
    if (finalRoll.includes(1) && finalRoll.includes(2) && finalRoll.includes(3) && finalRoll.includes(4)) {
      document.getElementById("smallstraightScore").innerHTML = smallStraight;
    }
    else if (finalRoll.includes(2) && finalRoll.includes(3) && finalRoll.includes(4) && finalRoll.includes(5)) {
      document.getElementById("smallstraightScore").innerHTML = smallStraight;
    }
    else {
      document.getElementById("smallstraightScore").innerHTML = "0";
    }

    //Large Straight
    if (finalRoll.includes(1) && finalRoll.includes(2) && finalRoll.includes(3) && finalRoll.includes(4) && finalRoll.includes(5)) {
      document.getElementById("largestraightScore").innerHTML = largeStraight;
    }
    else {
      document.getElementById("largestraightScore").innerHTML = "0";
    }

    //Chance
    document.getElementById("chanceScore").innerHTML = diceTotal;

    //Yahtzee
    if (numOfOnes === 5) {
      document.getElementById("yahtzeeScore").innerHTML = yahtzee;
    }
    if (numOfTwos === 5) {
      document.getElementById("yahtzeeScore").innerHTML = yahtzee;
    }
    if (numOfThrees === 5) {
      document.getElementById("yahtzeeScore").innerHTML = yahtzee;
    }
    if (numOfFours === 5) {
      document.getElementById("yahtzeeScore").innerHTML = yahtzee;
    }
    if (numOfFives === 5) {
      document.getElementById("yahtzeeScore").innerHTML = yahtzee;
    }
    if (numOfSixes === 5) {
      document.getElementById("yahtzeeScore").innerHTML = yahtzee;
    }
    else {
      document.getElementById("yahtzeeScore").innerHTML = "0";
    }
  }
  //^^^^^^^^^^^^^End of Scoring Section^^^^^^^^^^^^^^^^^^^^^
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
Reset button works.
Game totals up score. However, will not include held dice in score.

1. at end of each round, all possible scores should be displayed in a color that stands out.
2. when I click which score I want to choose, the score turns black, other scores disappear, remaining rolls resets to 3, 
dice faces disappear, dice are able to be rolled again.
3. when all scores are filled in either the upper or lower section, the section total is filled in
4. if upper total is greater than 63, and 35 point bonus is added on
5. when both upper and lower sections are filled in and totaled, the final total at the bottom is calculated and filled in
6. shorten bottom of playing board up to bottom of score area
7. center dice in playing area
8. instead of blue dice, create a held dice area at bottom of playing area
9. when dice are rolled, they move upwards and tilt, rotate
*/
