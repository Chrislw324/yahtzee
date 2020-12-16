let holdNum;
let diceOneHeld = false;
let diceTwoHeld = false;
let diceThreeHeld = false;
let diceFourHeld = false;
let diceFiveHeld = false;
let numRoll = 0;

function myFunction() {
  numRoll++;
  if (numRoll > 3) {
    return;
  }
  console.log(numRoll);
  if (diceOneHeld === false) {
      var num1 = (Math.floor(Math.random() * 6) + 1);
  if (num1 === 1) {
      var dieFace = document.getElementById("dieOne");
      dieFace.innerHTML = "<span class='dot'></span>";
      dieFace.classList.add("first-face");
      dieFace.classList.remove("second-face", "third-face", "fourth-face", "fifth-face", "column");
  } 
  else if (num1 === 2) {
    var dieFace = document.getElementById("dieOne");
    dieFace.innerHTML = "<span class='dot'></span><span class='dot'></span>";
    dieFace.classList.add("second-face");
    dieFace.classList.remove("first-face", "third-face", "fourth-face", "fifth-face", "column");
  }
  else if (num1 === 3) {
    var dieFace = document.getElementById("dieOne");
    dieFace.innerHTML = "<span class='dot'></span><span class='dot'></span><span class='dot'></span";
    dieFace.classList.add("third-face");
    dieFace.classList.remove("first-face", "second-face", "fourth-face", "fifth-face", "column");
  }
  else if (num1 === 4) {
    var dieFace = document.getElementById("dieOne");
    dieFace.innerHTML = "<div class='column'><span class='dot'></span><span class='dot'></span></div><div class='column'><span class='dot'></span><span class='dot'></span></div>";
    dieFace.classList.add("fourth-face", "column");
    dieFace.classList.remove("first-face", "second-face", "third-face", "fifth-face");
  }
  else if (num1 === 5) {
    var dieFace = document.getElementById("dieOne");
    dieFace.innerHTML = "<div class='column'><span class='dot'></span><span class='dot'></span></div><div class='column'><span class='dot'></span></div><div class='column'><span class='dot'></span><span class='dot'></span></div>";
    dieFace.classList.add("fifth-face", "column");
    dieFace.classList.remove("first-face", "second-face", "third-face", "fourth-face");
  }
  else if (num1 === 6) {
    var dieFace = document.getElementById("dieOne");
    dieFace.innerHTML = "<div class='column'><span class='dot'></span><span class='dot'></span><span class='dot'></span></div><div class='column'><span class='dot'></span><span class='dot'></span><span class='dot'></span></div>";
    dieFace.classList.add("fourth-face", "column");
    dieFace.classList.remove("first-face", "second-face", "third-face", "fifth-face");
  }
}
if (diceTwoHeld === false) {
  var num2 = (Math.floor(Math.random() * 6) + 1);
  if (num2 === 1) {
      var dieFace = document.getElementById("dieTwo");
      dieFace.innerHTML = "<span class='dot'></span>";
      dieFace.classList.add("first-face");
      dieFace.classList.remove("second-face", "third-face", "fourth-face", "fifth-face", "column");
  } 
  else if (num2 === 2) {
    var dieFace = document.getElementById("dieTwo");
    dieFace.innerHTML = "<span class='dot'></span><span class='dot'></span>";
    dieFace.classList.add("second-face");
    dieFace.classList.remove("first-face", "third-face", "fourth-face", "fifth-face", "column");
  }
  else if (num2 === 3) {
    var dieFace = document.getElementById("dieTwo");
    dieFace.innerHTML = "<span class='dot'></span><span class='dot'></span><span class='dot'></span";
    dieFace.classList.add("third-face");
    dieFace.classList.remove("first-face", "second-face", "fourth-face", "fifth-face", "column");
  }
  else if (num2 === 4) {
    var dieFace = document.getElementById("dieTwo");
    dieFace.innerHTML = "<div class='column'><span class='dot'></span><span class='dot'></span></div><div class='column'><span class='dot'></span><span class='dot'></span></div>";
    dieFace.classList.add("fourth-face", "column");
    dieFace.classList.remove("first-face", "second-face", "third-face", "fifth-face");
  }
  else if (num2 === 5) {
    var dieFace = document.getElementById("dieTwo");
    dieFace.innerHTML = "<div class='column'><span class='dot'></span><span class='dot'></span></div><div class='column'><span class='dot'></span></div><div class='column'><span class='dot'></span><span class='dot'></span></div>";
    dieFace.classList.add("fifth-face", "column");
    dieFace.classList.remove("first-face", "second-face", "third-face", "fourth-face");
  }
  else if (num2 === 6) {
    var dieFace = document.getElementById("dieTwo");
    dieFace.innerHTML = "<div class='column'><span class='dot'></span><span class='dot'></span><span class='dot'></span></div><div class='column'><span class='dot'></span><span class='dot'></span><span class='dot'></span></div>";
    dieFace.classList.add("fourth-face", "column");
    dieFace.classList.remove("first-face", "second-face", "third-face", "fifth-face");
  }
}
if (diceThreeHeld === false) {
  var num3 = (Math.floor(Math.random() * 6) + 1);
  if (num3 === 1) {
      var dieFace = document.getElementById("dieThree");
      dieFace.innerHTML = "<span class='dot'></span>";
      dieFace.classList.add("first-face");
      dieFace.classList.remove("second-face", "third-face", "fourth-face", "fifth-face", "column");
  } 
  else if (num3 === 2) {
    var dieFace = document.getElementById("dieThree");
    dieFace.innerHTML = "<span class='dot'></span><span class='dot'></span>";
    dieFace.classList.add("second-face");
    dieFace.classList.remove("first-face", "third-face", "fourth-face", "fifth-face", "column");
  }
  else if (num3 === 3) {
    var dieFace = document.getElementById("dieThree");
    dieFace.innerHTML = "<span class='dot'></span><span class='dot'></span><span class='dot'></span";
    dieFace.classList.add("third-face");
    dieFace.classList.remove("first-face", "second-face", "fourth-face", "fifth-face", "column");
  }
  else if (num3 === 4) {
    var dieFace = document.getElementById("dieThree");
    dieFace.innerHTML = "<div class='column'><span class='dot'></span><span class='dot'></span></div><div class='column'><span class='dot'></span><span class='dot'></span></div>";
    dieFace.classList.add("fourth-face", "column");
    dieFace.classList.remove("first-face", "second-face", "third-face", "fifth-face");
  }
  else if (num3 === 5) {
    var dieFace = document.getElementById("dieThree");
    dieFace.innerHTML = "<div class='column'><span class='dot'></span><span class='dot'></span></div><div class='column'><span class='dot'></span></div><div class='column'><span class='dot'></span><span class='dot'></span></div>";
    dieFace.classList.add("fifth-face", "column");
    dieFace.classList.remove("first-face", "second-face", "third-face", "fourth-face");
  }
  else if (num3 === 6) {
    var dieFace = document.getElementById("dieThree");
    dieFace.innerHTML = "<div class='column'><span class='dot'></span><span class='dot'></span><span class='dot'></span></div><div class='column'><span class='dot'></span><span class='dot'></span><span class='dot'></span></div>";
    dieFace.classList.add("fourth-face", "column");
    dieFace.classList.remove("first-face", "second-face", "third-face", "fifth-face");
  }
}
if (diceFourHeld === false) {
  var num4 = (Math.floor(Math.random() * 6) + 1);
  if (num4 === 1) {
      var dieFace = document.getElementById("dieFour");
      dieFace.innerHTML = "<span class='dot'></span>";
      dieFace.classList.add("first-face");
      dieFace.classList.remove("second-face", "third-face", "fourth-face", "fifth-face", "column");
  } 
  else if (num4 === 2) {
    var dieFace = document.getElementById("dieFour");
    dieFace.innerHTML = "<span class='dot'></span><span class='dot'></span>";
    dieFace.classList.add("second-face");
    dieFace.classList.remove("first-face", "third-face", "fourth-face", "fifth-face", "column");
  }
  else if (num4 === 3) {
    var dieFace = document.getElementById("dieFour");
    dieFace.innerHTML = "<span class='dot'></span><span class='dot'></span><span class='dot'></span";
    dieFace.classList.add("third-face");
    dieFace.classList.remove("first-face", "second-face", "fourth-face", "fifth-face", "column");
  }
  else if (num4 === 4) {
    var dieFace = document.getElementById("dieFour");
    dieFace.innerHTML = "<div class='column'><span class='dot'></span><span class='dot'></span></div><div class='column'><span class='dot'></span><span class='dot'></span></div>";
    dieFace.classList.add("fourth-face", "column");
    dieFace.classList.remove("first-face", "second-face", "third-face", "fifth-face");
  }
  else if (num4 === 5) {
    var dieFace = document.getElementById("dieFour");
    dieFace.innerHTML = "<div class='column'><span class='dot'></span><span class='dot'></span></div><div class='column'><span class='dot'></span></div><div class='column'><span class='dot'></span><span class='dot'></span></div>";
    dieFace.classList.add("fifth-face", "column");
    dieFace.classList.remove("first-face", "second-face", "third-face", "fourth-face");
  }
  else if (num4 === 6) {
    var dieFace = document.getElementById("dieFour");
    dieFace.innerHTML = "<div class='column'><span class='dot'></span><span class='dot'></span><span class='dot'></span></div><div class='column'><span class='dot'></span><span class='dot'></span><span class='dot'></span></div>";
    dieFace.classList.add("fourth-face", "column");
    dieFace.classList.remove("first-face", "second-face", "third-face", "fifth-face");
  }
}
if (diceFiveHeld === false) {
  var num5 = (Math.floor(Math.random() * 6) + 1);
  if (num5 === 1) {
      var dieFace = document.getElementById("dieFive");
      dieFace.innerHTML = "<span class='dot'></span>";
      dieFace.classList.add("first-face");
      dieFace.classList.remove("second-face", "third-face", "fourth-face", "fifth-face", "column");
  } 
  else if (num5 === 2) {
    var dieFace = document.getElementById("dieFive");
    dieFace.innerHTML = "<span class='dot'></span><span class='dot'></span>";
    dieFace.classList.add("second-face");
    dieFace.classList.remove("first-face", "third-face", "fourth-face", "fifth-face", "column");
  }
  else if (num5 === 3) {
    var dieFace = document.getElementById("dieFive");
    dieFace.innerHTML = "<span class='dot'></span><span class='dot'></span><span class='dot'></span";
    dieFace.classList.add("third-face");
    dieFace.classList.remove("first-face", "second-face", "fourth-face", "fifth-face", "column");
  }
  else if (num5 === 4) {
    var dieFace = document.getElementById("dieFive");
    dieFace.innerHTML = "<div class='column'><span class='dot'></span><span class='dot'></span></div><div class='column'><span class='dot'></span><span class='dot'></span></div>";
    dieFace.classList.add("fourth-face", "column");
    dieFace.classList.remove("first-face", "second-face", "third-face", "fifth-face");
  }
  else if (num5 === 5) {
    var dieFace = document.getElementById("dieFive");
    dieFace.innerHTML = "<div class='column'><span class='dot'></span><span class='dot'></span></div><div class='column'><span class='dot'></span></div><div class='column'><span class='dot'></span><span class='dot'></span></div>";
    dieFace.classList.add("fifth-face", "column");
    dieFace.classList.remove("first-face", "second-face", "third-face", "fourth-face");
  }
  else if (num5 === 6) {
    var dieFace = document.getElementById("dieFive");
    dieFace.innerHTML = "<div class='column'><span class='dot'></span><span class='dot'></span><span class='dot'></span></div><div class='column'><span class='dot'></span><span class='dot'></span><span class='dot'></span></div>";
    dieFace.classList.add("fourth-face", "column");
    dieFace.classList.remove("first-face", "second-face", "third-face", "fifth-face");
  }
}
  }

function diceHold(diceName) {
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

  

/* Homework
1.- make it so that I can only hold dice after rolling once
3. add "remaining rolls counter"
5. rename "myfunction" to something better
*/