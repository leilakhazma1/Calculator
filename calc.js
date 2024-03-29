// Variables
let currentInput = '';
let currentOperation = null;
let firstOperand = null;
let secondOperand = null;

// Function to perform mathematical operations
function operate(operator, operand1, operand2) {
  operand1 = parseFloat(operand1); // Convert operand1 to a float
  operand2 = parseFloat(operand2); // Convert operand2 to a float

  switch (operator) {
    case '+':
      return operand1 + operand2; // Addition
    case '-':
      return operand1 - operand2; // Subtraction
    case '*':
      return operand1 * operand2; // Multiplication
    case '/':
      if (operand2 !== 0) {
        return operand1 / operand2; // Division
      } else {
        return 'Error: Division by zero'; // Division by zero error
      }
    default:
      return 'Error: Invalid operation';
  }
}

// Function to update the display
function updateDisplay(value) {
  document.getElementById('display').textContent = value;
}

// Function to reset calculator
function clear() {
  currentInput = '';
  currentOperation = null;
  firstOperand = null;
  secondOperand = null;
  updateDisplay('0'); // Reset display to zero
}

// Function for number clicks
function numberClick(number) {
  currentInput += number;
  updateDisplay(currentInput); // Update display with currentInput
}

// Function to handle operation button clicks
function operationClick(operator) {
  if (currentOperation !== null) {
    secondOperand = currentInput;
    currentInput = operate(currentOperation, firstOperand, secondOperand).toString();
    updateDisplay(currentInput);
  }

  currentOperation = operator;
  firstOperand = currentInput;
  currentInput = '';
}

// Function to handle equals button click
function equalsClick() {
  if (currentOperation !== null) {
    secondOperand = currentInput;
    currentInput = operate(currentOperation, firstOperand, secondOperand).toString();
    updateDisplay(currentInput);
    currentOperation = null;
    firstOperand = null;
    secondOperand = null;
  }
}

// Event listeners for number buttons
document.getElementById('clear').addEventListener('click', clear);
document.getElementById('divide').addEventListener('click', () => operationClick('/'));
document.getElementById('multiply').addEventListener('click', () => operationClick('*'));
document.getElementById('subtract').addEventListener('click', () => operationClick('-'));
document.getElementById('add').addEventListener('click', () => operationClick('+'));
document.getElementById('equals').addEventListener('click', equalsClick);
document.getElementById('decimal').addEventListener('click', () => {
  if (!currentInput.includes('.')) {
    currentInput += '.';
    updateDisplay(currentInput);
  }
});
document.getElementById('zero').addEventListener('click', () => numberClick('0'));
document.getElementById('one').addEventListener('click', () => numberClick('1'));
document.getElementById('two').addEventListener('click', () => numberClick('2'));
document.getElementById('three').addEventListener('click', () => numberClick('3'));
document.getElementById('four').addEventListener('click', () => numberClick('4'));
document.getElementById('five').addEventListener('click', () => numberClick('5'));
document.getElementById('six').addEventListener('click', () => numberClick('6'));
document.getElementById('seven').addEventListener('click', () => numberClick('7'));
document.getElementById('eight').addEventListener('click', () => numberClick('8'));
document.getElementById('nine').addEventListener('click', () => numberClick('9'));
