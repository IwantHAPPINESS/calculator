export var calculator = function (str) {
  let numOne = parseInt(str.match(/^[0-9]+/)[0]);

  let operator = str.match(/[\+\-\*\/\%]/)[0];

  let numTwo = parseInt(str.match(/[0-9]+$/)[0]); // Убран лишний пробел между 0 и 9

  switch (operator) {
    case "+":
      return numOne + numTwo;
    case "-":
      return numOne - numTwo;
    case "/":
      return numOne / numTwo;
    case "*":
      return numOne * numTwo;
    case "%":
      return numOne % numTwo;
    default:
      return "ERROR"; // Добавлено обработчик для неподдерживаемых операторов
  }
};
