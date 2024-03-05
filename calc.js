//Variables 

let currentInput = '';
let currentOperation = null;
let firstOperand = null;
let secondOperand = null;

//Functions for each operation 

function operate(operator, operator1, operator2) { 
    operator1 = parseFloat(operator1); //convert to a float
    operator2 = parseFloat(operator2); //convert to a float

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
    
}}

//Functions for display

function updateDisplay(value) {
    document.getElementById('display').textContent = value;}

//Function to reset calculator 

function clear() {
    currentInput = null; 
    
}


//Function for number clicks 


//Function to handle operation button clicks 



//Function to handle equals button clik 

//Events for number buttons 