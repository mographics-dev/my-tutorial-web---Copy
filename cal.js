// Get the display element
let display = document.getElementById('display');
  
// Store values for calculation
let currentInput = '';
let operator = '';
let previousInput = '';

// Handle number input
function addNum(num) {
    currentInput += num;
    display.innerText = currentInput;
}

// Handle operator input
function setOperator(op) {
    if (currentInput !== '') {
        previousInput = currentInput;
        currentInput = '';
        operator = op;
    }
}

// Handle calculation
function calculate() {
    if (previousInput !== '' && currentInput !== '') {
        let result;
        const prev = parseFloat(previousInput);
        const current = parseFloat(currentInput);

        switch (operator) {
            case '+':
                result = prev + current;
                break;
            case '-':
                result = prev - current;
                break;
            case '*':
                result = prev * current;
                break;
            case '/':
                result = prev / current;
                break;
            default:
                return;
        }
        display.innerText = result;
        currentInput = result.toString();
        operator = '';
        previousInput = '';
    }
}
// Clear the input
function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = '';
    display.innerText = '0';
}

// Add event listeners to buttons


document.getElementById('one').addEventListener('click', () => addNum('1'));
document.getElementById('two').addEventListener('click', () => addNum('2'));
document.getElementById('three').addEventListener('click', () => addNum('3'));
document.getElementById('four').addEventListener('click', () => addNum('4'));
document.getElementById('five').addEventListener('click', () => addNum('5'));
document.getElementById('six').addEventListener('click', () => addNum('6'));
document.getElementById('seven').addEventListener('click', () => addNum('7'));
document.getElementById('eight').addEventListener('click', () => addNum('8'));
document.getElementById('nine').addEventListener('click', () => addNum('9'));
document.getElementById('dot').addEventListener('click', () => addNum('.'));
document.getElementById('clear').addEventListener('click', clearDisplay);
document.getElementById('addition').addEventListener('click', () => setOperator('+'));
document.getElementById('subtract').addEventListener('click', () => setOperator('-'));
document.getElementById('multiply').addEventListener('click', () => setOperator('*'));
document.getElementById('division').addEventListener('click', () => setOperator('/'));
document.getElementById('equal-to').addEventListener('click', calculate);