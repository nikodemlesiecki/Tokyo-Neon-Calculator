let inputField = document.getElementById("inputField");

function addToInput(value) {
  inputField.value += value;
}

function calculate() {
  let input = inputField.value;
  let numbers = input.split(/[-+*/]/);
  let operators = input.match(/[-+*/]/g);
  let result = parseFloat(numbers[0]);

  for (let i = 0; i < operators.length; i++) {
    let number = parseFloat(numbers[i + 1]);
    let operator = operators[i];

    if (operator === "+") {
      result += number;
    } else if (operator === "-") {
      result -= number;
    } else if (operator === "*") {
      result *= number;
    } else if (operator === "/") {
      result /= number;
    }
  }

  inputField.value = result;
}

function clearInput() {
  inputField.value = "";
}

function backspace() {
  inputField.value = inputField.value.slice(0, -1);
}
