'use strict'
import doMath from "./math";

let input = document.getElementById("input"),
    number = document.querySelectorAll(".num-btn"),
    operator = document.querySelectorAll(".operators button"),
    result = document.getElementById("result"),
    clear = document.getElementById("clear"),
    clearAll = document.getElementById("clearAll"),
    resultShow = false;

for (let i = 0; i < number.length; i++) {
  number[i].addEventListener("click", e => {
    checkNum(e);
  });
}
for (let i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", e => {
    checkOperator(e);
  });
}

function checkNum(e) {
    let currentStr = input.value;
    let lastOfInput = currentStr[currentStr.length - 1];

    if (resultShow === false) {
      input.value += e.target.textContent;
    } else if (
      (resultShow === true && lastOfInput === "+") ||
      lastOfInput === "-" ||
      lastOfInput === "×" ||
      lastOfInput === "÷"
    ) {
      resultShow = false;
      input.value += e.target.value;
    } else {
      resultShow = false;
      clearInput("all");
      input.value += e.target.innerHTML;
    }
  };

  function checkOperator(e) {
    let currentStr = input.value;
    let lastOfInput = currentStr[currentStr.length - 1];

    if (
      lastOfInput === "+" ||
      lastOfInput === "-" ||
      lastOfInput === "×" ||
      lastOfInput === "÷"
    ) {
      input.value =
        currentStr.substr(0, currentStr.length - 1) + e.target.textContent;
    } else if (currentStr.length == 0) {
      alert("enter a number first");
    } else {
      input.value += e.target.textContent;
    }
  }

  
    result.addEventListener("click", () => {

      input.value = doMath(input.value);
      resultShow = true;
    });

    



   clear.addEventListener("click", () => {
     clearInput("lastChar");
   });
   clearAll.addEventListener("click", () => {
     clearInput("all");
   });

 function clearInput(state) {
    if (state === "all") {
      input.value = "";
    } else if ("lastChar") {
      let inputArr = [...input.value];
      input.value = inputArr = inputArr
        .slice(0, inputArr.length - 1)
        .join("");
    }
  }

