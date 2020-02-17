function doMath(inputStr) {
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
  if (numbers[0] == "Infinity" || isNaN(numbers[0])) {
    console.log("error");

    return 0;
  }
  return numbers[0];
}


module.exports = doMath;