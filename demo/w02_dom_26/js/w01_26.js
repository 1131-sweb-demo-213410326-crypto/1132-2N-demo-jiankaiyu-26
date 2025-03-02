const userInput = document.querySelector('.input-number');
const addBtn = document.querySelector('.btn-add');
const subtractBtn = document.querySelector('.btn-subtract');
const multiplyBtn = document.querySelector('.btn-multiply');
const divideBtn = document.querySelector('.btn-divide');

const currentResultOutput = document.querySelector('.current-result');
const currentCalculationOutput = document.querySelector('.current-calculation');
const defaultResult = 0;
let currentResult = defaultResult;

console.log('userInput', userInput);
console.log('addBtn', addBtn);
console.log('currentResultOutput', currentResultOutput);

function getUserInput() {
    const input = parseFloat(userInput.value); 
    if (isNaN(input)) {
        alert("Please enter a valid number");
        return null; 
    }
    return input;
}

function outputResult(result, text) {
    currentCalculationOutput.textContent = text; 
    currentResultOutput.textContent = result.toFixed(2); 
    console.log(text);
}

function compute(type) {
    let calText;
    let result;
    const operand1 = parseFloat(currentResult);
    const operand2 = getUserInput();
    if (operand2 === null) {
        return;
    }

    switch (type) {
        case 'add':
            result = operand1 + operand2;
            calText = `${operand1} + ${operand2} = ${result}`;
            break;
        case 'subtract':
            result = operand1 - operand2;
            calText = `${operand1} - ${operand2} = ${result}`;
            break;
        case 'multiply':
            result = operand1 * operand2;
            calText = `${operand1} * ${operand2} = ${result}`;
            break;
        case 'divide':
            if (operand2 === 0) {
                alert('Cannot divide by 0');
                return; 
            } else {
                result = operand1 / operand2; 
                calText = `${operand1} / ${operand2} = ${result.toFixed(2)}`; // Display result with 2 decimal places
            }
            break;
        default:
            return;
    }

    currentResult = result; 
    outputResult(result, calText); 
}

addBtn.addEventListener('click', () => compute('add'));
subtractBtn.addEventListener('click', () => compute('subtract'));
multiplyBtn.addEventListener('click', () => compute('multiply'));
divideBtn.addEventListener('click', () => compute('divide'));



