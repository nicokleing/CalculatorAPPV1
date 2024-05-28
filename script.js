let operator = '';

function setOperator(op) {
    operator = op;
}

function calculate() {
    const num1 = parseFloat(document.getElementById('number1').value);
    const num2 = parseFloat(document.getElementById('number2').value);
    let result = 0;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            result = 'Invalid operator';
    }

    document.getElementById('result').innerText = 'Result: ' + result;
}

function reset() {
    document.getElementById('number1').value = '';
    document.getElementById('number2').value = '';
    document.getElementById('result').innerText = '';
    operator = '';
}
