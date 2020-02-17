"use strict";
class Calc {
  constructor() {
    this.input = document.getElementById("input");
    this.number = document.querySelectorAll(".num-btn");
    this.operator = document.querySelectorAll(".operators button");
    this.result = document.getElementById("result");
    this.clear = document.getElementById("clear");
    this.clearAll = document.getElementById("clearAll");
    this.resultShow = false;
    this.numbersArray = [];
    this.operators = [];
  }
  calcStart() {
    this.inputInit();
    this.equal();
    this.deleteChar();
  }
  inputInit() {
    for (let i = 0; i < this.number.length; i++) {
      this.number[i].addEventListener("click", e => {
        this.checkNum(e);
      });
    }
    for (let i = 0; i < this.operator.length; i++) {
      this.operator[i].addEventListener("click", e => {
        this.checkOperator(e);
      });
    }
  }
  checkNum(e) {
    let currentStr = this.input.value;
    let lastOfInput = currentStr[currentStr.length - 1];

    if (this.resultShow === false) {
      this.input.value += e.target.textContent;
    } else if (
      (this.resultShow === true && lastOfInput === "+") ||
      lastOfInput === "-" ||
      lastOfInput === "×" ||
      lastOfInput === "÷"
    ) {
      this.resultShow = false;
      this.input.value += e.target.value;
    } else {
      this.resultShow = false;
      this.clearInput("all");
      this.input.value += e.target.innerHTML;
    }
  }
  checkOperator(e) {
    let currentStr = this.input.value;
    let lastOfInput = currentStr[currentStr.length - 1];

    if (
      lastOfInput === "+" ||
      lastOfInput === "-" ||
      lastOfInput === "×" ||
      lastOfInput === "÷"
    ) {
      this.input.value =
        currentStr.substr(0, currentStr.length - 1) + e.target.textContent;
    } else if (currentStr.length == 0) {
      alert("enter a number first");
    } else {
      this.input.value += e.target.textContent;
    }
  }
  equal() {
    this.result.addEventListener("click", () => {
      let numbers = this.numbersArray;
      let operators = this.operators;
      let inputStr = this.input.value;

      numbers = inputStr.split(/\+|\-|\×|\÷/g); // вирізаєм регуляркою всі оператори , пушим чиcла в масив
      operators = inputStr.replace(/[0-9]|\./g, "").split(""); // реплейс всіх циифр і крапки регуляркою на пусту строку і ріжем в масив

      let divide = operators.indexOf("÷");
      while (divide != -1) {
        numbers.splice(divide, 2, numbers[divide] / numbers[divide + 1]);
        operators.splice(divide, 1);
        divide = operators.indexOf("÷");
      }

      let multiply = operators.indexOf("×");
      while (multiply != -1) {
        numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1]);
        operators.splice(multiply, 1);
        multiply = operators.indexOf("×");
      }

      let subtract = operators.indexOf("-");
      while (subtract != -1) {
        numbers.splice(subtract, 2, numbers[subtract] - numbers[subtract + 1]);
        operators.splice(subtract, 1);
        subtract = operators.indexOf("-");
      }

      let add = operators.indexOf("+");
      while (add != -1) {
        numbers.splice(
          add,
          2,
          parseFloat(numbers[add]) + parseFloat(numbers[add + 1])
        );
        operators.splice(add, 1);
        add = operators.indexOf("+");
      }

      this.input.value = numbers[0];

      this.resultShow = true;
    });
  }
  doMath(inputArr) {
    const numbers = inputStr.split(/\+|\-|\×|\÷/g); // вирізаєм регуляркою всі оператори , пушим чиcла в масив

    const operators = inputStr.replace(/[0-9]|\./g, "").split(""); // реплейс всіх циифр і крапки регуляркою на пусту строку і ріжем в масив

    let divide = operators.indexOf("÷");
    while (divide != -1) {
      numbers.splice(divide, 2, numbers[divide] / numbers[divide + 1]);
      operators.splice(divide, 1);
      divide = operators.indexOf("÷");
    }

    let multiply = operators.indexOf("×");
    while (multiply != -1) {
      numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1]);
      operators.splice(multiply, 1);
      multiply = operators.indexOf("×");
    }

    let subtract = operators.indexOf("-");
    while (subtract != -1) {
      numbers.splice(subtract, 2, numbers[subtract] - numbers[subtract + 1]);
      operators.splice(subtract, 1);
      subtract = operators.indexOf("-");
    }

    let add = operators.indexOf("+");
    while (add != -1) {
      numbers.splice(
        add,
        2,
        parseFloat(numbers[add]) + parseFloat(numbers[add + 1])
      );
      operators.splice(add, 1);
      add = operators.indexOf("+");
    }

    return numbers[0];
  }
  deleteChar() {
    this.clear.addEventListener("click", () => {
      this.clearInput("lastChar");
    });
    this.clearAll.addEventListener("click", () => {
      this.clearInput("all");
    });
  }

  clearInput(state) {
    if (state === "all") {
      this.input.value = "";
    } else if ("lastChar") {
      let inputArr = [...this.input.value];
      this.input.value = inputArr = inputArr
        .slice(0, inputArr.length - 1)
        .join("");
    }
  }
}

const calc1 = new Calc();
calc1.calcStart();
